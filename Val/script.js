document.addEventListener("DOMContentLoaded", () => {
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const container = document.querySelector(".container");
    const backgroundMusic = document.getElementById("backgroundMusic");
  
    // Function to start playing the background music
    // Many browsers block autoplay so we start music on user interaction.
    const playMusic = () => {
      backgroundMusic.play().catch((error) => {
        console.log("Background music play prevented:", error);
      });
    };
  
    // Start the music on either a yes click or when the no button is hovered.
    yesBtn.addEventListener("click", playMusic);
    noBtn.addEventListener("mouseove", playMusic);
  
    // Make the "No" button move away on hover
    noBtn.addEventListener("mouseover", () => {
      const x = Math.random() * (window.outerWidth - noBtn.offsetWidth);
      const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
      noBtn.style.left = `${x}px`;
      noBtn.style.top = `${y}px`;
    });
  
    // Handle the YES button click
    yesBtn.addEventListener("click", () => {
      container.innerHTML = `<h1>Yay! 🎉 Can't wait for our date bae! 💖</h1>`;
      
      // Create a confetti effect using GSAP (with hearts)
      for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");
        document.body.appendChild(heart);
        
        gsap.to(heart, {
          x: (Math.random() - 0.5) * 600,
          y: (Math.random() - 0.5) * 600,
          scale: Math.random() * 1.5,
          opacity: 0,
          duration: 2,
          onComplete: () => heart.remove()
        });
      }
    });
  });
  