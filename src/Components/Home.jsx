import React from 'react';
import { Carousel } from 'flowbite-react';
import HomeImg from "../assets/illustration.png";

const Home = () => {
    return (
        <div className='bg-neutralSilver' id='home'>
            <div className='lg:px-28 max-w-screen-2xl mx-auto min-h-screen h-screen'>
                <Carousel className='w-full mx-auto lg:mx-auto'>
                    <div className="my-4 md:my-2 py-4 md:py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-4 md:gap-12">
                        <div>
                            <img src={HomeImg} alt='' className='w-100'/>
                        </div>
                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/2 leading-snug'>Lesson and insights from 8 years <span className='text-brandPrimary leading-snug'>from 4 months</span></h1>
                            <p className='text-neutralDGrey text-base mb-8'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            <button className='btn-primary '>Register</button>
                        </div>
                    </div>
                    <div className="my-4 md:my-2 py-4 md:py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-4 md:gap-12">
                        <div>
                            <img src={HomeImg} alt='' className='w-100'/>
                        </div>
                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Learn and Earn <span className='text-brandPrimary leading-snug'>from 4 months</span></h1>
                            <p className='text-neutralDGrey text-base mb-8'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            <button className='btn-primary '>Register</button>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Home;
