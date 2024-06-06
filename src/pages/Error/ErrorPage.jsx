import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <section>
      {/* Container */}
      <div className="px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <img
            src="https://media.istockphoto.com/id/1520338461/photo/a-chimpanzee-portrait.webp?b=1&s=170667a&w=0&k=20&c=ES87gdcyOcPvon_J8TtkGjM7T2W2YrI2BuI3onHbexk="
            alt=""
            className="mx-auto rounded-full mb-8 inline-block h-56 w-56 flex-none object-cover"
          />
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">404 Error</h1>
          <p className="mx-auto mb-5 max-w-lg text-sm text-gray-500 sm:text-base md:mb-6 lg:mb-8">
          No routes Found
          </p>
          <Link to='/'
            href="#"
            className="inline-block items-center rounded-md bg-black px-8 py-4 text-center font-semibold text-white"
          >
            Back Home
          </Link>
        </div>
      </div>
    </section>
        </div>
    );
};

export default ErrorPage;