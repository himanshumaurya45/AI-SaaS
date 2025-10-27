import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { Image, Sparkles } from 'lucide-react';
import Markdown from 'react-markdown';

function GenerateImages() {

  const imageStyle=[ 'Realistic', 'Ghibli Style', 'Anime Style', 'Cartoon Style', 'Fantasy Style', '3D Style', 'Portrait Style', 'Realistic Style' ]
  const navigate=useNavigate();
  const [selectedStyle,setSelectedStyle]=useState('Realistic');
  const [loading,setLoading]=useState(false);
  const [publish,setPublish]=useState(false);
  const [content,setContent]=useState("");
  const [input,setInput]=useState("");

  const onSubmitHandler = async (e)=> {
    e.preventDefault();
  }
  return (
    <div className='h-full p-6 flex justify-center items-start flex-wrap gap-4 text-slate-700'>
      <nav className='w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200'>
        <img className= "cursor-pointer w-32 sm:w-44 " src={assets.logo} alt="" onClick={()=> navigate('/')}/>
      </nav>

        {/* Left column */}
        <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'>
          <div className='flex items-center gap-3'>
            <Sparkles className='w-6 text-[#00AD25]'/>
            <h1 className='text-xl font-semibold'>AI Image Generator</h1>
          </div>

          <p className='mt-6 text-sm font-medium'>Describe Your Image</p>
          <textarea onChange={(e)=> setInput(e.target.value)} value={input} rows={4} type="text" className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300' placeholder='Describe what you want to see in the image...' required/>

          <p className='mt-6 text-sm font-medium'>Style</p>
          <div className='mt-3 flex gap-3 flex-wrap sm:max-w-9/11'>
            {imageStyle.map((item)=> (
              <span onClick={()=> setSelectedStyle(item)} 
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${selectedStyle=== item ? 'bg-green-50 text-green-700' :'text-gray-500 border-gray-300'}`} key={item}>{item}</span>
            ))}
          </div>
          
          <div className='my-6 flex items-center gap-2'>
            <label className='relative cursor-pointer'>
              <input type="checkbox" onChange={(e)=> setPublish(e.target.checked)} checked={publish} className='sr-only peer'/>
              <div className='w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-500 transition'></div>
              <span className='absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-4'></span>
            </label>
            <p className='text-sm'>Make this image public</p>
          </div>
          <button disabled={loading} className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#00AD25] to-[#04FF50] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer'>
            {
              loading ? <span className='w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin'></span>
              : <Image className='w-5'/>
            }
            Generate Image
          </button>
        </form>

        {/* Right column */}
        <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]'>
          <div className='flex items-center gap-3'>
            <Image className='w-5 h-5 text-[#4A7AFF]'/>
            <h1 className='text-xl font-semibold'>Generated Image</h1>
          </div>

          {!content ? (
            <div className='flex-1 flex justify-center items-center'>
              <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
                <Image className='w-9 h-9'/>
                <p>Enter a topic and click "Generated Image" to get started</p>
              </div>
            </div>
          ):(
            <div className='mt-3 h-full'>
              <img src={content} alt="image" className='h-full w-full'/>
            </div>
          )}
        </div>
    </div>
  )
}

export default GenerateImages