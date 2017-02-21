
import style from './style.css';

import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Carousel } from 'antd';
import getHostName from 'utils/hostName';


class Carousels extends Component {
  static propTypes = {
    style: PropTypes.string,
    className: PropTypes.string,
    carouselList: PropTypes.array,
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
    const carousels = this.props.carouselList.map((item) => {
      const itsLink = `/image/${item.image}`;
      return (
        <div className="topic_item" key={item.image}>
          <Link to={itsLink}>
            <img
              src={`http://${getHostName()}/${item.image}`}
              alt={item.url}
              className={classnames(...className.split(), style.pictures)}
            />
          </Link>
        </div>
      );
    });
    return (
      <Carousel
        autoplay
        style={this.props.style}
        className={classnames(...className.split(), style.carousel)}
      >
        {carousels}
      </Carousel>
    );
  }
}

export default Carousels;
