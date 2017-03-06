
import style from './style.css';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class InnerNav extends Component {
  static propTypes = {
    infoList: PropTypes.Array,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    const innerNav = this.props.infoList.map((item) => {
      return (
        <Link
          to={(item.url ? item.url : item.title)}
          className={style.option}
          activeClassName={style.active}
        >
          {item.title}
        </Link>
      );
    });
    return (
      <div
        className={style.box}
      >
        {innerNav}
      </div>
    );
  }
}

export default InnerNav;
