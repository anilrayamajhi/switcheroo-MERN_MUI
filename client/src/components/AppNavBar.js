import React, { Component } from 'react';
import {AppBar, IconButton, Drawer, MenuItem, RaisedButton} from 'material-ui';
import {grey800} from 'material-ui/styles/colors';
import { Link } from 'react-router';


const iconStyles = {
  color: grey800,
};

export default class AppNavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render(){
    return(
      <div>
        <AppBar
          title={"GI"}
          style={{backgroundColor:grey800}}
          titleStyle={{textAlign:"right"}}
          showMenuIconButton={true}

          iconElementLeft={
            <IconButton
              iconClassName="material-icons"
              tooltip="👻&nbsp;&nbsp;Nav"
              tooltipPosition="bottom-right"
              touch={true}
              onTouchTap={this.handleToggle}
              onClick={this.handleToggle}
              >
              dashboard
            </IconButton>}
        />

      {/* **************************************************** */}


        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose} onClick={this.handleClose}><Link to='/pappi1'>Pappi1</Link></MenuItem>
        <MenuItem onTouchTap={this.handleClose} onClick={this.handleClose}><Link to='/pappi2'>Pappi2</Link></MenuItem>
        </Drawer>
      </div>
    )
  }
}
