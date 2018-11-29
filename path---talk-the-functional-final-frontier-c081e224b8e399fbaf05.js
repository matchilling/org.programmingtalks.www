webpackJsonp([0x93144d4f8ac2],{3226:function(e,t){e.exports={data:{talkJson:{description:"The Model-View-Controller (MVC) approach to user interfaces was first proposed by Trygve Reenskaug in a 1979 Xerox PARC note. As Object Oriented methodologies gained popularity, MVC too gained traction as a natural and logical way to construct user interfaces despite obvious shortcomings. Even though OO researchers moved forward with alternative approaches likes Morphic and constraint based systems, MVC today maintains a stranglehold on mainstream developer approaches to UI.\n\nCan functional programming take the good lessons from MVC while advancing the state of the art? Functional Reactive Programming and its derivatives primarily solve complexities around events - what of component modularity and abstraction?\n\nWe'll examine how a new library for ClojureScript called Om, a simple functional layer over Facebook's React, makes some traditional hard problems in MVC based UIs simple without abandoning the abstractions OO programmers find so useful. These concepts are easily portable to other systems provided the presence of persistent data structures.",meta:{duration:"PT27M2S"},presenter:{name:"David Nolen"},slug:"the-functional-final-frontier",source:{id:"DMtwq3QtddY",provider:"youtube"},tag:["Clojure","Functional Programming"],title:"The Functional Final Frontier"},allTalkJson:{edges:[{node:{description:'Games are a modern art form, and like other artists, game designers need to experience their work as they create it. This talk will explore the benefits of making games "at runtime". Through both abstract discussion and concrete demonstration, we will see why Clojure is uniquely suited to the task.\n\nZach is an independent programmer and tutor in the Pittsburgh area. He made Nightcode, a Clojure IDE for beginners, and is working to make Clojure games a reality with the play-clj library and Nightmod, a game creation tool. Previously, he was a programmer at the National Security Agency in Maryland.',meta:{duration:"PT37M34S"},presenter:{name:"Zach Oakes"},source:{id:"0GzzFeS5cMc",provider:"youtube"},slug:"making-games-at-runtime-with-clojure",tag:["Clojure","Game Programmer"],thumbnails:{default:{url:"https://i.ytimg.com/vi/0GzzFeS5cMc/default.jpg",height:90,width:120}},title:"Making Games at Runtime with Clojure"}},{node:{description:"People keep implementing map, filter and other fundamental algorithms in different contexts - eagerly over collections, over lazy sequences, in parallel, over enumerables/iterables, over observables, over channels/streams etc. In addition to duplication of effort, this yields bloated APIs, and, when implemented in the classic way, often involves the creation of expensive intermediate objects/values that\ncan be difficult to optimize away.\nMost problematic is that this approach keeps us from composing core algorithms in a context-independent way which would facilitate reuse and engender greater flexibility.\nThis talk will describe transducers, a new library feature for Clojure (but of interest to other languages) that emphasizes composable, context-free, intermediate-free notions like 'mapping' and 'filtering' and their concrete reuse across all of the contexts above.",meta:{duration:"PT45M1S"},presenter:{name:"Rich Hickey"},source:{id:"6mTbuzafcII",provider:"youtube"},slug:"transducers",tag:["Clojure"],thumbnails:{default:{url:"https://i.ytimg.com/vi/6mTbuzafcII/default.jpg",height:90,width:120}},title:"Transducers"}},{node:{description:"In this talk, we hear from David Nolen from the New York Times about core.async, the new library for asynchronous programming in Clojure and ClojureScript. He'll be talking about Clojure, Communicating Sequential Processes & Responsive Design. This talk was recorded at the NY Clojure Users Group meetup at Two Sigma Investments.\n\nAs clients diversify on all fronts, how do we program flexible user interfaces without getting mired in software bloat and rampant complexity? Communicating Sequential Processes gives us the tools we need to design modular user interface components - we'll see how with Clojure, ClojureScript and core.async.",meta:{duration:"PT55M32S"},presenter:{name:"David Nolen"},source:{id:"AhxcGGeh5ho",provider:"youtube"},slug:"coreasync-for-asynchronous-programming",tag:["Clojure","Asynchronous Programming"],thumbnails:{default:{url:"https://i.ytimg.com/vi/AhxcGGeh5ho/default.jpg",height:90,width:120}},title:"Clojure Library Core.async for Asynchronous Programming"}},{node:{description:"Why is functional programming becoming such a hot topic? Just what _is_ functional programming anyway? And when am I going to have to know about it? In this talk Uncle Bob will walk you through the rationale that is driving the current push towards functional programming. He'll also introduce you to the basics by walking through some simple Clojure code.",meta:{duration:"PT58M27S"},presenter:{name:'"Uncle Bob" - Robert Cecil Martin'},source:{id:"7Zlp9rKHGD4",provider:"youtube"},slug:"functional-programming-what-why-when",tag:["Functional Programming","NDC Conference 2014"],thumbnails:{default:{url:"https://i.ytimg.com/vi/7Zlp9rKHGD4/default.jpg",height:90,width:120}},title:"Functional Programming; What? Why? When?"}},{node:{description:"Rationale and high level design of Om Next.\n\nAbout the speaker: David Nolen is a software engineer for Cognitect. He enjoys making music, writing JavaScript, writing ClojureScript, and exploring new approaches to user interface programming.",meta:{duration:"PT39M23S"},presenter:{name:"David Nolen"},source:{id:"MDZpSIngwm4",provider:"youtube"},slug:"om-next-david-nolen",tag:["Clojure"],thumbnails:{default:{url:"https://i.ytimg.com/vi/MDZpSIngwm4/default.jpg",height:90,width:120}},title:"Om Next"}},{node:{description:"More than 55 years ago John McCarthy had an insanely great idea called Lisp. Lisp marked the beginning of functional programming, interpreters, high-level metaprogramming, garbage collection, and much more. Yet after such auspicious beginnings the idea of Lisp has since faded and many of its innovations have been adopted by much more popular programming languages. Until recently Lisp even appeared doomed to fade into obscurity but several things have conspired to make Lisp somewhat cool again - one of these is Clojure, a fun modern Lisp targeting the Java Virtual Machine.\n\nHowever the Web doesn't speak JVM bytecodes. It speaks JavaScript - thus the cornucopia of languages that now compile to JavaScript. The most well known include GWT, CoffeeScript, and more recently Dart and TypeScript. However none of these represent a real break from the status quo.\n\nJohn McCarthy's insanely great idea still has a lot to offer the Web and we'll see how with ClojureScript, an implementation of Clojure that targets JavaScript.",meta:{duration:"PT32M3S"},presenter:{name:"David Nolen"},source:{id:"MTawgp3SKy8",provider:"youtube"},slug:"clojurescript-lisps-revenge",tag:["Clojure","Lisp","GOTO Conference"],thumbnails:{default:{url:"https://i.ytimg.com/vi/MTawgp3SKy8/default.jpg",height:90,width:120}},title:"ClojureScript: Lisp's Revenge"}},{node:{description:"Rich Hickey compares value-oriented programming with place-oriented programming concluding that the time of imperative languages has passed and it is the time of functional programming.",meta:{duration:"PT1H2M50S"},presenter:{name:"Rich Hickey"},source:{id:"ROor6_NGIWU",provider:"youtube"},slug:"the-language-of-the-system",tag:["Clojure"],thumbnails:{default:{url:"https://i.ytimg.com/vi/ROor6_NGIWU/default.jpg",height:90,width:120}},title:"The Language of the System"}},{node:{description:"RxJava is a library for composing asynchronous and event-based programs by using observable sequences for the Java VM. It supports Java 6+, Clojure, Scala, Groovy, JRuby, and Java 8 lambdas. In this session, learn how the Netflix API uses RxJava to implement highly concurrent Web services against asynchronous datasources without blocking, synchronization, or thread safety concerns by using declarative functional reactive composition.",meta:{duration:"PT49M27S"},presenter:{name:"Ben Christensen"},source:{id:"_t06LRX0DV0",provider:"youtube"},slug:"functional-reactive-programming-rxjava",tag:["Functional Programming","Reactive","RxJava","Netflix","GOTO 2013"],thumbnails:{default:{url:"https://i.ytimg.com/vi/_t06LRX0DV0/default.jpg",height:90,width:120}},title:"Functional Reactive Programming with RxJava"}},{node:{description:"Slides: http://comonad.com/haskell/Lenses-Folds-and-Traversals-NYC.pdf\n\nThis was a talk I gave at the second New York Haskell User Group Meeting (http://www.meetup.com/NY-Haskell/) on the new lens library, which provides a highly composable toolbox for accessing and modifying multiple parts of data structures.\n\nStarting with building blocks such as fmap and (.), we build up combinators suitable for working with a wide array of data structures. These generalize the notions you already know how to use into a form that is easier to compose and simultaneously allow them to be used for monomorphic containers such as Data.Text. \n\nAll without compromising on your ability to reason about them using laws!\n\nFinally, once I've built up some foundations, I do a bit of a deep dive, exploring consequences of this design. In particular we discuss the efficient generic programming programming framework exported by lens, and type-safe Traversal-based zippers.\n\nFamiliarity with the Applicative and Traversable classes from the Haskell base libraries will be helpful (links provided below), but a basic understanding of the concepts get introduced as I go along. \n\nUseful (but not mandatory) references:\n\nThe lens library and documentation: http://hackage.haskell.org/package/lens\nA previous, more introductory talk on how to use the lenses Edward Kmett wrote for the scalaz in the Scala programming language: https://www.youtube.com/watch?v=efv0SQNde5Q\nThe original Applicative paper: http://www.soi.city.ac.uk/~ross/papers/Applicative.pdf\nLots of information on Traversable: http://www.cs.ox.ac.uk/jeremy.gibbons/publications/iterator.pdf\nA write-up of this talk, as presented at the Bay Area Haskell Users Group: http://google-opensource.blogspot.com/2012/10/lenses-folds-and-traversals-haskell.html\n\nThe original Keynote version of the slides are available from http://comonad.com/haskell/Lenses-Folds-and-Traversals-NYC.key\n\nThanks go to Johan Kiviniemi, who worked magic when it came to cleaning up the audio for this recording!",meta:{duration:"PT1H54M46S"},presenter:{name:null},source:{id:"cefnmjtAolY",provider:"youtube"},slug:"lenses-folds-and-traversals",tag:["Haskell","Functional Programming","Haskell","Mathematics","Lecture","Talk","Academic","Talking","Computer"],thumbnails:{default:{url:"https://i.ytimg.com/vi/cefnmjtAolY/default.jpg",height:90,width:120}},title:"Lenses, Folds, and Traversals"}},{node:{description:"A presentation by Rich Hickey to the Western Mass. Developers Group on Clojure and concurrency. Brief overview of Clojure, discussion of concurrency issues, locking, and immutabiity. In-depth look at Clojure's refs, transactions and agents. Demonstration and review of code for a multithreaded ant colony simulation.Be sure to grab the slides and code in order to follow along.Thanks to Shawn Fumo for working on this video.",meta:{duration:"PT2H32M39S"},presenter:{name:"Rich Hickey"},source:{id:"dGVqrGmwOAw",provider:"youtube"},slug:"clojure-concurrency",tag:["Clojure","Concurrency"],thumbnails:{default:{url:"https://i.ytimg.com/vi/dGVqrGmwOAw/default.jpg",height:90,width:120}},title:"Clojure Concurrency"}}]}},pathContext:{slug:"the-functional-final-frontier",tags:["Clojure","Functional Programming"]}}}});
//# sourceMappingURL=path---talk-the-functional-final-frontier-c081e224b8e399fbaf05.js.map