
import JOS from "jos-animation";
import BrandSlider from "../components/BrandSlider";
import ServiceSection from "../components/ServiceSection";
import ContentSections from "../components/ContentSections";
import FaqSection from "../components/FaqSection";
import PricingSection from "../components/PricingSection";
import TestimonialSection from "../components/TestimonialSection";
import { useEffect } from "react";
import FunFactSection from "../components/FunFactSection";
import NET from "vanta/dist/vanta.net.min.js";
import FOG from "vanta/dist/vanta.fog.min.js";
import { useState, useRef } from "react";

function Home2() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const [vantaNetEffect, setNetVantaEffect] = useState(null);
  const myRef = useRef(null);
  const myNetRef = useRef(null);

  useEffect(() => {
    JOS.init();
  }, []);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          // highlightColor: 0x331c6a,
          highlightColor: 0x997cdc,
          midtoneColor: 0xededed,
          lowlightColor: 0xdcdcdc,
          baseColor: 0xededed,
          blurFactor: 1.0,
          speed: 2,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    if (!vantaNetEffect) {
      setNetVantaEffect(
        NET({
          el: myNetRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x997cdc,
          // color: 0x331c6a,
          // backgroundColor: 0x70707,
          backgroundColor: 0x0,
          points: 20.0,
          maxDistance: 32.0,
          spacing: 20.0,
        })
      );
    }
    return () => {
      if (vantaNetEffect) vantaNetEffect.destroy();
    };
  }, [vantaNetEffect]);

  return (
    <div className="page-wrapper relative z-[1] bg-white">
      <main className="main-wrapper relative overflow-hidden">
        <section id="section-hero" ref={myRef}>
          <div className="relative z-[1] overflow-hidden rounded-bl-[30px] rounded-br-[30px] bg-colorLinenRuffle pb-20 pt-28 lg:rounded-bl-[50px] lg:rounded-br-[50px] lg:pb-24 lg:pt-32 xl:pt-40 xxl:pb-[133px] xxl:pt-[195px]">
            <div className="global-container">
              {/* Hero Content */}
              <div className="mb-14 flex flex-col items-center text-center lg:mb-20">
                <h1 className="jos slide-from-bottom lg:text-[120px] md:text-[58px]  text-[24px]  leading-tight mb-6 max-w-[510px] lg:max-w-[768px] xl:max-w-[1076px]">
                  Simplify your SaaS solution with AI
                </h1>
                <p className="jos slide-from-bottom mb-11 max-w-[700px] text-lg font-semibold sm:text-xl xl:max-w-[980px]">
                  Our AI SAAS tool is a cloud-based software delivery model. It
                  helps businesses forecast demand for products and services and
                  optimize inventory management and supply chain operations.
                </p>
                <div
                  className="jos flex flex-wrap justify-center gap-6"
                  data-jos_animation="fade"
                >
                  <button
                    type="button"
                    className="button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-gradient-to-b from-[#480EEC] to-[#B840C7] hover:border-[#B840C7] hover:text-white"
                  >
                    Get started for free
                  </button>
                  <button
                    type="button"
                    className="button rounded-[50px] border-2 border-black bg-transparent py-4 text-black after:bg-gradient-to-b from-[#480EEC] to-[#B840C7] hover:border-[#B840C7] hover:text-white"
                  >
                    Learn more
                  </button>
                </div>
              </div>
              {/* Hero Content */}

              {/* Hero Image */}
              <div
                className="jos hero-img overflow-hidden rounded-2xl bg-black"
                data-jos_animation="zoom"
              >
                {/* <img
                  src={hero2}
                  alt="hero-dashboard"
                  width={1296}
                  height={540}
                  className="h-auto w-full"
                /> */}
               
                <div className="xl:w-[1296px] md:h-[540px] h-[340px]  " ref={myNetRef} >
                  <div
                    className="header__footer-txt xl:p-[35px] md:p-[40px] p-[30px]   color-white"
                   
                  >
                    <div className="inner_dev xl:text-[32px] md:text-[22px] text-[16px]">
                    <b>reimagine</b> Your processes and <b>modernize</b> Your
                    technology
                    </div>
                  </div>
                </div>
              </div>
              {/* <div
                  
                  id="background"
                  width={1296}
                  height={540}
                  className="h-auto w-full"
                ></div> */}
              {/* Hero Image */}

              <div className="my-10 h-[1px] w-full bg-[#DBD6CF] lg:my-16 xl:my-20" />
              <div className="jos mx-auto mb-12 max-w-[715px] text-center lg:mb-16">
                <p className="text-lg">
                  Companies of all sizes trust us to find AI SaaS critical to
                  their growth and innovation
                </p>
              </div>

              <BrandSlider />
            </div>

            {/* <div className="orange-gradient-1 absolute -right-[150px] top-[370px] -z-[1] h-[500px] w-[500px] animate-spin rounded-[500px]"></div>

            <div className="orange-gradient-2 absolute right-[57px] top-[620px] -z-[1] h-[450px] w-[450px] animate-spin rounded-[450px]"></div> */}
          </div>
        </section>

        <ServiceSection />

        <ContentSections />
        
        <FunFactSection />

        <PricingSection />

        <FaqSection />

        <TestimonialSection />

        <div className="orange-gradient-1 absolute -left-[15px] top-[61%] -z-[1] h-[400px] w-[400px] -rotate-[-9.022deg] rounded-[400px]"></div>
        {/* Body Background Shape 2 */}
        <div className="orange-gradient-2 absolute -left-[100px] top-[64%] -z-[1] h-[360px] w-[360px] -rotate-[-9.022deg] rounded-[360px]"></div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default Home2;
