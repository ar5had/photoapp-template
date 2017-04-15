import React, { Component } from 'react';

import Item from '../Item';

import './styles.sass';

class OtherInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="otherInfo">
        <h4 className="heading">Your Uploads</h4>
        <div className="mypolaroidsWrapper">
          {"1234567890".split("").map((e, i) => <Item key={i} />)}
        </div>
      </div>
    );
  }
}

export default OtherInfo;
