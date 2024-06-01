import React from 'react'

const ContactUs = () => {
  return (
    <div>
      <div class="contactus-form-container" id="contactme">
        <div class="container">
          <h1 class="contactus-heading">Contact me</h1>
          <h3 class="contactus-sub-heading">
            Questions, thoughts, or just want to say hello?
          </h3>

          <div class="contactus-form-container">
            <form class="form" action="https://formcarry.com/s/ZTaPd7_0Dmm" method="POST">
              <div class="formfield-container">
                <input
                  class="formfield"
                  type="text"
                  name="name"
                  id=""
                  placeholder="Enter your name "
                />

                <input
                  class="formfield"
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter your mail address"
                />

                <input
                  class="formfield"
                  type="text"
                  name="subject"
                  id=""
                  placeholder="Enter your subject"
                />

                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  class="formfield formfield-textarea"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <div>
                <button type="submit" class="btn-pink" id="submit-btn">
                  Send Message<i
                    class="submit-icon fa-solid fa-paper-plane"
                  ></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
