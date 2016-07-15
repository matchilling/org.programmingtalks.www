(function(window, document) {

    'use strict';

    let $ = require('jquery'),
        fs = require('fs'),
        http = require('http'),
        Player = require('youtube-player'),
        playerInstance,
        Talk = require('../../lib/org-programmingtalks/entity/talk.js'),
        talks;

    document.addEventListener('DOMContentLoaded', function(event) {
        main();
    });

    function main() {
        getTalks(function(talks) {
            playerInstance = new Player('player', {
                height: '450',
                width: '854',
                videoId: talks[Math.floor(Math.random() * talks.length)].getSourceId(),
                playerVars: {
                    'autoplay': 0,
                    'controls': 1,
                    'rel': 0,
                    'showinfo': 1
                }
            });
        });

        let listItems = document.getElementsByClassName('title');
        for (let i = listItems.length; i--;) {
            listItems[i].onclick = function() {
                clickListItem(event);
            };
        }
    }

    function clickListItem(event) {
        playerInstance.loadVideoById(
            $(event.target).closest('.talk').data('talkSourceId')
        );

        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    }

    function getTalks(callback) {
        return http.get({
            host: null,
            path: '/api/talks.json',
            protocol: 'https:'
        }, function(response) {
            let body = '',
                talks = [];
            response.on('data', function(d) {
                body += d;
            });
            response.on('end', function() {
                JSON.parse(body).forEach(function(item) {
                    talks.push(new Talk(item));
                });

                if (callback) {
                    callback(talks);
                }
            });
        });
    }

})(window, document);
