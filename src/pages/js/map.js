import React from "react";
import '../css/map.css'
import 'animate.css'


export default function Map() {
    return (
      <div className="map">
        <h1 className="mapTitle animate__animated animate__fadeInLeft">Map</h1>
        <div className="mapCont animate__animated animate__fadeInUpBig">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d431.651776874995!2d31.193573495878894!3d30.059393608282182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145841475820f85b%3A0x4d815d3114b4335c!2s12%20Al%20Tamer%2C%20Mit%20Akaba%2C%20Agouza%2C%20Giza%20Governorate%203752405!5e0!3m2!1sen!2seg!4v1687612827449!5m2!1sen!2seg&markers=30.4456345,31.5543356"
            width={"100%"}
            height={"100%"}
            style={{border:0, borderRadius: '15px'}}
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    );

}

