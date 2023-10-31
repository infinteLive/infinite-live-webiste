import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const location = useLocation();
  const Navigate = useNavigate();

  const scrollToProduct = () => {
    const targetElement = document.getElementById('product-section');
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      Navigate('/');
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
    window.addEventListener('scroll', changeNav);
    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);
  function handleClickHome() {
    if (window.location.pathname !== '/') {
      window.location.href = '/';
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
    <nav className={`fixed w-full z-10 ${scrollNav ? 'bg-black' : 'bg-transparent'} transition duration-300 ease-in-out cursor-pointer`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <img className='w-52' src="https://ik.imagekit.io/zhbznxloz/Secondary%20Logo%202.png?updatedAt=1694673554744" alt="" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex space-x-4 text-white font-semibold">
              <a onClick={handleClickHome}>Home</a>
              <a onClick={() => Navigate("/About")}>About</a>
              <a onClick={handleClick}>Products</a>
              <a onClick={() => Navigate("/news")}>Blogs &amp; Tools</a>
              <a onClick={() => Navigate("/project")}>Our Projects</a>
              <a onClick={() => Navigate("/contact-us")}>Contact us</a>
              <a className='text-orange-500 ' onClick={() => Navigate("/contact-us")}>Career</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
