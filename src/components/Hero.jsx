import React, { useState } from 'react';


const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);    //keep track of what video is playing
    const [hasClicked, setHasClicked] = useState(false);   //keep track of whether the user has clicked anything 
    const [isLoading, setIsLoading] = useState(true);       //video loading
    const [loadedVideos, setLOadedVideos] = useState(0);    //keep track of number of videos that have loaded


    const totalVideos = 4;
    const nextVideoRef = useRef(null);                         //define the reference which willl allow us to switch the videos | use ref whenever you wanna target a specific dom element
    
    
    const handleMiniVdClick = () => {   
        setHasClicked(true);

        setCurrentIndex((prevIndex) => prevIndex + 1);


    }

    const getVideoSrc = (index) => `videos/hero-${index}.mp4`;


  

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
      <div id="video-frame" className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
        <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
            <div onClick={handleMiniVdClick} className='origin-center'>
                <video 
                    ref={nextVideoRef}
                    src={getVideoSrc(currentIndex + 1)}
                />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
