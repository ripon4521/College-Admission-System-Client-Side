

const HowItWorks = () => {
    return (
        <div>
          <section>
  {/* Container */}
  <div className="mx-auto w-full max-w-3xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
    {/* Heading */}
    <h2 className="mx-auto mb-12 max-w-3xl text-center text-3xl font-extrabold md:mb-20 md:text-5xl">Get Started In 4 Easy Steps</h2>

    {/* How it Works */}
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6">
      {/* Item */}
      <div className="flex flex-row items-center gap-6 rounded-[60px] border border-solid border-[#ada790] px-6 py-4 transition hover:bg-[#eceae2]">
        <div className="flex h-20 w-20 flex-none flex-col items-center justify-center rounded-full bg-[#c9fd02]">
          <img src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a274_CodepenLogo.svg" alt="Get Started Icon 1" className="inline-block" />
        </div>
        <div className="flex flex-col items-start gap-2.5">
          <h5 className="text-base font-bold md:text-xl">Download the app</h5>
          <p className="text-[#636262]">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit amet dolor sit amet consectetur adipiscing</p>
        </div>
      </div>
      {/* Item */}
      <div className="flex flex-row items-center gap-6 rounded-[60px] border border-solid border-[#ada790] px-6 py-4 transition hover:bg-[#eceae2]">
        <div className="flex h-20 w-20 flex-none flex-col items-center justify-center rounded-full bg-[#c9fd02]">
          <img src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a28e_GitlabLogo.svg" alt="Get Started Icon 2" className="inline-block" />
        </div>
        <div className="flex flex-col items-start gap-2.5">
          <h5 className="text-base font-bold md:text-xl">Sign up for account</h5>
          <p className="text-[#636262]">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit amet dolor sit amet consectetur adipiscing</p>
        </div>
      </div>
      {/* Item */}
      <div className="flex flex-row items-center gap-6 rounded-[60px] border border-solid border-[#ada790] px-6 py-4 transition hover:bg-[#eceae2]">
        <div className="flex h-20 w-20 flex-none flex-col items-center justify-center rounded-full bg-[#c9fd02]">
          <img src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a274_CodepenLogo.svg" alt="Get Started Icon 3" className="inline-block" />
        </div>
        <div className="flex flex-col items-start gap-2.5">
          <h5 className="text-base font-bold md:text-xl">Activate virtual card</h5>
          <p className="text-[#636262]">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit amet dolor sit amet consectetur adipiscing</p>
        </div>
      </div>
      {/* Item */}
      <div className="flex flex-row items-center gap-6 rounded-[60px] border border-solid border-[#ada790] px-6 py-4 transition hover:bg-[#eceae2]">
        <div className="flex h-20 w-20 flex-none flex-col items-center justify-center rounded-full bg-[#c9fd02]">
          <img src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a28e_GitlabLogo.svg" alt="Get Started Icon 4" className="inline-block" />
        </div>
        <div className="flex flex-col items-start gap-2.5">
          <h5 className="text-base font-bold md:text-xl">Ready set go!</h5>
          <p className="text-[#636262]">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit amet dolor sit amet consectetur adipiscing</p>
        </div>
      </div>
    </div>
  </div>
</section>
  
        </div>
    );
};

export default HowItWorks;