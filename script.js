window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = scrollPosition / maxScroll;
  
    const blueIntensity = Math.min(1, scrollPercent * 2);
    const color1 = `rgba(240, 244, 255, ${1 - blueIntensity})`;
    const color2 = `rgba(59, 130, 246, ${blueIntensity})`;
  
    document.body.style.background = `linear-gradient(to bottom, ${color1}, ${color2})`;
  });
  