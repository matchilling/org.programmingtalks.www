(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return k}),n.d(t,"query",function(){return y});n(32),n(147);var a=n(7),r=n.n(a),s=n(155),i=n.n(s),l=n(156),p=n(184),o=n(0),u=n.n(o),c=n(192),m=n(150),d=n.n(m),f=n(158),g=n(157),h=n(160),k=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.talkJson;return u.a.createElement(h.a,null,u.a.createElement(i.a,{title:e.presenter.name?e.title+" by "+e.presenter.name:e.title,meta:[{name:"description",content:e.description}]}),u.a.createElement(p.a,{videoId:e.source.id}),u.a.createElement("div",{className:"row content"},u.a.createElement(c.a,null),u.a.createElement(f.a,{description:e.description,duration:e.meta.duration,path:"/talk/"+e.slug,presenter:{name:e.presenter.name,path:"/speaker/"+d.a.slugify(e.presenter.name)},tags:e.tag.map(function(e){return{name:e,path:"/tag/"+d.a.slugify(e)}}),title:e.title}),u.a.createElement(g.a,{list:Object(l.normalizeResult)(this.props.data.allTalkJson).map(function(e){return Object.assign({path:"/talk/"+e.slug,tags:e.tag.map(function(e){return{name:e,path:"/tag/"+d.a.slugify(e)}}),presenter:{name:e.presenter.name,path:"/speaker/"+d.a.slugify(e.presenter.name)}},e)}),title:"Related Talks"})))},t}(u.a.Component),y="3838470934"}}]);
//# sourceMappingURL=component---src-templates-talk-index-js-e21491bec123a52c0c27.js.map