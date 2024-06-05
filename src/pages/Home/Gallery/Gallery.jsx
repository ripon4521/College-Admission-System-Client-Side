import React, { useState } from "react";

const Gallery = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Our College Gellery
                </span>
                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  Our Recent Projects
                </h2>
                <p className="text-body-color text-base dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    All College
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("Intermediate")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "Intermediate"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Intermediate
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject(" MBA & BBA")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === " MBA & BBA"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    MBA & BBA
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("Medical")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "Medical"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Medical
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("Engenearing")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "Engenearing"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"
                    }`}
                  >
                    Engenearing
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <PortfolioCard
              ImageHref="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              category="Harvard University"
              title="All Dept. Here"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D"
              category="Gohosen College"
              title="Engenearing College"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://springfield.edu/sites/default/files/hscexterior.jpg"
              category="SigniFiled College"
              title="BBA & MBA"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6wfR6v9ZSh5Ky5pZS51eRL6Pj_fmyoDGbWYmHN7C_kMPf3HZCBVRHWN645UIQHAFHic&usqp=CAU"
              category="Health & Medical College"
              title="Medical Dept."
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://www.dhakacollege.edu.bd/uploads/64e17d9d6e1e910221692499357.jpg"
              category="Dhaka College"
              title="Intermediate "
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://www.aims.edu/sites/default/files/styles/7_4__1344x768/public/Commencement%20-%20Spring%202023%20-%20Post%20Ceremony%20Celebrations%20-%2015-XL.jpg?h=bd1d7384&itok=1YN3RLc4"
              category="Aims Cumminity College"
              title="Intermeditate "
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px]">
            <img src={ImageHref} alt="portfolio" className="w-full" />
          </div>
          <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
            <span className="text-primary mb-2 block text-sm font-medium">
              {category}
            </span>
            <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">{title}</h3>
            <a
              href={buttonHref}
              className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
            >
              {button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
