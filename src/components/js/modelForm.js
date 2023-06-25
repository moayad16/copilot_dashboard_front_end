import React from "react";
import "../css/modelForm.css";
import "animate.css";

export default function ModelForm(props) {


  return (
    <form className="modelForm">
      <div className="form-group row">
        <div className="col-lg-6">
          <label for="exampleFormControlSelect1">Select Model</label>
          <select onChange={(e) => props.setModel({...props.model, Model: e.target.value})} className="form-control" id="exampleFormControlSelect1">
            <option>SVM</option>
            <option>Random Forest</option>
            <option>KNN</option>
            <option>Mean Shift</option>
          </select>  
          <label for="trainAndTestSizes">Test data Size</label>
          <input onChange={(e) => props.setModel({...props.model,testSize: e.target.value})} type="number" className="form-control" id="trainAndTestSizes" placeholder="0.2"/>
        </div>
        <div className="col-lg-6">
            <label for="exampleFormControlSelect1">Random State</label>
            <input onChange={(e) => props.setModel({...props.model, RandomState: e.target.value})} type="number" className="form-control" id="trainAndTestSizes" placeholder="42"/>
            </div>
      </div>
    </form>
  );
}
