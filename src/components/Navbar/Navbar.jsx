import useNav from '../../hooks/useNav';
import MenuMobile from './MenuMobile';
import data from '../../data.json';
import { GiHamburgerMenu } from 'react-icons/gi';
import CloseIcon from '../../utils/Icons/CloseIcon';
import { Link } from 'react-scroll';
import useScrollPosition from '../../hooks/useScrollPosition';

const Navbar = () => {
  const { isOpen, handleIsOpen } = useNav();
  const scrollPosition = useScrollPosition();

  const headerStyle = {
    backgroundColor: scrollPosition > 0 ? 'rgba(0, 0, 0, 0.6)' : 'black',
    backdropFilter: scrollPosition > 0 ? 'blur(10px)' : 'none',
    boxShadow: scrollPosition > 0 ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.1)',
  };

  return (
    <header
      className={`fixed z-[98] top-0 left-0 w-full px-8 sm:px-16 py-2 flex justify-between items-center h-[78px] text-white`}
      style={headerStyle}
    >
      <div className="flex items-center justify-between w-full">
        <a href="/" className="flex gap-2 items-center">
          <img
            src={data.logo.url}
            alt={data.logo.alt}
            className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] cursor-pointer mr-2"
          ></img>
          <p className="text-md font-semibold hover:text-secondary sm:text-[12px] lg:text-[16px] w-max">
            {data.logo.text}
          </p>
        </a>
        <div className="hidden sm:flex items-center justify-between space-x-6 sm:space-x-3 md:space-x-6">
          {data['section-header'].navbar.map((item, index) => (
            <Link
              to={item.href}
              spy={false}
              smooth={true}
              duration={500}
              key={index}
              offset={-75}
              className="cursor-pointer"
            >
              <p
                className="text-md hover:text-secondary sm:text-[12px] lg:text-[16px] w-max"
                key={item.id}
              >
                {item.text}
              </p>
            </Link>
          ))}
          <a
            href={data['section-header'].blog.href}
            key={data['section-header'].blog.id}
            target="_blank"
            className="cursor-pointer"
          >
            <p className="text-md hover:text-secondary sm:text-[12px] lg:text-[16px] w-max">
              {data['section-header'].blog.text}
            </p>
          </a>
          <a
            href={`mailto:${data.contact.email}?subject=Contact`}
            className="cursor-pointer"
          >
            <p className="text-md hover:text-secondary sm:text-[12px] lg:text-[16px] w-max">
              {data['section-header'].contact.text}
            </p>
          </a>
        </div>
      </div>
      <button
        className="text-2xl cursor-pointer z-[99] text-white active:text-secondary flex items-center justify-center sm:hidden"
        onClick={handleIsOpen}
      >
        {isOpen ? (
          <CloseIcon color={'white'} className="active:stroke-secondary" />
        ) : (
          <GiHamburgerMenu />
        )}
      </button>
      <MenuMobile isOpen={isOpen} onClick={handleIsOpen} />
    </header>
  );
};

export default Navbar;
