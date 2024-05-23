function TailwindAnimated() {
  return (
    <div className="flex justify-center items-center h-max my-20 px-2">
      <div className="text-center">
        <h1 className="text-3xl mb-4 hover:animate-rotate-y hover:animate-duration-[2000ms] cursor-default">
          ¡Hola! Bienvenido
        </h1>
        <p className="text-lg hover:animate-fade-left hover:animate-duration-[1500ms]">
          Este es un ejemplo de animaciones con
          <a
            href="https://www.tailwindcss-animated.com/configurator.html"
            target="_blank"
          >
            <p className="hover:text-primary hover:animate-rotate-x hover:animate-duration-[1500ms]">
              {' '}
              Tailwind CSS Animated.
            </p>
          </a>
        </p>
        <div className="mt-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4 hover:animate-jump animate-once hover:animate-duration-[2000ms] hover:animate-ease-linear">
            Botón animado
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full hover:animate-shake animate-once hover:animate-duration-[2000ms] hover:animate-ease-linear">
            Otro botón animado
          </button>
        </div>
        <div className="flex items-center justify-between mt-8 w-full gap-4 flex-wrap">
          <div>
            <img
              src="https://via.placeholder.com/150"
              alt="Placeholder"
              className="hover:animate-fade hover:animate-duration-[2000ms] "
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/150"
              alt="Placeholder"
              className="hover:animate-wiggle hover:animate-duration-[1000ms]"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/150"
              alt="Placeholder"
              className="hover:animate-fade-up hover:animate-duration-[1000ms]"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/150"
              alt="Placeholder"
              className="hover:animate-spin hover:animate-twice hover:animate-duration-1000 hover:animate-ease-linear"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TailwindAnimated;
