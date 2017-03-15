(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (window, document, $) {

  'use strict';

  let LazyLoad = require('../../lib/org-programmingtalks/util/lazyload'),
      lazyLoad,
      playerInstance,
      Talk = require('../../lib/org-programmingtalks/entity/talk'),
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
    lazyLoad = new LazyLoad();

    getTalks(function (talks) {
      var talkSourceId = talks[Math.floor(Math.random() * talks.length)].getSourceId(),
          videoId = getParameterByName('v');

      if (videoId) {
        talks.forEach(talk => {
          if (videoId === talk.getId()) {
            talkSourceId = talk.getSourceId();
            document.title = `Programming Talks: ${talk.getTitle()}`;
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
          'autoplay': 0,
          'controls': 1,
          'rel': 0,
          'showinfo': 1
        }
      });
    });

    let listItems = document.getElementsByClassName('title');
    for (let i = listItems.length; i--;) {
      listItems[i].onclick = function (event) {
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

    playerInstance.loadVideoById($(event.target).closest('.talk').data('talkSourceId'));

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
    var req = new XMLHttpRequest();

    req.onreadystatechange = function () {
      if (4 == req.readyState && 200 == req.status) {
        var talks = [];

        JSON.parse(req.responseText).forEach(function (item) {
          talks.push(new Talk(item));
        });

        callback(talks);
      }
    };

    req.open('GET', '/api/talks.json', true);
    req.send();
  }

  function updateQueryString(key, value, url) {
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
})(window, document, $);

},{"../../lib/org-programmingtalks/entity/talk":2,"../../lib/org-programmingtalks/util/lazyload":3}],2:[function(require,module,exports){
'use strict';

function Talk(values) {
    if (!(this instanceof Talk)) {
        return new Talk();
    }

    this.description = values.description ? values.description : null;
    this.id = values.id ? values.id : null;
    this.meta = {
        duration: values.meta.duration ? values.meta.duration : null
    };
    this.presenter = {
        name: values.presenter.name ? values.meta.name : null
    };
    this.slug = values.slug ? values.slug : null;
    this.source = {
        id: values.source.id ? values.source.id : null,
        provider: values.source.provider ? values.source.provider : null
    };
    this.tag = values.tag ? values.tag : [];
    this.title = values.title ? values.title : null;
    this.thumbnails = {
        default: {
            url: values.thumbnails.default.url ? values.thumbnails.default.url : null,
            width: values.thumbnails.default.width ? values.thumbnails.default.width : null,
            height: values.thumbnails.default.height ? values.thumbnails.default.height : null
        },
        medium: {
            url: values.thumbnails.medium.url ? values.thumbnails.medium.url : null,
            width: values.thumbnails.medium.width ? values.thumbnails.medium.width : null,
            height: values.thumbnails.medium.height ? values.thumbnails.medium.height : null
        },
        high: {
            url: values.thumbnails.high.url ? values.thumbnails.high.url : null,
            width: values.thumbnails.high.width ? values.thumbnails.high.width : null,
            height: values.thumbnails.high.height ? values.thumbnails.high.height : null
        }
    };
}

Talk.prototype.getDescription = function () {
    return this.description;
};
Talk.prototype.getId = function () {
    return this.id;
};
Talk.prototype.getMeta = function () {
    return this.meta;
};
Talk.prototype.getPresenter = function () {
    return this.presenter;
};
Talk.prototype.getSlug = function () {
    return this.slug;
};
Talk.prototype.getSourceId = function () {
    return this.source.id;
};
Talk.prototype.getTitle = function () {
    return this.title;
};
Talk.prototype.getThumbnails = function () {
    return this.thumbnails;
};

module.exports = Talk;

},{}],3:[function(require,module,exports){
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.LazyLoad = factory();
  }
})(this, function () {

  var _defaultSettings = {
    elements_selector: "img",
    container: window,
    threshold: 300,
    throttle: 150,
    data_src: "original",
    data_srcset: "original-set",
    class_loading: "loading",
    class_loaded: "loaded",
    skip_invisible: true,
    callback_load: null,
    callback_error: null,
    callback_set: null,
    callback_processed: null
  };

  function _isInsideViewport(element, container, threshold) {

    var ownerDocument, documentTop, documentLeft;

    function _getDocumentWidth() {
      return window.innerWidth || ownerDocument.documentElement.clientWidth || document.body.clientWidth;
    }

    function _getDocumentHeight() {
      return window.innerHeight || ownerDocument.documentElement.clientHeight || document.body.clientHeight;
    }

    function _getTopOffset(element) {
      return element.getBoundingClientRect().top + documentTop - ownerDocument.documentElement.clientTop;
    }

    function _getLeftOffset(element) {
      return element.getBoundingClientRect().left + documentLeft - ownerDocument.documentElement.clientLeft;
    }

    function _isBelowViewport() {
      var fold;
      if (container === window) {
        fold = _getDocumentHeight() + documentTop;
      } else {
        fold = _getTopOffset(container) + container.offsetHeight;
      }
      return fold <= _getTopOffset(element) - threshold;
    }

    function _isAtRightOfViewport() {
      var fold;
      if (container === window) {
        fold = _getDocumentWidth() + window.pageXOffset;
      } else {
        fold = _getLeftOffset(container) + _getDocumentWidth();
      }
      return fold <= _getLeftOffset(element) - threshold;
    }

    function _isAboveViewport() {
      var fold;
      if (container === window) {
        fold = documentTop;
      } else {
        fold = _getTopOffset(container);
      }
      return fold >= _getTopOffset(element) + threshold + element.offsetHeight;
    }

    function _isAtLeftOfViewport() {
      var fold;
      if (container === window) {
        fold = documentLeft;
      } else {
        fold = _getLeftOffset(container);
      }
      return fold >= _getLeftOffset(element) + threshold + element.offsetWidth;
    }

    ownerDocument = element.ownerDocument;
    documentTop = window.pageYOffset || ownerDocument.body.scrollTop;
    documentLeft = window.pageXOffset || ownerDocument.body.scrollLeft;

    return !_isBelowViewport() && !_isAboveViewport() && !_isAtRightOfViewport() && !_isAtLeftOfViewport();
  }

  function _now() {
    var d = new Date();
    return d.getTime();
  }

  function _merge_objects(obj1, obj2) {
    var obj3 = {},
        propertyName;
    for (propertyName in obj1) {
      if (obj1.hasOwnProperty(propertyName)) {
        obj3[propertyName] = obj1[propertyName];
      }
    }
    for (propertyName in obj2) {
      if (obj2.hasOwnProperty(propertyName)) {
        obj3[propertyName] = obj2[propertyName];
      }
    }
    return obj3;
  }

  function _convertToArray(nodeSet) {
    return Array.prototype.slice.call(nodeSet);
  }

  function _setSourcesForPicture(element, srcsetDataAttribute) {
    var parent = element.parentElement;
    if (parent.tagName !== 'PICTURE') {
      return;
    }
    for (var i = 0; i < parent.children.length; i++) {
      var pictureChild = parent.children[i];
      if (pictureChild.tagName === 'SOURCE') {
        var sourceSrcset = pictureChild.getAttribute('data-' + srcsetDataAttribute);
        if (sourceSrcset) {
          pictureChild.setAttribute('srcset', sourceSrcset);
        }
      }
    }
  }

  function _setSources(element, srcsetDataAttribute, srcDataAttribute) {
    var tagName = element.tagName;
    var elementSrc = element.getAttribute('data-' + srcDataAttribute);
    if (tagName === "IMG") {
      _setSourcesForPicture(element, srcsetDataAttribute);
      var imgSrcset = element.getAttribute('data-' + srcsetDataAttribute);
      if (imgSrcset) element.setAttribute("srcset", imgSrcset);
      if (elementSrc) element.setAttribute("src", elementSrc);
      return;
    }
    if (tagName === "IFRAME") {
      if (elementSrc) element.setAttribute("src", elementSrc);
      return;
    }
    if (elementSrc) element.style.backgroundImage = "url(" + elementSrc + ")";
  }

  function _bind(fn, obj) {
    return function () {
      return fn.apply(obj, arguments);
    };
  }

  function LazyLoad(instanceSettings) {
    this._settings = _merge_objects(_defaultSettings, instanceSettings);
    this._queryOriginNode = this._settings.container === window ? document : this._settings.container;

    this._previousLoopTime = 0;
    this._loopTimeout = null;

    this._handleScrollFn = _bind(this.handleScroll, this);

    window.addEventListener("resize", this._handleScrollFn);
    this.update();
  }

  LazyLoad.prototype._showOnAppear = function (element) {
    var settings = this._settings;

    function errorCallback() {
      element.removeEventListener("load", loadCallback);
      element.classList.remove(settings.class_loading);
      if (settings.callback_error) {
        settings.callback_error(element);
      }
    }

    function loadCallback() {
      /* As this method is asynchronous, it must be protected against external destroy() calls */
      if (settings === null) {
        return;
      }
      /* Calling LOAD callback */
      if (settings.callback_load) {
        settings.callback_load(element);
      }
      element.classList.remove(settings.class_loading);
      element.classList.add(settings.class_loaded);
      element.removeEventListener("load", loadCallback);
      element.removeEventListener("error", errorCallback);
    }

    if (element.tagName === "IMG" || element.tagName === "IFRAME") {
      element.addEventListener("load", loadCallback);
      element.addEventListener("error", errorCallback);
      element.classList.add(settings.class_loading);
    }

    _setSources(element, settings.data_srcset, settings.data_src);
    /* Calling SET callback */
    if (settings.callback_set) {
      settings.callback_set(element);
    }
  };

  LazyLoad.prototype._loopThroughElements = function () {
    var i,
        element,
        settings = this._settings,
        elements = this._elements,
        elementsLength = !elements ? 0 : elements.length,
        processedIndexes = [];

    for (i = 0; i < elementsLength; i++) {
      element = elements[i];
      /* If must skip_invisible and element is invisible, skip it */
      if (settings.skip_invisible && element.offsetParent === null) {
        continue;
      }
      if (_isInsideViewport(element, settings.container, settings.threshold)) {
        this._showOnAppear(element);

        /* Marking the element as processed. */
        processedIndexes.push(i);
        element.wasProcessed = true;
      }
    }
    /* Removing processed elements from this._elements. */
    while (processedIndexes.length > 0) {
      elements.splice(processedIndexes.pop(), 1);
      /* Calling the end loop callback */
      if (settings.callback_processed) {
        settings.callback_processed(elements.length);
      }
    }
    /* Stop listening to scroll event when 0 elements remains */
    if (elementsLength === 0) {
      this._stopScrollHandler();
    }
  };

  LazyLoad.prototype._purgeElements = function () {
    var i,
        element,
        elements = this._elements,
        elementsLength = elements.length,
        elementsToPurge = [];

    for (i = 0; i < elementsLength; i++) {
      element = elements[i];
      /* If the element has already been processed, skip it */
      if (element.wasProcessed) {
        elementsToPurge.push(i);
      }
    }
    /* Removing elements to purge from this._elements. */
    while (elementsToPurge.length > 0) {
      elements.splice(elementsToPurge.pop(), 1);
    }
  };

  LazyLoad.prototype._startScrollHandler = function () {
    if (!this._isHandlingScroll) {
      this._isHandlingScroll = true;
      this._settings.container.addEventListener("scroll", this._handleScrollFn);
    }
  };

  LazyLoad.prototype._stopScrollHandler = function () {
    if (this._isHandlingScroll) {
      this._isHandlingScroll = false;
      this._settings.container.removeEventListener("scroll", this._handleScrollFn);
    }
  };

  LazyLoad.prototype.handleScroll = function () {
    var remainingTime, now, throttle;

    // IE8 fix for destroy() malfunctioning
    if (!this._settings) {
      return;
    }

    now = _now();
    throttle = this._settings.throttle;

    if (throttle !== 0) {
      remainingTime = throttle - (now - this._previousLoopTime);
      if (remainingTime <= 0 || remainingTime > throttle) {
        if (this._loopTimeout) {
          clearTimeout(this._loopTimeout);
          this._loopTimeout = null;
        }
        this._previousLoopTime = now;
        this._loopThroughElements();
      } else if (!this._loopTimeout) {
        this._loopTimeout = setTimeout(_bind(function () {
          this._previousLoopTime = _now();
          this._loopTimeout = null;
          this._loopThroughElements();
        }, this), remainingTime);
      }
    } else {
      this._loopThroughElements();
    }
  };

  LazyLoad.prototype.update = function () {
    this._elements = _convertToArray(this._queryOriginNode.querySelectorAll(this._settings.elements_selector));
    this._purgeElements();
    this._loopThroughElements();
    this._startScrollHandler();
  };

  LazyLoad.prototype.destroy = function () {
    window.removeEventListener("resize", this._handleScrollFn);
    if (this._loopTimeout) {
      clearTimeout(this._loopTimeout);
      this._loopTimeout = null;
    }
    this._stopScrollHandler();
    this._elements = null;
    this._queryOriginNode = null;
    this._settings = null;
  };

  return LazyLoad;
});

},{}]},{},[1]);
