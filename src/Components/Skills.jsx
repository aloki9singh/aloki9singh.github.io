import React from 'react'
import HTML from "../Pngs/html.png"
import CSS from "../Pngs/css.png"
import Javascript from "../Pngs/javascript.png"

import ReactImg from "../Pngs/react.png"

import Github from "../Pngs/github.png"
import Tailwind from "../Pngs/tailwind.png"
import Node from "../Pngs/node.png"
import Mongo from "../Pngs/mongo.png"
const Skills = () => {
  return (
    <div name="skills"  className="w-full h-screen bg-[#0a192f]  text-gray-300">
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#ccd6f6]'>Tech Stacks</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-5 text-center py-8'>
                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML Icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS Icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={Javascript} alt="Javascript Icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={ReactImg} alt="ReactImg Icon" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={Mongo} alt="FireBase Icon" />
                    <p className='my-4'>MONGO</p>
                </div>
                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={Github} alt="Github Icon" />
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind Icon" />
                    <p className='my-4'>TAILWIND</p>
                </div>
                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500 '>
                    <img className='w-20 mx-auto' src={Node} alt="Node Icon" />
                    <p className='my-4'>NODE</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills