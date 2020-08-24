import React from "react";
import { A } from "hookrouter";

class MiButton extends React.Component {
  render() {
    return <A {...this.props} />;
  }
}

export default MiButton;
