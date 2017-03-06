
import style from './style.css';


import React, { Component, PropTypes } from 'react';

import Navbar from 'components/Navbar';
import Menus from 'components/Menus';
import Footer from 'components/Footer';
import SinglePage from 'components/SinglePage';

class intro extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      infoList: [
        { title: '学联简介', url: 'a/schoolunion' },
        { title: '组织架构', url: 'a/schoolunionsystem' },
        { title: '学联历史', url: 'a/suphoto' },
        { title: '现任骨干', url: 'a/sustaff' },
        { title: '历任主席', url: 'a/suchef' },
        { title: '历史照片', url: '' },
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

export default intro;