function page1(){
    function split() {
        var clutter;
        document.querySelectorAll(".split").forEach(function(splittext){
            clutter = "";
            splittext.textContent.split("").forEach(function(char){
                clutter += `<span>${char}</span>`;
            })
            splittext.innerHTML = clutter;
    })
    }
    split();
    
    gsap.from("#page1 #overlay h1 span",{
        y:200,
        // duration:2,
        stagger:.05,
        opacity:0,
        delay:1
    })
}
page1();


function page2(){
    gsap.to("#main #container #page2 #right",{
        scrollTrigger:{
            trigger:"#main #container #page2 #right",
            start:"top top",
            scrub:true,
            // markers:true
        },
        width:"100%",
        duration:10
    })
    
    gsap.from("#main #container #page2 #right #overlay span",{
        scrollTrigger:{
            trigger:"#main #container #page2 #right #overlay span",
            start:"bottom -102%",
            end:"bottom -120%",
            scrub:true,
            // markers:true
        },
        y:100,
        duration:2
    })
    
    ScrollTrigger.create({
        trigger: "#page2",
        start: "top top",
        end:"bottom -115%",
        // end:"bottom -100%",
        pin: true,
        // markers:true
    })
}
page2();





function page4(){
    // console.clear();
/* The encoding is super important here to enable frame-by-frame scrubbing. */

// ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4
// ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output_960.mp4

const video1 = document.querySelector(".video-background");
let src = video1.currentSrc || video1.src;
console.log(video1, src);

/* Make sure the video1 is 'activated' on iOS */
function once(el, event, fn, opts) {
  var onceFn = function (e) {
    el.removeEventListener(event, onceFn);
    fn.apply(this, arguments);
  };
  el.addEventListener(event, onceFn, opts);
  return onceFn;
}

once(document.documentElement, "touchstart", function (e) {
  video1.play();
  video1.pause();
});

/* ---------------------------------- */
/* Scroll Control! */

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  defaults: { duration: 1 },
  scrollTrigger: {
    trigger: "#container",
    start: "bottom -350%",
    end: "bottom -500%",
    scrub: true,
    // markers:true
  }
});


once(video1, "loadedmetadata", () => {
  tl.fromTo(
    video1,
    {
      currentTime: 0
    },
    {
      currentTime: video1.duration || 1
    }
  );
});

/* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
setTimeout(function () {
  if (window["fetch"]) {
    fetch(src)
      .then((response) => response.blob())
      .then((response) => {
        var blobURL = URL.createObjectURL(response);

        var t = video1.currentTime;
        once(document.documentElement, "touchstart", function (e) {
          video1.play();
          video1.pause();
        });

        video1.setAttribute("src", blobURL);
        video1.currentTime = t + 0.01;
      });
  }
}, 1000);

/* ---------------------------------- */

    gsap.to("#page4 video",{
        scrollTrigger:{
            trigger:"#page4 video",
            start: "bottom -540%",
            end: "bottom -600%",
            scrub:true,
            // markers:true
        },
        opacity:0
    })
}
page4();



function page6(){
    // console.clear();
/* The encoding is super important here to enable frame-by-frame scrubbing. */

// ffmpeg -i ~/Downloads/Toshiba\ video2/original.mov -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4
// ffmpeg -i ~/Downloads/Toshiba\ video2/original.mov -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output_960.mp4

const video2 = document.querySelector(".video-background-2");
let src = video2.currentSrc || video2.src;
console.log(video2, src);

/* Make sure the video2 is 'activated' on iOS */
function once(el, event, fn, opts) {
  var onceFn = function (e) {
    el.removeEventListener(event, onceFn);
    fn.apply(this, arguments);
  };
  el.addEventListener(event, onceFn, opts);
  return onceFn;
}

once(document.documentElement, "touchstart", function (e) {
  video2.play();
  video2.pause();
});

/* ---------------------------------- */
/* Scroll Control! */

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  defaults: { duration: 1 },
  scrollTrigger: {
    trigger: "#container-2",
    start: "50% bottom",
    end: "bottom -100%",
    scrub: true,
    // markers:true
  }
});

ScrollTrigger.create({
    trigger: "#page6",
    start: "top top",
    end:"bottom -97%",
    // end:"bottom -100%",
    pin: true,
    // markers:true
})


once(video2, "loadedmetadata", () => {
  tl.fromTo(
    video2,
    {
      currentTime: 0
    },
    {
      currentTime: video2.duration || 1
    }
  );
});

/* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
setTimeout(function () {
  if (window["fetch"]) {
    fetch(src)
      .then((response) => response.blob())
      .then((response) => {
        var blobURL = URL.createObjectURL(response);

        var t = video2.currentTime;
        once(document.documentElement, "touchstart", function (e) {
          video2.play();
          video2.pause();
        });

        video2.setAttribute("src", blobURL);
        video2.currentTime = t + 0.01;
      });
  }
}, 1000);

/* ---------------------------------- */

    // gsap.to("#page6 video",{
    //     scrollTrigger:{
    //         trigger:"#page6 video",
    //         start: "bottom -540%",
    //         end: "bottom -600%",
    //         scrub:true,
    //         // markers:true
    //     },
    //     opacity:0
    // })
}
page6();




// Loader

function loader(){
    document.addEventListener("readystatechange",function(){
        if(document.readyState==="complete"){
            document.querySelector("#loader").style.backgroundColor= "transparent";
            document.querySelector("#loader").style.height=0;
            document.querySelector("#loader .loader").style.scale=0;
        }
    })
}
loader();


