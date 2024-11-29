import React from 'react';

const FooterComponent = () => {
  return (
    <div className='md:mx-10'>
    <div className='flex flex-col sm:grid grid-col-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm'>
        <div>
            <img className='w-40' src='https://prescripto.vercel.app/assets/logo-BNCDj_dh.svg'></img>
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book."</p>
        </div>
        <div> 
            <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>Get in Touch</p>
            <ul class="flex flex-col gap-2 text-gray-600">
                <li>+0-000-000-000</li>
                <li>Renu.wafe@gmail.com</li>
            </ul>
        </div>
    </div>
    <div>
        
    </div>
    </div>
  );
};

export default FooterComponent;