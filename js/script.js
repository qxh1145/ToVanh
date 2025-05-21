const images = [
    "images/letter1.png",
    "images/letter2.png",
    "images/letter3.png",
    "images/letter4.png"
  ];
  
  const text = `Gửi nyc – cô gái anh yêu nhất trên đời này 💖,

Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`;
  
  const envelope = document.getElementById("envelope");
  const letterImg = document.getElementById("letterImage");
  const flash = document.getElementById("flash");
  const letterContainer = document.getElementById("letterContainer");
  const typedText = document.getElementById("typedText");
  const music = document.getElementById("bg-music"); // Lấy thẻ audio
  
  let imgIndex = 0;
  
  envelope.onclick = () => {
    const interval = setInterval(() => {
      imgIndex++;
      if (imgIndex < images.length) {
        letterImg.src = images[imgIndex];
      } else {
        clearInterval(interval);
        flash.classList.add("active");
  
        setTimeout(() => {
          envelope.style.display = "none";
          letterContainer.style.display = "block";
          flash.classList.remove("active");
  
          // ✅ Phát nhạc nền sau khi mở thư
          if (music) music.play().catch(e => console.log("Music autoplay blocked:", e));
  
          // ✅ Bắt đầu hiệu ứng gõ chữ và mưa tim
          typeText(text);
          startHeartRain();
        }, 500);
      }
    }, 300);
  };
  
  function typeText(str) {
    let i = 0;
    const speed = 50;
    const typer = setInterval(() => {
      typedText.textContent += str.charAt(i);
      i++;
      if (i >= str.length) clearInterval(typer);
    }, speed);
  }
  
  function startHeartRain() {
    setInterval(() => {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = Math.random() * 100 + "vw";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }, 200);
  }
  
