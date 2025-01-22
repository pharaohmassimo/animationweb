import React, { useState, useRef, useEffect } from 'react';

// Hero component for displaying and cycling through videos
const Hero = () => {
    
    const [currentIndex, setCurrentIndex] = useState(1);                           // State to keep track of the current video index
    const [hasClicked, setHasClicked] = useState(false);                           // State to track whether the user has clicked on the video
    const [isLoading, setIsLoading] = useState(true);                              // State to track if the video is still loading
    const [loadedVideos, setLoadedVideos] = useState(0);                           // State to keep track of how many videos have loaded


    const totalVideos = 3; // Total number of videos available
    const nextVideoRef = useRef(null); // Reference for the video element

    // Function to handle when a video loads
    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1); // Increment the loaded videos count
    };

    // 
    const upcomingVideoINdex = (currentIndex % totalVideos) + 1;

    // Function to handle clicks on the video to switch to the next video
    const handleMiniVdClick = () => {
        setHasClicked(true); // Set clicked state to true
        // Update the current index, resetting to 1 if it exceeds the total
        setCurrentIndex(upcomingVideoINdex);
    };

    // Function to get the video source URL based on the index
    const getVideoSrc = (index) => `public/videos/hero-${index}.mp4`;

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
                <div>
                    <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                        <div onClick={handleMiniVdClick} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
                            <video 
                                ref={nextVideoRef}                                                          // Attach the video reference
                                src={getVideoSrc(upcomingVideoINdex)}                                         // Get the video source based on the current index
                                loop                                                                        // Video will loop when it finishes
                                muted                                                                       // Mute the video by default
                                id="current-video"                                                          // ID for the video element
                                className="size-64 origin-center scale-150 object-cover object-center"     // Styling for the video
                                onLoadedData={handleVideoLoad}                                              // Call handleVideoLoad when video data is loaded
                            />
                        </div>
                    </div>
                    <video
                      ref={nextVideoRef}
                      src={getVideoSrc(currentIndex)}
                      loop
                      muted
                      id="next-video"
                      className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
                      onLoadedData={handleVideoLoad}
                    />
                    <video
                    src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex )}
                    autoPlay
                    loop
                    muted
                    className='absolute left-0 top-0 size-full object-cover object-center'
                    onLoadedData={handleVideoLoad}
                    />
                </div>
                <h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75'>
                  G<b>a</b>ming
                </h1>
                <div className='absolute left-0 top-0 z-40 size-full'>
                  <div className='mt-24 px-5 sm:px-10'>
                    <h1 className='special-font hero-heading text-blue-100'>redefi<b>n</b>e</h1>
                    <p className='mb-5 max-w-64 font-robert-regular text-blue-100'>Enter the Metagame Layer<br/>Unleash the Play Economy</p>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default Hero; // Export the Hero component for use in other parts of the application