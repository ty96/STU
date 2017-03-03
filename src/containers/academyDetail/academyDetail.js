
import style from './style.css';


import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './actions';
import Detail from 'components/Detail';
import Navbar from 'components/Navbar';
import Menus from 'components/Menus';
import Footer from 'components/Footer';

function mapStateToProps(state) {
  return {
    state: state.topicdetail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

@connect(mapStateToProps, mapDispatchToProps)
class academyDetail extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
  };

  render() {
    const title = this.props.params.id;

    return (
      <div className={style.body}>
        <Navbar />
        <div className={style.blank}>&nbsp;</div>
        <Menus options="" />
        <Detail articleType="academy" title={title} />
        <Footer />
      </div>
    );
  }
}

export default academyDetail;
