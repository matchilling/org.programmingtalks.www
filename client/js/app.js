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

        $(document).keydown(function(event) {
            if (event.keyCode == 70 && event.ctrlKey) {
                event.preventDefault();
                $('#search').focus();
            }
        });
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

        $('#resultCount span').html(listItems.length);
        $('#resultCount').show();

        $('input#search').keyup(function() {
            let filter = $(this).val(),
                count = 0;

            if (0 == filter.length) {
                $('#video-list li.talk').each(function() {
                    $(this).show();
                });
                $('#resultCount span').html(listItems.length);
            }

            if (3 > filter.length) {
                return null;
            }

            $('#video-list li.talk').each(function() {
                if ($(this).text().search(new RegExp(filter, 'i')) < 0) {
                    $(this).fadeOut();
                } else {
                    $(this).show();
                    count++;
                }
            });

            $('#resultCount span').html(count);
        });
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
