import React from 'react';
import './Resume.css';
import {Card, CardContent, Paper} from "@mui/material";

const Resume = () => {
  return (
    <div className={'root'}>
      <div className={'content'}>
        <div className={'left-content'}>
          <Paper className={'left-paper'} elevation={4}>
            <div className={'title-container'}>
              <h1 className={'title'}>Alejo Ramírez Gismondi</h1>
              <h3>Software Engineer</h3>
            </div>
            <div>
              <h2>Contact</h2>
              <p>ramirezgismondialejo@gmail.com</p>
              <p>No socials for now :D</p>
            </div>
          </Paper>
        </div>
        <div className={'right-content'}>
          <div className={'container'}>
            <div className={'education'}>
              <h4>Education</h4>
              <ul>
                <li><a href={'https://holycross.ar/'}>Holy Cross Boys School</a></li>
                <li><a href={'https://www.austral.edu.ar/ingresantes/carreras/ingenieria-en-informatica/'}>Universidad Austral:</a> Ingeniería
                  Informática (4th out of 5 years)</li>
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
                <li>Native spanish speaker</li>
                <li>Bilingual english speaker</li>
                <li>Basic homeschooled greek</li>
                <li>Basic self-taught japanese</li>
              </ul>
            </div>
          </div>
          <div className={'technical-skills'}>
            <h4>Technical Skills</h4>
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
                    <p>For Pulse Studio in ElegiMejor.com.ar as Front-end Web Developer</p>
                    <p>AUG 2020 - JUN 2021</p>
                    <ul>
                      <li>Front-end development in Angular</li>
                      <li>Created and updated new pages for social insurance companies</li>
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
