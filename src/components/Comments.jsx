import React, { useEffect, useState } from 'react'
import { getData } from '../utils/Helpers'
import Loading from './Loading'
import {AiOutlineLike} from "react-icons/ai"
import {AiOutlineDislike} from "react-icons/ai"


const Comments = ({ id }) => {
    const [comments, setComments] = useState(null)
    useEffect(() => {
        getData(`/comments?id=${id}`).then((res) =>
            setComments(res.data.data))
    }, [])

    return (
        <div onClick={() => setExpand(!expans)} className='flex flex-col '>
            {!comments ? <Loading /> : comments.map((item, index) =>
                <div key={index} className='flex items-center'>
                   
                    <img className='h-12 w-12 rounded-full' src={item.authorThumbnail[0].url} />
                    <div className='flex flex-col gap-1 mx-2 mt-4 align-items-center'>
                        <div>
                            <span>{item.authorText}</span>
                            <span className='ml-2'>{item.publishedTimeText}</span>
                        </div>
                        <p>{item.textDisplay}</p>
                        <div className='flex gap-2 items-center '>
                     <div>  <AiOutlineLike/></div>
                       <div> <AiOutlineDislike/></div>
                       <button className='py-1 px-3 rounded-lg outline-0 hover:bg-gray-900'>Yanıtla</button>
                        </div>
                    </div>
                </div>)}

        </div>
    )
}

export default Comments

