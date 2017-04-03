
import style from './style.css';

import React, { Component } from 'react';
import Footer from 'components/Footer';
import List from './components/List';
import Carousels from './components/Carousels';
import Navbar from 'components/Navbar';
import Menus from 'components/Menus';
import Activity from './components/Activity';
import Tabpane from './components/Tabpane';
import { Tabs } from 'antd';
import getHostName from 'utils/hostName';
import learn from 'images/learn.png';
import rights from 'images/rights.png';
import thoughts from 'images/thoughts.png';


import 'whatwg-fetch';

const TabPane = Tabs.TabPane;

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      information: [{}],
      academy: [{}],
      carousel: [{}],
      rights: [{}],
      sNews: [{}],
      star: [{}],
      thoughts: [{}],
      wonderfulImage: [{}],
      wonderfulVideo: [{}],
      xActivity: [{}],
      xNews: [{}],
    };
  }

  componentDidMount = () => {
    fetch(`${getHostName()}/api/index/`)
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
      <div>
        <Navbar />

        <Carousels carouselList={this.state.carousel} style={{ marginTop: '-100px' }} />

        <Menus options="" />

        <div className={style.newsBox}>
          <List topicList={this.state.xNews} newsType={'xnews'} title="校会新闻" />
          <List topicList={this.state.sNews} newsType={'snews'} title="院会新闻" />
          <List topicList={this.state.information} newsType={'information'} title="信息公告" />
        </div>

        <div className={style.newsBox}>
          <Activity topicList={this.state.xActivity} title="学联活动推荐" />
        </div>

        <div className={style.newsBox}>
          <div className={style.tabTitle}>
            <img className={style.tabL} src={learn} alt="学术" />
            <img className={style.tabR} src={rights} alt="权益" />
            <img className={style.tabT} src={thoughts} alt="思潮" />
          </div>
          <Tabs defaultActiveKey="1" className={style.tabs}>
            <TabPane tab="" key="1">
              <Tabpane topicList={this.state.academy} type={'academy'} title="" />
            </TabPane>
            <TabPane tab="" key="2">
              <Tabpane topicList={this.state.rights} type={'rights'} title="" />
            </TabPane>
            <TabPane tab="" key="3">
              <Tabpane topicList={this.state.thoughts} type={'thoughts'} title="" />
            </TabPane>
          </Tabs>

          <div className={style.others}>
            <div className={style.star}>
              <img
                src={`${getHostName()}${this.state.star[0].imageUrl}`}
                alt={this.state.star[0].title}
              />
              <p>{this.state.star[0].title}</p>
            </div>
            <div className={style.wonder}>
              <img src={`${getHostName()}${this.state.wonderfulImage[0].imageUrl}`} alt="" />
              <img src={`${getHostName()}${this.state.wonderfulVideo[0].imageUrl}`} alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
