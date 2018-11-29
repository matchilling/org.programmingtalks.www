webpackJsonp([0xb6fe6a2fbaf4],{3188:function(e,t){e.exports={data:{talkJson:{description:"In this video tutorial, Dan Rosen will show you how to use Scala's capacity for monadic design to eliminate repetitive boilerplate in your code.  You'll learn to recognize places where the perpetual clutter of null checks, try-catch blocks and more can be hidden within a monad, to make your code's logic stand out clearly.\r\n\r\n** Head to http://marakana.com for more open source educational resources",meta:{duration:"PT31M22S"},presenter:{name:null},slug:"scala-monads-declutter-your-code-with-monadic-design",source:{id:"Mw_Jnn_Y5iA",provider:"youtube"},tag:["scala","monad","monadic","design patterns","monadic design","dan rosen","marakana","techtv","Code","Demo"],title:"Scala Monads: Declutter Your Code With Monadic Design"},allTalkJson:{edges:[{node:{description:"Scala's type system allows us to enforce compile-time constraints on our programs, and to take advantage of these constraints to help reason about our code. Yet we still frequently encounter situations where extracting a value from a map is not guaranteed to succeed, or mapping across a set of cases is not guaranteed to be exhaustive. With dependent types we can make operations like these completely safe by construction, in the process eliminating entire classes of errors, and furthermore we can do this without complicating user code.\n\nAdditionally, with more precise type information becoming available at compile time, we elicit the exciting opportunity to use it to optimize performance at runtime, beyond what would be possible without dependent typing.\n\nThe talk will cover several simple and intermediate examples using dependent types, and will give a brief outline of some of the the challenges involved in implementing typesafe libraries with dependent types in Scala, but the majority of the talk will be accessible to all Scala users.",meta:{duration:"PT59M28S"},presenter:{name:null},source:{id:"26UHdZUsKkE",provider:"youtube"},slug:"minimizing-the-slippery-surface-of-failure-jon-pretty",tag:["scala"],thumbnails:{default:{url:"https://i.ytimg.com/vi/26UHdZUsKkE/default.jpg",height:90,width:120}},title:"Minimizing the Slippery Surface of Failure — Jon Pretty"}},{node:{description:"I hit on some practical use cases for functors/applicatives/monads.\n\nPretty fast and quick run through of everything, but you can't learn the world in 30 min. Hopefully, people get some intuition or a better concrete understanding - enough to play with the code. here github.com/DrBoolean/patterns_talk",meta:{duration:"PT29M58S"},presenter:{name:null},source:{id:"AvgwKjTPMmM",provider:"youtube"},slug:"functional-programming-patterns-for-the-non-mathematician-cut",tag:["monad","lens","monoid","javascript","functor"],thumbnails:{default:{url:"https://i.ytimg.com/vi/AvgwKjTPMmM/default.jpg",height:90,width:120}},title:"Functional programming patterns for the non-mathematician (cut)"}},{node:{description:"Abstract \nThe introduction of lambdas and first class function objects forever changed the nature of C++, opening up the floodgates to functional programming. Sometimes the best library design is based on a pattern that's very familiar to a Haskell programmer but alien to a C++ programmer. The new std::future proposal for C++17 hides several functional patterns including that of a monad -- the boogeyman of generations of imperative programmers. But once seen in action, the monad becomes just one more pattern in the toolbox of a library designer. \nBio\nBartosz Milewski always tries to be where the action is. He started as a quantum physicist when supertstrings were hot, joined the software industry to build the search engine for Microsoft Windows, became an avid proponent of object-oriented programming, and wrote a book on C++. He got into concurrency and parallelism when the multicores hit the market, and now he's evangelizing functional programming as the Holy Grail of software development.",meta:{duration:"PT1H20M59S"},presenter:{name:null},source:{id:"BFnhhPehpKw",provider:"youtube"},slug:"c17-i-see-a-monad-in-your-future",tag:["NWCPP","Bartosz Milewski","Monad","functional programming","Haskel","futures","promise","design patterns","software development","concurrent programming","parallell programming"],thumbnails:{default:{url:"https://i.ytimg.com/vi/BFnhhPehpKw/default.jpg",height:90,width:120}},title:"C++17: I See a Monad in Your Future"}},{node:{description:"Java is no longer alone on the JVM. It now has to share space with its younger siblings JRuby, Jython, Groovy, Clojure, Scala and many others. Each new language has its own set of advantages and disadvantages compared to Java, and its own niche in which it performs best, but Scala in particular is gaining momentum.\n\nIn this presentation to San Francisco Java User Group on January 18, 2012, Marakana's own Dan Rosen introduces Scala to Java developers and shows off some of its expressive power -- higher-order functions, type inference, and pattern matching -- by building a simple web service. You'll never look at Java the same way.\n\nSlides from this presentation available here http://bit.ly/ztgVxa",meta:{duration:"PT1H32M35S"},presenter:{name:null},source:{id:"PKc5IwHG68k",provider:"youtube"},slug:"scala-versus-java",tag:["scala","java","marakana","techtv","typesafe","dan rosen","sbt","jdk"],thumbnails:{default:{url:"https://i.ytimg.com/vi/PKc5IwHG68k/default.jpg",height:90,width:120}},title:"Scala Versus Java"}},{node:{description:"Are your methods timid? Do they constantly second-guess themselves, checking for nil values, errors, and unexpected input? Even the cleanest Ruby codebases can become littered over time with nil checks, error handling, and other interruptions which steal attention away from the essential purpose of the code. This talk will discuss strategies for writing your Ruby classes and methods in a confident, straightforward style; without sacrificing functionality or robustness. In the process, we'll cover concepts and techniques points including: The narrative style of method construction The four parts of a method Three strategies for dealing with uncertain input Massaging input with coercion and the Decorator pattern Lightweight preconditions Exterminating nils from your code The chaining and iterative styles of method construction Eliminating conditionals with the Special Case and Null Object patterns Isolating errors with the Bouncer and Checked Method patterns",meta:{duration:"PT31M24S"},presenter:{name:null},source:{id:"T8J0j2xJFgQ",provider:"youtube"},slug:"ruby-midwest-2011-confident-code-by-avdi-grimm",tag:["rubymidwest2011","Ruby","Code"],thumbnails:{default:{url:"https://i.ytimg.com/vi/T8J0j2xJFgQ/default.jpg",height:90,width:120}},title:"Ruby Midwest 2011 Confident Code by Avdi Grimm"}},{node:{description:"Blake Matheny approaches his talk at NEScala with a collection of trial-and-error experiences he's acquired as the VP of Engineering at Tumblr (who for the past year and half has adopted Scala as their primary backend development language). Blake draws on actual code used at Tumblr, describes their implications in a server context, and shows us where things have gone wrong and how they were corrected.\n \nThis talk will be most pertinent to engineers who build backend service applications, but should be of interest to anyone looking to find additional methods for troubleshooting code in Scala.\n\n** Visit our site for more content on Scala, including the rest of the presentations from NE Scala 2013: http://marakana.com/s/tags/scala",meta:{duration:"PT29M53S"},presenter:{name:null},source:{id:"dCEZDlH1ygo",provider:"youtube"},slug:"concurrency-anti-patterns-in-scala",tag:["scala","blake matheny","tumblr","nescala","marakana","techtv"],thumbnails:{default:{url:"https://i.ytimg.com/vi/dCEZDlH1ygo/default.jpg",height:90,width:120}},title:"Concurrency Anti-patterns in Scala"}},{node:{description:'Callback Hell is a very real place. At least, according to Michael Jackson, co-founder of HUM, it is. But stay calm! In this presentation, Michael and his co-presenter\nDomenic Denicola, Software Engineer at Lab49, will walk you through all the steps required to avoid this dark and mysterious place.\n\nInstead of simply throwing together a clunky example, and a solution to a very specific case, Michael and Domenic dive deeper into more conceptual problems. How did we get to "callback hell" and what can we do it avoid it next time? This helpful demonstration covers handy tips about Promises and strategies for building fully asynchronous APIs in JavaScript.\n\n**Follow along with Michael and Domenic\'s slides: http://mrkn.co/lb0t1',meta:{duration:"PT50M25S"},presenter:{name:null},source:{id:"hf1T_AONQJU",provider:"youtube"},slug:"redemption-from-callback-hell",tag:["callback","callback hell","marakana","techtv","html5","html5devconf","michael jackson","michael jackson develoepr","domenic denicola","HUM","Lab49"],thumbnails:{default:{url:"https://i.ytimg.com/vi/hf1T_AONQJU/default.jpg",height:90,width:120}},title:"Redemption from Callback Hell"}},{node:{description:"Brian Lonsdorf has a love-hate relationship with Underscore.js. Yes, it offers a bunch of tools included in today's functional programming paradigm (like map, filter, reduce, take, drop, compose, etc.), but in Underscore the functions are sometimes verbose and unintuitive. It claims to be a functional programming language, but how true is that?\n\nDespite certain characteristics, Brian offers some solutions for using Underscore productively. He plays a bit of catchup for the functional programming newbie, but then dives into the denser more theoretical concepts.\n\n**Follow along with Brian's slides: http://mrkn.co/5nvjz",meta:{duration:"PT36M31S"},presenter:{name:null},source:{id:"m3svKOdZijA",provider:"youtube"},slug:"hey-underscore-youre-doing-it-wrong",tag:["brian lonsdorf","html5","html5devconf","san francisco","Underscore","Underscore.js","functional programming","marakana","tips","tricks","use underscore.js productively"],thumbnails:{default:{url:"https://i.ytimg.com/vi/m3svKOdZijA/default.jpg",height:90,width:120}},title:"Hey Underscore, You're Doing It Wrong!"}},{node:{description:'HTML5 Boilerplate is a "rock-solid defualt for HTML5 awesome." In this video, Paul Irish, the man behind the project will show you how you can use HTML5 Boilerplate to get your projects up and running quickly while keeping best practices covered.\n\nPaul will start with an overview of HTML5 Boilerplate before diving into some examples and demos to give you a feel for how you can jumpstart your next project with HTML5 Boilerplate.\n\n** Head over to http://marakana.com to learn more about HTML5 and open source development **',meta:{duration:"PT1H4M20S"},presenter:{name:null},source:{id:"qyM37XKkmKQ",provider:"youtube"},slug:"paul-irish-on-html5-boilerplate",tag:["HTML5","Development","Paul","Irish","Boilerplate","open","source","tutorial","Marakana","example","techtv","San","Francsico","User","Group"],thumbnails:{default:{url:"https://i.ytimg.com/vi/qyM37XKkmKQ/default.jpg",height:90,width:120}},title:"Paul Irish on HTML5 Boilerplate"}},{node:{description:"Paul Phillips is a co-founder of Typesafe and the most prolific committer to Scala. He's spent the last 5 years developing the language, writing a lot of code and drawing a lot of conclusions, but has decided to walk away. In this talk, he explains why.\n\nHe outlines what he believes to be certain shortcomings of the Scala collections library. In Paul's words, \"Based on my extensive experience with Scala collections, I'm writing my own. The focus is much tighter: immutable, performant, predictable, correct. The talk will alternate between why the Scala collections manage none of those things, and how I hope to do better.\"\n\nA day after the SF Scala event, Paul left this comment on their meetup page, which seems relevant, \"[...] I already discovered that if I say nothing about it then people will draw very incorrect conclusions about what the major issues are and why I've moved on. It's not sad, it's not happy, it's only a question of whether you want the real picture or some distant reflection of it.\"\n\nFollow along with Paul's slides: http://crcl.to/zdybs\n\nFree Scala resources: http://crcl.to/zhwdp\nProfessional Scala training: http://crcl.to/w6kf7\n\nInformation on SF Scala: http://sfscala.org",meta:{duration:"PT45M42S"},presenter:{name:null},source:{id:"uiJycy6dFSQ",provider:"youtube"},slug:"scala-collections-why-not",tag:["paul phillips","typesafe","scala","collections","sf scala","newcircle"],thumbnails:{default:{url:"https://i.ytimg.com/vi/uiJycy6dFSQ/default.jpg",height:90,width:120}},title:"Scala Collections: Why Not?"}}]}},pathContext:{slug:"scala-monads-declutter-your-code-with-monadic-design",tags:["scala","monad","monadic","design patterns","monadic design","dan rosen","marakana","techtv","Code","Demo"]}}}});
//# sourceMappingURL=path---talk-scala-monads-declutter-your-code-with-monadic-design-2f56c0437784ec22f669.js.map