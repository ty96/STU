
import style from './style.css';

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class List extends Component {
  static propTypes = {
    topicList: PropTypes.array,
    newsType: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    const lists = this.props.topicList.map((item) => {
      const itsLink = `/${this.props.newsType}/${item.title}`;
      return (
        <div className="topic_item" key={item.title}>
          <Link to={itsLink}>
            <p className={style.text}>
              <span>[{item.datetime}]&nbsp;</span>
              {item.title}
              <span className={style.viewNum}>
                『&nbsp;阅读量:
                <span>{item.viewNum}</span>
                &nbsp;』
              </span>
            </p>
          </Link>
        </div>
      );
    });
    return (
      <div
        className={style.detail}
      >
        <div className={style.article}>
          {lists}
        </div>
      </div>
    );
  }
}

export default List;
