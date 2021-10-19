import React from "react";
import "./back.css";

function Back() {
  window.onload = function () {
    const html = document.documentElement;
    const canvas = document.getElementById("back");
    const context = canvas.getContext("2d");

    canvas.width = 1158;
    canvas.height = 770;

    const currentFrame = (index) =>
      `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
        .toString()
        .padStart(4, "0")}.jpg`;

    const preloadImages = () => {
      for (let i = 1; i < 148; i++) {
        const image = new Image();
        image.src = currentFrame(i);
      }
    };

    const image = new Image();
    image.src = currentFrame(1);

    image.onload = function () {
      context.drawImage(image, 0, 0);
    };

    window.addEventListener("scroll", () => {
      const scrollTop = html.scrollTop;
      const maxScroll = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScroll;
      const frameIndex = Math.min(147, Math.floor(scrollFraction * 148));
      requestAnimationFrame(() => updateImage(frameIndex + 1));
    });

    const updateImage = (index) => {
      image.src = currentFrame(index);
      context.drawImage(image, 0, 0);
    };

    preloadImages();
  };

  return (
    <div className="content">
      <canvas id="back" className="canvas"></canvas>
    </div>
  );
}

export default Back;
