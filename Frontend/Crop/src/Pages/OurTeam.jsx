import React from "react";
import "./CSSFiles/OurTeam.css"


export default function OurTeam()
{
    return(
        
        <>
        <div className="DiseaseDetection">
        
            <div className="TopDDV">
                <div className="DDLeft">
                        <p>Disease Detection</p>
                        <img className="tree_image" src="../src/assets/_a0ecfb5a-f636-4467-87de-db3910d14b5e 1.svg"></img>
                </div>

                <div className="Line"></div>
                <div className="Description">
                    <p>Harnessing the power of Convolution Neural Networks (CNN) to accurately detect and diagnose plant diseases, ensuring timely intervention for healthier crops</p></div>
            </div>
            

            <div className="OurTeam">

                <div className="TeamTop">
                    <p>Our Team</p>
                </div>

                <div className="TeamBottom">

                    <div className="BottomLeft">
                        <div className="Info">
                            <div className="Photo"></div>
                            <div className="Text">
                                <h3>Aayush</h3>
                                <span>Developer</span>
                            </div>
                        </div>
                        <div className="Info">
                            <div className="Photo"></div>
                            <div className="Text">
                                <h3>Aayush</h3>
                                <span>Developer</span>
                            </div>
                        </div>
                    </div>

                    <div className="Line"></div>

                    <div className="BottomLeft">
                        <div className="Info">
                            <div className="Photo"></div>
                            <div className="Text">
                                <h3>Aayush</h3>
                                <span>Developer</span>
                            </div>
                        </div>
                        <div className="Info">
                            <div className="Photo"></div>
                            <div className="Text">
                                <h3>Aayush</h3>
                                <span>Developer</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </div>

        {/* code here */}


        </>
    );
}