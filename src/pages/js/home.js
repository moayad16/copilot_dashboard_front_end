import React, { useEffect } from "react";
import "../css/home.css";
import "animate.css";
import VizChart from "../../components/js/chart";
import ax from "../../utils/requestTemplate";
import { useNavigate } from "react-router-dom/dist";
import "animate.css";

export default function Home() {
  let token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    ax.post("/validateToken", { token: token })
      .then((res) => {
        if (res.status === 200) {
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          navigate("/");
        }
      });
  }, []);

  return (
    <div className="home">
      <h1 className="pageTitle animate__animated animate__fadeInLeft">
        Download Data
      </h1>
      <div className="row dataRow">
        <div className="col-lg-6 animate__animated animate__fadeInLeftBig">
          <div className="dataCont">
            <h1>POI's Data</h1>
            <div className="row">
                <div className="col-lg-6"><h6>Data Size: 50KB</h6></div>
                <div className="col-lg-6"><h6>Number of Rows: 53,500</h6></div>
            </div>
            <div className="row">
                <div className="col-lg-6"><h6>Number of Columns: 3</h6></div>
                <div className="col-lg-6"><button>Download POI Data</button></div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 animate__animated animate__fadeInRightBig">
          <div className="dataCont">
            <h1>Raw Data</h1>
            <div className="row">
                <div className="col-lg-6"><h6>Data Size: 20KB</h6></div>
                <div className="col-lg-6"><h6>Number of Rows: 98,432</h6></div>
            </div>
            <div className="row">
                <div className="col-lg-6"><h6>Number of Columns: 9</h6></div>
                <div className="col-lg-6"><button>Download Raw Data</button></div>
            </div>
          </div>
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
          style={{ opacity: 0.85 }}
        ></path>
      </svg>
    </div>
  );
}
