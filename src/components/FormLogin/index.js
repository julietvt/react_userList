// Login Form

import React, { Component } from 'react';
import { render } from '@testing-library/react';
import styles from './LoginForm.module.css';

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPassword: '',
    };
  }
  handleEmailChange = (event) => {
    this.setState({ userEmail: event.target.value });
  };
  handlePasswordChange = (event) => {
    this.setState({ userPassword: event.target.value });
  };

  /*
  handleCommonChange = ({target: {name, value}}) => {
      this.setState({ [name]: value}); 
  }
*/

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { userEmail, userPassword } = this.state;
    return (
      <form className={styles.container} onSubmit={this.handleSubmit}>
        <input
          type="email"
          name="userEmail"
          value={userEmail}
          onChange={this.handleEmailChange}
          placeholder="user email"
          className={styles.input}
        />
        <input
          type="password"
          name="userPassword"
          value={userPassword}
          onChange={this.handlePasswordChange}
          placeholder="user pass"
          className={styles.input}
        />
        <button type="submit"> LOGIN</button>
      </form>
    );
  }
}
export default FormLogin;
