import React from 'react';
import ProjectPreviewPane from './ProjectPreviewPane';

function ProjectPreviewPaneContainer() {
  return (
    <div style={{ 
        paddingTop: "24px" 
    }}>
      <ProjectPreviewPane />
      <ProjectPreviewPane />
      <ProjectPreviewPane />
    </div>
  );
}

export default ProjectPreviewPaneContainer;