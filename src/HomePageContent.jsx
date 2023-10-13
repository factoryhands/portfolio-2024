import React from 'react';
import MyAvatar from './MyAvatar';

function HomePageContent() {
  return (
    <div className="w-1/4" style={{ 
      margin: "24px", 
      height: "calc(100vh - 72px)",
      overflow: "hidden"
    }}>
      <MyAvatar />
      <p>
        I’m a multi-discipline designer with over a decade of experience. My
        design origin-story begins in the physical realm where I designed
        apparel and fitness wear.
      </p>
      <p>
        My current domain is more ephemeral, designing experiences for
        digital products. I am currently a product designer at Repl.it.
      </p>
      <p>
        I live in Seattle, Washington with my cat Lilith. I love to bike and
        am a first responder with King County ESAR. You can read more about
        my adventures in my newsletter.
      </p>
    </div>
  );
}

export default HomePageContent;