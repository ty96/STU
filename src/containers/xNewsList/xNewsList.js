
import style from './style.css';


import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './actions';
import Navbar from 'components/Navbar';
import Menus from 'components/Menus';
import Footer from 'components/Footer';
import List from 'components/List';
import getHostName from 'utils/hostName';

function mapStateToProps(state) {
  return {
    state: state.xnewslist,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

@connect(mapStateToProps, mapDispatchToProps)
class xNewsList extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  static defaultProps = {
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      news: [{}],
      newsType: 'xnews',
    };
  }

  componentDidMount = () => {
    fetch(`http://${getHostName()}/${this.state.newsType}`)
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
        <List topicList={this.state.news} newsType={this.state.newsType} />
        <Footer />
      </div>
    );
  }
}

export default xNewsList;
