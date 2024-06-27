const HomeMiddleSection:React.FC = () => {
    return (
        <div className="flex flex-col items-center gap-10">
            <div className='flex flex-col justify-center items-center md:px-12 px-6 gap-10'>
                <div className='flex max-md:flex-col bg-white p-4 md:justify-between justify-center items-center gap-3 border-[1px] border-black border-opacity-30 shadow-lg'>
                    <p className='flex-1 md:text-xl text-md font-medium text-center'>Join thousands of Jawahar Navodaya Vidyalaya Nalgonda alumni from across the nation.
                        Connect with old friends, network with professionals, and stay updated with the latest alumni events and
                        initiatives.
                    </p>
                    <div className='flex-1 relative w-[550px] h-64 max-sm:w-[400px] max-[480px]:w-[350px] '>
                        <img src="/jnvimg1.png" alt="jmv image" className='w-full h-full' />
                    </div>
                </div>
                <div className='flex flex-col items-center gap-5'>
                    <h1 className='font-bold text-2xl underline underline-offset-2'>Alumni Engagement</h1>
                    <p className='text-center font-medium text-lg'>Alumni engagement strategies should start well before students graduate. This helps to build more effective relationships and long-term networks</p>
                    <div className='grid grid-cols-3 max-sm:grid-cols-2 md:gap-12 gap-6'>
                        <div className='flex flex-col bg-white items-center p-3 gap-2 border-[#979393] border-[1px] rounded-xl shadow-xl min-w-36 lg:w-72 md:w-56 w-52 cursor-pointer transition duration-200 ease-in-out hover:scale-105 hover:shadow-[0_4px_16px_-1px_rgb(0,0,0,0.1),0_2px_4px_-2px_rgb(0,0,0,0.1)]'>
                            <div className='relative lg:w-64 md:w-48 md:h-48 lg:h-64 w-44 h-44 '>
                                <img src="/jnvimg2.png" alt="" className='bg-[#7D5B04] object-cover w-full h-full rounded-t-xl absolute' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h2 className='text-lg font-semibold'>Networking Opportunities</h2>
                                <p className='font-medium'>Join our alumni network to connect with graduates, attend events, engage in online forums, and participate in special interest groups.</p>
                            </div>
                        </div>
                        <div className='flex flex-col bg-white items-center p-4 gap-2 border-[#979393] border-[1px] rounded-xl shadow-xl min-w-36 lg:w-72 md:w-56 w-52 cursor-pointer transition duration-200 ease-in-out hover:scale-105 hover:shadow-[0_4px_16px_-1px_rgb(0,0,0,0.1),0_2px_4px_-2px_rgb(0,0,0,0.1)] '>
                            <div className='relative lg:w-64 md:w-48 md:h-48 lg:h-64 w-44 h-44 '>
                                <img src="/jnvimg3.png" alt="" className='bg-[#d396f8] object-cover w-full h-full rounded-t-xl absolute' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h2 className='text-lg font-semibold'>Events and Reunions</h2>
                                <p className='font-medium'>We host annual reunions, regional meetups, webinars, and workshops to reconnect and network throughout the year.</p>
                            </div>
                        </div>
                        <div className='flex flex-col bg-white items-center p-4 gap-2 border-[#979393] border-[1px] rounded-xl shadow-xl min-w-36 lg:w-72 md:w-56 w-52 cursor-pointer transition duration-200 ease-in-out hover:scale-105 hover:shadow-[0_4px_16px_-1px_rgb(0,0,0,0.1),0_2px_4px_-2px_rgb(0,0,0,0.1)] '>
                            <div className='relative lg:w-64 md:w-48 md:h-48 lg:h-64 w-44 h-44 '>
                                <img src="/jnvimg4.png" alt="" className='bg-[#231609] object-cover w-full h-full rounded-t-xl absolute' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <h2 className='text-lg font-semibold'>Alumni Stories</h2>
                                <p className='font-medium'>Discover inspiring alumni success stories and how JNV shaped their journeys.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex items-center bg-[#DEB91E] p-8 gap-8 max-md:flex-col-reverse'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl font-bold'>Message From the President</h1>
                    <p className='font-medium text-lg'>Our mission is to foster a strong, vibrant community where every alumnus feels connected and valued.
                        We strive to create opportunities for networking, professional growth, and personal development.
                        By bringing together alumni from all walks of life,
                        we can support each other in achieving our goals and making a positive impact on society.
                    </p>
                </div>
                <div className='rounded-full border-[#6512B7] border-2'>
                    <div className='relative min-w-[200px] h-[200px] m-2'>
                        <img src="jnvpresident.png" alt="jnvpresident" className='w-full h-full rounded-full bg-white absolute' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeMiddleSection;