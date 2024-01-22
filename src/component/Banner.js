import React from 'react'
import './Banner.css'

let bannerData = {
  title : 'Phakawat Petsawang'
}

function Banner() {
  return (
    <div className='banner-bg'>
      <div className='container'>
          <div className='banner-con'>
              <div className='banner-text'>
                  <h1>{bannerData.title}</h1>
                  <h2>Computer Engineering</h2>
                  <h2>King Mongkut's University of Technology Thonburi</h2>
                  <a href='https://drive.google.com/file/d/1VPeSYfs6T7b94P-jg2qjVRgVhQnFjpar/view?usp=sharing'className='banner-btn'>Download Resume</a>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Banner