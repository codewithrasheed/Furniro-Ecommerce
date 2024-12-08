import React from 'react';
import Image from 'next/image';
import Location from '@/../public/location.png';
import Phone from '@/../public/call.png'
import WorkTime from '@/../public/time.png'

const ContactForm = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch With Us</h2>
          <p className="text-gray-500 sm:w-[670px] text-center">
            For More Information About Our Products, Services, & Solutions. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-start">
          <div className="w-full lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
            <span className='flex items-center mb-2'>
                <Image src={Location} alt='location' className='w-5 h-7'></Image>
                <h3 className="text-2xl font-bold text-gray-900 mx-3">Address</h3>
            </span>
            <p className="text-gray-500 mb-8 md:w-48">
                236 5th SE Avenue, New York NY10000, United States
            </p>
            <span className='flex items-center mb-2'>
                <Image src={Phone} alt='phone' className='w-6 h-6'></Image>
                <h3 className="text-2xl font-bold text-gray-900 mx-3">Phone</h3>
            </span>
            <p className="text-gray-500 mb-1">Mobile: +(84) 546-6789</p>
            <p className="text-gray-500 mb-8">Hotline: +(84) 456-6789</p>
            <span className='flex items-center mb-2'>
                <Image src={WorkTime} alt='working-time' className='w-6 h-6'></Image>
                <h3 className="text-2xl font-bold text-gray-900 mx-3">Working Time</h3>
            </span>
            <p className="text-gray-500 mb-1 md:w-48">Monday-Friday: 9:00 - 22:00</p>
            <p className="text-gray-500 md:w-48">Saturday-Sunday: 9:00 - 21:00</p>
          </div>
          <div className="w-full lg:w-1/2 bg-white rounded-md p-6">

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[16px] font-semibold text-gray-700">
                  Your name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder='Abc'
                    className="shadow-sm outline-none block w-full sm:text-base border border-gray-300 rounded-md h-16 px-5 py-5"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-[16px] font-semibold text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Abc@def.com'
                    className="shadow-sm outline-none block w-full sm:text-base border border-[#9F9F9F] rounded-md h-16 px-5 py-5"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-[16px] font-semibold text-gray-700">
                  Subject
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder='This is an optional'
                    className="shadow-sm outline-none block w-full sm:text-base border border-[#9F9F9F] rounded-md h-16 px-5 py-5"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-[16px] font-semibold text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="shadow-sm outline-none block w-full sm:text-base border border-[#9F9F9F] rounded-md h-28 px-5 py-5"
                    placeholder={'Hi! I\'d like to talk about...'}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-[237px] flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#B88E2F] hover:bg-[#ddaa34] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;