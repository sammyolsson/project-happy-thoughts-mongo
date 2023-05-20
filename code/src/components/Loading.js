import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export const Loading = () => {
  return (
    // <div className="mainContainer">
    //   <h2 className="loading">Loading thoughts...</h2>
    // </div>
    <div className="lottie">
      <Player
        loop // Set the animation to loop
        autoplay // Set the animation to play automatically
        src="https://assets3.lottiefiles.com/packages/lf20_hlN1qcGCQP.json" // Set the source of the animation
        className="lottie" // Add a class to the Lottie animation for styling purposes
        speed={1} />
    </div>
  )
}