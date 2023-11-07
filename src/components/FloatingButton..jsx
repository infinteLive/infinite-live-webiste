export default function FloatingButton() {
  return (
    <div>
      {/* Implement the FAB */}
      <button
        onClick={() => {
          window.open(
            "https://api.whatsapp.com/send?phone=6281288162075",
            "_blank"
          );
        }}
        title="Contact Sale"
        className="fixed z-40  bottom-10 right-8 bg-white w-16 h-18 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl  hover:drop-shadow-2xl hover:animate-bounce duration-300"
      >
        {/* &#9993; */}
        <img
          src="https://ik.imagekit.io/zhbznxloz/whatsapp-icon-design_23-2147900927.avif?updatedAt=1695631811370"
          className="object-cover "
          alt=""
        />
      </button>
    </div>
  );
}
