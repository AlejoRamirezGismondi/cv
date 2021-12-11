import React, {useEffect, useRef, useState} from 'react';
import './Resume.css';
import {Card, CardContent, Paper} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import profilePic from '../assets/images/profile-pic.jpg';
import Masonry from '@mui/lab/Masonry';

const Resume = () => {
  const leftPaper = useRef(null);
  const [leftPaperWidth, setLeftPaperWidth] = useState<number>();

  useEffect(() => {
    if (window.innerWidth < 1000) {
      setLeftPaperWidth(0);
      return;
    }
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setLeftPaperWidth(0);
        return;
      }
      setLeftPaperWidth(leftPaper.current.offsetWidth);
    }
    if (leftPaper?.current) setLeftPaperWidth(leftPaper.current.offsetWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [leftPaper?.current?.offsetWidth]);

  return (
    <div className={'root'}>
      <div className={'content'}>
        <div ref={leftPaper} className={'left-content'}>
          <Paper
            sx={{backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--surface').toString()}}
            className={'left-paper'}
            elevation={4}>
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
          <div className={'color-band'}>
            <div style={{marginLeft: leftPaperWidth}} className={'container'}>
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
              <div className={'education'}>
                <h4>Education</h4>
                <ul>
                  <li>Holy Cross Boys School<a href={'https://holycross.ar/'}><ChevronRightIcon
                    className={'material-icons'} fontSize={'small'}/></a>
                  </li>
                  <li>IGCSE: English A*, Literature A*</li>
                  <li>
                    Universidad Austral: Ingeniería Informática (currently in my last year)
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
          </div>
          <div style={{marginLeft: leftPaperWidth}} className={'work-experience'}>
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
