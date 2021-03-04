import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      // Redirect Home
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return;
    } else {
      return null;
    }
  }
}

export default Detail;
