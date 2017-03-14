(function (window, document) {

  'use strict';

  let $ = require('jquery'),
    fs = require('fs'),
    http = require('http'),
    playerInstance,
    Talk = require('../../lib/org-programmingtalks/entity/talk.js'),
    talks;

  document.addEventListener('DOMContentLoaded', function (event) {
    main();

    $(document).keydown(function (event) {
      if (event.keyCode == 70 && event.ctrlKey) {
        event.preventDefault();
        $('#search').focus().select();
      }
    });
  });

  function main() {
    getTalks(function (talks) {
      var talkSourceId = talks[Math.floor(Math.random() * talks.length)].getSourceId(),
        videoId = getParameterByName('v');

      if (videoId) {
        talks.forEach((talk) => {
          if (videoId === talk.getId()) {
            talkSourceId = talk.getSourceId();
            document.title = `Programming Talks: ${talk.getTitle()}`;
          }
        });
      }

      playerInstance = new YT.Player('player', {
        height: '450',
        width: '854',
        videoId: talkSourceId,
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
      listItems[i].onclick = function () {
        clickListItem(event);
      };
    }

    $('#resultCount span').html(listItems.length);
    $('#resultCount').show();

    $('input#search').keyup(function () {
      filterVideos($(this).val());
    });

    $('div#tags li:not(.title)').click(function () {
      let tag = $(this).text();

      filterVideos(tag);
      $('input#search').val(tag).focus().select();
    });

    $('.tag').click(function () {
      let tag = $(this).text();

      filterVideos(tag);
      $('input#search').val(tag).focus().select();
    });
  }

  function clickListItem(event) {
    var div = $(event.target).closest('.talk'),
      id = div.attr('id').replace('talk_', ''),
      title = $(event.target).closest('.title').text();

    document.title = `Programming Talks: ${title}`;
    window.history.pushState({}, title, updateQueryString('v', id));

    playerInstance.loadVideoById(
      $(event.target).closest('.talk').data('talkSourceId')
    );

    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  }

  function filterVideos(query) {
    let filter = query,
      count = 0;

    if (0 == filter.length) {
      $('#video-list li.talk').each(function () {
        $(this).show();
      });
      $('#resultCount span').html(listItems.length);
    }

    if (3 > filter.length) {
      return null;
    }

    $('#video-list li.talk').each(function () {
      if ($(this).text().search(new RegExp(filter, 'i')) < 0) {
        $(this).fadeOut();
      } else {
        $(this).show();
        count++;
      }
    });

    $('#resultCount span').html(count);
  }

  function getTalks(callback) {
    return http.get({
      host: null,
      path: '/api/talks.json',
      protocol: 'https:'
    }, function (response) {
      let body = '',
        talks = [];
      response.on('data', function (d) {
        body += d;
      });
      response.on('end', function () {
        JSON.parse(body).forEach(function (item) {
          talks.push(new Talk(item));
        });

        if (callback) {
          callback(talks);
        }
      });
    });
  }

  function updateQueryString(key, value, url) {
    if (!url) url = window.location.href;
    var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi"),
      hash;

    if (re.test(url)) {
      if (typeof value !== 'undefined' && value !== null)
        return url.replace(re, '$1' + key + "=" + value + '$2$3');
      else {
        hash = url.split('#');
        url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
        if (typeof hash[1] !== 'undefined' && hash[1] !== null)
          url += '#' + hash[1];
        return url;
      }
    } else {
      if (typeof value !== 'undefined' && value !== null) {
        var separator = url.indexOf('?') !== -1 ? '&' : '?';
        hash = url.split('#');
        url = hash[0] + separator + key + '=' + value;
        if (typeof hash[1] !== 'undefined' && hash[1] !== null)
          url += '#' + hash[1];
        return url;
      } else
        return url;
    }
  }

  function getParameterByName(name, url) {
    name = name.replace(/[\[\]]/g, "\\$&");

    if (!url) {
      url = window.location.href;
    }

    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);

    if (!results) return null;

    if (!results[2]) return '';

    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

})(window, document);