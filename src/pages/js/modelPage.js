import React, {useEffect, useState} from "react";
import '../css/modelPage.css'
import 'animate.css'
import ModelForm from "../../components/js/modelForm";
import SvmParams from "../../components/js/svmParams";
import RandomForestParams from "../../components/js/randomForest";
import KNNParams from "../../components/js/KNNParams";
import MeanShiftParams from "../../components/js/meanShift";
import Loading from "../../components/js/loading";
import ResultsSection from "../../components/js/resultsSection";
import ax from "../../utils/requestTemplate";
import { useNavigate } from "react-router-dom/dist";



export default function ModelPage() {

    const navigate = useNavigate();
    const [model, setModel] = useState({
      Model: "SVM",
      testSize: 0.2,
      RandomState: 42,
      kernel: "rbf",
      degree: 3,
      gamma: "scale",
      C: 1.0,
      n_estimators: 100,
      criterion: "gini",
      max_depth: "None",
      n_jobs: -1,
      NNeighbors: 5,
      weights: "uniform",
      algorithm: "auto",
      BandWidth: 0.5,
      BinSeeding: false,
      ClusterAll: true,
      MaxIterations: 300,
    });

    const [results, setResults] = useState({
      accuracy: 0,
      precision: 0,
      f1_score: 0,
      confusion_matrix: [[0, 0], [0, 0]]
    });

    const [state, setState] = useState("none")

    const handleTrain = () => {
      setState("loading")
      ax.post("/trainModel", model)
        .then((res) => {
          setResults(res.data.results.results);
          setState("done")
        })
        .catch((err) => {
          if(err.status === 401){
            navigate("/")
          }

          setState("none")
          alert("Error training model. Please try again.")
          console.log(err);
        });
    }

    useEffect(() => {
      console.log("res", results);
    }, [results])

    return (
      <div className="modelPage">
        <h1 className="modelTitle animate__animated animate__fadeInLeft">Build New Model</h1>
        <button disabled={state === "loading"} onClick={handleTrain} className="train animate__animated animate__fadeInRightBig">Train Model</button>
        <div className="modelCont row">
            <div className="col-lg-6 animate__animated animate__fadeInLeft">
                <div className="modelSettings">
                    <h1>Model Specifications</h1>
                    <ModelForm setModel= {setModel} model={model}/>
                </div>
            </div>
            <div className="col-lg-6 animate__animated animate__fadeInDown">
                <div className="modelResults">
                    <h1>Settings</h1>
                    {model.Model === "SVM" ? <SvmParams setModel= {setModel} model={model}/> : 
                    model.Model === "Random Forest" ? <RandomForestParams setModel= {setModel} model={model}/> : 
                    model.Model === "KNN" ? <KNNParams setModel= {setModel} model={model}/> : 
                    model.Model === "Mean Shift" ? <MeanShiftParams setModel= {setModel} model={model}/> : null}
                </div>
            </div>  
        </div>
        <div className="modelCont row">
          <div className="col-lg-6 animate__animated animate__fadeInUp">
            <div className="modelResults results">
              <h1>Results</h1>
              <div className="resBody">

                {state==="none" ? <p>Click on Train Model to see the results of your model.</p> : 
                state==="loading" ? <Loading/> : 
                state==="done" ? <ResultsSection results={results}/> : null}

              </div>
            </div>
          </div>
          <div className="col-lg-6 animate__animated animate__fadeInRight">
            <div className="modelResults results">
              <h1>ROC</h1>
              <div className="resBody">
                {state==="none" ? <p>Click on Train Model to see the ROC of your model.</p> : 
                state==="loading" ? <Loading/> : null}
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