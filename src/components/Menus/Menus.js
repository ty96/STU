
import style from './style.css';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import { Menu, Dropdown } from 'antd';

const menu2 = (
  <Menu className={style.dropDown}>
    <Menu.Item>
      <a target="" rel="" href="/#/a/schoolunion">学联简介</a>
    </Menu.Item>
    <Menu.Item>
      <a target="" rel="" href="/#/a/schoolunionsystem">组织架构</a>
    </Menu.Item>
    <Menu.Item>
      <a target="" rel="" href="/#/a/suphoto">学联历史</a>
    </Menu.Item>
    <Menu.Item>
      <a target="" rel="" href="/#/a/sustaff">现任骨干</a>
    </Menu.Item>
    <Menu.Item>
      <a target="" rel="" href="/#/a/suchef">历史主席</a>
    </Menu.Item>
    <Menu.Item>
      <a target="" rel="" href="">历史照片</a>
    </Menu.Item>
  </Menu>
);

const menu3 = (
  <Menu className={style.dropDown}>
    <Menu.Item>
      <a target="" rel="" href="/#/d/组织架构">组织架构</a>
    </Menu.Item>
    <Menu.Item>
      <a target="" rel="" href="/#/d/主席团">主席团</a>
    </Menu.Item>
    <Menu.Item>
      <a target="" rel="" href="/#/d/秘书处">秘书处</a>
    </Menu.Item>
    <Menu.Item>
      <a target="" rel="" href="/#/d/办公室">办公室</a>
    </Menu.Item>
    <Menu.Item>
      <a target="" rel="" href="/#/d/学习部">学习部</a>
    </Menu.Item>
    <Menu.Item>
      <a target="" rel="" href="/#/d/权益部">权益部</a>
    </Menu.Item>
    <Menu.Item>
      <a target="" rel="" href="/#/d/文艺部">文艺部</a>
    </Menu.Item>
    <Menu.Item>
      <a target="" rel="" href="/#/d/体育部">体育部</a>
    </Menu.Item>
    <Menu.Item>
      <a target="" rel="" href="/#/d/外联部">外联部</a>
    </Menu.Item>
    <Menu.Item>
      <a target="" rel="" href="/#/d/新闻中心">新闻中心</a>
    </Menu.Item>
    <Menu.Item>
      <a target="" rel="" href="/#/d/设计中心">设计中心</a>
    </Menu.Item>
    <Menu.Item>
      <a target="" rel="" href="/#/d/礼仪中心">礼仪中心</a>
    </Menu.Item>
  </Menu>
);

const menu5 = (
  <Menu className={style.dropDown}>
    <Menu.Item>
      <a target="" rel="" href="/#/c/contact">外事联络</a>
    </Menu.Item>
    <Menu.Item>
      <a target="" rel="" href="/#/c/business">商业合作</a>
    </Menu.Item>
  </Menu>
);

const menu6 = (
  <Menu className={style.dropDown}>
    <Menu.Item>
      <a target="" rel="" href="/#/o/fixserver">后勤保修</a>
    </Menu.Item>
    <Menu.Item>
      <a target="" rel="" href="">维权投诉</a>
    </Menu.Item>
    <Menu.Item>
      <a target="" rel="" href="/#/o/area">场地租借</a>
    </Menu.Item>
    <Menu.Item>
      <a target="" rel="" href="/#/o/schoolmap">学校地图</a>
    </Menu.Item>
  </Menu>
);

const menu7 = (
  <Menu className={style.dropDown}>
    <Menu.Item>
      <a target="" rel="" href="">学习资料</a>
    </Menu.Item>
    <Menu.Item>
      <a target="" rel="" href="">学习信息</a>
    </Menu.Item>
  </Menu>
);


class Menus extends Component {
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
          className={classnames(...className.split(), style.menu)}
        >
          <a className={classnames('ant-dropdown-link', style.dropBtn)} href="/#/xnews">
            学联新闻
          </a>
          <Dropdown overlay={menu2} style={{ width: 120 }}>
            <a className={classnames('ant-dropdown-link', style.dropBtn)} href="#">
              学联概况
            </a>
          </Dropdown>
          <Dropdown overlay={menu3} style={{ width: 120 }}>
            <a className={classnames('ant-dropdown-link', style.dropBtn)} href="#">
              校学生会
            </a>
          </Dropdown>
          <a className={classnames('ant-dropdown-link', style.dropBtn)} href="/#/s/framework">
            院会体系
          </a>
          <Dropdown overlay={menu5} style={{ width: 120 }}>
            <a className={classnames('ant-dropdown-link', style.dropBtn)} href="#">
              合作交流
            </a>
          </Dropdown>
          <Dropdown overlay={menu6} style={{ width: 120 }}>
            <a className={classnames('ant-dropdown-link', style.dropBtn)} href="#">
              公共服务
            </a>
          </Dropdown>
          <Dropdown overlay={menu7} style={{ width: 120 }}>
            <a className={classnames('ant-dropdown-link', style.dropBtn)} href="#">
              学习空间
            </a>
          </Dropdown>
          <a className={classnames('ant-dropdown-link', style.dropBtn)} href="/#/j/joinus">
            加入我们
          </a>
        </div>
      </div>
    );
  }
}

export default Menus;
