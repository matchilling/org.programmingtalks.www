'use strict';

const UrlUtil = module.exports;

UrlUtil.getQueryParameter = function(name, url) {
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

UrlUtil.updateQueryString = function(key, value, url) {
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
