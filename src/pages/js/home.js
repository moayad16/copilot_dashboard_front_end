import React from "react";
import '../css/home.css'
import 'animate.css'
import VizChart from "../../components/js/chart";


export default function Home() {
    return (
      <div className="home">
        <h1 className="pageTitle">
            Dashboard
        </h1>
        <div className="row">
            <div className="col-lg-3">
                <VizChart />
            </div>
            <div className="col-lg-3">
                <VizChart/>
            </div>
            <div className="col-lg-3">
                <VizChart/>
            </div>
            <div className="col-lg-3">
                <VizChart />
            </div>
            <div className="col-lg-3">
                <VizChart />
            </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="divider-img"
          viewBox="0 0 1080 137"
          preserveAspectRatio="none"
        >
          <path
          className="animate__animated animate__fadeInUp"
            d="M 0,137 V 59.03716 c 158.97703,52.21241 257.17659,0.48065 375.35967,2.17167 118.18308,1.69101 168.54911,29.1665 243.12679,30.10771 C 693.06415,92.25775 855.93515,29.278599 1080,73.61449 V 137 Z"
            style={{opacity:0.85}}
          ></path>
        </svg>
      </div>
    );
}