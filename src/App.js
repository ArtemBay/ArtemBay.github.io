import React from "react";
import { render } from "react-dom";
import { Parallax } from "react-parallax";
import ParticlesBg from "particles-bg";
import { AwesomeButton } from "react-awesome-button";
import Code from "./components/Code.jsx";
import Icons from "./components/Icons.jsx";

import "react-awesome-button/dist/styles.css";
import "./App.css";

import image1 from "./assets/01.jpeg";
import image2 from "./assets/02.jpeg";
import image3 from "./assets/03.jpeg";
import image4 from "./assets/04.jpeg";
import image5 from "./assets/05.jpeg";


const App = () => (
  <div className="main">
    <div className="container">
      <Parallax strength={500}>
        <ParticlesBg type="ball" bg={true}/>
        <div style={{ height: 500 }}>
          <div className="boxs header">
            <h1 className="title">Artem Bay</h1>
            <h4 className="introduction">
              Here is a brief introduction of your project, which can explain what your project wants, what functions it has, and what great and attractive places it has.
            </h4>
            <div className="buttons">
              <a href="https://discord.gg/K3Z2vgwK5a">
                <AwesomeButton
                  size="medium"
                  type="secondary"
                >
                  my shop
                </AwesomeButton> 
              </a> 
              <div className="space"></div>
              <a href="https://discord.com/users/356737308898099201/">
                <AwesomeButton
                  size="medium"
                  type="primary"
                >
                  my discord profile
                </AwesomeButton>
              </a> 
            </div>
          </div>
        </div>
      </Parallax>

      <Parallax bgImage={image1} blur={{ min: -1, max: 3 }}>
        <div style={{ height: 600 }}>
          <div className="boxs">
            <h1 className="underline">About me</h1>
            <div className="box-con">
              I'm 14yo Python, Action Script 4 and Arduino programmist. Coding discord bots. Right now working on my shop and minecraft server. Looking for work
            </div>
          </div>
        </div>
      </Parallax>

      <Parallax strength={-100}>
        <div style={{ height: 500 }}>
          <div className="boxs">
            <h1 className="blue underline">Characteristic</h1>
            <Icons />
            <div className="box-con blue">
              How to reach me? Dm me in discord (link above), telegram @ArtemBay2 or email kkunfin@gmail.com
            </div>
          </div>
        </div>
      </Parallax>

      <Parallax
        bgImage={image4}
        strength={200}
        renderLayer={percentage => (
          <div>
            <div
              style={{
                position: "absolute",
                background: `rgba(255, 125, 0, ${percentage * 1})`,
                left: "50%",
                top: "50%",
                borderRadius: "50%",
                transform: "translate(-50%,-50%)",
                width: percentage * 500,
                height: percentage * 500
              }}
            />
          </div>
        )}
      >
        <div style={{ height: 500 }}>
          <div className="boxs">
            <div className="bsize">Nice minecraft sreenshot</div>
          </div>
        </div>
      </Parallax>

      <Parallax strength={-100}>
        <div style={{ height: 600 }}>
          <div className="boxs">
            <div className="box-con blue">
              <h1 className="underline">Sample Code</h1>
              <div className="left code"><Code /></div>
              <div>This is the code of some examples. You can copy and paste it into your program to run</div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
    <div className="footer">Copyright Mr right. This code is open source. Original code: https://github.com/nordicgiant2/gh-pages-theme</div>
  </div>
);

export default App;
