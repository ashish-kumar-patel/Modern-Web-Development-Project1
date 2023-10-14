const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstpageanimate(){
  let tl=gsap.timeline();
  gsap.from(".nav",{
     y:-50,
     duration:1.3,
     opacity:0,
    //  ease:Expo.easeInOut
  })
  tl.to(".boundingelement",{
     y:0,
     duration:1,
     stagger:0.3
  })
  tl.from(".toranto",{
    y:-10,
    duration:1.2,
    opacity:0,
 })
 tl.from(".side-content",{
  y:-10,
  opacity:0,
})
 tl.from(".homefooter",{
  y:50,
  opacity:0,
})
}
function moverscroll(){
    window.addEventListener('mousemove',function(detail){
      // console.log(detail.clientX,detail.clientY);
    document.querySelector('#minicircle').style.transform=`translate(${detail.clientX}px,${detail.clientY}px)`; 
    })
}


moverscroll();
firstpageanimate();

document.querySelectorAll(".element")
.forEach(function(element){
 let rotate=0;
 let diffrotatr=0;

  element.addEventListener("mousemove",function(details){
   let diff= details.clientY- element.getBoundingClientRect().top;  
  diffrotatr=details.clientX-rotate;
  rotate=details.clientX;
   gsap.to(element.querySelector("img"),{
   opacity:1,
   ease:Power1,
   top:diff,
   left:details.clientX,
   rotate:gsap.utils.clamp(-20,20,diffrotatr*0.2)
   })
  });

  element.addEventListener("mouseleave",function(details){
    gsap.to(element.querySelector("img"),{
    opacity:0,
    duration:0.5
    })
   });
  
});





