import data from '../../data.json';

function Hero() {
  return (
    <section id="home">
      <div className="pt-32 flex flex-col items-center justify-start space-y-2">
        <h1 className="text-center w-[90vw] max-w-[800px] sm:w-4/5 lg:w-2/3 text-2xl sm:text-4xl font-bold lg:leading-[2.5rem] tracking-[0.05em]">
          {data['section-hero'].title}
        </h1>
        <h3 className="text-xs sm:text-md lg:text-xl w-full sm:w-4/5 px-8 mx-auto text-center mt-2">
          {data['section-hero'].subtitle}
        </h3>
        <img
          src={data['section-hero'].bg.url}
          alt={data['section-hero'].bg.alt}
          className="w-full h-auto bg-cover"
        />
      </div>
    </section>
  );
}

export default Hero;
