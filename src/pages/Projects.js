import React from "react";
import myrecipes from "../assets/images/myrecipesScreenshot.png";
import knickKnacks from "../assets/images/knickKnacksScreenshot.png";
import weatherApp from "../assets/images/weatherAppScreenshot.png";
import timelessTechBlog from "../assets/images/timelessTechBlogScreenshot.png";
import bitcoinTracker from "../assets/images/bitcoinTrackerScreenshot.png";

export default function Home() {
  return (
    <div className="flex-container main-section" id="project-section">
      <div className= "content flex-container projects">
        <div className="projects grid-container">
          <h2 id="project-heading" className="section-heading">Projects</h2>
          <a href="https://abps-myrecipes.herokuapp.com/" target="_blank" className="mainProject col-12">
            <h3 className="project-title">
              myrecipes — Un Social Media per Condividere Ricette!
              (<a href="https://github.com/Phoenix-Staley/myrecipes" target="_blank" className="github">Github</a>)
            </h3>
            <img src={myrecipes} alt="A line chart showing the price of bitcoin over time" className="main-project project-image" />
          </a>
          <a href="https://phoenix-staley.github.io/weatherApp/" target="_blank" className="project1 col-5">
            <h3 className="project-title">
              App Meteo
              (<a href="https://github.com/Phoenix-Staley/weatherApp" target="_blank" className="github">Github</a>)
            </h3>
            <img src={weatherApp} alt="A forecast of weather in Seattle" className="project-image" />
          </a>
          <a href="https://intense-ridge-45065.herokuapp.com/" target="_blank" className="project2 col-5">
            <h3 className="project-title" target="_blank">
              Timeless Tech Blog
              (<a href="https://github.com/Phoenix-Staley/timeless_tech_blog" target="_blank" className="github">Github</a>)
            </h3>
            <img src={timelessTechBlog} alt="A grey website with a purple start quiz" className="project-image" />
          </a>
          <a href="https://phoenix-staley.github.io/cryptocurrency_tracker/" target="_blank" className="project3 col-5">
            <h3 className="project-title">
              Tracker di Bitcoin
              (<a href="https://github.com/Phoenix-Staley/cryptocurrency_tracker" target="_blank" className="github">Github</a>)
            </h3>
            <img src={bitcoinTracker} alt="A text area with a red button labeled 'generate password'" className="project-image" />
          </a>
          <a href="https://knickknacks-ondemand.herokuapp.com/" target="_blank" className="project4 col-5">
            <h3 className="project-title" target="_blank">
              KnickKnacks
              (<a href="https://github.com/levisgaragegroupinc/KnickKnacks" target="_blank" className="github">Github</a>)
            </h3>
            <img src={knickKnacks} alt="A grey website with a purple start quiz" className="project-image" />
          </a>
        </div>
      </div>
    </div>
  );
}
