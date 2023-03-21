import React from 'react';
import Flip from 'react-reveal/Flip';
import "./style.css";

class Match extends React.Component {
  render() {
    return (
      <div>
        <Flip left>
          <h1 className="match">IT'S A MATCH!</h1>
        </Flip>
      </div>
    );
  }
}

export default Match;
 