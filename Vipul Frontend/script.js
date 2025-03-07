const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMousefollower() {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    });
}
circleMousefollower();

// Nav Animation (Ease In Out)
gsap.from("#nav", { y: -100, opacity: 0, duration: 1, ease: "power2.inOut" });

gsap.from("#nav a", { y: 50, opacity: 0, duration: 1, delay: 0.2, ease: "power3.out" });
gsap.from("#heading .bounding h1", { y: 100, opacity: 0, duration: 1, delay: 0.4, ease: "power3.out" });
gsap.from("#heading .blocktext .bounding span", { y: 100, opacity: 0, duration: 1, delay: 0.6, ease: "power3.out" });
gsap.from("#heading .blocktext .bounding h6", { y: 100, opacity: 0, duration: 1, delay: 0.6, ease: "power3.out" });
gsap.from("#chotiheading .bounding h6", { y: 100, opacity: 0, duration: 1, delay: 0.8, ease: "power3.out" });
gsap.from("#herofooter", { y: 50, opacity: 0, duration: 1, delay: 1.0, ease: "power3.out" });

gsap.from("#herofooter a, #herofooter #iconset .circle", {
    y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out"
});

document.querySelectorAll(".elem").forEach(function (elem) {
    let img = elem.querySelector("img");

    elem.addEventListener("mouseenter", function () {
        gsap.to(img, { display: "block", opacity: 1, duration: 0.3 });
    });

    elem.addEventListener("mousemove", function (event) {
        let rect = elem.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;

        let rotationY = (x / rect.width - 0.5) * 30;

        gsap.to(img, {
            x: x - img.width / 2,
            y: y - img.height / 2,
            rotationY: rotationY,
            ease: "power2.out",
            duration: 0.2,
        });
    });

    elem.addEventListener("mouseleave", function () {
        gsap.to(img, { opacity: 0, display: "none", duration: 0.3 });
    });
});
