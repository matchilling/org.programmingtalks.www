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
        id       : items[i].id,
        sourceId : items[i].dataset.talkSourceId,
        title    : items[i].getElementsByClassName('title')[0].innerText
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
    const listId = 'video-list';
    const talks = parseTalks(listId),
          talkSourceId = talks[Math.floor(Math.random() * talks.length)].sourceId,
          videoId = UrlUtil.getQueryParameter('v');

    if (videoId) {
      talks.forEach((talk) => {
        if (videoId === talk.id) {
          talkSourceId = talk.sourceId;
          document.title = `Programming Talks: ${talk.titless}`;
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
      height     : playerHeight,
      width      : playerWidth,
      videoId    : talkSourceId,
      playerVars : {
        autoplay : 0,
        controls : 1,
        rel      : 0,
        showinfo : 1
      }
    });


    const searchElement = document.getElementById('search');
    searchElement.addEventListener('keyup', (event) => {
      filterVideos(searchElement.value, listId);
    });

    const items = document.getElementById(listId).getElementsByTagName('li');
    for (let i = items.length; i --;) {
      items[i].getElementsByClassName('title')[0].onclick = (event) => {
        clickListItem(event);
      };

      const presenter = 0 !== items[i].getElementsByClassName('presenter').length
        ? items[i].getElementsByClassName('presenter')[0]
        : null;

      if (presenter) {
        presenter.addEventListener('click', (event) => {
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

        tags[i].addEventListener('click', (event) => {
          filterVideos(event.target.innerText, listId);
          searchElement.value = event.target.innerText;
          searchElement.select();
        });
      }

      [0].onclick = (event) => {
        clickListItem(event);
      };
    }
    updateResultCounter(items.length);

    const tags = document.getElementById('tags').getElementsByTagName('li');
    for (let i = tags.length; i--;) {
      if ('title' === tags[i].className) {
        continue;
      }

      tags[i].addEventListener('click', (event) => {
        filterVideos(event.target.innerText, listId);
        searchElement.value = event.target.innerText;
        searchElement.select();
      });
    }

    document.addEventListener('keydown', (event) => {
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
    let matchesFn,
        parent;

    // find vendor prefix
    ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some((fn) => {
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
    window.history.pushState({
    }, title, UrlUtil.updateQueryString('v', id));

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
            presenter = 0 !== items[i].getElementsByClassName('presenter').length
              ? items[i].getElementsByClassName('presenter')[0].innerText
              : null,
            tags = 0 !== items[i].getElementsByClassName('tag')
              ? items[i].getElementsByClassName('tag')
              : null,
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
