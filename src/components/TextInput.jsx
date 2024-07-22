import React from 'react'
import textImg from '../assets/assignment_24dp_FILL0_wght400_GRAD0_opsz24.svg'
import visualsImg from '../assets/photo_library_24dp_FILL0_wght400_GRAD0_opsz24.svg'
import decImg from '../assets/description_24dp_FILL0_wght400_GRAD0_opsz24.svg'
import videoImg from '../assets/movie_24dp_FILL0_wght400_GRAD0_opsz24.svg'

const TextInput = () => {
  return (
    <section className='pt-10 min-h-[87vh] bg-slate-100 flex justify-center items-center flex-col'>
        <div className='w-[85%]'>
        <div className='w-full'>
        <h1 className='text-4xl font-serif pb-10'>Hello, name!</h1>
        </div>
        <div className='w-full bg-white py-20 rounded-3xl'>
            <div className='flex justify-center items-center'>
            <div className='flex gap-10 max-xl:flex-col '>
            <div className='w-[250px] bg-rose-300 h-[250px] rounded-3xl p-5 flex flex-col justify-between items-center'>
                    <div className='flex justify-between items-center w-full'>
                    <h1 className=' font-bold'>Text <br/>to Text</h1>
                    <img src={textImg} className='w-10 filter grayscale brightness-0 ' />
                    </div>
                    <p className='text-center'>Start typing or <br/>Copy paste your script</p>
                    <div>
                        <button className='gb-bl bg-violet-600 px-7 py-2 rounded-lg text-white'>Proceed</button>
                    </div>
                </div>

                <div className='w-[250px] bg-yellow-400 -400 h-[250px] rounded-3xl p-5 flex flex-col justify-between items-center'>
                    <div className='flex justify-between items-center w-full'>
                    <h1 className=' font-bold'>Article <br/>to video</h1>
                    <img src={decImg} className='w-10 brightness-0' />
                    </div>
                    <div className='text-center'>
                        <input placeholder='Copy Paste the URL' className='text-center px-3 py-2 rounded-md w-full'/>
                        <h1>Use ctrl+v to paste</h1>
                    </div>
                    <div>
                        <button className='gb-bl bg-violet-600 px-7 py-2 rounded-lg text-white'>Proceed</button>
                    </div>
                </div>
                <div className='w-[250px] bg-violet-400 -400 h-[250px] rounded-3xl p-5 flex flex-col justify-between items-center'>
                    <div className='flex justify-between items-center w-full'>
                    <h1 className=' font-bold'>Edit Video <br/>using Text</h1>
                    <img src={videoImg} className='w-10 brightness-0' />
                    </div>
                    <p className='text-center'>input video from<br/>various sources </p>
                    <div>
                        <button className='gb-bl bg-violet-600 px-7 py-2 rounded-lg text-white'>Proceed</button>
                    </div>
                </div>
                <div className='w-[250px] bg-cyan-400 -400 h-[250px] rounded-3xl p-5 flex flex-col justify-between items-center'>
                    <div className='flex justify-between items-center w-full'>
                    <h1 className=' font-bold'>Article <br/>to video</h1>
                    <img src={visualsImg} className='w-10 brightness-0' />
                    </div>
                    <p className='text-center'>Drag and drop files or<br/>browse computer</p>
                    <div>
                        <button className='gb-bl bg-violet-600 px-7 py-2 rounded-lg text-white'>Proceed</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default TextInput