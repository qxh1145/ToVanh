const images = [
    "images/letter1.png",
    "images/letter2.png",
    "images/letter3.png",
    "images/letter4.png"
  ];
  
  const text = `Gửi em – cô gái anh yêu nhất trên đời này 💖,

Hôm nay là sinh nhật của em 🎂 – một ngày thật đặc biệt, bởi vì vào ngày này, người con gái tuyệt vời nhất mà anh từng biết đã đến với thế giới 🌎.
Và may mắn làm sao 🍀, anh lại có cơ hội được ở cạnh em, được yêu em và cùng em đi qua từng khoảnh khắc nhỏ bé trong cuộc sống 💑.

Anh không biết phải viết bao nhiêu dòng để diễn tả hết tình cảm của mình dành cho em. Nhưng có một điều anh luôn chắc chắn – đó là từ khi em xuất hiện, thế giới của anh đã khác 🌈. 
Em là người khiến anh mỉm cười 😊 những lúc yếu lòng, là người khiến trái tim anh trở nên ấm áp hơn mỗi ngày ❤️.

Có thể anh không hoàn hảo, không phải lúc nào cũng giỏi giang hay lãng mạn 😅. Nhưng anh luôn cố gắng trở thành một người đàn ông tốt hơn, vì em 🫶. 
Bởi em xứng đáng với tất cả những gì đẹp nhất – những nụ cười trọn vẹn 😄, những cái ôm bình yên 🤗, và một tình yêu không điều kiện 💝.

Chúc em sinh nhật thật hạnh phúc 🎉, trọn vẹn và ý nghĩa. Mong em luôn khỏe mạnh 💪, rạng rỡ như ánh mặt trời ☀️, và gặp được thật nhiều điều tốt đẹp trong cuộc sống này ✨. 
Anh mong rằng mỗi năm trôi qua, em vẫn sẽ là em – dịu dàng, mạnh mẽ và luôn tin vào điều kỳ diệu 🌟.

Cảm ơn em đã đến bên anh, đã chọn anh giữa hàng triệu người ngoài kia 🌹. Anh sẽ luôn ở đây, yêu em, thương em, và đồng hành với em – dù nắng hay mưa ☔️, dù vui hay buồn 💞.

Mãi yêu em,
Anh. ❤️`;
  
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
  