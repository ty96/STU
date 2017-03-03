
import style from './style.css';

import React, { Component, PropTypes } from 'react';
import getHostName from 'utils/hostName';


class SinglePage extends Component {
  static propTypes = {
    url: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      text: '',
    };
  }

  componentDidMount = () => {
    fetch(`${getHostName()}/${this.props.url}`)
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
      <div className={style.article} dangerouslySetInnerHTML={{ __html: this.state.text }}></div>
    );
  }
}

export default SinglePage;
