import React from 'react';
import './App.css';

const styles = {
  projectpreviewpane: {
    width: "100%",
    height: "600px",
    backgroundColor: "#F3F3F3",
    marginBottom: "16px",
    paddingRight: "24px"
  }
};

class ProjectPreviewPane extends React.Component {
  render() {
    return <div style={styles.projectpreviewpane} />;
  }
}
export default ProjectPreviewPane;