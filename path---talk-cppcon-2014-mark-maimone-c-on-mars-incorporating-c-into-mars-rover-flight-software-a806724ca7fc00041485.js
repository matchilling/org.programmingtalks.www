webpackJsonp([25134388864223],{2941:function(e,t){e.exports={data:{talkJson:{description:'http://www.cppcon.org\n--\nPresentation Slides, PDFs, Source Code and other presenter materials are available at: https://github.com/CppCon/CppCon2014\n--\nOne of the more challenging aspects of developing flight software (FSW) for NASA\'s Spirit and Opportunity Mars Exploration Rovers (MER) and Curiosity, the Mars Science Laboratory rover was how to enable them to drive themselves safely through unknown Martian terrain. When the MER mission was approved in the year 2000, JPL researchers had already demonstrated that capability on prototype rovers [1] using software written primarily in C++ on a VxWorks realtime O/S platform with shared memory. So when asked to incorporate that capability into the MER vehicles which also relied on a similar VxWorks realtime O/S, the team concluded it would be safest and most expedient to incorporate the already field-tested C++ software. But that presented a challenge, since at that point all rover FSW development was mandated to be done mainly in the C programming language.\n\nIn this talk we present some of the challenges we faced and solutions we found in deploying C++ onto the Mars Rovers. For example, dynamic allocation was initially precluded, but development of a specialized memory allocator (using the C++ "placement new" operator) enabled us to incorporate it safely into the flight system. We will discuss what aspects of C++ were incorporated, what simulation environments aided development, describe some of the tools used to validate system behavior, and explain how our success using C++ for the implementation of autonomous navigation on MER has influenced future FSW efforts.\n\n[1] Jeffrey Biesiadecki, Mark W. Maimone, and Jack Morrison., "The Athena SDM Rover: A Testbed for Mars Rover Mobility," June 2001 iSAIRAS conference proceedings, Montreal, Canada., june 2001.\n--\nMark Maimone is a Navigation and Machine Vision researcher at JPL.Mark designed and developed the autonomous vision and navigation software that lets the MER and MSL Mars Rovers drive themselves safely, and wrote ground software that automated the analysis of Mobility and arm operations on MER.Mark is now a Rover Driver for Curiosity, and he continues to develop and enhance the onboard autonomous vision and navigation software for the rovers.Mark earned his Ph.D. in Computer Science at Carnegie Mellon University in 1996, and completed a postdoc there in 1997 as Navigation and Software Lead for the 1997 Atacama Desert Trek.At JPL since 1997, Mark has also worked on the Long Range Science Rover, Planetary Dexterous Manipulator, and Pioneer Vision System for Chornobyl Inspection projects, delivering 3D vision systems for autonomous robotic operations and mapping.Website: http://www-robotics.jpl.nasa.gov/people/Mark_Maimone/\n--\nVideos Filmed & Edited by Bash Films: http://www.BashFilms.com',meta:{duration:"PT1H26M19S"},presenter:{name:null},slug:"cppcon-2014-mark-maimone-c-on-mars-incorporating-c-into-mars-rover-flight-software",source:{id:"3SdSKZFoUa8",provider:"youtube"},tag:["C++ on Mars: Incorporating C++ into Mars Rover Flight Software","Mark Maimone","CppCon 2014","Bash Films"],title:'CppCon 2014: Mark Maimone "C++ on Mars: Incorporating C++ into Mars Rover Flight Software"'},allTalkJson:{edges:[{node:{description:'http://www.cppcon.org\n—\nPresentation Slides, PDFs, Source Code and other presenter materials are available at: https://github.com/CppCon/CppCon2014\n--\nThere are numerous, serious OOP design problems that we have all encountered in production code. These include, among others: - object lifetime/ownership - how to make classes from different class hierarchies conform to a common interface - writing classes that can present multiple interfaces - separating interface and implementation - how to write virtual functions so that subclasses override them properly - the virtual inheritance "diamond of death"\n\nProper use of type erasure can mitigate, or outright eliminate, these and other problems, without sacrificing performance.\n\nThis talk will cover the OOP design problems above and more, and will cover hand-rolled and library-based type erasure approaches that solve those problems. Performance metrics will be provided for the different approaches, and source code will be available after the talk.\n--\nZach Laine has been using C++ in industry for 11 years, focusing on data visualization, numeric computing, games, generic programming, and good library design. He finds the process of writing bio blurbs to be a little uncomfortable.\n--\nVideos Filmed & Edited by Bash Films: http://www.BashFilms.com',meta:{duration:"PT43M47S"},presenter:{name:"Zach Laine"},source:{id:"0I0FD3N5cgM",provider:"youtube"},slug:"pragmatic-type-erasure-solving-oop-problems-with-elegant-design-pattern",tag:["CppCon 2014"],thumbnails:{default:{url:"https://i.ytimg.com/vi/0I0FD3N5cgM/default.jpg",height:90,width:120}},title:"Pragmatic Type Erasure: Solving OOP Problems Elegant Design Pattern"}},{node:{description:'http://www.cppcon.org\n—\nPresentation Slides, PDFs, Source Code and other presenter materials are available at: https://github.com/CppCon/CppCon2014\n--\nAsk a non-C++ developer what they think of C++ and they\'ll give the language plenty of compliments: powerful, fast, flexible, and "the language for smart people". But along with that you are likely to hear ugly, complicated, hard to read, and "the language for smart people". Is it possible to write beautiful C++? Not arcanely elegant or wickedly compact, but readable, clear, expressive - beautiful! We say it is, and we want to show you how.\n\nIn this session, you\'ll see how to turn pages of "comic book characters swearing" into code you\'ll be proud to call your own. By making your code express your intent, using the power of new language and library functionality, and leaving hard-to-read constructs out of your vocabulary, you can give your code a makeover that will stand the test of time.\n--\nJames McNellis is a senior engineer on the Microsoft Visual C++ team, where he is responsible for the Visual C++ C Runtime (CRT) and C Standard Library implementation. He was previously a member of the Microsoft Expression Blend team, developing the XAML designer tools for Windows 8 apps. Prior to joining Microsoft in 2010, he spent several years working on real-time 3-D simulation and robotics projects in the defense industry. James is a prolific contributor on the Stack Overflow programming Q&A website and occasionally writes for the Visual C++ Team Blog. He tweets at @JamesMcNellis and can be found elsewhere online via http://www.jamesmcnellis.com.\n--\nKate Gregory has been using C++ since before Microsoft had a C++ compiler. She writes, mentors, codes, and leads projects, in both C++ and .NET, especially for Windows 7 and 8. Kate is a Microsoft Regional Director, a Visual C++ MVP, and has written over a dozen books (the most recent on C++ AMP for Microsoft Press) and speaks at conferences and user groups around the world. Kate develops courses on C++, Visual Studio, and Windows programming for Pluralsight, founded the East of Toronto .NET Users group, and is a member of adjunct faculty at Trent University in Peterborough.Website: http://www.gregcons.comTwitter handle: @gregcons\n--\nVideos Filmed & Edited by Bash Films: http://www.BashFilms.com',meta:{duration:"PT56M23S"},presenter:{name:null},source:{id:"BiYliKliFvs",provider:"youtube"},slug:"cppcon-2014-james-mcnellis-and-kate-gregory-making-c-code-beautiful",tag:["CppCon 2014","James McNellis","Kate Gregory","Making C++ Code Beautiful","Bash Films"],thumbnails:{default:{url:"https://i.ytimg.com/vi/BiYliKliFvs/default.jpg",height:90,width:120}},title:'CppCon 2014: James McNellis & Kate Gregory "Making C++ Code Beautiful"'}},{node:{description:'http://www.cppcon.org\n—\nPresentation Slides, PDFs, Source Code and other presenter materials are available at: https://github.com/CppCon/CppCon2014\n--\nExample-driven talk on how to design and write lock-free algorithms and data structures using C++ atomic -- something that can look deceptively simple, but contains very deep topics. (Important note: This is not the same as my "atomic Weapons" talk; that talk was about the "what they are and why" of the C++ memory model and atomics, and did not cover how to actually use atomics to implement highly concurrent algorithms and data structures.)\n--\nHerb Sutter: Author, chair of the ISO C++ committee, software architect at Microsoft.\n--\nVideos Filmed & Edited by Bash Films: http://www.BashFilms.com',meta:{duration:"PT1H11M20S"},presenter:{name:null},source:{id:"CmxkPChOcvw",provider:"youtube"},slug:"cppcon-2014-herb-sutter-lock-free-programming-or-juggling-razor-blades-part-ii",tag:["CppCon 2014","Herb Sutter","Juggling Razor Blades)","Bash Films"],thumbnails:{default:{url:"https://i.ytimg.com/vi/CmxkPChOcvw/default.jpg",height:90,width:120}},title:'CppCon 2014: Herb Sutter "Lock-Free Programming (or, Juggling Razor Blades), Part II"'}},{node:{description:"http://www.cppcon.org\n—\nPresentation Slides, PDFs, Source Code and other presenter materials are available at: https://github.com/CppCon/CppCon2014\n--\nReasonably-written C++ code will be naturally fast. This is to C++'s excellent low-penalty abstractions and a memory model close to the machine.\n\nHowever, a large category of applications have no boundaries on desired speed, meaning there's no point of diminishing returns in making code faster. Better speed means less power consumed for the same work, more workload with the same data center expense, better features for the end user, more features for machine learning, better analytics, and more.\n\nOptimizing has always been an art, and in particular optimizing C++ on contemporary hardware has become a task of formidable complexity. This is because modern hardware has a few peculiarities about it that are not sufficiently understood and explored. This talk discusses a few such effects, and guides the attendee on how to navigate design and implementation options in search for better performance.\n--\nAndrei Alexandrescu is a researcher, software engineer, and author. He wrote three best-selling books on programming (Modern C++ Design, C++ Coding Standards, and The D Programming Language) and numerous articles and papers on wide-ranging topics from programming to language design to Machine Learning to Natural Language Processing. Andrei holds a PhD in Computer Science from the University of Washington and a BSc in Electrical Engineering from University \"Politehnica\" Bucharest. He works as a Research Scientist for Facebook.\n\nWebsite: http://erdani.com\nTwitter handle: @incomputable\n--\nVideos Filmed & Edited by Bash Films: http://www.BashFilms.com",meta:{duration:"PT58M19S"},presenter:{name:null},source:{id:"Qq_WaiwzOtI",provider:"youtube"},slug:"cppcon-2014-andrei-alexandrescu-optimization-tips-mo-hustle-mo-problems",tag:["CppCon 2014","Andrei Alexandrescu","Optimization Tips","Mo' Hustle Mo' Problems","Bash Films"],thumbnails:{default:{url:"https://i.ytimg.com/vi/Qq_WaiwzOtI/default.jpg",height:90,width:120}},title:"CppCon 2014: Andrei Alexandrescu \"Optimization Tips - Mo' Hustle Mo' Problems\""}},{node:{description:'http://www.cppcon.org\n—\nPresentation Slides, PDFs, Source Code and other presenter materials are available at: https://github.com/CppCon/CppCon2014\n--\nExample-driven talk on how to design and write lock-free algorithms and data structures using C++ atomic -- something that can look deceptively simple, but contains very deep topics. (Important note: This is not the same as my "atomic Weapons" talk; that talk was about the "what they are and why" of the C++ memory model and atomics, and did not cover how to actually use atomics to implement highly concurrent algorithms and data structures.)\n--\nHerb Sutter: Author, chair of the ISO C++ committee, software architect at Microsoft.\n--\nVideos Filmed & Edited by Bash Films: http://www.BashFilms.com',meta:{duration:"PT1H24S"},presenter:{name:null},source:{id:"c1gO9aB9nbs",provider:"youtube"},slug:"cppcon-2014-herb-sutter-lock-free-programming-or-juggling-razor-blades-part-i",tag:["CppCon 2014","Herb Sutter","Lock-Free Programming (or","Juggling Razor Blades)","Part I","Bash Films"],thumbnails:{default:{url:"https://i.ytimg.com/vi/c1gO9aB9nbs/default.jpg",height:90,width:120}},title:'CppCon 2014: Herb Sutter "Lock-Free Programming (or, Juggling Razor Blades), Part I"'}},{node:{description:"http://www.cppcon.org\n—\nPresentation Slides, PDFs, Source Code and other presenter materials are available at: https://github.com/CppCon/CppCon2014\n--\nWhy do you write C++ code? There is a good chance it is in part because of concerns about the performance of your software. Whether they stem from needing to run on every smaller mobile devices, squeezing the last few effects into video game, or because every watt of power in your data center costs too much, C++ programmers throughout the industry have an insatiable desire for writing high performance code.\n\nUnfortunately, even with C++, this can be really challenging. Over the past twenty years processors, memory, software libraries, and even compilers have radically changed what makes C++ code fast. Even measuring the performance of your code can be a daunting task. This talk will dig into how modern processors work, what makes them fast, and how to exploit them effectively with modern C++ code. It will teach you how modern C++ optimizers see your code today, and how that is likely to change in the coming years. It will teach you how to reason better about the performance of your code, and how to write your code so that it performs better. You will even learn some tricks about how to measure the performance of your code.\n--\nChandler Carruth leads the Clang team at Google, building better diagnostics, tools, and more. Previously, he worked on several pieces of Google’s distributed build system. He makes guest appearances helping to maintain a few core C++ libraries across Google’s codebase, and is active in the LLVM and Clang open source communities. He received his M.S. and B.S. in Computer Science from Wake Forest University, but disavows all knowledge of the contents of his Master’s thesis. He is regularly found drinking Cherry Coke Zero in the daytime and pontificating over a single malt scotch in the evening.\n--\nVideos Filmed & Edited by Bash Films: http://www.BashFilms.com",meta:{duration:"PT1H13M41S"},presenter:{name:null},source:{id:"fHNmRkzxHWs",provider:"youtube"},slug:"cppcon-2014-chandler-carruth-efficiency-with-algorithms-performance-with-data-structures",tag:["CppCon 2014","Chandler Carruth","Efficiency with Algorithms","Performance with Data Structures","Bash Films"],thumbnails:{default:{url:"https://i.ytimg.com/vi/fHNmRkzxHWs/default.jpg",height:90,width:120}},title:'CppCon 2014: Chandler Carruth "Efficiency with Algorithms, Performance with Data Structures"'}},{node:{description:"http://www.Cppcon.org\n—\nA primary use case for C++ is low latency, low overhead, high performance code. But C++ does not give you these things for free, it gives you the tools to control these things and achieve them where needed. How do you realize this potential of the language? How do you tune your C++ code and achieve the necessary performance metrics?\n\nThis talk will walk through the process of tuning C++ code from benchmarking to performance analysis. It will focus on small scale performance problems ranging from loop kernels to data structures and algorithms. It will show you how to write benchmarks that effectively measure different aspects of performance even in the face of advanced compiler optimizations and bedeviling modern CPUs. It will also show how to analyze the performance of your benchmark, understand its behavior as well as the CPUs behavior, and use a wide array of tools available to isolate and pinpoint performance problems. The tools and some processor details will be Linux and x86 specific, but the techniques and concepts should be broadly applicable.\n--\nChandler Carruth leads the Clang team at Google, building better diagnostics, tools, and more. Previously, he worked on several pieces of Google’s distributed build system. He makes guest appearances helping to maintain a few core C++ libraries across Google’s codebase, and is active in the LLVM and Clang open source communities. He received his M.S. and B.S. in Computer Science from Wake Forest University, but disavows all knowledge of the contents of his Master’s thesis. He is regularly found drinking Cherry Coke Zero in the daytime and pontificating over a single malt scotch in the evening.\n--\nVideos Filmed & Edited by Bash Films: http://www.BashFilms.com",meta:{duration:"PT1H29M54S"},presenter:{name:null},source:{id:"nXaxk27zwlk",provider:"youtube"},slug:"cppcon-2015-chandler-carruth-tuning-c-benchmarks-and-cpus-and-compilers-oh-my",tag:["CppCon 2015","Computer Science (Field)","Bash Films","Conference Video Recording","Event Video Recording","Video Conferencing","Video Services","Chandler Carruth"],thumbnails:{default:{url:"https://i.ytimg.com/vi/nXaxk27zwlk/default.jpg",height:90,width:120}},title:'CppCon 2015: Chandler Carruth "Tuning C++: Benchmarks, and CPUs, and Compilers! Oh My!"'}},{node:{description:"http://www.cppcon.org\n--\nThe standard library containers are often both misused and underused. Instead of creating new containers, applications are often structured with incidental data structures composed of objects referencing other object. This talk looks at some of the ways the standard containers can be better utilized and how creating (or using non-standard library) containers can greatly simplify code. The goal is no incidental data structures. \n--\nSean Parent is a principal scientist and software architect for Adobe’s mobile digital imaging group. Sean has been at Adobe since 1993 when he joined as a senior engineer working on Photoshop and later managed Adobe’s Software Technology Lab. In 2009 Sean spent a year at Google working on Chrome OS before returning to Adobe. From 1988 through 1993 Sean worked at Apple, where he was part of the system software team that developed the technologies allowing Apple’s successful transition to PowerPC.\n--\nVideos Filmed & Edited by Bash Films: http://www.BashFilms.com",meta:{duration:"PT1H4M"},presenter:{name:null},source:{id:"sWgDk-o-6ZE",provider:"youtube"},slug:"cppcon-2015-sean-parent-better-code-data-structures",tag:["CppCon 2015","Sean Parent","C++","Computer Programming (Conference Subject)","Data Structure (Literature Subject)","Bash Films","Conference Video","Video Services"],thumbnails:{default:{url:"https://i.ytimg.com/vi/sWgDk-o-6ZE/default.jpg",height:90,width:120}},title:'CppCon 2015: Sean Parent "Better Code: Data Structures"'}},{node:{description:'http://www.cppcon.org\n—\nPresentation Slides, PDFs, Source Code and other presenter materials are available at: https://github.com/CppCon/CppCon2014\n--\nC++98 had template type deduction, and it worked so intuitively, there was little need to understand what took place under the covers. C++11 extends type deduction to include universal references, applies it to auto variables and lambda expressions, then throws in a special auto-only deduction rule. C++14 pushes the boundary further, adding two forms of function return type deduction (auto and decltype(auto)) for arbitrary functions and offering auto parameters for lambdas. The result is that what could be treated as a black box in C++98 has become a topic that practicing C++ developers really need to understand. This talk will give you the information you need to do that.\n--\nScott Meyers has been working with C++ since 1988. He recently finished his new book, "Effective Modern C++".\n--\nVideos Filmed & Edited by Bash Films: http://www.BashFilms.com',meta:{duration:"PT1H9M34S"},presenter:{name:null},source:{id:"wQxj20X-tIU",provider:"youtube"},slug:"cppcon-2014-scott-meyers-type-deduction-and-why-you-care",tag:["C (Programming Language)","Bash Films"],thumbnails:{default:{url:"https://i.ytimg.com/vi/wQxj20X-tIU/default.jpg",height:90,width:120}},title:'CppCon 2014: Scott Meyers "Type Deduction and Why You Care"'}},{node:{description:"http://www.cppcon.org\n--\nPresentation Slides, PDFs, Source Code and other presenter materials are available at: https://github.com/CppCon/CppCon2014\n--\nThis talk revisits basic questions, such as how to declare and initialize a variable, how to pass a value to a function, how to write a simple loop, and how to use smart pointers, in the light of experience with C++11 and the latest C++14 refinements. This involves examining auto, rvalue references, range-for loops, uniform initialization, lambda expressions, unique_ptr and shared_ptr, and more.\n--\nHerb Sutter - Author, chair of the ISO C++ committee, software architect at Microsoft.\n--\nVideos Filmed & Edited by Bash Films: http://www.BashFilms.com",meta:{duration:"PT1H40M27S"},presenter:{name:null},source:{id:"xnqTKD8uD64",provider:"youtube"},slug:"cppcon-2014-herb-sutter-back-to-the-basics-essentials-of-modern-c-style",tag:["Herb Sutter","CppCon 2014","Back to the Basics! Essentials of Modern C++ Style","Bash Films"],thumbnails:{default:{url:"https://i.ytimg.com/vi/xnqTKD8uD64/default.jpg",height:90,width:120}},title:'CppCon 2014: Herb Sutter "Back to the Basics! Essentials of Modern C++ Style"'}}]}},pathContext:{slug:"cppcon-2014-mark-maimone-c-on-mars-incorporating-c-into-mars-rover-flight-software",tags:["C++ on Mars: Incorporating C++ into Mars Rover Flight Software","Mark Maimone","CppCon 2014","Bash Films"]}}}});
//# sourceMappingURL=path---talk-cppcon-2014-mark-maimone-c-on-mars-incorporating-c-into-mars-rover-flight-software-a806724ca7fc00041485.js.map