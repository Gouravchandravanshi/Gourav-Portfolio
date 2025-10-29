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
                  src={tailwindcssPng}
                  alt=""
                />
                <img
                  className="project-skill"
                  src={expressPng}
                  alt=""
                />
                {/* <img
                  className="project-skill"
                  src="{tailwindcssPng}"
                  alt=""
                /> */}
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
                {/* <img
                  className="project-skill"
                  src="{reduxPng}"
                  alt=""
                /> */}
                <img
                  className="project-skill"
                  src={vercelPng}
                  alt=""
                />
              </div>

              <h2 className="project-heading">Expenses Tracker App</h2>

              <div className="project-sub-heading">
              A comprehensive budget tracking application with intelligent expense prediction capabilities. Track your spending, set budgets, and get real-time predictions about when you might exceed your budget limits.
              </div>

              <div className="btn-grp">
                <button className="btn-pink btn-project">Read More</button>
                <a href="https://github.com/Gouravchandravanshi/Expenses-tracker-app-frontend" target='blank'>
                  <i title="GitHubLink" className="fa-brands fa-github icon"></i>
                </a>
                <a href="https://expenses-tracker-app-frontend.vercel.app/" target='_blank'>
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
                {/* <img
                  className="project-skill"
                  src={nextjsPng}
                  alt=""
                ></img> */}
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
              <h2 className="project-heading">Brainbox Landing Page</h2>
              <p className="project-sub-heading">
                Discover the future of conversations with BrainBox — a collection of intelligent chatbots powered by advanced AI.
              </p>
              {/* <div className="btn-group">
                <a href="https://brainbox-kohl.vercel.app/"><button className="btn-pink btn-project" href="https://brainbox-kohl.vercel.app/">Read More</button></a>
                <a href="https://github.com/Gouravchandravanshi/brainbox" target='blank'>
                  <i title="GitHubLink" className="fa-brands fa-github icon"></i>
                </a>
                <a href="https://brainbox-kohl.vercel.app/" target='blank'>
                  <i title="Live Link" className="fa-solid fa-link icon"></i>
                </a>
              </div> */}
             
             <div className="btn-grp">
                <button className="btn-pink btn-project" >Read More</button>
                <a href="https://github.com/Gouravchandravanshi/brainbox" target='blank'>
                  <i title="GitHubLink" className="fa-brands fa-github icon"></i>
                </a>
                <a href="https://brainbox-kohl.vercel.app/" target='_blank'>
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

              <h2 className="project-heading">House Renting Website</h2>
              <p className="project-sub-heading">
                HomeEase — Find it. Love it. Rent it.
Discover verified rental homes, connect with trusted landlords, and move into your next home with confidence.
              </p>
              <div className="btn-group">
               <a href='https://house-renting-website-six.vercel.app/'> <button className="btn-pink btn-project">Read More</button></a>
                <a href="https://github.com/Gouravchandravanshi/house-renting-website" target='blank'>
                  <i title="GitHubLink" className="fa-brands fa-github icon"></i>
                </a>
                <a href="https://house-renting-website-six.vercel.app/" target='blank'>
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
                  src={tailwindcssPng}
                  alt=""
                />
                <img
                  className="project-skill"
                  src={expressPng}
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
                  src={vercelPng}
                  alt=""
                />
              </div>
              <h2 className="project-heading">Crm Dashboard</h2>
              <p className="project-sub-heading">
                Created a CRM dashboard using the MERN stack that allows users to perform CRUD operations on employees and leads. The app provides an intuitive interface for managing data efficiently in real time.
              </p>
              <div className="btn-group">
                <button className="btn-pink btn-project">Read More</button>
                <a href="https://github.com/Gouravchandravanshi/crm-mern-fronted" target='blank'>
                  <i title="GitHubLink" className="fa-brands fa-github icon"></i>
                </a>
                <a href="https://crm-mern-fronted.vercel.app/dashboard" target='blank'>
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
