import React from "react";
import "../css/resultsSection.css";
import "animate.css";

// "confusion_matrix": conf_matrix.tolist(),
// "precision": precision,
// "accuracy": accuracy,
// "f1_score": f1,

export default function ResultsSection(props) {
  return (
    <div className="resultsSection row animate__animated animate__fadeIn">
      <div className="col-lg-6">
        <label>precision:</label>
        <p>{props.results.precision}</p>
        <label>accuracy:</label>
        <p>{props.results.accuracy}</p>
      </div>
      <div className="col-lg-6">
        <label>f1_score:</label>
        <p>{props.results.f1_score}</p>
        <label>confusion_matrix:</label>
        <p className="confP">TP:{props.results.confusion_matrix[0][0]}   FP:{props.results.confusion_matrix[0][1]}</p>
        <p className="confP">FN:{props.results.confusion_matrix[1][0]}   TN:{props.results.confusion_matrix[1][1]}</p>
      </div>
    </div>
  );
}
