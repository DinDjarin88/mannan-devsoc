import React, { useState } from 'react';
import ReactPlayer from 'react-player';





                        <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                        <ReactPlayer
                        url={PCBvideo}
                        muted={false}
                        playing={playstate}
                        width="500px"
                        height="100%"
                        />
                    </div>

                    <button className="playButton" onClick={handlePlay}>{playstate ? 'Pause': 'Play'}</button>

                    