import React from "react";
import "./style.css";

const Profiler = (props: any) =>{
    return(
        <>
            <div className="profiler_container">
                <div>
                    {props.image}
                </div>
                <div>
                    <h6>{props.name}</h6>
                    <p>{props.email}</p>
                    <p>{props.id}</p>
                </div>
                <div>
                    {props.close}
                </div>
            </div>
        </>
    )   
}

export default Profiler;