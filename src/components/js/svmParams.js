import React from "react";
import "../css/modelParams.css";
import "animate.css"

export default function SvmParams(props) {

    return (
        <div className="modelParams animate__animated animate__fadeIn">
            <form className="modelForm">
                <div className="form-group row">
                    <div className="col-lg-6">
                        <label for="exampleFormControlSelect1">Kernel</label>
                        <select onChange={(e) => props.setModel({...props.model, Kernel: e.target.value})} className="form-control" id="exampleFormControlSelect1">
                            <option>rbf</option>
                            <option>linear</option>
                            <option>poly</option>
                            <option>sigmoid</option>
                        </select>
                        <label for="trainAndTestSizes">Degree</label>
                        <input onChange={(e) => props.setModel({...props.model, Degree: e.target.value})} type="number" className="form-control" id="trainAndTestSizes" placeholder="3"/>
                    </div>
                    <div className="col-lg-6">
                        <label for="exampleFormControlSelect1">Gamma</label>
                        <select onChange={(e) => props.setModel({...props.model, Gamma: e.target.value})} className="form-control" id="exampleFormControlSelect1">
                            <option>scale</option>
                            <option>auto</option>
                        </select>
                        <label for="trainAndTestSizes">C</label>
                        <input onChange={(e) => props.setModel({...props.model, C: e.target.value})} type="number" className="form-control" id="trainAndTestSizes" placeholder="1.0"/>
                    </div>
                </div>
            </form>
        </div>
    )

}