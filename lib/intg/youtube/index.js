'use strict';

let http = require('https'),
    uuid = require('uuid'),
    Talk = require('../../org-programmingtalks/entity/talk.js');

const TYPE = 'video';
const PROVIDER = 'youtube';

function YouTubeIntg(apiKey) {
    if (!(this instanceof YouTubeIntg)) {
        return new YouTubeIntg()
    }
    this.apiKey = apiKey;
}

function mapVideo(data) {

    return new Talk({
        description: data.snippet.description,
        id: uuid.v4(),
        meta: {
            duration: data.contentDetails.duration
        },
        presenter: {
            name: null
        },
        source: {
            id: data.id,
            provider: PROVIDER
        },
        tag: data.snippet.tags,
        title: data.snippet.title,
        thumbnails: {
            default: data.snippet.thumbnails.default,
            medium: data.snippet.thumbnails.medium,
            high: data.snippet.thumbnails.high
        },
        type: TYPE
    });
}

YouTubeIntg.prototype.getVideo = function(videoId, callback) {
    return http.get({
        host: 'www.googleapis.com',
        path: '/youtube/v3/videos?key=' + this.apiKey + '&part=contentDetails,snippet&id=' + videoId,
        protocol: 'https:'
    }, function(response) {
        let body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
            if (callback) {
                let data = JSON.parse(body).items[0];
                return callback(mapVideo(data));
            }
        });
    });
};

module.exports = YouTubeIntg;
