
import style from './style.css';


import React, { Component, PropTypes } from 'react';

import Navbar from 'components/Navbar';
import Menus from 'components/Menus';
import Footer from 'components/Footer';
import SinglePage from 'components/SinglePage';

class department extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
  };

  render() {
    const param = this.props.params.id;

    return (
      <div className={style.body}>
        <Navbar />
        <div className={style.blank}>&nbsp;</div>
        <Menus options="" />
        <SinglePage url={`department/${param}`} />
        <Footer />
      </div>
    );
  }
}

export default department;