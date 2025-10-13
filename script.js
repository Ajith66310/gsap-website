    const openSidebar = document.getElementById('openSidebar');
    const closeSidebar = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    openSidebar.addEventListener('click', () => {
      sidebar.classList.remove('-translate-x-full');
      overlay.classList.remove('opacity-0', 'pointer-events-none');
    });

    const closeMenu = () => {
      sidebar.classList.add('-translate-x-full');
      overlay.classList.add('opacity-0', 'pointer-events-none');
    };

    closeSidebar.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);


    // gsap
   const page1Animation = ()=>{
     var tl = gsap.timeline()

    tl.from("nav h1,nav h4,nav button",{
      y:-40,
      opacity:0,
      delay:0.7,  
      stagger:0.15,
    })
    
    tl.from(".center-part1 h1",{
      x:-200,
      opacity:0,
      duration:0.5
    })
    tl.from(".center-part1 p",{
      x:-100,
      opacity:0,
      duration:0.4
    })
    
    tl.from(".center-part1 button",{
      opacity:0,
      duration:0.4
    })
    
    tl.from(".center-part2 img",{
      opacity:0,
      x:200,
      duration:0.4
    },"-=1")
    

   }

   page1Animation()

const page2Animation = ()=>{

  var tl2 = gsap.timeline({
    scrollTrigger:{
      trigger:".section2 ",
      scroller:"body",
      scrub:2,
      start:"top 50%",
      end:"top 0"
    }
   })
   
   tl2.from(".brands img",{
      opacity:0,
      y:30,
      stagger:0.15,
      duration:0.7,
    })
    tl2.from(".services",{
    x:-100,
    opacity:0,
    duration:0.5,
  })
  
  tl2.from(".line1#left",{
    x:-300,
    opacity:0,
    duration:1,
    delay:1,
  },"anim1")
  
  tl2.from(".line1#right",{
    x:300,
    opacity:0,
    duration:1,
  },"anim1")
  
  tl2.from(".line2#left",{
    x:-300,
    delay:1,
    opacity:0,
    duration:1,
  },"anim2")
  
  tl2.from(".line2#right",{
    x:300,
    opacity:0,
    duration:1,
  },"anim2")
  
}

page2Animation()