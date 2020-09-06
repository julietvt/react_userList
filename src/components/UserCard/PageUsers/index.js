import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class PageUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoaded: false,
      error: null,
    };
  }

  load = () => {
    //setState - isLoaded, getUsers
  };

  componentDidMount() {
    this.load();
  }
  componentDidUpdate(prevProps, prevState) {
    // if currentPage was changed  this.load();
  }
  render(){
      const {error, isLoaded, users} = this.state;
      return ();
  }
}

export default PageUsers;
