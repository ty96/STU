
import style from './style.css';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Footer from 'components/Footer';
import List from './components/List';
import Carousels from './components/Carousels';
import Navbar from 'components/Navbar';
import Menus from 'components/Menus';
import Activity from './components/Activity';
import Tabpane from './components/Tabpane';
import { Tabs } from 'antd';

import 'whatwg-fetch';
import * as actions from './actions';

const TabPane = Tabs.TabPane;


function mapStateToProps(state) {
  return {
    state: state.home,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

@connect(mapStateToProps, mapDispatchToProps)
class Home extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  static defaultProps = {
  };

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
    fetch('http://123.56.218.173:8080/index/')
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
          <Tabs defaultActiveKey="1" className={style.tabs}>
            <TabPane tab="学术" key="1">
              <Tabpane topicList={this.state.academy} title="" />
            </TabPane>
            <TabPane tab="权益" key="2">
              <Tabpane topicList={this.state.rights} title="" />
            </TabPane>
            <TabPane tab="思潮" key="3">
              <Tabpane topicList={this.state.thoughts} title="" />
            </TabPane>
          </Tabs>

          <div className={style.others}>
            <div className={style.star}>
              <img
                src={`http://123.56.218.173:8080/${this.state.star[0].imageUrl}`}
                alt={this.state.star[0].title}
              />
              <p>{this.state.star[0].title}</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
