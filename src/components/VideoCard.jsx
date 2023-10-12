import React from 'react'
import { useState } from 'react'
import millify from 'millify'
import { useNavigate } from 'react-router-dom'

const VideoCard = ({video, design}) => {
    const [isHover, setIsHover] = useState(false)
    const navigate = useNavigate()
    
  return (
    <div 
    onClick={()=>navigate(`/watch?v=${video.videoId}`)}
    onMouseEnter={()=>setIsHover(true)} 
    onMouseLeave={()=>setIsHover(false)}
    className={`cursor-pointer ${design}`}>
    <div>
    <img
    className='rounded-lg w-full h-full object-contain'
    src={
        isHover && video.richThumbnail
        ? video.richThumbnail[0]?.url
        : video.thumbnail[0].url
    }
        />
    </div>
    <div className='flex gap-4 mt-5'>
    <img
    style={{display: design ? "none" : ""}} 
    className='w-12 h-12 rounded-full' 
    src={video.channelThumbnail[0]?.url}/>
    <div>
    <h4 className='font-bold'>{video?.title}</h4>
    <p>{video?.channelTitle}</p>
    <div className='flex gap-2'>
        <p>{millify(video.viewCount)} görüntüleme</p>
        <p>{video.publishedTimeText}</p>
    </div>
    </div>
    </div>   
    </div>
  )
}

export default VideoCard
