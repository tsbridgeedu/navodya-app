import '../app/globals.css'

const HomeAlumniNetwork = () => {
    return (
        <div className='px-6 mb-10'>
            <div className='flex items-center md:px-12'>
                <div className="flex items-center bg-[#DEB91E] p-4">
                    <div className='relative w-28 h-16'>
                        <img src="/jnvlogo.png" alt="JNV Logo" className="w-full h-full absolute" />
                    </div>
                    <span className='w-[2px] bg-black h-12 mr-2'></span>
                    <span className="text-[#F90000] font-bold">Jawahar Navodaya Vidyalaya Nalgonda Alumni Network</span>
                </div>
                <div className='home__arrow'></div>
                <div className="relative w-[600px] h-[300px] max-md:h-[200px] ">
                    <img
                        src="/jnvimg6.png" // Update with your image path
                        alt="JNV Building"
                        className="w-full h-full border-[#AC9B9B] border-2 rounded-xl"
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeAlumniNetwork;