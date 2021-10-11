import React from 'react';
import './Resume.css';
import {Card, CardContent, Paper} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import profilePic from '../assets/images/profile-pic.jpg';
import {getLogos} from "./Logos";

const Resume = () => {
  const logos = getLogos();

  return (
    <div className={'root'}>
      <div className={'content'}>
        <div className={'left-content'}>
          <Paper className={'left-paper'} elevation={4}>
            <div className={'title-container left-paper-section'}>
              <img className={'profile-pic'} alt={'Profile Pic'} src={profilePic}/>
              <h1 className={'title'}>Alejo Ramírez Gismondi</h1>
              <h3>Software Engineer</h3>
            </div>
            <div className={'left-paper-section'}>
              <h2>About Me</h2>
              <p>I enjoy trying different outlets and activities</p>
              <p><a href={'https://mba.nucba.ac.jp/en/ranking/'}>Currently applying for a student exchange at Nagoya University of Commerce and Business, Japan</a></p>
            </div>
            <div className={'left-paper-section'}>
              <h2>Contact</h2>
              <p><a href={'mailto: ramirezgismondialejo@gmail.com'}><MailOutlineIcon fontSize={'small'}/></a>ramirezgismondialejo@gmail.com</p>
              <p><a href={'https://github.com/AlejoRamirezGismondi'}><GitHubIcon fontSize={'small'}/></a>Github</p>
              <p>No socials for now :D</p>
            </div>
          </Paper>
        </div>
        <div className={'right-content'}>
          <div className={'container'}>
            <div className={'education'}>
              <h4>Education</h4>
              <ul>
                <li>Holy Cross Boys School<a href={'https://holycross.ar/'}><ChevronRightIcon fontSize={'small'}/></a></li>
                <li>IGCSE: English A*, Literature A*</li>
                <li>Universidad Austral: Ingeniería Informática (currently in 4th out of 5 years)<a href={'https://www.austral.edu.ar/ingresantes/carreras/ingenieria-en-informatica/'}><ChevronRightIcon fontSize={'small'}/></a></li>
                <li>IELTS Academic: Overall Band 8.5</li>
                <div>
                  <p>Online Courses</p>
                  <ul>
                    <li>Bootstrap 4: Universidad Austral</li>
                    <li>Introduction to Cyber Attacks: NYU</li>
                    <li>Cyber Attacks Countermeasures: NYU</li>
                    <li>Others</li>
                  </ul>
                </div>
              </ul>
            </div>
            <div className={'skills'}>
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
              <div className={'logo-roulette'}>
                {logos.map(logo => {
                  return <img className={'logo'} src={logo.image} alt={logo.alt} key={logo.alt}/>
                })}
              </div>
            </div>
            <ul>
              <li>Front-end web development: HTML, CSS, Javascript, Thymeleaf, Bootstrap 4</li>
              <li>Angular, React, React Native, Typescript, SCSS</li>
              <li>Back-end web development: Spring, Node, Java, Scala, Elixir, Haskell</li>
              <li>Docker, Kubernetes</li>
              <li>3DSMax, Photoshop, Word, Excel, Powerpoint</li>
            </ul>
          </div>
          <div className={'work-experience'}>
            <h4>Work Experience</h4>
            <div className={'work-experience-grid'}>
              <Card>
                <CardContent>
                  <div className={'header'}>
                    <p>Front-end Web Developer for Pulse Studio in ElegiMejor.com.ar</p>
                    <p>AUG 2020 - JUN 2021</p>
                    <ul>
                      <li>Front-end development in Angular</li>
                      <li>Created and updated new pages for health insurance companies</li>
                      <li>In charge of implementing Search Engine Optimization (SEO) for the webpage</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
