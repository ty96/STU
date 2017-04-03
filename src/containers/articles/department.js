
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

  constructor(props, context) {
    super(props, context);
    this.state = {
      infoList: [
        { title: '组织架构', url: 'd/组织架构' },
        { title: '设计中心', url: 'd/设计中心' },
        { title: '礼仪中心', url: 'd/礼仪中心' },
        { title: '新闻中心', url: 'd/新闻中心' },
        { title: '体育部', url: 'd/体育部' },
        { title: '文艺部', url: 'd/文艺部' },
        { title: '办公室', url: 'd/办公室' },
        { title: '秘书处', url: 'd/秘书处' },
        { title: '主席团', url: 'd/主席团' },
        { title: '权益部', url: 'd/权益部' },
        { title: '组织部', url: 'd/组织部' },
        { title: '外联部', url: 'd/外联部' },
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
        <SinglePage url={`department/${param}`} infoList={this.state.infoList} />
        <Footer />
      </div>
    );
  }
}

export default department;