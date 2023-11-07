import Footer from "../components/Footer";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactRent() {
  return (
    <div className=" bg-black h-full bg-cover bg-center overflow-hidden  bg-no-repeat relative ">
      <div className="text-white text-left ml-[300px] mb-4 mt-32">
        {/* <h3 className="font bold mt-10 text-xl">Please fill out the form below so we can address your inquiries better</h3> */}
      </div>
      <div className="mx-auto mt-5 bg-zinc-800 p-8 rounded-xl shadow-md md:max-w-2xl sm:max-w-sm min-[320px]:max-w-xs">
        <h1 className="text-white font-bold md:text-xl sm:text-base mb-5">
          And we will contact you within 1 hour
        </h1>
        <div className="mb-4 ">
          <div className="flex items-center mb-2">
            <FaWhatsapp className="text-white mr-1" size={23} />
            <label
              htmlFor="whatsapp"
              className="block font-bold text-white md:text-xl sm:text-base mb-2"
            >
              WhatsApp
            </label>
          </div>
          <input
            type="text"
            id="whatsapp"
            name="whatsapp"
            className="w-full min-[320px]:px-5 sm:px-14 py-2 border-2 rounded-lg bg-gray-300"
          />
          <h1 className="text-center text-white md:text-xl sm:text-base font-bold mt-5 ">
            OR
          </h1>
          <div className="flex items-center mb-2">
            <FaEnvelope className="text-white mr-2" />
            <label
              htmlFor="email"
              className="block font-bold md:text-xl sm:text-base text-white mb-2"
            >
              EMAIL
            </label>
          </div>
          <input
            type="text"
            id="email"
            name="email"
            className="w-full min-[320px]:px-5 sm:px-14 py-2 border-2 rounded-lg bg-gray-300"
          />
        </div>

        <button className="px-8 py-4 mt-5 font-semibold text-white border-b-2 rounded-lg shadow-lg bg-black">
          SUBMIT
        </button>
      </div>
      <Footer />
    </div>
  );
}
