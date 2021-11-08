import React, { useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

const Header = () => {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) =>{
        e.preventDefault();

        const term = searchInputRef.current.value;

        if(!term) return ;

        router.push(`search?term=${term}`)
    }
    return (
        <header className='sticky top-0 bg-white'>
           
           <div className='flex w-full p-6 items-center'> 
           <Image src='https://digitalglue.agency/wp-content/uploads/2015/09/google.png' 
            height={40} 
            width={120} 
            className='cursor-pointer'
            onClick={()=>router.push('/')}
             />

             <form className='flex flex-grow px-6 py-3 border ml-10 mr-5 border-gray-200 rounded-full  shadow-lg max-w-3xl items-center '>
                 <input type="text" placeholder='Search Google or Type Something...' ref={searchInputRef}
                 className='flex-grow w-full focus:outline-none'
                 />
                 <XIcon className='h-7 cursor-pointer text-gray-500 pr-2 transition duration-100 transform hover:scale-125 hover:text-red-600'
                 onClick={()=> (searchInputRef.current.value="")}
                  />
                  <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 cursor-pointer transition duration-100 transform hover:scale-125 border-l-2 pl-4 border-gray-300' />
                  <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex cursor-pointer transition duration-100 transform hover:scale-125' />
                  <button hidden type='submit' onClick={search}>Search</button>
             </form>
             <Avatar className='ml-auto' url="https://tutorsheba.com/images/1578826938.jpg" />

           </div>

        <HeaderOptions />
        </header>
    )
}

export default Header
