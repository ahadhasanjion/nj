import Image from 'next/image';
import React, { useState } from 'react'
import { SliderData } from './SliderData'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

const Slider = ({ slides }) => {
    const [next, setNext] = useState(0)
    const length = slides.length;

    const nextSlide = () => {
        setNext(next === length - 1 ? 0 : next + 1);
    };
    const preSlide = () => {
        setNext(next === 0 ? length - 1 : next - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <div id="gallery" className='max-w-[1240px] mx-auto'>
            <h1 className='text-center font-bold text-2xl p-4' > Gallery</h1>
            <div className='relative flex justify-center p-4'>
                {
                    SliderData.map((slide, index) => {
                        return (
                            <div key={index} className={index === next ? 'opacity-[1] ease-in duration-1000' : 'opacity-0'}>
                                <FaArrowCircleLeft onClick={preSlide} className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]' size={50} />
                                {index === next && (
                                    <Image
                                        src={slide.image}
                                        alt="/"
                                        width="1440"
                                        height="600"
                                        style={{ objectFit: "cover" }}
                                    />
                                )}
                                <FaArrowCircleRight onClick={nextSlide} className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]' size={50} />


                            </div>
                        );
                    })
                }
            </div>
        </div >
    )
}

export default Slider
