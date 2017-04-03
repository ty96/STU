
import style from './style.css';
import React, { Component, PropTypes } from 'react';
import Wechat from 'images/wechat.png';


class Footer extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <div className={style.footer}>
        <div className={style.QR}>
          <img src={Wechat} alt="wechat" />
          <p>电子科技大学学生会官方微信</p>
        </div>
        <div className={style.link}>
          <p className={style.title}>
            <span className={style.lineThrough}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>常用链接</span>
            <span className={style.lineThrough}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </p>
          <p><a>电子科技大学</a></p>
          <p><a>电子科技大学共青团委员会</a></p>
        </div>
        <div className={style.link}>
          <p className={style.title}>
            <span className={style.lineThrough}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>版权信息</span>
            <span className={style.lineThrough}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </p>
          <p>摄影: 王力川</p>
          <p>版面设计: 设计中心 倪熠熠</p>
          <p>版面设计: 设计中心 宋欣豪</p>
        </div>
        <p>IEC 工作室</p>
        <p>© 2017 电子科技大学学生会</p>
        <div className={style.login}>
          <a href="http://222.197.182.48/xadmin/">管理员登陆</a>
        </div>
      </div>
    );
  }
}

export default Footer;
