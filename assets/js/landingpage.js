document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("scrollVideo");

  // Menggunakan Intersection Observer API
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Jika video terlihat di viewport, maka play
          video.play();
        } else {
          // Jika video tidak terlihat, pause
          video.pause();
        }
      });
    },
    {
      threshold: 0.5, // Video harus 50% terlihat di viewport untuk trigger
    }
  );

  observer.observe(video);
});
