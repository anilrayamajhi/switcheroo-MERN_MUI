import React, { Component } from 'react';
import {AppBar, IconButton, Drawer, MenuItem, RaisedButton} from 'material-ui';
import {grey800} from 'material-ui/styles/colors';
import { Link } from 'react-router';
import { connect } from 'react-redux';
// import * as actions from '../actions';
import { CHANGE_AUTH, authenticate } from '../actions/index';


const iconStyles = {
  color: grey800,
};

class AppNavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {open: false, open1: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => {
    setTimeout(() => {
      this.setState({open: false})
    }, 400)
  };

  handleToggle1 = () => {
    setTimeout(() => {
      this.setState({open1: !this.state.open1})
    }, 400)
  };

  handleClose1 = () => {
    setTimeout(() => {
      this.setState({open1: false})
    }, 400)
  };


  handleAuth() {
  if(this.props.authenticated){
    return (
        <span onClick={() => this.props.authenticate(false)}>Sign Out</span>
    )
  }
    return (
      <span onClick={() => this.props.authenticate(true)}>Sign In</span>
    )
  }

  profileAvatar() {
    if(!!this.props.authenticated){
      return(
        <IconButton
          iconClassName="material-icons"
          touch={true}
          onTouchTap={this.handleClose1}
          onClick={this.handleClose1}
          >
          <Link to='/login'>account_circle</Link>
        </IconButton>
      )
    }
  }


  render(){
    return(
      <div>
        <div className="affix-appBar">
        <AppBar
          style={{backgroundColor:grey800}}
          showMenuIconButton={true}
          zDepth={3}
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
            iconElementRight={
              <IconButton
                iconClassName="material-icons"
                touch={true}
                onTouchTap={this.handleToggle1}
                onClick={this.handleToggle1}
                >
                keyboard_arrow_left
              </IconButton>}
        />
    </div>

      {/* **************************************************** */}


        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <div className="nav-wrapper"><MenuItem onTouchTap={this.handleClose} onClick={this.handleClose}><Link to='/'><span className="nav-title">GI</span></Link></MenuItem></div>
          <MenuItem onTouchTap={this.handleClose} onClick={this.handleClose}><Link to='/pappi1'>Pappi1</Link></MenuItem>
          <MenuItem onTouchTap={this.handleClose} onClick={this.handleClose}><Link to='/pappi2'>Pappi2</Link></MenuItem>
          <MenuItem onTouchTap={this.handleClose} onClick={this.handleClose}>{this.handleAuth()}</MenuItem>
        </Drawer>

        <Drawer docked={false} width={50} openSecondary={true} open={this.state.open1} onRequestChange={(open1) => this.setState({open1})}>
          <div className="nav-wrapper">
            <IconButton
              iconClassName="material-icons"
              touch={true}
              onTouchTap={this.handleToggle1}
              onClick={this.handleToggle1}
              >
              keyboard_arrow_right
            </IconButton><br /><br />
            <IconButton
            iconClassName="material-icons"
            touch={true}
            onTouchTap={this.handleClose1}
            onClick={this.handleClose1}
            >
            <Link to='/'>home</Link>
            </IconButton>
            <br /><br />
            {this.profileAvatar()}
          </div>
        </Drawer>
      </div>
    )
  }
}

const puke = (obj) => {
  return(
    <pre>{JSON.stringify(obj, null, " ")}</pre>
  )
}

const mapStateToProps = (state) => {
  return(
    {authenticated: state.authenticated}  //this state is redux state from reducers/index.js
  )
}

// export default connect(mapStateToProps, actions)(AppNavBar);
export default connect(mapStateToProps, { CHANGE_AUTH, authenticate })(AppNavBar);
