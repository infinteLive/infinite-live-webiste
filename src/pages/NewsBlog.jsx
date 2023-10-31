import '../app.css'
import Footer from '../components/Footer'
import Compro from '../assets/COMPRO INFINITE LIVE - SD.pdf'
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { useEffect } from 'react';
export default function NewsBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleDownload = () => {
    axios({
      url: Compro,
      method: 'GET',
      responseType: 'blob', 
    })
    .then(response => {
      const contentDisposition = response.headers['content-disposition'];
      const fileName = contentDisposition.split('filename=')[1].trim(); 

      saveAs(new Blob([response.data], { type: 'application/pdf' }), fileName);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };
    return (
        <div className="background">
  <section
    className="w-full h-[600px] overflow-hidden bg-[url(https://ik.imagekit.io/zhbznxloz/concert-show-stage-entertainment%201.png?updatedAt=1694679652713)] bg-cover bg-center bg-no-repeat relative"
  >
    <div className='mt-40 p-8 md:p-12 lg:px-16 lg:py-24 h-full'>

    <div className="justify-center items-center text-center flex flex-col">
            <h1 className="text-white text-5xl font-bold mb-4">
              Blogs & Tools
            </h1>
            <hr className="border-2 border-red-800 w-40 mb-8" />
          </div>
          <div className="flex justify-between text-white absolute bottom-4 left-0 right-0"style={{ fontFamily: 'Poppins, sans-serif' }}>
            <div className="ml-2 font-bold">#harusbisa</div>
            <div className=" text-center italic ml-[70px]">nest group indonesia</div>
            <div className="mr-2 font-bold ">#integrasitanpabatas</div>
          </div>
    </div>

  </section>
<div>
    <div className='flex justify-between mt-20'>
        <h1 className='text-white ml-20 text-3xl font-bold '> BLOGS</h1>
        <h1 className='text-white mr-[450px] text-3xl font-bold'>TOOLS</h1>
    </div>
<div className='ml-20 flex gap-10'>


  {/* Kartu Besar */}
  <div className='flex flex-col space-y-10 mt-5'>
  <div className="w-[600px] h-[250px] bg-zinc-600 bg-opacity-30 shadow-lg rounded-lg overflow-hidden  ">
    <div className="flex">
      <div className="w-[400px] h-[250px] p-5">
        <img src="https://ik.imagekit.io/h8zb3jmn4/Property%201=slider2.png?updatedAt=1694625796632" alt='' className="object-cover h-full w-full" />
      </div>
      <div className="w-2/3 p-4">
        <h2 className="text-xl font-semibold text-white">judul event</h2>
        <p className="mt-2 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....</p>
      </div>
    </div>
  </div>
  <div className="w-[600px] h-[250px] bg-zinc-600 bg-opacity-30 shadow-lg rounded-lg overflow-hidden  ">
    <div className="flex">
      <div className="w-[400px] h-[250px] p-5">
        <img src="https://ik.imagekit.io/h8zb3jmn4/Property%201=slider2.png?updatedAt=1694625796632" alt='' className="object-cover h-full w-full" />
      </div>
      <div className="w-2/3 p-4">
        <h2 className="text-xl font-semibold text-white">judul event</h2>
        <p className="mt-2 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....</p>
      </div>
    </div>
  </div>
 
  <div className="w-[600px] h-[250px] bg-zinc-600 bg-opacity-30 shadow-lg rounded-lg overflow-hidden  ">
    <div className="flex">
      <div className="w-[400px] h-[250px] p-5">
        <img src="https://ik.imagekit.io/h8zb3jmn4/Property%201=slider2.png?updatedAt=1694625796632" alt='' className="object-cover h-full w-full" />
      </div>
      <div className="w-2/3 p-4">
        <h2 className="text-xl font-semibold text-white">judul event</h2>
        <p className="mt-2 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....</p>
      </div>
    </div>
  </div>
 
 
  </div>
 
  

  {/* Tiga Kartu Kecil */}
  <div className="flex flex-col gap-5 mt-5">
  <div className="w-[450px] h-[380px] bg-zinc-600 bg-opacity-30 shadow-lg rounded-lg overflow-hidden">
    <div className="p-5">
      <div className="flex justify-center items-center mt-2 gap-10">
      <h2 className="text-xl font-semibold text-white"> Venue Layouts</h2>
      <div className='max-w-md mx-auto'>
  <div className="relative flex items-center w-full h-9 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
    <div className="grid place-items-center h-full w-9 text-gray-300">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>

    <input
      className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
      type="text"
      id="search"
      placeholder="Search something.."
    /> 
  </div>
</div>

      </div>
      <div className='mt-5'>
        <h1 className='text-white mt-2'>1. Lorem Ipsum</h1>
        <h1 className='text-white mt-2'>2. Lorem Ipsum</h1>
        <h1 className='text-white mt-2'>3. Lorem Ipsum</h1>
      </div>
    </div>
  </div>

  <div className="w-[450px] h-[380px] bg-zinc-600 bg-opacity-30 shadow-lg rounded-lg overflow-hidden">
    <div className="p-5">
      <div className="flex justify-center items-center mt-2 gap-10">
      <h2 className="text-xl font-semibold text-white"> Artist Riders</h2>
      <div className='max-w-md mx-auto'>
  <div className="relative flex items-center w-full h-9 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
    <div className="grid place-items-center h-full w-9 text-gray-300">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>

    <input
      className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
      type="text"
      id="search"
      placeholder="Search something.."
    /> 
  </div>
</div>
      </div>
      <div className='mt-5'>
        <h1 className='text-white mt-2'>1. Lorem Ipsum</h1>
        <h1 className='text-white mt-2'>2. Lorem Ipsum</h1>
        <h1 className='text-white mt-2'>3. Lorem Ipsum</h1>
      </div>
    </div>
  </div>
</div>

</div>

</div>
    <Footer/>
</div>

      
      
    )
}