import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="container">
          <div class="footer-wrapper">
            <div class="footer-faded-text">Gourav Chandravanshi</div>

            <div class="link-wrapper">
              <div>
                <a href="#projects">Projects</a>
              </div>
              <div>
                <a href="#skills">Skills</a>
              </div>
              <div>
                <a href="#contactme">Contact me</a>
              </div>
            </div>

            <div class="icon-wrapper">
              <a href="https://www.linkedin.com/in/gouravchandravanshi/" target="_blank" class="fa-brands fa-linkedin icon"></a>
              <a href="https://github.com/Gouravchandravanshi" target="_blank" class="fa-brands fa-github icon"></a>
              <a href='' class="fa-brands fa-twitter icon" target="_blank"></a>
              <a href='https://www.instagram.com/invites/contact/?igsh=bjBrYzM4c21jeHQ0&utm_content=4hoiuvl ' target="_blank" class="fa-brands fa-instagram icon"></a>
              <a href="mailto:gouravchandravanshi777@gmail.com" target="_blank" class="fa-regular fa-envelope icon"></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
