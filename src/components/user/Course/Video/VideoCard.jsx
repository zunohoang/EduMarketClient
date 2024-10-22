import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

export default function VideoCard() {
    const { videoId } = useParams();
    const videoRef = useRef(null);
    const [videoTime, setVideoTime] = useState(0);
    const [videoDuration, setVideoDuration] = useState(0);
    const [videoCurrentTime, setVideoCurrentTime] = useState(0);
    const [videoVolume, setVideoVolume] = useState(0);
    const [videoMuted, setVideoMuted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);


    useEffect(() => {
        setIsPlaying(false);
    }, [videoId])

    // set time hien ta
    useEffect(() => {
        const interval = setInterval(() => {
            if (videoRef.current) {
                setVideoCurrentTime(videoRef.current.getCurrentTime());
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [videoRef.current]);

    function onReady(event) {
        videoRef.current = event.target;
        event.target.pauseVideo();
        setVideoTime(event.target.getDuration());
        setVideoVolume(event.target.getVolume());
    }

    function onPlay(event) {
        if (isPlaying == false) {
            setIsPlaying(1);
            videoRef.current.playVideo();
        } else {
            setIsPlaying(0);
            videoRef.current.pauseVideo();
        }
    }
    function pauseVideo() {
        videoRef.current.pauseVideo();
    }
    function stopVideo() {
        videoRef.current.stopVideo();
    }
    function convertTime(time) {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = Math.floor(time % 60);
        const formattedHours = hours > 0 ? `${String(hours).padStart(2, '0')}:` : '';
        const formattedMinutes = `${String(minutes).padStart(2, '0')}:`;
        const formattedSeconds = String(seconds).padStart(2, '0');
        return `${formattedHours}${formattedMinutes}${formattedSeconds}`;
    }
    return (
        <div className="relative w-full text-white text-2xl font-medium bg-slate-300 rounded-2xl border-[#415B88] border-[5px]">
            <div onClick={() => onPlay()} className="w-full border-red border-spacing-2 h-auto flex justify-center items-center aspect-video text-white text-2xl font-medium">
                <YouTube
                    className="w-full h-full pointer-events-none rounded-lg"
                    videoId={videoId}
                    opts={{
                        width: "100%",
                        height: "100%",
                        playerVars: {
                            autoplay: 0,
                            controls: 0,
                            modestbranding: 1,
                            playsinline: 1,
                            rel: 0,
                            enablejsapi: 0,
                        },
                    }}
                    onReady={onReady}
                />
                {
                    isPlaying == false ? (
                        <div className='absolute bg-[#52A7E5] p-5 flex justify-center items-center rounded-full transition-all duration-1000 ease-out-in'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                            </svg>
                        </div>
                    ) : ("")
                }
            </div>
            <div className="flex w-full absolute bottom-0 p-1 pl-3 justify-center gap-4 mt-4 sm:scale-100 scale-90">
                <button onClick={onPlay} className="sm:px-2 sm:py-2 bg-none text-white rounded-full w-fit sm:hover:bg-[#52A7E5]">
                    {
                        !isPlaying == 1 ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sm:size-6 size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                            </svg>) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sm:size-6 size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 8.25h2.25v7.5H6.75V8.25ZM15 8.25h2.25v7.5H15v-7.5Z" />
                            </svg>
                        )
                    }
                </button>
                {/* Thanh tien trinh */}
                <div className="flex w-[100%] items-center gap-2">
                    <input
                        type="range"
                        min="0"
                        max={videoTime}
                        value={videoCurrentTime}
                        onChange={(e) => {
                            videoRef.current.seekTo(e.target.value);
                            setVideoCurrentTime(e.target.value);
                        }}
                        class="sm:w-[60%] w-[100px] sm:h-[6px] h-[5px]  bg-[#2D5D90] rounded-full"
                    />
                    <div className="text-white sm:text-sm text-xs sm:w-22 w-96 ">{convertTime(videoCurrentTime)} / {convertTime(videoTime)}</div>
                    {/* Volume */}
                    <div className="flex items-center">
                        <button onClick={() => {
                            if (videoMuted == 1) {
                                videoRef.current.unMute();
                                setVideoMuted(0);
                            } else {
                                videoRef.current.mute();
                                setVideoMuted(1);
                            }
                        }} className="px-2 py-2 bg-none text-white rounded-full hover:bg-[#52A7E5]">
                            {
                                videoMuted == 1 ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                                    </svg>

                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                                    </svg>
                                )
                            }
                        </button>
                        <div className="w-[40px] sm:w-[84px] bg-none flex items-center">
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={videoVolume}
                                onChange={(e) => {
                                    videoRef.current.setVolume(e.target.value);
                                    setVideoVolume(e.target.value);
                                }}
                                class="w-full h-[6px] bg-[#2D5D90] rounded-full"
                            />
                        </div>
                    </div>
                    {/* Fullscreen */}
                    <button onClick={() => {
                        videoRef.current.getIframe().requestFullscreen();
                    }} className="px-2 py-2 bg-none text-white rounded-full hover:bg-[#52A7E5] ml-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
