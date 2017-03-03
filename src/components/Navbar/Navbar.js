
import style from './style.css';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import { Input } from 'antd';

const Search = Input.Search;
import STULogo from 'images/STUlogo.png';


class Navbar extends Component {
  static propTypes = {
    style: PropTypes.string,
    className: PropTypes.string,
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

    return (
      <div className={style.box}>
        <div
          style={this.props.style}
          className={classnames(...className.split(), style.navBar)}
        >
          <img
            src={STULogo}
            alt="logo"
            className={style.logo}
          />
          <div className={style.titleBox}>
            <p className={style.title}>电 子 科 技 大 学 学 生 会</p>
            <p className={classnames(style.title, style.english)}>The Student Union of UESTC</p>
          </div>
          <Search
            className={style.search}
            placeholder="input search text"
            style={{ width: 240, float: 'right', margin: '36px 0' }}
            onSearch={value => console.log(value)}
          />
        </div>
      </div>
    );
  }
}

export default Navbar;
