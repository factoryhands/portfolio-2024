import React from "react";
import "./App.css";

const styles = {
  avatar: {
    width: "100%",
    height: 0,
    paddingBottom: "100%" /* set the aspect ratio*/,
    backgroundImage: `url('public/images/portrait.png')` /* Replace with your image url */,
    backgroundSize: "cover" /* Adjust as needed */,
    backgroundPosition: "center" /* Adjust as needed */,
    border: "1px solid black",
    borderTopLeftRadius: "100%" /* Adjust as needed */,
    borderTopRightRadius: "100%" /* Adjust as needed */
  },
};

class MyAvatar extends React.Component {
  render() {
    return <div style={styles.avatar} />;
  }
}
export default MyAvatar;
