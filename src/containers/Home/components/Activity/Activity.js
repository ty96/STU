
import style from './style.css';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import getHostName from 'utils/hostName';

class Activity extends Component {
  static propTypes = {
    style: PropTypes.string,
    className: PropTypes.string,
    topicList: PropTypes.array,
    title: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    const { className } = this.props;
    const lists = this.props.topicList.map((item) => {
      const itsLink = `/topic/${item.title}`;
      return (
        <div className="topic_item" key={item.title}>
          <Link to={itsLink}>
            <p className={style.text}>{item.title}</p>
          </Link>
        </div>
      );
    });
    const pictures = this.props.topicList.map((item) => {
      const itsLink = `/topic/${item.title}`;
      return (
        <div className={style.image} key={item.title}>
          <Link to={itsLink}>
            <img className={style.image} src={`http://${getHostName()}/${item.url}`} alt="???" />
          </Link>
        </div>
      );
    });
    return (
      <div
        style={this.props.style}
        className={classnames(...className.split(), style.box)}
      >
        <p className={style.title}>{this.props.title}</p>
        <div className={style.imageBox}>
          {pictures}
        </div>
        <div className={style.listBox}>
          {lists}
        </div>
      </div>
    );
  }
}

export default Activity;
