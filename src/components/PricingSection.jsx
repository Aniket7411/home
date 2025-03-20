import { useEffect } from "react";
import JOS from "jos-animation";

const PricingSection = () => {
  useEffect(() => {
    JOS.init();
  }, []);

  return (
    <section className="pricing-section">
      <div className="pb-20 pt-20 xl:pb-[150px] xl:pt-[130px]">
        <div className="global-container">
          <div className="jos  text-center lg:mb-12">
            <div className="mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[746px]">
              <h2 className="lg:text-[80px] md:text-[41px]  text-[24px] ">
                Our culture Inspire us to live our values
              </h2>
            </div>
          </div>
          <div className="container mx-auto">
            <div className="mt-12 lg:mt-16 xl:mt-20">
              <ul
                className={`tab-content grid grid-cols-1 gap-6 md:grid-cols-2 xxl:grid-cols-3 `}
              >
                <li
                  className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black"
                  data-jos_animation="flip"
                  data-jos_delay={0}
                >
                  <h3 className="font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                    Who We Are ?
                  </h3>

                  <div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />

                  <p className="mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                    Every day, all around the world, our people engineer
                    impact―with their clients, communities, colleagues and in
                    their own lives.
                  </p>
                  <a
                    href="pricing.html"
                    className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-gradient-to-b from-[#480EEC] to-[#B840C7] hover:border-[#B840C7] hover:text-black group-hover:border-[#B840C7] group-hover:text-white"
                  >
                    Know More
                  </a>
                </li>
                <li
                  className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black"
                  data-jos_animation="flip"
                  data-jos_delay={0}
                >
                  <h3 className="font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                    What we Believe ?
                  </h3>

                  <div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />

                  <p className=" text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                    Our social purpose weaves environmental and social
                    considerations into every element of our business model.
                  </p>
                  <a
                    href="pricing.html"
                    className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-gradient-to-b from-[#480EEC] to-[#B840C7] hover:border-[#B840C7] hover:text-black group-hover:border-[#B840C7] group-hover:text-white"
                  >
                    Know More
                  </a>
                </li>
                <li
                  className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black"
                  data-jos_animation="flip"
                  data-jos_delay={0}
                >
                  <h3 className="font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                    What we Value ?
                  </h3>

                  <div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />

                  <p className="mb-10 text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                    We help imagine, build and implement technologies to keep
                    our clients constantly aware and responsive.
                  </p>
                  <a
                    href="pricing.html"
                    className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-gradient-to-b from-[#480EEC] to-[#B840C7] hover:border-[#B840C7] hover:text-black group-hover:border-[#B840C7] group-hover:text-white"
                  >
                    Know More
                  </a>
                </li>
                <li
                  className="jos group flex flex-col rounded-[10px] bg-colorLinenRuffle p-10 transition-all duration-300 ease-linear hover:bg-black"
                  data-jos_animation="flip"
                  data-jos_delay={0}
                >
                  <h3 className="font-dmSans text-[28px] font-bold leading-[1.28] tracking-tighter text-black transition-all duration-300 ease-linear group-hover:text-white">
                    How We Works ?
                  </h3>

                  <div className="my-5 h-[1px] w-full bg-[#DBD6CF]" />

                  <p className=" text-lg text-black transition-all duration-300 ease-linear group-hover:text-white">
                    We respect everyone’s unique voice and background because we
                    know that diversity which benefits everyone at the table.
                  </p>
                  <a
                    href="pricing.html"
                    className="button mt-auto block rounded-[50px] border-2 border-black bg-transparent py-4 text-center text-black transition-all duration-300 ease-linear after:bg-gradient-to-b from-[#480EEC] to-[#B840C7] hover:border-[#B840C7] hover:text-black group-hover:border-[#B840C7] group-hover:text-white"
                  >
                    Know More
                  </a>
                </li>
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
