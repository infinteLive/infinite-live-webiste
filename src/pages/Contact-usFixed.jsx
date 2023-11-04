import Footer from "../components/Footer";

export default function ContactFixed() {
  return (
    <div className="bg-black bg-cover bg-center overflow-hidden  bg-no-repeat relative  ">
      <div className="container sm:bg-pink-700 md:bg-green-700 lg:bg-red-600  md:max-w-2xl sm:max-w-sm min-[320px]:max-w-xs">
        <div className="text-white text-left mb-4 mt-28">
          <h1 className="min-[320px]:text-2xl sm:text-3xl md:text-5xl mb-2 font-bold">
            SYSTEMS INTEGRATOR
          </h1>
          <hr className="border-2 border-white min-[320px]:w-[260px] sm:w-[320px] md:w-[520px] " />

          {/* <h3 className="font bold mt-10 text-xl">Please fill out the form below so we can address your inquiries better</h3> */}
        </div>

        <div className="mx-auto mt-5 bg-zinc-800 p-8 rounded-xl shadow-md max-w-2xl">
          <h1 className="text-white font-bold text-xl mb-5">
            And we will contact you within 1 hour
          </h1>
          <div className="mb-4 ">
            <div className="mr-2">
              <label htmlFor="nama" className="block font-bold text-white mb-2">
                WhatsApp
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                className="w-full px-14 py-2 border-2 rounded-lg bg-gray-300"
              />
            </div>
            <h1 className="text-center text-white text-xl font-bold mt-5">
              OR
            </h1>
            <div>
              <label
                htmlFor="lastName"
                className="block font-bold text-white  mb-2"
              >
                EMAIL
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full px-14 py-2 border-2 rounded-lg bg-gray-300"
              />
            </div>
          </div>

          <button className="px-8 py-4 mt-5 font-semibold text-white border-b-2 rounded-lg shadow-lg bg-black  ">
            SUBMIT
          </button>
        </div>

        <Footer />
      </div>
    </div>
  );
}
