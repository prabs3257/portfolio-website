gsap.registerPlugin(ScrollTrigger)


gsap.defaults({ease:"none"})

const roomImage = document.querySelector(".starting-section-room")
const idCardImg = document.querySelector(".id-card-1")
const idCardLink = document.querySelector(".id-card-link")
const subtitle = document.querySelector(".subtitle-1")

let sections = gsap.utils.toArray(".skills-panel");
let projectsSections = gsap.utils.toArray(".projects-panel");

const tl = gsap.timeline()
// tl.to(".starting-section-room", {duration:20, opacity:"1"});

tl.to(".subtitle-1",  {duration:10,text:"Hi, I am Prabhav Chopra"}, "+=5");
// tl.to(".starting-section-room", {duration:20, scale:"0.3", opacity:"0"}, "+=10");
// tl.set(roomImage,  { attr: { src: "/images/home.png" } });
// tl.to(".starting-section-room", {duration:20, scale:"1", opacity:"1"},"+=5");
tl.to(".subtitle-1",  {duration:10,text:""},"+=5");
tl.to(".subtitle-1",  {duration:10,text:"I am a Full-Stack Web developer and a Mobile Developer"});
tl.to(".subtitle-1",  {duration:10,text:""},"+=5");
tl.to(".subtitle-1",  {duration:10,text:"I am Proficient in Skills like :"});

// tl.set(roomImage,  { attr: { src: "/images/home.png" } });

// tl.to(".starting-section-room", {duration:5, x:"200vw"});



  

ScrollTrigger.create({
    animation:tl,
    trigger:".starting-section",
    start:"top top",
    end: "+=" + (window.innerHeight * 4),
    scrub:3,
    pin:true,
    anticipatePin:1,
    
    
})


tl.to(sections, {
    xPercent: -100 * (sections.length),
    ease: "none",
    scrollTrigger: {
      trigger: ".skills-container",
      pin: true,
      scrub: 2,
    //   snap: 1 / (sections.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: "+=3500"
    }
  });

  



  


  let workTl = gsap.timeline()
  workTl.to(".subtitle-2",  {duration:10,text:"I also have working experience in companies like"});
  
  workTl.from(".id-card-1", {duration:5, x:"1000px", opacity:0},"+=5")

  workTl.to(".subtitle-2",  {duration:10,text:""},);
  workTl.to(".subtitle-2",  {duration:10,text:"PersonaX development Inc. as a Lead Flutter Developer"});
  workTl.to(".subtitle-2",  {duration:10,text:""},"+=5");
  workTl.to(".id-card-1", {duration:5, x:"1000px", opacity:0})
  workTl.set(idCardImg, { attr: { src: "/images/id-card-1.png" } })
  workTl.set(idCardLink, { attr: { href: "https://www.geeksforgeeks.org/responsive-images-in-bootstrap-with-examples/" } })
  workTl.to(".id-card-1", {duration:5, x:"0px", opacity:1},"+=5")
  workTl.to(".subtitle-2",  {duration:10,text:"and TravelAsha Inc. as a Lead Android Developer"});
  workTl.to(".subtitle-2",  {duration:10,text:""},"+=5");
  workTl.to(".subtitle-2",  {duration:10,text:"and I also have developed a few projects like"});

  tl.add(workTl)

  ScrollTrigger.create({
    animation:workTl,
    trigger:".work-container",
    start:"top top",
    end: "+=" + (window.innerHeight * 2),
    scrub:3,
    pin:true,
    
    anticipatePin:1,
    
    
})


// let projectsTl = gsap.timeline()
//     projectsTl.to(".subtitle-3",  {duration:10,text:"I have developed a few projects like"});
  
  
    


//   ScrollTrigger.create({
//     animation:projectsTl,
//     trigger:".projects-container",
//     start:"top top",
//     end: "+=" + (window.innerHeight * 2),
//     scrub:3,
//     pin:true,
    
//     anticipatePin:1,
    
    
// })



//   tl.add(projectsTl)

  tl.to(projectsSections, {
    xPercent: -100 * (projectsSections.length),
    ease: "none",
    scrollTrigger: {
      trigger: ".projects-container",
      pin: true,
      scrub: 2,
    //   snap: 1 / (sections.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: "+=3500"
    }
  });