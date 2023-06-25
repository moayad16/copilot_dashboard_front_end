import React from "react";
import "../css/modelParams.css";
import 'animate.css'


export default function RandomForestParams(props) {
    return (
        <div className="modelParams animate__animated animate__fadeIn">
            <form className="modelForm">
                <div className="form-group row">
                    <div className="col-lg-6">
                        <label for="exampleFormControlSelect1">Number of Estimators</label>
                        <input onChange={(e) => props.setModel({...props.model, NEstimators: e.target.value})} type="number" className="form-control" id="trainAndTestSizes" placeholder="100"/>
                        <label for="trainAndTestSizes">Max Depth</label>
                        <input onChange={(e) => props.setModel({...props.model, MaxDepth: e.target.value})} type="number" className="form-control" id="trainAndTestSizes" placeholder="1"/>
                    </div>
                    <div className="col-lg-6">
                        <label for="exampleFormControlSelect1">Criterion</label>
                        <select onChange={(e) => props.setModel({...props.model, criterion: e.target.value})} className="form-control" id="exampleFormControlSelect1">
                            <option>gini</option>
                            <option>entropy</option>
                        </select>
                        <label for="trainAndTestSizes">N Jobs</label>
                        <input onChange={(e) => props.setModel({...props.model, n_jobs: e.target.value})} type="number" className="form-control" id="trainAndTestSizes" placeholder="-1"/>
                    </div>
                </div>
            </form>
        </div>

    )
}