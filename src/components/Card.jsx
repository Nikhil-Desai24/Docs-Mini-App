import React from 'react'
import { PiFilesLight } from "react-icons/pi";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} className='relative w-60 h-72 bg-zinc-900/90 rounded-[50px] text-white px-8 py-10 overflow-hidden '>
        <PiFilesLight/>
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0  w-full left-0'>
            <div className='flex items-center justify-between mb-5 py-3 px-8'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                {data.close ? <IoIosClose/> : <LuDownload size='.7em' color='#fff'/>}
                </span>
            </div>
            {data.tag.isOpen && (
            <div className={`tag w-full h-20 py-4 ${data.tag.tagColor === 'blue' ? 'bg-blue-600' : 'bg-green-600' } flex items-center justify-center`}>
                <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
            </div>
            )
            }
            
        </div>
    </motion.div>
  )
}

export default Card
