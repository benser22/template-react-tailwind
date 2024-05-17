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
            <p className="font-bold active:text-green-custom text-center mt-2">
              {data.logo.text}
            </p>
            <hr className="mt-6 w-[50vw]"></hr>
          </a>
        </div>
        <div className="ml-[2vw] flex flex-col items-left justify-between gap-12 mt-6 w-full">
          {data['section-header'].navbar.map((item, index) => (
            <Link
              to={item.href}
              key={index}
              className="flex items-center gap-4 active:text-secondary hover:text-secondary cursor-pointer"
              smooth={true}
              duration={700}
              spy={false}
              offset={-80}
            >
              <img
                src={item.icon}
                alt={item.alt}
                className="w-[26px] h-[26px]"
              />
              <p className="font-bold">{item.text}</p>
            </Link>
          ))}
          <a
            href={data['section-header'].blog.href}
            key={data['section-header'].blog.id}
            target="_blank"
            className="flex items-center gap-4 active:text-secondary hover:text-secondary cursor-pointer"
          >
            <img
              src={data.blog.icon}
              alt={data.blog.alt}
              className="w-[26px] h-[26px]"
            />
            <p className="font-bold">{data.blog.text}</p>
          </a>

          <a
            href={`mailto:${data.contact.email}?subject=Contacto`}
            className="flex items-center gap-4 cursor-pointer"
          >
            <img
              src={data['section-header'].contact.icon}
              alt={data['section-header'].contact.alt}
              className="w-[26px] h-[26px]"
            />
            <p className="text-md font-bold active:text-secondary hover:text-secondary sm:text-[12px] lg:text-[16px] w-max">
              {data['section-header'].contact.text}
            </p>
          </a>
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
