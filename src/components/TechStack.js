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
import reactPng from './assets/images/stack/React.png'
import vercelPng from './assets/images/stack/Vercel.svg'
import bootstrapPng from './assets/images/stack/Bootstrap.svg'
import gitPng from './assets/images/stack/Git.svg'
import githubPng from './assets/images/stack/Github.svg'
import graphqlPng from './assets/images/stack/Graphql.svg'
import chartjsPng from './assets/images/stack/ChartJs.svg'
import materialuiPng from './assets/images/stack/MaterialUI.svg'
import bashPng from './assets/images/stack/Bash.svg'
import dockerPng from './assets/images/stack/Docker.svg'
import k8sPng from './assets/images/stack/K8s.svg'



const TechStack = () => {
  return (
    <div>
      <div id="skills" class="container skills-container">
        <div class="skill-fade-text">Skills</div>
        <div class="skill-container-left">
          <h2 class="skill-heading">
            <span class="caps">M</span>e and
            <br />
            MyTech Stack
          </h2>

          <div class="skill-subHeading">
            <p>
              Hi Everyone My name is John Doe I am a Full Stack Web Developer I
              have been working for last 3 Years and Currently I am working with
              a Budding Startup in USA and a full Time Freelancer. Currently I
              am working on NextJs and Making Beautiful UI-UX are my fey
              features
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
              doloremque aspernatur, maiores voluptatum minus laudantium?
              Perspiciatis accusamus minima porro dolores necessitatibus, magni
              dolorem et qui veniam nulla sequi molestiae maxime.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              quidem quos ullam veritatis voluptates tenetur qui ipsa nulla
              culpa itaque?
            </p>
          </div>
        </div>

        <div class="skill-container-right">
          <img
            src="./images/userAsset/blob vector.png"
            class="blob-style"
            alt=""
          />

          <img src={htmlPng} alt="" class="skills-logo" />
          <img src={cssPng} alt="" class="skills-logo" />
          <img src={javascriptPng} alt="" class="skills-logo" />
          <img src={reactPng} alt="" class="skills-logo" />
          <img src={nodejsPng} alt="" class="skills-logo" />
          <img src={nextjsPng} alt="" class="skills-logo" />
          <img src={reduxPng} alt="" class="skills-logo" />
          <img src={tailwindcssPng} alt="" class="skills-logo" />
          <img src={bootstrapPng} alt="" class="skills-logo" />
          <img src={materialuiPng} alt="" class="skills-logo" />
          <img src={expressPng} alt="" class="skills-logo" />
          <img src={gitPng} alt="" class="skills-logo" />
          <img src={githubPng} alt="" class="skills-logo" />
          <img src={graphqlPng} alt="" class="skills-logo" />
          <img src={mongodbPng} alt="" class="skills-logo" />
          <img src={vercelPng} alt="" class="skills-logo" />
          <img src={chartjsPng} alt="" class="skills-logo" />
          <img src={bashPng} alt="" class="skills-logo" />
          <img src={dockerPng} alt="" class="skills-logo" />
          <img src={k8sPng} alt="" class="skills-logo" />
        </div>
      </div>
    </div>
  )
}

export default TechStack

