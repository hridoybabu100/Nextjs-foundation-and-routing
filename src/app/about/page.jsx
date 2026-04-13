import Image from 'next/image';
import React from 'react';

const aboutPage = () => {
    return (
        <div>
            <h2 className='text-white text-4xl'>This is a About Page</h2>

            <Image src={'/ss.png'} alt='ss pic' width='400' height='300'></Image>
        </div>
    );
};

export default aboutPage;