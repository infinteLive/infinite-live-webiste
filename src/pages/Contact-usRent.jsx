import Footer from "../components/Footer"
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function ContactRent() {
    return (
      <div className="bg-black h-full bg-cover bg-center overflow-hidden  bg-no-repeat relative ">
      <div className="text-white text-left ml-[300px] mb-4 mt-32">
        {/* <h3 className="font bold mt-10 text-xl">Please fill out the form below so we can address your inquiries better</h3> */}
      </div>
      <div className="mx-auto mt-5 bg-zinc-800 p-8 rounded-xl shadow-md max-w-2xl">
        <h1 className="text-white font-bold text-xl mb-5">And we will contact you within 1 hour</h1>
        <div className="mb-4 ">
          <div className="flex items-center mb-2">
            <FaWhatsapp className="text-white mr-1" size={23}/>
            <label htmlFor="whatsapp" className="block font-bold text-white mb-2">WhatsApp</label>
          </div>
          <input type="text" id="whatsapp" name="whatsapp" className="w-full px-14 py-2 border-2 rounded-lg bg-gray-300" />
          <h1 className="text-center text-white text-xl font-bold mt-5">OR</h1>
          <div className="flex items-center mb-2">
            <FaEnvelope className="text-white mr-2" />
            <label htmlFor="email" className="block font-bold text-white mb-2">EMAIL</label>
          </div>
          <input type="text" id="email" name="email" className="w-full px-14 py-2 border-2 rounded-lg bg-gray-300" />
        </div>
    
        <button className="px-8 py-4 mt-5 font-semibold text-white border-b-2 rounded-lg shadow-lg bg-black">
          SUBMIT
        </button>
      </div>
      <Footer />
    </div>
    

    )
}