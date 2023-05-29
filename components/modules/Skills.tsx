import React from 'react';
import Image from 'next/image';

export default function Skills() {
    return (
        <div className='w-3/4 mx-auto text-center mt-[-5rem]'>
            <h1 className='font-bold'>The programming languages I practice.</h1>
            <div className='flex flex-wrap justify-center gap-4 mt-8'>
                <div className='w-1/2 sm:w-1/4 md:w-1/6 flex flex-col items-center'>
                    <div className='flex flex-col items-center'>
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
                            alt='/'
                            width={100}
                            height={100}
                        />
                        <p className='font-bold mt-2'>JavaScript</p>
                    </div>
                </div>
                <div className='w-1/2 sm:w-1/4 md:w-1/6 flex flex-col items-center'>
                    <div className='flex flex-col items-center'>
                        <Image
                            src="https://www.svgrepo.com/show/354113/nextjs-icon.svg"
                            alt='/'
                            width={100}
                            height={100}
                        />
                        <p className='font-bold mt-2'>Next.js</p>
                    </div>
                </div>
                <div className='w-1/2 sm:w-1/4 md:w-1/6 flex flex-col items-center'>
                    <div className='flex flex-col items-center'>
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png"
                            alt='/'
                            width={90}
                            height={100}
                        />
                        <p className='font-bold mt-2'>C++</p>
                    </div>
                </div>
                <div className='w-1/2 sm:w-1/4 md:w-1/6 flex flex-col items-center'>
                    <div className='flex flex-col items-center'>
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png"
                            alt='/'
                            width={115}
                            height={100}
                        />
                        <p className='font-bold mt-2'>React.js</p>
                    </div>
                </div>
                <div className='w-1/2 sm:w-1/4 md:w-1/6 flex flex-col items-center'>
                    <div className='flex flex-col items-center'>
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                            alt='/'
                            width={100}
                            height={100}
                        />
                        <p className='font-bold mt-2'>Tailwind CSS</p>
                    </div>
                </div>
            </div>
        </div>
    );
}