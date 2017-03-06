
import style from './style.css';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class List extends Component {
  static propTypes = {
    style: PropTypes.string,
    className: PropTypes.string,
    topicList: PropTypes.array,
    newsType: PropTypes.string,
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
      const itsLink = `/${this.props.newsType}/${item.title}`;
      return (
        <div className={style.topic} key={item.title}>
          <Link to={itsLink}>
            <p className={style.text}>{item.title}</p>
          </Link>
        </div>
      );
    });
    return (
      <div
        style={this.props.style}
        className={classnames(...className.split(), style.box)}
      >
        <Link to={`/${this.props.newsType}/`}>
          <p className={(this.props.title ? style.title : '')}>
            {this.props.title}
          </p>
        </Link>
        {lists}
      </div>
    );
  }
}

export default List;
