webpackJsonp([0xfaaab0b74c73],{2998:function(e,t){e.exports={data:{talkJson:{description:"In this talk, we will present our OpenCL SDK and its core technology -- the vectorizer compiler. We plan to present an overview of our vectorizer and discuss our experience with the LLVM compiler toolkit over the last few years. We will discuss some of our design decisions and our and plans for future features (future instruction sets, vector select, predicated instructions, etc).",meta:{duration:"PT35M45S"},presenter:{name:null},slug:"intel-opencl-sdk-vectorizer",source:{id:"QsoLyvvhRuc",provider:"youtube"},tag:["LLVM","OpenCL","Software Development Kit","Intel"],title:"Intel OpenCL SDK Vectorizer"},allTalkJson:{edges:[{node:{description:"Compilers are caught in a tug-of-war between increasingly exotic architectures and instruction set extensions on one hand, and our desire for advanced programming languages and PL features on the other. A multi-language, multi-target compiler infrastructure such as LLVM ameliorates the situation somewhat, but engineering fast, effective and correct optimizations for LLVM is challenging. Even after a decade of intense development, there is a long tail of unimplemented optimizations.\n\nUniversity of Utah Associate Professor John Regehr presents Souper, a superoptimizer that gives us a look at some of the optimizations that are missing from LLVM while also avoiding the bugs that are often found in hand-written optimization passes. Souper works by turning LLVM code into queries for an automated theorem prover. When Souper is run on LLVM itself, it identifies thousands of uncaught optimizations and also ranks them according to the likely improvement in code size or code speed that would result from implementing each one.\n\nJohn Regehr, Associate Professor, School of Computing, University of Utah\n\n12/2/2014\n\nhttps://www.cs.washington.edu/htbin-post/mvis/mvis?ID=2643\n\nhttp://uwtv.org",meta:{duration:"PT49M7S"},presenter:{name:null},source:{id:"Ux0YnVEaI6A",provider:"youtube"},slug:"superoptimizing-llvm",tag:["UW","University of Washington","Engineering and Computer Science","optimization","superoptimizer","LLVM","Souper"],thumbnails:{default:{url:"https://i.ytimg.com/vi/Ux0YnVEaI6A/default.jpg",height:90,width:120}},title:"Superoptimizing LLVM"}},{node:{description:"In this talk, the PTX back-end for LLVM will be discussed, including its' past, present, and future. The current status of the back-end will be explored, with an emphasis on the portions of the LLVM IR instruction set and PTX intrinsics that are currently supported during code generation. This talk will also highlight the difficulties and issues that have been discovered while writing an LLVM back-end for a virtual ISA such as PTX, such as infinite register files. Through-out the talk, examples will be provided to highlight key features of the back-end and show preliminary performance data. \nIn addition to back-end details, this talk will also highlight the use of Clang as a front-end for generating PTX code for NVIDIA GPUs. Through the use of Clang and the CUDA Driver API, GPGPU programs can be developed that harness the optimization power of the LLVM compiler infrastructure. Finally, the talk will conclude with an exploration of the open issues that remain in the backend, and a discussion on how the back-end can be used within larger GPGPU compiler projects.",meta:{duration:"PT39M34S"},presenter:{name:null},source:{id:"Ux3F5MKuPjI",provider:"youtube"},slug:"ptx-back-end-gpu-programming-with-llvm",tag:["LLVM","PTX"],thumbnails:{default:{url:"https://i.ytimg.com/vi/Ux3F5MKuPjI/default.jpg",height:90,width:120}},title:"PTX Back-End: GPU Programming With LLVM"}}]}},pathContext:{slug:"intel-opencl-sdk-vectorizer",tags:["LLVM","OpenCL","Software Development Kit","Intel"]}}}});
//# sourceMappingURL=path---talk-intel-opencl-sdk-vectorizer-cfd47cad6e2dc3cc85c0.js.map