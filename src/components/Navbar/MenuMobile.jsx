import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import data from '../../data.json';

const MenuMobile = ({ isOpen, onClick }) => {
  return (
    <div
      className={`${
        isOpen ? 'flex fadeIn' : 'hidden'
      } w-full h-screen fixed inset-0 md:hidden`}
      onClick={onClick}
      style={{ background: 'rgba(0,0,0,0.3)' }}
    >
      <ul
        className={`fixed left-0 top-0 px-4 py-5 h-screen w-[60vw] flex flex-col gap-4 
        items-start text-white bg-black shadow-md shadow-white`}
      >
        <div className="flex">
          <a href="/">
            <img
              src={data.logo.url}
              alt={data.logo.alt}
              className="w-[36px] h-[36px] cursor-pointer mx-auto mt-4"
            />
            <p className="font-bold active:text-secondary text-center mt-2">
              {data.logo.text}
            </p>
            <hr className="mt-6 w-[50vw]"></hr>
          </a>
        </div>
        <div className="ml-[2vw] flex flex-col items-left justify-between gap-12 mt-6 w-full">
          {data['section-header'].links?.map((link, index) =>
            link.external ? (
              <a
                href={link.href}
                target="_blank"
                key={index}
                className="flex items-center gap-4"
              >
                <img
                  src={link.icon}
                  alt={link.alt}
                  className="w-[26px] h-[26px]"
                />
                <p className="text-white font-semibold hover:text-secondary active:text-secondary cursor-pointer">
                  {link.text}
                </p>
              </a>
            ) : (
              <Link
                to={link.href}
                smooth={true}
                duration={500}
                spy={false}
                key={index}
                className="flex items-center gap-4"
              >
                <img
                  src={link.icon}
                  alt={link.alt}
                  className="w-[26px] h-[26px]"
                />
                <p className="text-white font-semibold hover:text-secondary active:text-secondary cursor-pointer">
                  {link.text}
                </p>
              </Link>
            )
          )}
        </div>
      </ul>
    </div>
  );
};

MenuMobile.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MenuMobile;
