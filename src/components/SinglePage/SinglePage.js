
import style from './style.css';

import React, { Component, PropTypes } from 'react';
import getHostName from 'utils/hostName';
import InnerNav from 'components/InnerNav';

class SinglePage extends Component {
  static propTypes = {
    url: PropTypes.string,
    infoList: PropTypes.Array,
  };

  static defaultProps = {
    className: '',
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      text: '',
      infoList: [{}],
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
      <div className={style.box} >
        <InnerNav infoList={this.props.infoList} />
        <div className={style.article} dangerouslySetInnerHTML={{ __html: this.state.text }}></div>
      </div>
    );
  }
}

export default SinglePage;
