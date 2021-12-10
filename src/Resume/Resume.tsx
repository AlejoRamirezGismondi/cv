import React from 'react';
import './Resume.css';
import {Card, CardContent, Paper} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import profilePic from '../assets/images/profile-pic.jpg';
import Masonry from '@mui/lab/Masonry';

const Resume = () => {
  return (
    <div className={'root'}>
      <div className={'content'}>
        <div className={'left-content'}>
          <Paper sx={{backgroundColor: '#EBECF6'}} className={'left-paper'} elevation={4}>
            <div className={'title-container left-paper-section'}>
              <img className={'profile-pic'} alt={'Profile Pic'} src={profilePic}/>
              <h1 className={'title'}>Alejo Ramírez Gismondi</h1>
              <h3>Software Engineer</h3>
            </div>
            <div className={'left-paper-section'}>
              <h2>Contact</h2>
              <p>
                <a href={'mailto: ramirezgismondialejo@gmail.com'}>
                  <MailOutlineIcon className={'material-icons'} fontSize={'small'}/>
                </a>
                ramirezgismondialejo@gmail.com
              </p>
              <p><a href={'https://github.com/AlejoRamirezGismondi'}><GitHubIcon fontSize={'small'}/> Github</a></p>
              <p>No socials for now :D</p>
            </div>
            <div className={'left-paper-section'}>
              <h2>About Me</h2>
              <p>I enjoy trying different outlets and activities</p>
              <p><a href={'https://mba.nucba.ac.jp/en/ranking/'}>Currently applying for a student exchange at Nagoya
                University of Commerce and Business, Japan</a></p>
            </div>
          </Paper>
        </div>
        <div className={'right-content'}>
          <div className={'container'}>
            <svg xmlns="http://www.w3.org/2000/svg"
                 style={{position: 'absolute', maxWidth: 1000, fill: '#DADBFF', zIndex: 0, top: -80, left: 700}}
                 preserveAspectRatio="xMidYMid meet"
                 version="1.0" viewBox="-0.1 -0.1 642.2 500.2"
                 zoomAndPan="magnify"
                 role="img" aria-label="Background Shape">
              <g id="__id7_ssn2gh6gg3">
                <path
                  d="M315.3,3.1C326,6.4,335.7,9.7,342.9,15c21.9,16,33.7,45.9,39.9,70.2c3.1,12.2,4.5,24.7,7.5,36.8 c3.1,12.6,7.3,24.9,11.2,37.1c5.7,18.2,12.5,36.5,23.5,51.9c3.1,4.5,5.7,9.6,9.3,13.9c9.1,10.5,19.5,19.9,30.9,27.9 c7,5.2,15.3,8.9,23.2,13.7c3.3,2,7.1,2.9,10.2,4.9c5,3,11.4,4.2,16.2,7l3.2,1c4.9,2.9,11.4,4.1,16.5,7.1l28.6,13.4 c3.9,2.3,8.5,3.2,12.2,5.4s7.3,2.8,10.7,4.9c11.4,7.1,21.7,13.2,29.2,22.1c2.8,3.3,5.5,7,8.1,10.5c0.8,1.1,1.2,2.7,2,3.9 c2.2,3.1,4.1,6.5,5.6,10c6,17.4,11.1,35.8,11.2,56.2c0,2.8-0.7,5-0.8,8c-0.6,10-5.5,26.1-11.4,34.2c-5.4,7-12,13-19.5,17.8 c-2.7,1.6-5.5,3.1-8.4,4.3c-7.5,4-15.4,7.3-23.5,10c-4.7,1.5-9.6,3.5-14.5,4.7c-25.3,6.5-53.4,8-81.7,8.2c-12.8,0-25.7-1.7-38.6-2.2 c-12.5-0.5-24.9-3.6-37.6-4.5c-4.2-0.3-8.3-1.6-12.3-1.9l-46.7-9c-4.9-0.4-9.3-2.4-13.7-3l-17-4.3c-4-0.4-8.7-2.6-12.8-3l-4.9-1.6 c-4-0.4-8.2-3.1-12.7-3.5c-6-0.6-13.4-4-19.5-6c-4.4-1.1-8.6-2.5-12.7-4.4c-2.2-1.3-5.7-1.6-7.6-2.7c-3.5-2-7.9-2.4-11-4.1 c-3.1-1.7-8.4-2.7-11.7-4.7l-6.6-2.4c-4.5-2.7-10.4-4.2-14.8-6.9l-5.9-2.4l-18.4-9.5l-20.4-12.2c-14-10.3-28.1-19.3-40.5-30.2 c-18.7-16.5-33.9-35.3-52.5-51.9c-14.3-12.7-27.6-25-38-39.6c-6.4-9.5-11.3-19.9-14.6-30.9c-1.3-4-3.2-8.1-4.3-12.2 c-3.7-14.4-6.1-29-7.3-43.8c-0.3-4,0.3-7.5,0.2-11.7c0-9.3,1.7-19.5,2.4-29.4c0.3-3.8,1.9-6.8,2.3-10.7c0.7-4.7,2-9.4,3.6-13.9 l1.5-4.5c3.5-5.9,4.9-13.2,8.4-18.7c5.2-8.7,11.1-17,17.7-24.8c7.1-8,16-14,24.1-20.1c14.6-11,32-21.2,49.4-26.6 c9.7-3,19.8-5,29.7-7.4c4.3-1,8.6-0.9,13-2c5.8-1.3,11.7-2.2,17.6-2.8c3.2-0.3,7.3,0.2,10.4-0.4l7.6-4.3c4.9-2.5,9.9-4.7,15.1-6.6 c1.4-0.5,2.8-1.7,4.2-2.2c10.9-3.7,21.9-7.8,33.1-10.7c6.2-1.6,12.5-2.7,18.7-4.2c2.5-0.4,5-0.7,7.6-0.8c9.7-1.1,19.4-1.5,29.2-1.1 L310,2C311.8,2.2,313.8,3.5,315.3,3.1"/>
              </g>
            </svg>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
                 style={{position: 'absolute', maxWidth: 700, fill: '#DADBFF', zIndex: 0, top: -150, right: 0}}
                 zoomAndPan="magnify"
                 role="img" aria-label="Background Shape">
              <path
                d="M62.7,-19.6C69.2,-0.3,54.1,26.7,34.8,38.4C15.6,50.2,-7.8,46.6,-24.2,34.5C-40.5,22.3,-49.7,1.6,-44.5,-15.9C-39.3,-33.4,-19.6,-47.7,4.2,-49C28.1,-50.4,56.2,-38.9,62.7,-19.6Z"
                transform="translate(100 100)"/>
            </svg>
            <div style={{zIndex: 10}} className={'education'}>
              <h4>Education</h4>
              <ul>
                <li>Holy Cross Boys School<a href={'https://holycross.ar/'}><ChevronRightIcon
                  className={'material-icons'} fontSize={'small'}/></a>
                </li>
                <li>IGCSE: English A*, Literature A*</li>
                <li>
                  Universidad Austral: Ingeniería Informática (currently in 4th out of 5 years)
                  <a href={'https://www.austral.edu.ar/ingresantes/carreras/ingenieria-en-informatica/'}>
                    <ChevronRightIcon className={'material-icons'} fontSize={'small'}/>
                  </a>
                </li>
                <li>IELTS Academic: Overall Band 8.5 out of 9</li>
                <div>
                  <p>Online Courses</p>
                  <ul>
                    <li><a href={'https://www.coursera.org/account/accomplishments/certificate/9J8E74R8G7J3'}>Bootstrap
                      4: Universidad Austral</a></li>
                    <li><a href={'https://www.coursera.org/account/accomplishments/certificate/Q5D6XV4J3C94'}>Introduction
                      to Cyber Attacks: NYU</a></li>
                    <li><a href={'https://www.coursera.org/account/accomplishments/certificate/NRQFMEPG3T6N'}>Cyber
                      Attacks Countermeasures: NYU</a></li>
                    <li>Others</li>
                  </ul>
                </div>
              </ul>
            </div>
            <div style={{zIndex: 10}} className={'skills'}>
              <h4>Skills</h4>
              <ul>
                <li>Exceptionally organized and responsible</li>
                <li>Tae-Kwon-Do ITF Red Belt</li>
                <li>Native spanish speaker</li>
                <li>Bilingual english speaker</li>
                <li>Basic homeschooled greek</li>
                <li>Basic self-taught japanese</li>
              </ul>
            </div>
          </div>
          <div className={'technical-skills'}>
            <div className={'technical-header'}>
              <h4>Technical Skills</h4>
            </div>
            <ul>
              <li>HTML, CSS, Javascript, Typescript, SCSS</li>
              <li>Angular, React, React Native, Apollo, GraphQL</li>
              <li>Spring, Node, Java, Scala, Elixir, Haskell</li>
              <li>Docker, Kubernetes</li>
              <li>3DSMax, Photoshop, Word, Excel, Powerpoint</li>
            </ul>
          </div>
          <div className={'work-experience'}>
            <h4>Work Experience</h4>
            <Masonry columns={{md: 2, sm: 1}} spacing={2}>
              <Card>
                <CardContent className={'card'}>
                  <div>
                    <p>
                      Front-end Developer - <a href={'https://ctd-project-b87864-c03f57533efc77530090.webflow.io/'}>
                      Connect the Dots <ChevronRightIcon className={'material-icons'} fontSize={'small'}/>
                    </a>
                    </p>
                    <p>MAR 2021 - DEC 2021</p>
                    <ul>
                      <li>Web development in React</li>
                      <li>Mobile development in React Native</li>
                      <li>
                        Guided by Alex McDowell, Connect the Dots is a platform dedicated to Worldbuilding, connecting
                        people from all over the
                        world in order to create and share inspiring narratives
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className={'card'}>
                  <div>
                    <p>Front-end Web Developer for Pulse Studio in <a
                      href='https://www.elegimejor.com.ar/'>ElegiMejor.com.ar</a></p>
                    <p>AUG 2020 - JUN 2021</p>
                    <ul>
                      <li>Front-end development in Angular</li>
                      <li>Created and updated new pages for health insurance companies</li>
                      <li>In charge of implementing Search Engine Optimization (SEO) for the webpage</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Masonry>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
