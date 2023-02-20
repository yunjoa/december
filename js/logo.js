let logoTl = gsap.timeline({
  scrollTrigger: {
    trigger: document.body,
    start: 0,
    end: () => window.innerHeight * 0.3,
    scrub: 0.6,
  },
});

logoTl.fromTo(
  ".logo",
  {
    top: "50vh",
    left: "50vw",
    xPercent: -50,
    yPercent: -50,
    scale: 1.8,
  },
  {
    top: "16px",
    left: "30px",
    xPercent: 0,
    yPercent: 0,
    scale: 1,
    duration: 0.8,
  }
);

gsap.registerPlugin(ScrollTrigger);
