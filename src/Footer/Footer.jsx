import data from '../data.json';
import { Link } from 'react-scroll';

function Footer() {
  return (
    <footer className="flex w-full py-4 overflow-hidden bg-slate-100">
      <div className="flex flex-col items-center justify-center text-black mx-auto">
        <div className="w-full flex items-center justify-center py-4 flex-wrap gap-y-4 px-2 gap-[4vw]">
          {data['section-footer'].links?.map((link, index) =>
            link.external ? (
              <a href={link.href} target="_blank" key={index}>
                <p className="text-black font-semibold hover:text-primary cursor-pointer min-w-max px-2">
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
              >
                <p className="text-black font-semibold hover:text-primary cursor-pointer min-w-max px-2">
                  {link.text}
                </p>
              </Link>
            )
          )}
        </div>
        <div className="w-screen flex items-center justify-around gap-4 gap-y-8 p-4 flex-wrap">
          <a href="/" className="flex gap-2 items-center">
            <img
              src={data['logo-color'].url}
              alt={data['logo-color'].alt}
              className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] cursor-pointer mr-2"
            ></img>
            <p className="text-md font-semibold hover:text-primary sm:text-[12px] lg:text-[18px] w-max">
              {data.logo.text}
            </p>
          </a>
          <p className="hidden md:flex italic text-xl md:text-2xl tracking-widest">
            {data['section-footer'].slogan}
          </p>
          <div className="flex items-center">
            <a href={data.blog.url} target="_blank" className="ml-auto">
              <div
                title={data.blog.text}
                className="text-center hover:text-primary cursor-pointer flex items-center gap-2 justify-center w-full"
              >
                <img
                  src={data.blog['icon-color']}
                  alt={data.blog.alt}
                  className="w-8"
                />
                <div className="flex flex-col text-left justify-center">
                  <p className="text-md md:text-lg font-bold">
                    {data.blog.title}
                  </p>
                  <h6 className="hidden sm:flex text-[12px] -mt-1 text-gray_default">
                    {data.blog.text}
                  </h6>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex w-full items-center justify-around px-4 gap-6 text-xs">
          <p className="mt-6">{data['section-footer'].copy}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
