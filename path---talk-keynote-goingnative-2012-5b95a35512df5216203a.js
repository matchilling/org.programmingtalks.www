webpackJsonp([0x7b24c546969f],{3029:function(e,t){e.exports={data:{talkJson:{description:'We know how to write bad code: litter our programs with casts, macros, pointers, naked new and deletes, and complicated control structures. Alternatively (or additionally), we could obscure every design decision in a mess of deeply nested abstractions using the latest object-oriented programming and generic programming tricks. Then, for good measure, we might complicate our algorithms with interesting special cases. Such code is incomprehensible, unmaintainable, usually inefficient, and not uncommon.\n\nBut how do we write good code? What principles, techniques, and idioms can we exploit to make it easier to produce quality code? In this presentation, I make an argument for type-rich interfaces, compact data structures, integrated resource management and error handling, and highly-structured algorithmic code. I illustrate my ideas and guidelines with a few idiomatic code examples.\n\nI use C++11 freely. Examples include auto, general constant expressions, uniform initialization, type aliases, type safe threading, and user-defined literals. C++11 features are only just starting to appear in production compilers, so some of my suggestions are conjecture. Developing a "modern style," however, is essential if we don\'t want to maintain newly-written 1970s and 1980s style code in 2020.\n\nThis presentation reflects my thoughts on what "Modern C++" should mean in the 2010s: a language for programming based on light-weight abstraction with direct and efficient mapping to hardware, suitable for infrastructure code.',meta:{duration:"PT1H29M48S"},presenter:{name:"Bjarne Stroustrup"},slug:"keynote-goingnative-2012",source:{id:"0iWb_qi2-uI",provider:"youtube"},tag:["C++","GoingNative","Keynote"],title:"Keynote GoingNative 2012 C++"},allTalkJson:{edges:[{node:{description:"In this keynote speech from JaxConf 2012, Rich Hickey, creator of Clojure and founder of Datomic gives an awesome analysis of the changing way we think about values (not the philosphoical kind) in light of the increasing complexity of information technology and the advent of Big Data. The broad subject of the talk makes it worth watching for almost anyone in the programming world, and was one of the highlights of the JaxConf lineup.",meta:{duration:"PT31M44S"},presenter:{name:"Rich Hickey"},source:{id:"-6BsiVyC1kM",provider:"youtube"},slug:"the-value-of-values",tag:["JaxConf 2012","Keynote"],thumbnails:{default:{url:"https://i.ytimg.com/vi/-6BsiVyC1kM/default.jpg",height:90,width:120}},title:"The Value of Values"}},{node:{description:"Hartmut Kaisers Keynote from Meeting C++ 2014\n\nSlides:\nhttp://meetingcpp.com/index.php/tv14/items/26.html",meta:{duration:"PT1H27M36S"},presenter:{name:null},source:{id:"4OCUEgSNIAY",provider:"youtube"},slug:"plain-threads-are-the-goto-of-todays-computing-hartmut-kaiser-keynote-meeting-c-2014",tag:["Software (Industry)","C (Programming Language)","C++","Meeting C++","Keynote","Parallelism","Concurrency","Threading","Thread","HPX","Meeting C++ 2014"],thumbnails:{default:{url:"https://i.ytimg.com/vi/4OCUEgSNIAY/default.jpg",height:90,width:120}},title:"Plain Threads are the GOTO of todays computing - Hartmut Kaiser - Keynote Meeting C++ 2014"}},{node:{description:"What’s the single most important design guideline for the creation of high-quality software? For Scott Meyers, it’s all about interface design. That includes user interfaces, of course, but also APIs, i.e., class interfaces, function interfaces, template interfaces, etc. The guideline is simple: make interfaces easy to use correctly and hard to use incorrectly, but achieving it can be challenging. In this presentation, Scott describes a number of specific ways to approach the design of high-quality interfaces. Much of the material is language- and domain-independent, but some of the ideas assume that you’re using a programming language with relatively strong static typing (e.g., C, C++, Java, C#).",meta:{duration:"PT58M42S"},presenter:{name:null},source:{id:"5tg1ONG18H8",provider:"youtube"},slug:"scott-meyers-the-most-important-design-guideline",tag:["Application Programming Interface (Literature Subject)","Scott Meyers","C++"],thumbnails:{default:{url:"https://i.ytimg.com/vi/5tg1ONG18H8/default.jpg",height:90,width:120}},title:"Scott Meyers – The Most Important Design Guideline"}},{node:{description:"Systems get bigger, technologies reach further, practices mature, advice changes... or at least some of it does. Some guidance remains unaffected by the passing of paradigms, the evolution of technology or the scaling of development: break your software into small, cohesive parts defined by clear interfaces and sound implementations, all the while striving for simplicity. The excuses for not doing so are as predictable as they are problematic. But if you want to create legacy code, make sure code is arbitrarily partitioned into large, incoherent parts characterised by unwieldy interfaces and incomprehensible implementations.\nWhile there are many definitions of what a legacy system is, common to almost all perceptions of a legacy system is the concept of size — specifically, lots of it. The phrase 'small legacy system' can be considered an oxymoron. This talk sets out to re-assess and reassert the importance of thinking and implementing small as an essential property of software systems — yes, even the large ones.",meta:{duration:"PT1H7M3S"},presenter:{name:"Kevlin Henney"},source:{id:"B3b4tremI5o",provider:"youtube"},slug:"small-is-beautiful",tag:["GOTO Conference","Keynote","GOTO Copenhagen","Scaling","Legacy System","Simplicity"],thumbnails:{default:{url:"https://i.ytimg.com/vi/B3b4tremI5o/default.jpg",height:90,width:120}},title:"Small Is Beautiful"}},{node:{description:'Aaron Swartz keynote - "How we stopped SOPA"  at F2C:Freedom to Connect 2012, Washington DC on May 21 2012.\n\nhttp://freedom-to-connect.net/',meta:{duration:"PT22M52S"},presenter:{name:"Aaron Swartz"},source:{id:"Fgh2dFngFsg",provider:"youtube"},slug:"f2c2012-aaron-swartz-keynote-how-we-stopped-sopa",tag:["SOPA","freedom to connect","internet freedom","Keynote"],thumbnails:{default:{url:"https://i.ytimg.com/vi/Fgh2dFngFsg/default.jpg",height:90,width:120}},title:'"How we stopped SOPA"'}},{node:{description:"This presentation was recorded at GOTO Copenhagen 2015\nhttp://gotocph.com\n\nErik Meijer - Founder at Applied Duality, Inc.\n\nABSTRACT\nErik challenges the basic ideas on Scrum & Agile and how developers should be developing code for the future. In the next decade every business will be digitized and effectively become a software company. Leveraging software, and, in general, computational [...]\nDownload slides and read the full abstract here:\nhttp://gotocon.com/cph-2015/presentation/Keynote:%20One%20Hacker%20Way\n\nhttps://twitter.com/gotocph\nhttps://www.facebook.com/GOTOConference\nhttp://gotocon.com",meta:{duration:"PT55M37S"},presenter:{name:"Erik Meijer"},source:{id:"FvMuPtuvP5w",provider:"youtube"},slug:"one-hacker-way",tag:["GOTO 2015","Keynote","Scrum","Agile"],thumbnails:{default:{url:"https://i.ytimg.com/vi/FvMuPtuvP5w/default.jpg",height:90,width:120}},title:"One Hacker Way"}},{node:{description:"The C++ programming language is accelerating with amazing new features, but sometimes it can feel like these features are out of reach. Unfortunately, many C++ developers are stuck using old C++ compilers, runtimes, and tools. They are missing out on some of the best features the language has to offer. LLVM is an open source project that can help address this, but even so it seems nearly impossible to address this growing gap between what C++ could be and what in practice it is today. This talk will explore these problems and what (if any) solutions might exist. Also, there might be some live demo. About the speaker: Chandler Carruth leads the LLVM and C++ teams at Google, building better compilers, libraries, tools, and more. He is an active contributor to the LLVM open source project, and sits on the board of directors for both the LLVM Foundation and the Standard C++ Foundation. Previously at Google, he worked on several pieces of Google’s distributed build system and helped maintain a few core C++ libraries within Google’s codebase. He received his M.S. and B.S. in Computer Science from Wake Forest University, but disavows all knowledge of the contents of his Master’s thesis. He is regularly found drinking Cherry Coke Zero in the daytime and pontificating over a single malt scotch in the evening.",meta:{duration:"PT1H23M18S"},presenter:{name:"Jason Turner"},source:{id:"OkgvqjJzH_Y",provider:"youtube"},slug:"rethinking-exceptions",tag:["C++","Exceptions","Pacific++"],thumbnails:{default:{url:"https://i.ytimg.com/vi/OkgvqjJzH_Y/default.jpg",height:90,width:120}},title:"Rethinking Exceptions"}},{node:{description:"Our increasingly complex needs have led us to build increasing complex software. We’ve done this in an incremental fashion, building code on top of code. We write understandable snippets of code built on programming languages we know well and then bundle them into program structures to perform complex tasks. This incremental process may seem to have low risk at the snippet level, but it leads to program structures that can be hundreds of millions of lines of code that is intractable to change, redesign, and understanding, nor in the end is it easy to design. It also leads to code with potentially unwanted emergent properties. Today, we know how to create programs that can create programming languages. So why not write software that closely follows the problem, without a programming language, then let other programs create the programming language to support it? If we apply this rethinking to the design process, both problems and solutions can be thought of in terms of relational str",meta:{duration:"PT1H7M19S"},presenter:{name:"Alan Kay"},source:{id:"QboI_1WJUlM",provider:"youtube"},slug:"rethinking-design-risk-and-software",tag:["Inspiring","Keynote","COFES 2012"],thumbnails:{default:{url:"https://i.ytimg.com/vi/QboI_1WJUlM/default.jpg",height:90,width:120}},title:"Rethinking Design, Risk, and Software"}},{node:{description:"In the 45+ years since Scott Meyers wrote his first program, he’s played many roles: programmer, user, educator, researcher, consultant. Different roles beget different perspectives on software development, and so many perspectives over so much time have led Scott to strong views about the things that really matter. In this presentation, he’ll share what he believes is especially important in software and software development, and he’ll try to convince you to embrace the same ideas he does.",meta:{duration:"PT1H6M37S"},presenter:{name:"Scott Meyers"},source:{id:"RT46MpK39rQ",provider:"youtube"},slug:"things-that-matter",tag:["DConf 2017","Software Development","Keynote","C++"],thumbnails:{default:{url:"https://i.ytimg.com/vi/RT46MpK39rQ/default.jpg",height:90,width:120}},title:"Things that Matter"}},{node:{description:"Towards the end of last year I attended a workshop with my colleagues in ThoughtWorks to discuss the nature of “event-driven” applications. Over the last few years we've been building lots of systems that make a lot of use of events, and they've been often praised, and often damned. Our North American office organized a summit, and ThoughtWorks senior developers from all over the world showed up to share ideas.\nThe biggest outcome of the summit was recognizing that when people talk about “events”, they actually mean some quite different things. So we spent a lot of time trying to tease out what some useful patterns might be. This note is a brief summary of the main ones we identified.",meta:{duration:"PT50M6S"},presenter:{name:"Martin Fowler"},source:{id:"STKCRSUsyP0",provider:"youtube"},slug:"the-many-meanings-of-event-driven-architecture",tag:["GOTO Conference","Chicago","Keynote"],thumbnails:{default:{url:"https://i.ytimg.com/vi/STKCRSUsyP0/default.jpg",height:90,width:120}},title:"The Many Meanings of Event-Driven Architecture"}}]}},pathContext:{slug:"keynote-goingnative-2012",tags:["C++","GoingNative","Keynote"]}}}});
//# sourceMappingURL=path---talk-keynote-goingnative-2012-5b95a35512df5216203a.js.map