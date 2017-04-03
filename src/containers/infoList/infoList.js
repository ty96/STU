
import style from './style.css';

import React, { Component } from 'react';
import Navbar from 'components/Navbar';
import Menus from 'components/Menus';
import Footer from 'components/Footer';
import List from 'components/List';
import getHostName from 'utils/hostName';
import { Pagination } from 'antd';

class infoList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      information: [{}],
      newsType: 'information',
      number: 1,
    };
  }

  componentDidMount = () => {
    fetch(`${getHostName()}/api/${this.state.newsType}`)
      .then((res) => {
        res.json()
          .then((data) => {
            this.setState(data);
          });
      })
      .catch((error) => {
        console.log('request failed', error);
      });
  }

  turnTo = (num) => {
    fetch(`${getHostName()}/api/${this.state.newsType}?page=${num}`)
      .then((res) => {
        res.json()
          .then((data) => {
            this.setState(data);
          });
      })
      .catch((error) => {
        console.log('request failed', error);
      });
  }

  render() {
    return (
      <div className={style.listBox}>
        <Navbar />
        <div className={style.blank}>&nbsp;</div>
        <Menus options="" />
        <List
          topicList={this.state.information}
          newsType={this.state.newsType}
        />
        <Pagination
          showQuickJumper
          className={style.page}
          defaultCurrent={1}
          total={this.state.number}
          onChange={this.turnTo}
        />
        <Footer />
      </div>
    );
  }
}

export default infoList;
