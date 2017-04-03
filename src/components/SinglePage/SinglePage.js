
import style from './style.css';

import React, { Component, PropTypes } from 'react';
import getHostName from 'utils/hostName';
import InnerNav from 'components/InnerNav';

class SinglePage extends Component {
  static propTypes = {
    url: PropTypes.string,
    infoList: PropTypes.array,
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
    this.fetchData();
  }

  componentWillReceiveProps = () => {
    this.fetchData();
  }

  fetchData = () => {
    fetch(`${getHostName()}/api/${this.props.url}`)
       .then((res) => {
         res.json()
           .then((data) => {
             this.setState(data);
             this.setState({ text: data.text.replace(/[\\"]g/, "'") });
           });
       })
       .catch((error) => {
         console.log('request failed', error);
       });
  }

  render() {
    return (
      <div className={style.box}>
        <InnerNav infoList={this.props.infoList} />
        <div className={style.article} dangerouslySetInnerHTML={{ __html: this.state.text }}></div>
      </div>
    );
  }
}

export default SinglePage;
