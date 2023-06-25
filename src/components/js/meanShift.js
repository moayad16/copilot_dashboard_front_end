import React from "react";
import "../css/modelParams.css";
import 'animate.css'


export default function MeanShiftParams(props) {
    return (
        <div className="modelParams animate__animated animate__fadeIn">
            <form className="modelForm">
                <div className="form-group row">
                    <div className="col-lg-6">
                        <label for="exampleFormControlSelect1">Bandwidth</label>
                        <input onChange={(e) => props.setModel({...props.model, Bandwidth: e.target.value})} type="number" className="form-control" id="trainAndTestSizes" placeholder="0.5"/>
                        <label for="trainAndTestSizes">Bin Seeding</label>
                        <select onChange={(e) => props.setModel({...props.model, BinSeeding: e.target.value})} className="form-control" id="exampleFormControlSelect1">
                            <option>false</option>
                            <option>true</option>
                        </select>
                    </div>
                    <div className="col-lg-6">
                        <label for="exampleFormControlSelect1">Cluster All</label>
                        <select onChange={(e) => props.setModel({...props.model, ClusterAll: e.target.value})} className="form-control" id="exampleFormControlSelect1">
                            <option>true</option>
                            <option>false</option>
                        </select>
                        <label for="trainAndTestSizes">Max Iterations</label>
                        <input onChange={(e) => props.setModel({...props.model, MaxIterations: e.target.value})} type="number" className="form-control" id="trainAndTestSizes" placeholder="300"/>
                    </div>
                </div>
            </form>
        </div>
    )
}