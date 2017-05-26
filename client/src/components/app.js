import React, { Component } from 'react';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {AppBar, IconButton} from 'material-ui';

import AppNavBar from './AppNavBar';

export default class App extends Component {
  render(){
    return(
      // <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <MuiThemeProvider >
        <div>
          <AppNavBar />
          <div>{this.props.children}</div>
        </div>
      </MuiThemeProvider>
    )
  }
};
