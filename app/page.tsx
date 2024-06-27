import HomeHeroSection from '../components/HomeHeroSection';
import HomeMiddleSection from '../components/HomeMiddleSection';
import HomeCarousel from '../components/HomeCarousel';
import HomeMembers from '../components/HomeMembers';
import HomeAlumniNetwork from '../components/HomeAlumniNetwork';
import Image from 'next/image';


export default function Home() {
  return (
    <>
      <main className='flex flex-col bg-[#E7EDFD] gap-10'>
        <HomeHeroSection />
        <HomeMiddleSection />
        <div className='mx-10 bg-white flex flex-col items-center py-5 gap-5'>
          <h1 className='uppercase text-2xl font-semibold'>Events</h1>
          <button className='bg-violet-200 px-4 py-1 rounded-md'><a href="/events">View all</a></button>
        </div>
        <HomeCarousel />
        <HomeMembers />
        <HomeAlumniNetwork />
      </main>
    </>
  );

}
