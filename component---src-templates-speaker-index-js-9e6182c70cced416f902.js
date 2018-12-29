(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{137:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return f}),a.d(t,"query",function(){return g});var n=a(7),r=a.n(n),i=(a(32),a(144),a(80),a(52),a(159),a(148)),o=a.n(i),s=a(149),l=a(0),c=a.n(l),p=a(160),u=a(146),h=a.n(u),m=a(150),d=a(153),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location.pathname,t=function(e){return Object.keys(p).reduce(function(t,a){return e===p[a].slug&&(t=Object.assign({name:a},p[a])),t},{})}(e.substr(e.lastIndexOf("/")+1));return c.a.createElement(d.a,null,c.a.createElement(o.a,{title:"Programming Talks by "+t.name}),c.a.createElement("div",{className:"row"},c.a.createElement("h1",null,t.name),t.bio?c.a.createElement("div",{className:"bio"},t.bio):null,c.a.createElement(m.a,{list:Object(s.normalizeResult)(this.props.data.allTalkJson).map(function(e){return Object.assign({tags:e.tag.map(function(e){return{name:e,path:"/tag/"+h.a.slugify(e)}}),path:"/talk/"+e.slug,presenter:{name:e.presenter.name,path:"/speaker/"+h.a.slugify(e.presenter.name)}},e)}),title:"Programming Talks by "+t.name,titleElement:"h3"})))},t}(c.a.Component),g="106665204"},146:function(e,t,a){a(73),a(161),a(34),e.exports={slugify:function(e){return e?e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""):""},truncate:function(e,t){return e?e.split(" ").splice(0,t).join(" "):""}}},147:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},149:function(e,t){e.exports={normalizeResult:function(e){return e&&e.hasOwnProperty("edges")&&Array.isArray(e.edges)?e.edges.map(function(e){return e.node}):[]}}},150:function(e,t,a){"use strict";a(144);var n=a(7),r=a.n(n),i=a(4),o=a.n(i),s=a(0),l=a.n(s),c=a(151),p=a(146),u=a.n(p),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return this.props.list.length<=0?null:l.a.createElement("div",{className:"talk-list-wrapper"},this.props.title&&l.a.createElement(this.props.titleElement,{className:"talk-list-title"},this.props.title),l.a.createElement("div",{className:"talk-list"},this.props.list.map(function(e,t){return l.a.createElement("div",{className:"talk-list-item",key:t},l.a.createElement(c.a,{description:u.a.truncate(e.description,50)+" ...",duration:e.hasOwnProperty("meta")&&e.meta.hasOwnProperty("duration")?e.meta.duration:null,path:e.path,presenter:{name:e.hasOwnProperty("presenter")&&e.presenter.hasOwnProperty("name")?e.presenter.name:"",path:e.hasOwnProperty("presenter")&&e.presenter.hasOwnProperty("path")?e.presenter.path:""},tags:e.tags,thumbnails:e.thumbnails,title:e.title}))})))},t}(l.a.Component);h.defaultProps={titleElement:"h3"},h.propTypes={list:o.a.array.isRequired,title:o.a.string,titleElement:o.a.string},t.a=h},151:function(e,t,a){"use strict";a(144);var n=a(7),r=a.n(n),i=a(143),o=a.n(i),s=a(163),l=a.n(s),c=a(4),p=a.n(c),u=a(0),h=a.n(u),m=a(152),d=(a(155),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return h.a.createElement("div",{className:"talk-info"},this.props.path?h.a.createElement("h2",{className:"talk-title"},h.a.createElement(o.a,{to:this.props.path},this.props.title)):h.a.createElement("h2",{className:"talk-title"},this.props.title),(this.props.presenter||this.props.duration||this.props.tags.length)&&h.a.createElement("div",{className:"talk-meta"},this.props.presenter.name&&h.a.createElement("div",{className:"talk-presenter"},this.props.presenter.path&&h.a.createElement(o.a,{to:this.props.presenter.path},this.props.presenter.name),!this.props.presenter.path&&h.a.createElement("span",null,this.props.presenter.name)),this.props.duration&&h.a.createElement("div",{className:"talk-duration"},l.a.duration(this.props.duration).humanize()),h.a.createElement(m.a,{className:"talk-tag-list",list:this.props.tags})),(this.props.thumbnails||this.props.description)&&h.a.createElement("div",{className:"talk-description"},this.props.thumbnails&&this.props.thumbnails.default.url&&h.a.createElement("img",{alt:this.props.title,height:this.props.thumbnails.default.height/1.5,src:this.props.thumbnails.default.url,width:this.props.thumbnails.default.width/1.5}),this.props.description&&this.props.description))},t}(h.a.Component));d.propTypes={description:p.a.string,duration:p.a.string,id:p.a.string,key:p.a.string,presenter:p.a.object,tags:p.a.array,thumbnails:p.a.object,title:p.a.string},t.a=d},152:function(e,t,a){"use strict";a(144);var n=a(7),r=a.n(n),i=a(143),o=a.n(i),s=a(4),l=a.n(s),c=a(0),p=a.n(c),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this;return p.a.createElement("ul",{className:this.props.className},this.props.list.map(function(t,a){return p.a.createElement("li",{key:a,className:e.props.className+"-item"},t.path?p.a.createElement(o.a,{to:t.path},t.name):t.name)}))},t}(p.a.Component);u.defaultProps={className:"tag-list"},u.propTypes={className:l.a.string,list:l.a.array.isRequired},t.a=u},153:function(e,t,a){"use strict";var n=a(148),r=a.n(n),i=a(4),o=a.n(i),s=a(0),l=a.n(s),c=a(143),p=a.n(c),u=(a(156),function(){return l.a.createElement("header",null,l.a.createElement("div",{className:"row"},l.a.createElement(p.a,{to:"/",title:"programming talks"},l.a.createElement("h1",{className:"logo"},"programmingtalks.org"))))}),h=function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("h2",null,"Contributing"),l.a.createElement("p",null,"Have you seen an awesome talk which is currently missing on this website? Drop me an email at"," ",l.a.createElement("a",{href:"mailto:m@matchilling.com"},"m@matchilling.com"),", send a tweet"," ",l.a.createElement("a",{href:"https://twitter.com/MatChilling"},"@matchilling")," or create a pull request on"," ",l.a.createElement("a",{href:"https://github.com/matchilling/org-programmingtalks"},"github.com/matchilling/org-programmingtalks"),".")))},m=(a(157),function(e){var t=e.children;return l.a.createElement("div",null,l.a.createElement(r.a,{title:"Programming Talks",meta:[{name:"description",content:"An unopinionated, curated list of the best programming talks out there."}]}),l.a.createElement(u,null),t,l.a.createElement(h,null))});m.propTypes={children:o.a.array};t.a=m},154:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(54),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){var n=a(12),r=a(18),i=a(24);e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],o={};o[e]=t(a),n(n.S+n.F*i(function(){a(1)}),"Object",o)}},159:function(e,t,a){var n=a(26),r=a(35);a(158)("keys",function(){return function(e){return r(n(e))}})},160:function(e){e.exports={"Alan Kay":{bio:"Alan Curtis Kay (born May 17, 1940) is an American computer scientist. He has been elected a Fellow of the American Academy of Arts and Sciences, the National Academy of Engineering, and the Royal Society of Arts. He is best known for his pioneering work on object-oriented programming and windowing graphical user interface design.\n\nHe is the president of the Viewpoints Research Institute, and an adjunct professor of computer science at the University of California, Los Angeles. He is also on the advisory board of TTI/Vanguard. Until mid-2005, he was a senior fellow at HP Labs, a visiting professor at Kyoto University, and an adjunct professor at the Massachusetts Institute of Technology (MIT).\n\nKay is also a former professional jazz guitarist, composer, and theatrical designer, and an amateur classical pipe organist.",slug:"alan-kay"},"David Nolen":{bio:"David Nolen is a software engineer for Cognitect. He enjoys making music, writing JavaScript, writing ClojureScript, and exploring new approaches to user interface programming.",slug:"david-nolen"},"Dan North":{bio:"Dan has been coaching, coding and consulting for over 25 years, with a focus on applying systems thinking and simple technology to solve complex business problems. He uses techniques from Lean operations, Theory of Constraints and Agile software development to help organisations anticipate and respond to the challenges of changing business needs.\n\nDan is the originator of Behaviour-Driven Development, an agile approach to software development that encourages teams to deliver the software that matters by emphasising the interactions between stakeholders. He also proposed Deliberate Discovery, which challenges assumptions around software planning and estimation. He argues that there are no best practices and that everything we do is subject to opportunity cost.",slug:"dan-north"},"Hadi Partovi":{bio:"Hadi Partovi is an entrepreneur and investor, and CEO of the education non-profit Code.org.\n\nIn 2013 Hadi and his twin brother Ali launched the education nonprofit Code.org which Hadi continues to lead full-time as CEO. Code.org has established computer science classes in 15% of US classrooms, created the most popular curriculum platform for K-12 computer science, and launched the global Hour of Code movement that has reached over 100 million students.",slug:"hadi-partovi"},"Rich Hickey":{bio:"Rich Hickey is the creator of the Clojure language. Before Clojure, he developed dotLisp, a similar project based on the .NET Framework, and three earlier attempts to provide interoperability between Lisp and Java: a Java foreign language interface for Common Lisp (jfli), A Foreign Object Interface for Lisp (FOIL), and a Lisp-friendly interface to Java Servlets (Lisplets).",github:"richhickey",twitter:"richhickey",slug:"rich-hickey"},"Sam Newman":{bio:'Sam Newman is a technologist at ThoughtWorks, where he currently splits his time between encouraging and sharing Innovation globally and working as the architect for internal systems. Sam is the author of "Building Microservices" from O\'Reilly. He has worked with a variety of companies in multiple domains around the world, often with one foot in the developer world, and another in the IT operations space. If you asked him what he does, he’d say ‘I work with people to build better software systems’. He has written articles, presented at conferences, and sporadically commits to open source projects. While Java used to be his bread and butter, he also spends time with Ruby, Python, Javascript, and Clojure, Infrastructure Automation and Cloud systems.',slug:"Sam-newman"},"Kevlin Henney":{bio:"Kevlin Henney is an author, presenter, and consultant on software development. He has written on the subject of computer programming and development practice for many magazines and sites, including Better Software, The Register, C/C++ Users Journal, Application Development Advisor, JavaSpektrum, C++ Report, Java Report, EXE, and Overload.",slug:"Kevlin Henney"},"Leslie Lamport":{bio:"Leslie B. Lamport is an American computer scientist. Lamport is best known for his seminal work in distributed systems and as the initial developer of the document preparation system LaTeX.",slug:"leslie-lamport"},'"Uncle Bob" - Robert Cecil Martin':{bio:"Robert Cecil Martin is an American software engineer and author. He is a co-author of the Agile Manifesto. He now runs a consulting firm called Uncle Bob Consulting LLC and Clean Coders which hosts videos based on his experiences and books.",twitter:"unclebobmartin",github:"unclebob",slug:"uncle-bob-robert-cecil-martin"},"Steve Jobs":{bio:"Steven Paul Jobs (February 24, 1955 – October 5, 2011) was an American entrepreneur, business magnate, inventor, and industrial designer. He was the chairman, chief executive officer (CEO), and a co-founder of Apple Inc., CEO and majority shareholder of Pixar, a member of The Walt Disney Company's board of directors following its acquisition of Pixar, and the founder, chairman, and CEO of NeXT. Jobs and Apple co-founder Steve Wozniak are widely recognized as pioneers of the microcomputer revolution of the 1970s and 1980s.",slug:"Steve-jobs"},"Sheryl Sandberg":{bio:"Sheryl Kara Sandberg is an American technology executive, activist, and author. She is the chief operating officer of Facebook and founder of Leanin.org.",slug:"sheryl-sandberg"}}},162:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return d}),a.d(t,"StaticQueryContext",function(){return h}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(143),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var c=a(147),p=a.n(c);a.d(t,"PageRenderer",function(){return p.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var h=r.a.createContext({}),m=function(e){return r.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function d(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}}}]);
//# sourceMappingURL=component---src-templates-speaker-index-js-9e6182c70cced416f902.js.map