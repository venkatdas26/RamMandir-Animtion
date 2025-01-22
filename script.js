// Initially hide frames
document.getElementById("light-frame").style.display = "none";
document.getElementById("idol-frame").style.display = "none";
document.getElementById("diya-button").style.display = "block";

// Function to start the animation
function startAnimation() {
    // Step 1: Smooth fade-in from black to the dark temple
    gsap.to("#dark-frame", { opacity: 1, duration: 2 });

    // Step 2: Diya button disappears
    setTimeout(() => {
        document.getElementById("diya-button").style.display = "none";
    }, 2000);

    // Step 3: Transition from dark frame to light frame
    setTimeout(() => {
        gsap.to("#dark-frame", { opacity: 0, duration: 2 });
        document.getElementById("light-frame").style.display = "flex";
        gsap.to("#light-frame", { opacity: 1, duration: 2 });
    }, 2000);

    // Step 4: Celebration text fades in smoothly
    setTimeout(() => {
        document.getElementById("celebration-text").style.display = "block";
        gsap.fromTo(
            "#celebration-text",
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1.5 }
        );
    }, 4000);

    // Step 5: Add black screen transition before the idol appears
    setTimeout(() => {
        let blackOverlay = document.createElement("div");
        blackOverlay.id = "black-overlay";
        document.body.appendChild(blackOverlay);

        // Fade in black overlay
        gsap.to("#black-overlay", { opacity: 1, duration: 1.5 });
        setTimeout(() => {
            // Display idol and fade out black overlay
            document.getElementById("idol-frame").style.display = "flex";
            gsap.fromTo(
                "#idol-frame",
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 2 }
            );
            gsap.to("#black-overlay", { opacity: 0, duration: 1.5, onComplete: () => {
                document.body.removeChild(blackOverlay);
            } });
        }, 1500);
    }, 6000);

    // Step 6: Zoom into idol and temple together
    setTimeout(() => {
        gsap.to("#light-frame", { scale: 1.2, duration: 3 });
        gsap.to("#idol-frame", { scale: 1.2, duration: 3 });
    }, 8000);

    // Step 7: Restart animation (loop)
    setTimeout(() => {
        window.location.reload();
    }, 12000);
}
