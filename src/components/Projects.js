import React from 'react'
import htmlPng from './assets/images/stack/HTML.png'
import cssPng from './assets/images/stack/CSS.png'
import tailwindcssPng from './assets/images/stack/Tailwind.png'
import expressPng from './assets/images/stack/Express.png'
import javascriptPng from './assets/images/stack/Javascript.svg'
import nextjsPng from './assets/images/stack/NextJsCircle.png'
import nodejsPng from './assets/images/stack/NodeJs.svg'
import mongodbPng from './assets/images/stack/MongoDB.svg'
import reduxPng from './assets/images/stack/Redux.svg'
import vercelPng from './assets/images/stack/Vercel.svg'


const Projects = () => {
  return (
    <div>
      <div className="project-section" id="projects">
      <h2 className="page-header">Projects</h2>

        <div className="project-container">
          <div className="project-card" id="project1">
            <div className="project-number project-number-right">01</div>
            <div className="project-content project-content-left">
              <div className="project-skills-container">
                <img
                  className="project-skill"
                  src={htmlPng}
                  alt=""
                />
                <img
                  className="project-skill"
                  src={cssPng}
                  alt=""
                />
                <img
                  className="project-skill"
                  src={javascriptPng}
                  alt=""
                />
                <img
                  className="project-skill"
                  src={expressPng}
                  alt=""
                />
                <img
                  className="project-skill"
                  src={nextjsPng}
                  alt=""
                />
                <img
                  className="project-skill"
                  src={tailwindcssPng}
                  alt=""
                />
                <img
                  className="project-skill"
                  src={nodejsPng}
                  alt=""
                />
                <img
                  className="project-skill"
                  src={mongodbPng}
                  alt=""
                />
                <img
                  className="project-skill"
                  src={reduxPng}
                  alt=""
                />
                <img
                  className="project-skill"
                  src={vercelPng}
                  alt=""
                />
              </div>

              <h2 className="project-heading">Tint & Orange</h2>

              <div className="project-sub-heading">
                Its is a car modification company which provide ou sheets to
                protect your car from scratch
              </div>

              <div className="btn-grp">
                <button className="btn-pink btn-project">Read More</button>
                <a href="">
                  <i title="GitHubLink" className="fa-brands fa-github icon"></i>
                </a>
                <a href="">
                  <i title="Live Link" className="fa-solid fa-link icon"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card" id="project2">
            <div className="project-number project-number-left">02</div>
            <div className="project-content project-content-right">
              <div className="project-skills-container">
                <img
                  className="project-skill"
                  src={htmlPng}
                  alt=""
                ></img>
                <img
                  className="project-skill"
                  src={cssPng}
                  alt=""
                ></img>
                <img
                  className="project-skill"
                  src={javascriptPng}
                  alt=""
                ></img>
                <img
                  className="project-skill"
                  src={nextjsPng}
                  alt=""
                ></img>
                <img
                  className="project-skill"
                  src={tailwindcssPng}
                  alt=""
                ></img>
                <img
                  className="project-skill"
                  src={reduxPng}
                  alt=""
                ></img>
                <img
                  className="project-skill"
                  src={vercelPng}
                  alt=""
                ></img>
              </div>
              <h2 className="project-heading">Breaking Copyrights</h2>
              <p className="project-sub-heading">
                A platform to download copyrights free youtube music
              </p>
              <div className="btn-group">
                <button className="btn-pink btn-project">Read More</button>
                <a href="">
                  <i title="GitHubLink" className="fa-brands fa-github icon"></i>
                </a>
                <a href="">
                  <i title="Live Link" className="fa-solid fa-link icon"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card" id="project3">
            <div className="project-number project-number-right">03</div>
            <div className="project-content project-content-left">
              <div className="project-skills-container">
                <img
                  className="project-skill"
                  src={htmlPng}
                  alt=""
                ></img>
                <img
                  className="project-skill"
                  src={cssPng}
                  alt=""
                ></img>
                <img
                  className="project-skill"
                  src={javascriptPng}
                  alt=""
                />
                <img
                  className="project-skill"
                  src={nextjsPng}
                  alt=""
                ></img>
                <img
                  className="project-skill"
                  src={tailwindcssPng}
                  alt=""
                ></img>
                <img
                  className="project-skill"
                  src={vercelPng}
                  alt=""
                ></img>
              </div>

              <h2 className="project-heading">Isha Tattva</h2>
              <p className="project-sub-heading">
                A Website for interior designer to showcase her works and
                samples
              </p>
              <div className="btn-group">
                <button className="btn-pink btn-project">Read More</button>
                <a href="">
                  <i title="GitHubLink" className="fa-brands fa-github icon"></i>
                </a>
                <a href="">
                  <i title="Live Link" className="fa-solid fa-link icon"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card" id="project4">
            <div className="project-number project-number-left">04</div>
            <div className="project-content project-content-right">
              <div className="project-skills-container">
                <img
                  className="project-skill"
                  src={nextjsPng}
                  alt=""
                ></img>
                <img
                  className="project-skill"
                  src={tailwindcssPng}
                  alt=""
                ></img>
                <img
                  className="project-skill"
                  src={vercelPng}
                  alt=""
                ></img>
              </div>
              <h2 className="project-heading">Granit</h2>
              <p className="project-sub-heading">
                A architectural website to plan your building or home (Hebrew
                Language)
              </p>
              <div className="btn-group">
                <button className="btn-pink btn-project">Read More</button>
                <a href="">
                  <i title="GitHubLink" className="fa-brands fa-github icon"></i>
                </a>
                <a href="">
                  <i title="Live Link" className="fa-solid fa-link icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
