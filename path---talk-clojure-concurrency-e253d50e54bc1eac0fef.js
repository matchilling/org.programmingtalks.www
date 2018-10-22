webpackJsonp([0xf1443310aedb],{2917:function(e,t){e.exports={data:{talkJson:{description:"A presentation by Rich Hickey to the Western Mass. Developers Group on Clojure and concurrency. Brief overview of Clojure, discussion of concurrency issues, locking, and immutabiity. In-depth look at Clojure's refs, transactions and agents. Demonstration and review of code for a multithreaded ant colony simulation.Be sure to grab the slides and code in order to follow along.Thanks to Shawn Fumo for working on this video.",meta:{duration:"PT2H32M39S"},presenter:{name:"Rich Hickey"},slug:"clojure-concurrency",source:{id:"dGVqrGmwOAw",provider:"youtube"},tag:["Clojure","Concurrency"],title:"Clojure Concurrency"},allTalkJson:{edges:[{node:{description:'Games are a modern art form, and like other artists, game designers need to experience their work as they create it. This talk will explore the benefits of making games "at runtime". Through both abstract discussion and concrete demonstration, we will see why Clojure is uniquely suited to the task.\n\nZach is an independent programmer and tutor in the Pittsburgh area. He made Nightcode, a Clojure IDE for beginners, and is working to make Clojure games a reality with the play-clj library and Nightmod, a game creation tool. Previously, he was a programmer at the National Security Agency in Maryland.',meta:{duration:"PT37M34S"},presenter:{name:"Zach Oakes"},source:{id:"0GzzFeS5cMc",provider:"youtube"},slug:"making-games-at-runtime-with-clojure",tag:["Clojure","Game Programmer"],thumbnails:{default:{url:"https://i.ytimg.com/vi/0GzzFeS5cMc/default.jpg",height:90,width:120}},title:"Making Games at Runtime with Clojure"}},{node:{description:"Hartmut Kaisers Keynote from Meeting C++ 2014\n\nSlides:\nhttp://meetingcpp.com/index.php/tv14/items/26.html",meta:{duration:"PT1H27M36S"},presenter:{name:null},source:{id:"4OCUEgSNIAY",provider:"youtube"},slug:"plain-threads-are-the-goto-of-todays-computing-hartmut-kaiser-keynote-meeting-c-2014",tag:["Software (Industry)","C (Programming Language)","C++","Meeting C++","Keynote","Parallelism","Concurrency","Threading","Thread","HPX","Meeting C++ 2014"],thumbnails:{default:{url:"https://i.ytimg.com/vi/4OCUEgSNIAY/default.jpg",height:90,width:120}},title:"Plain Threads are the GOTO of todays computing - Hartmut Kaiser - Keynote Meeting C++ 2014"}},{node:{description:"People keep implementing map, filter and other fundamental algorithms in different contexts - eagerly over collections, over lazy sequences, in parallel, over enumerables/iterables, over observables, over channels/streams etc. In addition to duplication of effort, this yields bloated APIs, and, when implemented in the classic way, often involves the creation of expensive intermediate objects/values that\ncan be difficult to optimize away.\nMost problematic is that this approach keeps us from composing core algorithms in a context-independent way which would facilitate reuse and engender greater flexibility.\nThis talk will describe transducers, a new library feature for Clojure (but of interest to other languages) that emphasizes composable, context-free, intermediate-free notions like 'mapping' and 'filtering' and their concrete reuse across all of the contexts above.",meta:{duration:"PT45M1S"},presenter:{name:"Rich Hickey"},source:{id:"6mTbuzafcII",provider:"youtube"},slug:"transducers",tag:["Clojure"],thumbnails:{default:{url:"https://i.ytimg.com/vi/6mTbuzafcII/default.jpg",height:90,width:120}},title:"Transducers"}},{node:{description:"In this talk, we hear from David Nolen from the New York Times about core.async, the new library for asynchronous programming in Clojure and ClojureScript. He'll be talking about Clojure, Communicating Sequential Processes & Responsive Design. This talk was recorded at the NY Clojure Users Group meetup at Two Sigma Investments.\n\nAs clients diversify on all fronts, how do we program flexible user interfaces without getting mired in software bloat and rampant complexity? Communicating Sequential Processes gives us the tools we need to design modular user interface components - we'll see how with Clojure, ClojureScript and core.async.",meta:{duration:"PT55M32S"},presenter:{name:"David Nolen"},source:{id:"AhxcGGeh5ho",provider:"youtube"},slug:"coreasync-for-asynchronous-programming",tag:["Clojure","Asynchronous Programming"],thumbnails:{default:{url:"https://i.ytimg.com/vi/AhxcGGeh5ho/default.jpg",height:90,width:120}},title:"Clojure Library Core.async for Asynchronous Programming"}},{node:{description:"The Model-View-Controller (MVC) approach to user interfaces was first proposed by Trygve Reenskaug in a 1979 Xerox PARC note. As Object Oriented methodologies gained popularity, MVC too gained traction as a natural and logical way to construct user interfaces despite obvious shortcomings. Even though OO researchers moved forward with alternative approaches likes Morphic and constraint based systems, MVC today maintains a stranglehold on mainstream developer approaches to UI.\n\nCan functional programming take the good lessons from MVC while advancing the state of the art? Functional Reactive Programming and its derivatives primarily solve complexities around events - what of component modularity and abstraction?\n\nWe'll examine how a new library for ClojureScript called Om, a simple functional layer over Facebook's React, makes some traditional hard problems in MVC based UIs simple without abandoning the abstractions OO programmers find so useful. These concepts are easily portable to other systems provided the presence of persistent data structures.",meta:{duration:"PT27M2S"},presenter:{name:"David Nolen"},source:{id:"DMtwq3QtddY",provider:"youtube"},slug:"the-functional-final-frontier",tag:["Clojure","Functional Programming"],thumbnails:{default:{url:"https://i.ytimg.com/vi/DMtwq3QtddY/default.jpg",height:90,width:120}},title:"The Functional Final Frontier"}},{node:{description:"Rationale and high level design of Om Next.\n\nAbout the speaker: David Nolen is a software engineer for Cognitect. He enjoys making music, writing JavaScript, writing ClojureScript, and exploring new approaches to user interface programming.",meta:{duration:"PT39M23S"},presenter:{name:"David Nolen"},source:{id:"MDZpSIngwm4",provider:"youtube"},slug:"om-next-david-nolen",tag:["Clojure"],thumbnails:{default:{url:"https://i.ytimg.com/vi/MDZpSIngwm4/default.jpg",height:90,width:120}},title:"Om Next"}},{node:{description:"More than 55 years ago John McCarthy had an insanely great idea called Lisp. Lisp marked the beginning of functional programming, interpreters, high-level metaprogramming, garbage collection, and much more. Yet after such auspicious beginnings the idea of Lisp has since faded and many of its innovations have been adopted by much more popular programming languages. Until recently Lisp even appeared doomed to fade into obscurity but several things have conspired to make Lisp somewhat cool again - one of these is Clojure, a fun modern Lisp targeting the Java Virtual Machine.\n\nHowever the Web doesn't speak JVM bytecodes. It speaks JavaScript - thus the cornucopia of languages that now compile to JavaScript. The most well known include GWT, CoffeeScript, and more recently Dart and TypeScript. However none of these represent a real break from the status quo.\n\nJohn McCarthy's insanely great idea still has a lot to offer the Web and we'll see how with ClojureScript, an implementation of Clojure that targets JavaScript.",meta:{duration:"PT32M3S"},presenter:{name:"David Nolen"},source:{id:"MTawgp3SKy8",provider:"youtube"},slug:"clojurescript-lisps-revenge",tag:["Clojure","Lisp","GOTO Conference"],thumbnails:{default:{url:"https://i.ytimg.com/vi/MTawgp3SKy8/default.jpg",height:90,width:120}},title:"ClojureScript: Lisp's Revenge"}},{node:{description:"Rich Hickey compares value-oriented programming with place-oriented programming concluding that the time of imperative languages has passed and it is the time of functional programming.",meta:{duration:"PT1H2M50S"},presenter:{name:"Rich Hickey"},source:{id:"ROor6_NGIWU",provider:"youtube"},slug:"the-language-of-the-system",tag:["Clojure"],thumbnails:{default:{url:"https://i.ytimg.com/vi/ROor6_NGIWU/default.jpg",height:90,width:120}},title:"The Language of the System"}},{node:{description:'Rich Hickey\'s second, "philosophical" talk at the first Clojure Conj, in Durham, North Carolina on October 23rd, 2010. \n\nMany thanks to Matt Courtney, who graciously provided the equipment and expertise that made this recording possible.',meta:{duration:"PT39M49S"},presenter:{name:"Rich Hickey"},source:{id:"f84n5oFoZBc",provider:"youtube"},slug:"hammock-driven-development",tag:["Clojure","Inspiring"],thumbnails:{default:{url:"https://i.ytimg.com/vi/f84n5oFoZBc/default.jpg",height:90,width:120}},title:"Hammock Driven Development"}},{node:{description:"This is a talk from Barcelona FutureJS 2014 (http://futurejs.org).\n\nSurprisingly the high performance mutation available in modern JavaScript engines is a great foundation for building high performance immutable collections. Even more surprisingly efficient immutable collections permit new ways of approaching user interface programming. While the details will be in Om, an immutable user interface toolkit written in ClojureScript over Facebook's React, the talk will be primarily focused on high level concepts easily ported to JavaScript. We'll dive in and see how trees of JavaScript arrays can permit building these efficient immutable collections. Then we'll see how embracing immutable values dramatically simplifies some classic hard problems in client side programming including but not limited to undo, error playback, and online/offline synchronization.",meta:{duration:"PT26M20S"},presenter:{name:"David Nolen"},source:{id:"mS264h8KGwk",provider:"youtube"},slug:"immutability-interactivity-and-javascript",tag:["JavaScript","Clojure","Immutability","FutureJS 2014"],thumbnails:{default:{url:"https://i.ytimg.com/vi/mS264h8KGwk/default.jpg",height:90,width:120}},title:"Immutability, interactivity & JavaScript"}}]}},pathContext:{slug:"clojure-concurrency",tags:["Clojure","Concurrency"]}}}});
//# sourceMappingURL=path---talk-clojure-concurrency-e253d50e54bc1eac0fef.js.map