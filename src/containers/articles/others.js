
import style from './style.css';

import React, { Component, PropTypes } from 'react';

import Navbar from 'components/Navbar';
import Menus from 'components/Menus';
import Footer from 'components/Footer';
import SinglePage from 'components/SinglePage';

class others extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      infoList: [
        { title: '后勤保修', url: 'o/fixserver' },
        { title: '场地租借', url: 'o/area' },
        { title: '学校地图', url: 'o/schoolmap' },
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

export default others;