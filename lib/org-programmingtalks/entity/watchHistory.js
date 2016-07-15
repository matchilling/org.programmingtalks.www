function WatchHistory(items) {
    if (!(this instanceof WatchHistory)) {
        return new WatchHistory()
    }

    this.items = items ? items : [];
}

WatchHistory.prototype.upsert = function(videoId, secondsWatched) {
    for (var i = 0; i < this.items.length; i++) {
        if (videoId === this.items[i].id) {
            this.items[i].secondsWatched = secondsWatched;
            return;
        }
    }

    this.items.push({
        id: videoId,
        secondsWatched: secondsWatched
    });
}

WatchHistory.prototype.last = function() {
    if (0 == this.items.length) {
        return null;
    }

    return this.items[this.items.length - 1];
}

WatchHistory.prototype.toJson = function() {
    return JSON.stringify(this);
}
