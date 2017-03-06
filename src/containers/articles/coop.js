
import style from './style.css';

import React, { Component, PropTypes } from 'react';

import Navbar from 'components/Navbar';
import Menus from 'components/Menus';
import Footer from 'components/Footer';
import SinglePage from 'components/SinglePage';

class coop extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      infoList: [
        { title: '外事联络', url: 'c/contact' },
        { title: '商业合作', url: 'c/business' },
      ],
    };
  }

  render() {
    const param = this.props.params.id;

    return (
      <div className={style.body}>
        <Navbar />
        <div className={style.blank}>&nbsp;</div>
        <Menus options="" />
        <SinglePage url={param} infoList={this.state.infoList} />
        <Footer />
      </div>
    );
  }
}

export default coop;