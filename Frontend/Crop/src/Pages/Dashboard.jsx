import React from "react";
import "./CSSFiles/Dashboard.css"

export default function Dashboard()
{
    return(
        
        <>
        <div className="PlantVitals">
            <div className="TopV">
                <div className="TopLeft">
                    <h1>Plant Vitals</h1>
                    <div className="Moisture"></div>
                </div>
                <div className="TreeImg"></div>
            </div>
            <div className="MiddleV"></div>
            <div className="BottomV"></div>


        </div>

        {/* code here */}


        </>
    );
}