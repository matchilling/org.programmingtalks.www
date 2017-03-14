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
    }
}

Talk.prototype.getDescription = function() {
    return this.description;
}
Talk.prototype.getId = function() {
    return this.id;
}
Talk.prototype.getMeta = function() {
    return this.meta;
}
Talk.prototype.getPresenter = function() {
    return this.presenter;
}
Talk.prototype.getSlug = function() {
    return this.slug;
}
Talk.prototype.getSourceId = function() {
    return this.source.id;
}
Talk.prototype.getTitle = function() {
    return this.title;
}
Talk.prototype.getThumbnails = function() {
    return this.thumbnails;
}

module.exports = Talk;
