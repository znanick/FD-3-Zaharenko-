import React from "react";
import PropTypes from "prop-types";

import "./Br2jsx.css";

class Br2jsx extends React.Component {
  render() {
    var words = this.props.text.split(/<br *\/?>/i);
    var code = [];
    words.forEach((word, i) => {
      if(i){
        code.push(<br key={i}/>)
      }
      code.push(word)
    });
    return code;
  }
}

export default Br2jsx;
