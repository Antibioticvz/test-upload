import React from "react";
import { A } from "hookrouter";

class MiButtonLink extends React.Component {
  render() {
    return <A {...this.props} />;
  }
}

export default MiButtonLink;
