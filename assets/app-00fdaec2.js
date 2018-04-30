(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
((window, document) => {
  'use strict';

  const UrlUtil = require('../../lib/org-programmingtalks/Util/UrlUtil');
  let playerInstance = null;

  window.onYouTubeIframeAPIReady = () => {
    main();
  };

  function parseTalks(listId) {
    const list = document.getElementById(listId);
    if ('undefined' === list) {
      throw new Error(`Element with id "${listId}" undefined.`);
    }

    const items = list.getElementsByTagName('li'),
          talks = [];

    for (let i = items.length; i--;) {
      talks.push({
        id: items[i].id,
        sourceId: items[i].dataset.talkSourceId,
        title: items[i].getElementsByClassName('title')[0].innerText
      });
    }

    return talks;
  }

  function getResultCount() {
    const resultCounter = document.getElementById('resultCount');
    if ('undefined' === resultCount) {
      return false;
    }

    const spans = resultCounter.getElementsByTagName('span');
    if (0 === spans.length) {
      return false;
    }

    return spans[0].innerHTML;
  }

  function updateResultCounter(count) {
    const resultCounter = document.getElementById('resultCount');
    if ('undefined' === resultCount) {
      return false;
    }

    const spans = resultCounter.getElementsByTagName('span');
    if (0 === spans.length) {
      return false;
    }
    spans[0].innerHTML = count;
    return true;
  }

  function main() {
    const listId = 'video-list',
          talks = parseTalks(listId),
          videoId = UrlUtil.getQueryParameter('v');

    let talkSourceId = talks[Math.floor(Math.random() * talks.length)].sourceId;

    if (videoId) {
      talks.forEach(talk => {
        if (videoId === talk.id.substr(5)) {
          talkSourceId = talk.sourceId;
          document.title = `Programming Talks: ${talk.title}`;
        }
      });
    }

    let playerHeight = 200,
        playerWidth = '100%';
    if (854 <= window.innerWidth) {
      playerHeight = 450;
      playerWidth = 854;
    }

    playerInstance = new YT.Player('player', {
      height: playerHeight,
      width: playerWidth,
      videoId: talkSourceId,
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        showinfo: 1
      }
    });

    const searchElement = document.getElementById('search');
    searchElement.addEventListener('keyup', event => {
      filterVideos(searchElement.value, listId);
    });

    const items = document.getElementById(listId).getElementsByTagName('li');
    for (let i = items.length; i--;) {
      items[i].getElementsByClassName('title')[0].onclick = event => {
        clickListItem(event);
      };

      const presenter = 0 !== items[i].getElementsByClassName('presenter').length ? items[i].getElementsByClassName('presenter')[0] : null;

      if (presenter) {
        presenter.addEventListener('click', event => {
          filterVideos(presenter.innerText, listId);
          searchElement.value = presenter.innerText;
          searchElement.select();
        });
      }

      const tags = items[i].getElementsByClassName('tag');
      for (let i = tags.length; i--;) {
        if ('title' === tags[i].className) {
          continue;
        }

        tags[i].addEventListener('click', event => {
          filterVideos(event.target.innerText, listId);
          searchElement.value = event.target.innerText;
          searchElement.select();
        });
      }

      [0].onclick = event => {
        clickListItem(event);
      };
    }
    updateResultCounter(items.length);

    const tags = document.getElementById('tags').getElementsByTagName('li');
    for (let i = tags.length; i--;) {
      if ('title' === tags[i].className) {
        continue;
      }

      tags[i].addEventListener('click', event => {
        filterVideos(event.target.innerText, listId);
        searchElement.value = event.target.innerText;
        searchElement.select();
      });
    }

    document.addEventListener('keydown', event => {
      if (70 === event.keyCode && event.ctrlKey) {
        event.preventDefault();
        searchElement.select();
      }
    });
  }

  function fadeIn(element) {
    if (!element) {
      return false;
    }

    element.style.opacity = 0;
    element.style.filter = 'alpha(opacity=0)';
    element.style.display = 'inline-block';
    element.style.visibility = 'visible';

    element.style.opacity = 1;
    element.style.filter = 'alpha(opacity=1)';
  }

  function fadeOut(element) {
    if (!element) {
      return false;
    }

    element.style.opacity = 0;
    element.style.filter = 'alpha(opacity=0)';
    element.style.display = 'none';
    element.style.visibility = 'hidden';
  }

  function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(() => {
      if (0 !== window.scrollY) {
        window.scrollBy(0, scrollStep);
      } else clearInterval(scrollInterval);
    }, 15);
  }

  function findClosestEl(el, selector) {
    let matchesFn, parent;

    // find vendor prefix
    ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(fn => {
      if ('function' === typeof document.body[fn]) {
        matchesFn = fn;
        return true;
      }
      return false;
    });

    while (el) {
      parent = el.parentElement;
      if (parent && parent[matchesFn](selector)) {
        return parent;
      }
      el = parent;
    }

    return null;
  }

  function clickListItem(event) {
    const listEl = findClosestEl(event.target, 'li'),
          id = listEl.id.replace('talk_', ''),
          title = event.target.innerText;

    document.title = `Programming Talks: ${title}`;
    window.history.pushState({}, title, UrlUtil.updateQueryString('v', id));

    playerInstance.loadVideoById(listEl.dataset.talkSourceId);

    scrollToTop(500);
  }

  function filterVideos(query, listId) {
    let filter = query.toLowerCase().replace(/\s+/g, ' '),
        list = document.getElementById(listId);

    if ('undefined' === list) {
      return false;
    }

    const items = list.getElementsByTagName('li');
    if (0 === items.length) {
      return false;
    }

    if (0 === filter.length) {
      for (let i = items.length; i--;) {
        fadeIn(items[i], 200);
      }
      updateResultCounter(items.length);
    }

    if (3 > filter.length) {
      return false;
    }

    let count = 0;
    for (let i = items.length; i--;) {
      const description = items[i].getElementsByClassName('description')[0].innerText,
            presenter = 0 !== items[i].getElementsByClassName('presenter').length ? items[i].getElementsByClassName('presenter')[0].innerText : null,
            tags = 0 !== items[i].getElementsByClassName('tag') ? items[i].getElementsByClassName('tag') : null,
            title = items[i].getElementsByClassName('title')[0].innerText;

      const searchable = ''.concat(description, presenter, title).toLowerCase();

      for (let i = tags.length; i--;) {
        searchable.concat(tags[i].innerText.toLowerCase());
      }

      if (0 > searchable.search(new RegExp(filter, 'i'))) {
        fadeOut(items[i]);
      } else {
        fadeIn(items[i]);
        count++;
      }

      updateResultCounter(count);
    }

    return true;
  }
})(window, document);

// Load youtube api async
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';

const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

},{"../../lib/org-programmingtalks/Util/UrlUtil":2}],2:[function(require,module,exports){
'use strict';

const UrlUtil = module.exports;

UrlUtil.getQueryParameter = function (name, url) {
  name = name.replace(/[\[\]]/g, "\\$&");

  if (!url) {
    url = window.location.href;
  }

  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);

  if (!results) return null;

  if (!results[2]) return '';

  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

UrlUtil.updateQueryString = function (key, value, url) {
  if (!url) url = window.location.href;
  var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi"),
      hash;

  if (re.test(url)) {
    if (typeof value !== 'undefined' && value !== null) return url.replace(re, '$1' + key + "=" + value + '$2$3');else {
      hash = url.split('#');
      url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
      if (typeof hash[1] !== 'undefined' && hash[1] !== null) url += '#' + hash[1];
      return url;
    }
  } else {
    if (typeof value !== 'undefined' && value !== null) {
      var separator = url.indexOf('?') !== -1 ? '&' : '?';
      hash = url.split('#');
      url = hash[0] + separator + key + '=' + value;
      if (typeof hash[1] !== 'undefined' && hash[1] !== null) url += '#' + hash[1];
      return url;
    } else return url;
  }
};

},{}]},{},[1]);
