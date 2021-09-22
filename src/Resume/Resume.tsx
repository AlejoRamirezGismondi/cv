import React from 'react';
import './Resume.css';
import {Paper} from "@mui/material";

const Resume = () => {
  return (
    <div className={'root'}>
      <div className={'content'}>
        <div className={'left-content'}>
          <Paper className={'left-paper'} elevation={4}>
            <h1>Alejo Ramírez Gismondi</h1>
            <h3>Software Engineer</h3>
            <div>
              <h2>Contact</h2>
              <p>ramirezgismondialejo@gmail.com</p>
              <p>No socials for now :D</p>
            </div>
          </Paper>
        </div>
        <div className={'right-content'}>
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
          <div className={'technical-skills'}>
            <h4>Technical Skills</h4>
          </div>
          <div>skills</div>
          <div>work experience</div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
