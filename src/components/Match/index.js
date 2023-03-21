import React from 'react';
import Bounce from 'react-reveal/Bounce';
import "./style.css";

class Match extends React.Component {
  render() {
    return (
      <div>
        <Bounce left>
          <h1 className="match">IT'S A MATCH!</h1>
        </Bounce>
      </div>
    );
  }
}

export default Match;
 