// Sidebar Toggle
const openSidebar = document.getElementById("openSidebar");
const closeSidebar = document.getElementById("closeSidebar");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

if (openSidebar && closeSidebar && sidebar && overlay) {
  openSidebar.addEventListener("click", () => {
    sidebar.classList.remove("-translate-x-full");
    overlay.classList.remove("opacity-0", "pointer-events-none");
  });

  const closeMenu = () => {
    sidebar.classList.add("-translate-x-full");
    overlay.classList.add("opacity-0", "pointer-events-none");
  };

  closeSidebar.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);
}

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Page 1 Animation (Hero Section)
const page1Animation = () => {
  const tl = gsap.timeline({
    defaults: { ease: "power2.out", duration: 0.6 },
  });

  tl.from("nav h1, nav h4, nav button", {
    y: -40,
    opacity: 0,
    delay: 0.5,
    stagger: 0.15,
  })
    .from(".center-part1 h1", { x: -150, opacity: 0 })
    .from(".center-part1 p", { x: -100, opacity: 0 })
    .from(".center-part1 button", { opacity: 0, scale: 0.9 })
    .from(".center-part2 img", { opacity: 0, x: 200 }, "-=0.8");
};

// Page 2 Animation (Scroll Section)
const page2Animation = () => {
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      start: "top 50%",
      end: "bottom 20%",
      // markers: true, // Uncomment for debugging
    },
    defaults: { ease: "power2.out", duration: 0.8 },
  });

  tl2.from(".brands img", {
    opacity: 0,
    y: 40,
    stagger: 0.15,
  })
    .from(".services", { x: -80, opacity: 0 }, "-=0.4")
    .from(".line1#left", { x: -200, opacity: 0 }, "anim1")
    .from(".line1#right", { x: 200, opacity: 0 }, "anim1")
    .from(".line2#left", { x: -200, opacity: 0 }, "anim2")
    .from(".line2#right", { x: 200, opacity: 0 }, "anim2");
};

// Initialize Animations
page1Animation();
page2Animation();
