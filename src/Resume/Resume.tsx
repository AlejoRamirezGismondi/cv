import React from 'react';
import {Paper} from "@mui/material";

const Resume = () => {
  return (
    <div className={'root'}>
      {/*<div className={'header'}>*/}
      {/*  <h1>Alejo Ramirez Gismondi</h1>*/}
      {/*</div>*/}
      <div className={'content'}>
        <Paper className={'left-bar'} elevation={3}>
          <p>text</p>
        </Paper>
        <div className={'right-content'}>
          <p>text</p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
