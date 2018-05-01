webpackJsonp([55449009069955],{3143:function(e,t){e.exports={data:{talkJson:{description:"What’s the single most important design guideline for the creation of high-quality software? For Scott Meyers, it’s all about interface design. That includes user interfaces, of course, but also APIs, i.e., class interfaces, function interfaces, template interfaces, etc. The guideline is simple: make interfaces easy to use correctly and hard to use incorrectly, but achieving it can be challenging. In this presentation, Scott describes a number of specific ways to approach the design of high-quality interfaces. Much of the material is language- and domain-independent, but some of the ideas assume that you’re using a programming language with relatively strong static typing (e.g., C, C++, Java, C#).",meta:{duration:"PT58M42S"},presenter:{name:null},slug:"scott-meyers-the-most-important-design-guideline",source:{id:"5tg1ONG18H8",provider:"youtube"},tag:["Application Programming Interface (Literature Subject)","Scott Meyers","C++"],title:"Scott Meyers – The Most Important Design Guideline"},allTalkJson:{edges:[{node:{description:'We know how to write bad code: litter our programs with casts, macros, pointers, naked new and deletes, and complicated control structures. Alternatively (or additionally), we could obscure every design decision in a mess of deeply nested abstractions using the latest object-oriented programming and generic programming tricks. Then, for good measure, we might complicate our algorithms with interesting special cases. Such code is incomprehensible, unmaintainable, usually inefficient, and not uncommon.\n\nBut how do we write good code? What principles, techniques, and idioms can we exploit to make it easier to produce quality code? In this presentation, I make an argument for type-rich interfaces, compact data structures, integrated resource management and error handling, and highly-structured algorithmic code. I illustrate my ideas and guidelines with a few idiomatic code examples.\n\nI use C++11 freely. Examples include auto, general constant expressions, uniform initialization, type aliases, type safe threading, and user-defined literals. C++11 features are only just starting to appear in production compilers, so some of my suggestions are conjecture. Developing a "modern style," however, is essential if we don\'t want to maintain newly-written 1970s and 1980s style code in 2020.\n\nThis presentation reflects my thoughts on what "Modern C++" should mean in the 2010s: a language for programming based on light-weight abstraction with direct and efficient mapping to hardware, suitable for infrastructure code.',meta:{duration:"PT1H29M48S"},presenter:{name:"Bjarne Stroustrup"},source:{id:"0iWb_qi2-uI",provider:"youtube"},slug:"keynote-goingnative-2012",tag:["C++","GoingNative","Keynote"],thumbnails:{default:{url:"https://i.ytimg.com/vi/0iWb_qi2-uI/default.jpg",height:90,width:120}},title:"Keynote GoingNative 2012 C++"}},{node:{description:"http://dconf.org/2014/talks/meyers.html",meta:{duration:"PT54M55S"},presenter:{name:null},source:{id:"48kP_Ssg2eY",provider:"youtube"},slug:"dconf-2014-the-last-thing-d-needs-scott-meyers",tag:["Scott Meyers","dlang","dconf","dconf2014"],thumbnails:{default:{url:"https://i.ytimg.com/vi/48kP_Ssg2eY/default.jpg",height:90,width:120}},title:"DConf 2014:  The Last Thing D Needs (Scott Meyers)"}},{node:{description:"Hartmut Kaisers Keynote from Meeting C++ 2014\n\nSlides:\nhttp://meetingcpp.com/index.php/tv14/items/26.html",meta:{duration:"PT1H27M36S"},presenter:{name:null},source:{id:"4OCUEgSNIAY",provider:"youtube"},slug:"plain-threads-are-the-goto-of-todays-computing-hartmut-kaiser-keynote-meeting-c-2014",tag:["Software (Industry)","C (Programming Language)","C++","Meeting C++","Keynote","Parallelism","Concurrency","Threading","Thread","HPX","Meeting C++ 2014"],thumbnails:{default:{url:"https://i.ytimg.com/vi/4OCUEgSNIAY/default.jpg",height:90,width:120}},title:"Plain Threads are the GOTO of todays computing - Hartmut Kaiser - Keynote Meeting C++ 2014"}},{node:{description:"Haskellers have been isolating their side-effects from their pure code for decades, but most people write code in languages that allow ad hoc side-effects anywhere. In a lot of cases, these side-effects are practically a part of the public API -- they put restrictions the way the code can be used, often obscurely, and have effects that are observable to the caller. It helps a lot to acknowledge this and explicitly treat them as a part of your public API. Here are the basic ideas that I'll cover:\n\nrepresent your side-effects as \"intents to perform an action\" -- transparent objects that expose the details of the side-effect, without actually performing it\ncombine effects with pure code to describe the execution order and data dependencies (yes, like a monad)\nwrite unit tests for your code without mocking, by specifying the expected content, results, and order of side-effects performed by a function\nI'll show a library implemented for Python, called Effect, that provides tools for doing this.\n\nA lot of these ideas are similar to the Extensible Effects system described for Haskell, and I'll describe some ideas and techniques that even most Haskellers could use to make their code more easily testable.\n\nChristopher Armstrong\nRACKSPACE\n@radix\n\nChristopher Armstrong is a long-time writer of Python code, who recently immersed himself in the world of purely functional programming. He is a long-time contributor to the Twisted networking framework, and more recently has been working on the Effect library. He is also a budding Haskell enthusiast.",meta:{duration:"PT38M27S"},presenter:{name:null},source:{id:"D37dc9EoFus",provider:"youtube"},slug:"side-effects-are-a-public-api-by-christopher-armstrong",tag:["Application Programming Interface (Literature Subject)"],thumbnails:{default:{url:"https://i.ytimg.com/vi/D37dc9EoFus/default.jpg",height:90,width:120}},title:'"Side Effects are a Public API" by Christopher Armstrong'}},{node:{description:"The C++ programming language is accelerating with amazing new features, but sometimes it can feel like these features are out of reach. Unfortunately, many C++ developers are stuck using old C++ compilers, runtimes, and tools. They are missing out on some of the best features the language has to offer. LLVM is an open source project that can help address this, but even so it seems nearly impossible to address this growing gap between what C++ could be and what in practice it is today. This talk will explore these problems and what (if any) solutions might exist. Also, there might be some live demo. About the speaker: Chandler Carruth leads the LLVM and C++ teams at Google, building better compilers, libraries, tools, and more. He is an active contributor to the LLVM open source project, and sits on the board of directors for both the LLVM Foundation and the Standard C++ Foundation. Previously at Google, he worked on several pieces of Google’s distributed build system and helped maintain a few core C++ libraries within Google’s codebase. He received his M.S. and B.S. in Computer Science from Wake Forest University, but disavows all knowledge of the contents of his Master’s thesis. He is regularly found drinking Cherry Coke Zero in the daytime and pontificating over a single malt scotch in the evening.",meta:{duration:"PT1H23M18S"},presenter:{name:"Jason Turner"},source:{id:"OkgvqjJzH_Y",provider:"youtube"},slug:"rethinking-exceptions",tag:["C++","Exceptions","Pacific++"],thumbnails:{default:{url:"https://i.ytimg.com/vi/OkgvqjJzH_Y/default.jpg",height:90,width:120}},title:"Rethinking Exceptions"}},{node:{description:"In the 45+ years since Scott Meyers wrote his first program, he’s played many roles: programmer, user, educator, researcher, consultant. Different roles beget different perspectives on software development, and so many perspectives over so much time have led Scott to strong views about the things that really matter. In this presentation, he’ll share what he believes is especially important in software and software development, and he’ll try to convince you to embrace the same ideas he does.",meta:{duration:"PT1H6M37S"},presenter:{name:"Scott Meyers"},source:{id:"RT46MpK39rQ",provider:"youtube"},slug:"things-that-matter",tag:["DConf 2017","Software Development","Keynote","C++"],thumbnails:{default:{url:"https://i.ytimg.com/vi/RT46MpK39rQ/default.jpg",height:90,width:120}},title:"Things that Matter"}},{node:{description:"If you always wanted to know more about about Clang's AST [1], for example because you want to implement an awesome tool [2, 3] based on Clang, or simply because you want to start contributing, this talk is for you.\n\nMake sure to watch in HD to be able to read the font in the terminal!\n\nThe semantic code completion in the vim session is powered by YCM [4], and the quick formatting is done by clang-format [5].\n\n[1] http://clang.llvm.org/docs/IntroductionToTheClangAST.html\n[2] http://clang.llvm.org/docs/Tooling.html\n[3] http://clang.llvm.org/docs/LibTooling.html\n[4] https://github.com/Valloric/YouCompleteMe\n[5] http://clang.llvm.org/docs/ClangFormat.html\n\nFrom the LLVM Euro Conference 2013: http://llvm.org/devmtg/2013-04/",meta:{duration:"PT44M53S"},presenter:{name:null},source:{id:"VqCkCDFLSsc",provider:"youtube"},slug:"the-clang-ast-a-tutorial",tag:["C++","Clang","compiler","programming"],thumbnails:{default:{url:"https://i.ytimg.com/vi/VqCkCDFLSsc/default.jpg",height:90,width:120}},title:"The Clang AST - a Tutorial"}},{node:{description:"http://www.cppcon.org\n--\nThe standard library containers are often both misused and underused. Instead of creating new containers, applications are often structured with incidental data structures composed of objects referencing other object. This talk looks at some of the ways the standard containers can be better utilized and how creating (or using non-standard library) containers can greatly simplify code. The goal is no incidental data structures. \n--\nSean Parent is a principal scientist and software architect for Adobe’s mobile digital imaging group. Sean has been at Adobe since 1993 when he joined as a senior engineer working on Photoshop and later managed Adobe’s Software Technology Lab. In 2009 Sean spent a year at Google working on Chrome OS before returning to Adobe. From 1988 through 1993 Sean worked at Apple, where he was part of the system software team that developed the technologies allowing Apple’s successful transition to PowerPC.\n--\nVideos Filmed & Edited by Bash Films: http://www.BashFilms.com",meta:{duration:"PT1H4M"},presenter:{name:null},source:{id:"sWgDk-o-6ZE",provider:"youtube"},slug:"cppcon-2015-sean-parent-better-code-data-structures",tag:["CppCon 2015","Sean Parent","C++","Computer Programming (Conference Subject)","Data Structure (Literature Subject)","Bash Films","Conference Video","Video Services"],thumbnails:{default:{url:"https://i.ytimg.com/vi/sWgDk-o-6ZE/default.jpg",height:90,width:120}},title:'CppCon 2015: Sean Parent "Better Code: Data Structures"'}}]}},pathContext:{slug:"scott-meyers-the-most-important-design-guideline",tags:["Application Programming Interface (Literature Subject)","Scott Meyers","C++"]}}}});
//# sourceMappingURL=path---talk-scott-meyers-the-most-important-design-guideline-2568286c73c933ec1e59.js.map