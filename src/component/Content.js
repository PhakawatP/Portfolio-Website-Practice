import React from 'react'
import './Content.css'

function About() {
  return (
    <div className='container'>
        <section className='content-con'>
          <div className='content-l'>
             <img src='https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
          </div>
          <div className='content-r'>
              <h2>About Me</h2>
              <p>
              Hello, my name is Phakawat Petsawang. You can called me Gato.
              I am a student at King Monkut’s University of Technology Thonburi. Faculty of Computer Engineering, International Program.
And I am a junior who passionate to find new experiences and improve the self-potential in a field of engineering I had studied.
This is my first portfolio website. I intend to practice making this website to develop my potential.
              </p>
          </div>
        </section>

        <section className='content-con'>
          <div className='content-r'>
              <h2>Skills</h2>
            <div className='all-skill'>
                <div className='hard-skill'>
                <h2>Hard Skills</h2>  
                  <ul className='all-hard'>
                    <li>Figma</li>
                    <li>JavaScript</li>
                    <li>React JS</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>MySQL</li>
                  </ul>
              </div>
              <div className='soft-skill'>
              <h2>Soft Skills</h2>
                  <ul className='all-soft'>
                    <li>Time management</li>
                    <li>Creativity</li>
                    <li>Teamwork</li>
                    <li>Critical thinking</li>
                    <li>Problem solving</li>
                    <li>Communication</li>
                    <li>Leadership</li>
                  </ul>
              </div>
            </div>
          </div>
          <div className='content-l'>
             <img src='https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
          </div>
        </section>

        <section className='content-con'>
          <div className='content-l'>
             <img src='https://images.unsplash.com/photo-1687603827201-922149337146?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
          </div>
          <div className='content-r'>
            <div className='contacts'>
              <h2>Contact</h2>
              <div className='all-con'>
                <p>
                  Hello!! You can contact me at
                </p>
                  <ul className='contact'>
                  <div className='instagram'>
                      <li>Instagram:</li>
                      <a href='https://www.instagram.com/ggato_pp' target='_blank' rel='noopener noreferrer'>
                      <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Instagram</button>
                      </a>
                    </div>
                    <div className='facebook'>
                      <li>Facebook:</li>
                      <a href='https://www.facebook.com/phakawat.petsawang.5' target='_blank' rel='noopener noreferrer'>
                        <button type="button" class="text-white bg-gradient-to-r from-blue-700 to-blue-700 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Facebook</button>
                      </a>
                    </div>
                    <div className='email'>
                      <li>Email:</li>
                      <a href='mailto:gartohz91@gmail.com'>
                        <button type="button" class="text-white bg-gradient-to-br from-blue-500 to-red-600 via-yellow-500 to-green-600 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Gmail</button>
                      </a>
                    </div>
                    
                  </ul>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default About

