import React from "react";
import "./CSSFiles/OurTeam.css";

export default function OurTeam() {
  return (
    <>
      <div className="DiseaseDetection">
        <div className="TopDDV">
          <div className="DDLeft">
            <p>Disease Detection</p>
            <img
              className="tree_image"
              src="../src/assets/_a0ecfb5a-f636-4467-87de-db3910d14b5e 1.svg"
            ></img>
          </div>

          <div className="Line"></div>
          <div className="Description">
            <p>
              Harnessing the power of Convolution Neural Networks (CNN) to
              accurately detect and diagnose plant diseases, ensuring timely
              intervention for healthier crops
            </p>
          </div>
        </div>

        <div className="Ourteam">
          <div className="Heading">
            <p>Our Team</p>
          </div>

          <div className="MBody">
            <div className="Body">
              <div className="Intro">
                <div className="LIntroD">
                  <h1>Mahir Manandhar</h1>
                  <p>
                    Hey I am Mahir I am the developer and researcher in this
                    project
                  </p>
                </div>
                <div className="IntroP">
                  <img className="profile" src="../src/assets/a.png"></img>
                </div>
              </div>

              <div className="Intro">
                <div className="LIntroD">
                  <h1>Supriya Adhikari</h1>
                  <p>
                    Hey I am Supriya I am the developer and researcher in this
                    project
                  </p>
                </div>

                <div className="IntroP">
                  <img className="profile" src="../src/assets/a.png"></img>
                </div>
              </div>
            </div>

            <div className="line">

            </div>

            <div className="Body">
              <div className="Intro">
                <div className="IntroP">
                  <img className="profile" src="../src/assets/a.png"></img>
                </div>

                <div className="RIntroD">
                  <h1>Aayush Pokhrel</h1>
                  <p>
                    Hey I am Aayush I am the developer and researcher in this
                    project
                  </p>
                </div>
              </div>

              <div className="Intro">
                <div className="IntroP">
                  <img className="profile" src="../src/assets/a.png"></img>
                </div>
                <div className="RIntroD">
                  <h1>Anusha Rajlawat</h1>
                  <p>
                    Hey I am Anusha I am the developer and researcher in this project
                  </p>
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
