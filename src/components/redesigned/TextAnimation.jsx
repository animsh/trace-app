import React, { useRef, useEffect } from "react";
import anime from "animejs";

const TextAnimation = () => {
  useEffect(() => {
    // Wrap every letter in a span
    var textWrappers = document.querySelectorAll(".ml3");
    textWrappers.forEach((textWrapper) => {
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
    });

    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml3 .letter",
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i + 1),
        fontWeight: [800, 800],
      })
      .add({
        targets: ".ml3",
        opacity: 0,
        duration: 2250,
        easing: "easeOutExpo",
        delay: 1000,
      });
  }, []);

  return (
    <div>
      <h1>
        <div className="ml3">Trace</div>
        <div className="ml3">
          One Solution for Secure File Transfer over The Internet
        </div>
      </h1>
    </div>
  );
};

export default TextAnimation;
