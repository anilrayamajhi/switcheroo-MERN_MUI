import React from 'react';
import TextField from 'material-ui/TextField';
import {grey800, grey700} from 'material-ui/styles/colors';
import {RaisedButton} from 'material-ui';
import {Link} from 'react-router';

const styles = {
  underlineStyle: {
    borderColor: grey800,
  },
  floatingLabelFocusStyle: {
    color: grey700
  }
}

const Login = () => (
  <form className="authwrapper container">
    <TextField
      hintText="id"
      floatingLabelText="Username"
      underlineFocusStyle={styles.underlineStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    />
  <br />
    <TextField
      hintText="password"
      floatingLabelText="Password"
      underlineFocusStyle={styles.underlineStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
    /><br /><br />
  <div>
    <Link to="/">
      <RaisedButton label="Login" />
    </Link>
  </div><br /><br />
<div className="text-right register-path"><strong>Register here</strong></div>
</form>
);

export default Login;
