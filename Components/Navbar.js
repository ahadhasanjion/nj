import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');

    useEffect(() => {
        const changeColor =() => {
            if(window.scrollY > 90){
                setColor('#ffffff')
                setTextColor('#000000')
            }
            else{
                setColor('transparent')
                setTextColor('White')

            }
        }
        window.addEventListener('Scroll',changeColor )
    },[])

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div style={{backgroundColor:`${color}`}} className='fixed top-0 left-0 w-full z-10 ease-in duration-300'>
            <div className='max-w-[1240px] m-auto flex items-center justify-between text-white p-4'>
                <Link href='/'><h1 style={{color: `${textColor}`}} className='font-bold text-4xl'>Capture</h1></Link>

                <ul style={{color: `${textColor}`}}  className='sm:flex hidden'>
                    <li className='p-4'><Link href='/'>Home</Link></li>
                    <li className='p-4'><Link href='#gallery'>Gallery</Link></li>
                    <li className='p-4'><Link href='/work'>Work</Link></li>
                    <li className='p-4'><Link href='/contact'>Contact</Link></li>
                </ul>
                <div className='sm:hidden block' onClick={handleNav}>
                    {nav? <AiOutlineClose size={20} className="z-10" style={{color: `${textColor}`}} /> : <AiOutlineMenu size={20} className="z-10" style={{color: `${textColor}`}} />}
                </div>
                <div className={
                    nav
                    ? 'sm:hidden absolute top-0 right-0 bottom-0 left-0 bg-black text-center ease-in duration-300 justify-center items-center w-full h-screen'
                    :
                    'sm:hidden absolute top-0 right-0 bottom-0 left-[-100%] bg-black text-center ease-in duration-300 justify-center items-center w-full h-screen'
                }>
                    <ul>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-400'><Link href='/'>Home</Link></li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-400'><Link href='#gallery'>Gallery</Link></li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-400'><Link href='/work'>Work</Link></li>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-400'><Link href='/contact'>COntact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
