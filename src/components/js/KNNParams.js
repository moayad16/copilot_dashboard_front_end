import React from "react";
import "../css/modelParams.css";
import 'animate.css'

export default function KNNParams(props) {
    return (
        <div className="modelParams animate__animated animate__fadeIn">
            <form className="modelForm">
                <div className="form-group row">
                    <div className="col-lg-6">
                        <label for="exampleFormControlSelect1">Number of Neighbors</label>
                        <input onChange={(e) => props.setModel({...props.model, NNeighbors: e.target.value})} type="number" className="form-control" id="trainAndTestSizes" placeholder="5"/>
                        <label for="trainAndTestSizes">Weights</label>
                        <select onChange={(e) => props.setModel({...props.model, Weights: e.target.value})} className="form-control" id="exampleFormControlSelect1">
                            <option>uniform</option>
                            <option>distance</option>
                        </select>
                    </div>
                    <div className="col-lg-6">
                        <label for="exampleFormControlSelect1">Algorithm</label>
                        <select onChange={(e) => props.setModel({...props.model, Algorithm: e.target.value})} className="form-control" id="exampleFormControlSelect1">
                            <option>auto</option>
                            <option>ball_tree</option>
                            <option>kd_tree</option>
                            <option>brute</option>
                        </select>
                        <label for="trainAndTestSizes">N Jobs</label>
                        <input onChange={(e) => props.setModel({...props.model, n_jobs: e.target.value})} type="number" className="form-control" id="trainAndTestSizes" placeholder="-1"/>
                    </div>
                </div>
            </form>
        </div>
    )
}