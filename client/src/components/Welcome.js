import React from "react";
import welcomeImg from './welcome.avif';
const Welcome = () => {
  return (
      <div className="welcomePage" style={{backgroundImage:`url(${welcomeImg})`}}>
      </div>
    
  );
};

export default Welcome;
