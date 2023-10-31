import Footer from "../components/Footer"
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { InstagramEmbed } from 'react-social-media-embed';
export default function  DetailProjectRent() {
    const [embedUrl, setEmbedUrl] = useState('');
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
const navigate = useNavigate()
  useEffect(() => {
    // Fungsi untuk mendapatkan URL embed dari API Instagram oEmbed
    const getEmbedUrl = async () => {
      try {
        const response = await fetch(
          `https://graph.facebook.com/v13.0/instagram-oembed?url=https://www.instagram.com/p/Cu_97Bzuaz2/`
        );
        const data = await response.json();
        setEmbedUrl(data.html);
      } catch (error) {
        console.error('Error fetching embed URL:', error);
      }
    };

    // Panggil fungsi untuk mendapatkan URL embed saat komponen dimuat
    getEmbedUrl();
  }, []);
    return (
        <div className="background">
            
  <div className="pt-20">
    <div className="ml-24">
    <button
    onClick={() => navigate('/projectRent')}
  class="px-8 py-4 mt-5  font-bold text-white border-b-2 rounded-lg shadow-lg bg-black shadow-orange-500/80">
 BACK
</button>



    <h1 className="text-red-800 text-3xl font-bold mt-10 ">Name Event</h1>
    <h2 className="text-white font-semi-bold mt-2" style={{maxWidth:'600px'}}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</h2>
    </div>
    <div className=" mt-10">
      <h1 className="text-white text-3xl font-bold ml-24">Photos</h1>  
      <div className=" grid-cols-5 gap-5  flex justify-center items-center mb-4">
      <div className="w-[200px] h-[200px]  bg-white shadow-lg rounded-xl overflow-hidden my-4 relative">
      
      <img className="w-full object-cover object-center h-full" src="https://i.pinimg.com/474x/dc/22/d5/dc22d5cbbb686bf567e8fd47a5984840.jpg" alt="Card" />
    </div>
    <div  className="w-[200px] h-[200px]  bg-white shadow-lg rounded-xl overflow-hidden my-4 relative">
      
      <img className="w-full object-cover object-center h-full" src="https://i.pinimg.com/474x/dc/22/d5/dc22d5cbbb686bf567e8fd47a5984840.jpg" alt="Card" />

    </div>
    <div  className="w-[200px] h-[200px]  bg-white shadow-lg rounded-xl overflow-hidden my-4 relative">
     
      <img className="w-full object-cover object-center h-full" src="https://i.pinimg.com/474x/dc/22/d5/dc22d5cbbb686bf567e8fd47a5984840.jpg" alt="Card" />

    </div>
    <div  className="w-[200px] h-[200px]  bg-white shadow-lg rounded-xl overflow-hidden my-4 relative">
      
      <img className="w-full object-cover object-center h-full" src="https://i.pinimg.com/474x/dc/22/d5/dc22d5cbbb686bf567e8fd47a5984840.jpg" alt="Card" />

    </div>
    <div  className="w-[200px] h-[200px]  bg-white shadow-lg rounded-xl overflow-hidden my-4 relative">
      
      <img className="w-full object-cover object-center h-full" src="https://i.pinimg.com/474x/dc/22/d5/dc22d5cbbb686bf567e8fd47a5984840.jpg" alt="Card" />

    </div>
     
      
      </div>
    </div>
    <div className=" mt-10 ">
        <h1 className="text-3xl font-bold text-white mb-4 ml-24">Videos</h1>
        <div>

        </div>
        <div className="grid-cols-4 justify-center items-center flex gap-10 ">
  <InstagramEmbed url="https://www.instagram.com/p/Ct8_StbpvGY/?utm_source=ig_embed&amp;utm_campaign=embed_video_watch_again" width={328} height={500}/>
  <InstagramEmbed url="https://www.instagram.com/p/CnpHovFrSFQ/?utm_source=ig_embed&amp;utm_campaign=embed_video_watch_again" width={328} height={500}/>
  <InstagramEmbed url="https://www.instagram.com/reel/CxxesPILl3Y/?utm_source=ig_embed&amp;utm_campaign=embed_video_watch_again" width={328} height={500}/>
  {/* <InstagramEmbed url="https://www.instagram.com/p/Ct8_StbpvGY/?utm_source=ig_embed&amp;utm_campaign=embed_video_watch_again" width={328} height={600}/> */}
  

        </div>
    </div>
  </div>

  <Footer/>
        </div>
    )
}
