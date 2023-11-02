import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [toggleHamburgerMenu, setToggleHamburgerMenu] = useState(false);
  const location = useLocation();
  const Navigate = useNavigate();

  function handlerHamburgerMenu(e) {
    e.stopPropagation();

    setToggleHamburgerMenu(!toggleHamburgerMenu);
    console.log("clicked");
  }

  const scrollToProduct = (e) => {
    e.stopPropagation();
    const targetElement = document.getElementById("product-section");
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      Navigate("/");
      setTimeout(scrollToProduct, 100); // Menunggu navigasi selesai baru melakukan scroll
    } else {
      scrollToProduct();
    }
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);
  function handleClickHome() {
    if (window.location.pathname !== "/") {
      window.location.href = "/";
    } else {
      const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
          window.requestAnimationFrame(scrollToTop);
          window.scrollTo(0, c - c / 8);
        }
      };
      scrollToTop();
    }
  }

  return (
    <nav
      className={`fixed w-full z-50 ${
        scrollNav ? "bg-black " : "bg-transparent"
      } transition duration-300 ease-in-out cursor-pointer`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <img
              className="w-52"
              src="https://ik.imagekit.io/zhbznxloz/Secondary%20Logo%202.png?updatedAt=1694673554744"
              alt=""
            />
          </div>
          {/* navbar tab - laptop */}
          <div className="hidden md:block ">
            <div className="ml-10 flex md:space-x-3 md:text-sm lg:text-base lg:space-x-4 text-white font-semibold">
              <a onClick={handleClickHome}>Home</a>
              <a onClick={() => Navigate("/About")}>About</a>
              <a onClick={handleClick}>Products</a>
              <a onClick={() => Navigate("/news")}>Blogs &amp; Tools</a>
              <a onClick={() => Navigate("/project")}>Our Projects</a>
              <a onClick={() => Navigate("/contact-us")}>Contact us</a>
              <a
                className="text-orange-500 "
                onClick={() => Navigate("/contact-us")}
              >
                Career
              </a>
            </div>
          </div>

          {toggleHamburgerMenu ? (
            <div className="w-[80%] md:hidden h-screen bg-slate-900 absolute top-0  bottom-0 right-0 z-50 flex flex-col pt-28 ps-10">
              <div className="flex flex-col gap-5 text-2xl font-semibold text-white">
                <a onClick={handleClickHome}>Home</a>
                <a onClick={() => Navigate("/About")}>About</a>
                <a onClick={handleClick}>Products</a>
                <a onClick={() => Navigate("/news")}>Blogs &amp; Tools</a>
                <a onClick={() => Navigate("/project")}>Our Projects</a>
                <a onClick={() => Navigate("/contact-us")}>Contact us</a>
                <a
                  className="text-orange-500 "
                  onClick={() => Navigate("/contact-us")}
                >
                  Career
                </a>
              </div>
            </div>
          ) : (
            ""
          )}

          {/* burger menu */}
          <button
            className=" text-3xl absolute top-3 right-10 flex justify-center items-center z-50 w-[50px] h-[50px] md:hidden"
            onClick={handlerHamburgerMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              fill="white"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
