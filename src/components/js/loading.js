import React from "react";
import 'animate.css'

export default function Loading() {
    return (
      <div className="animate__animated animate__fadeIn">
        <lottie-player
          src="https://assets7.lottiefiles.com/packages/lf20_KS2VTJka6L.json"
          background="transparent"
          speed="2.5"
          style={{ width: "300px", height: "300px" }}
          loop
          autoplay
        ></lottie-player>
      </div>
    );
}