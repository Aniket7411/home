import contentimg1 from "../assets/img/th-1/content-image-1.jpg";
import contentimg2 from "../assets/img/th-1/content-image-2.jpg";
import contentimg3 from "../assets/img/th-1/content-image-2.jpg";
import trending from "../assets/img/th-1/trending-up-icon (1).svg";
import cogIcon from "../assets/img/th-1/cog-icon (1).svg";
import cursor from "../assets/img/th-1/icon-orange-cursor-click (1).svg";
import clock from "../assets/img/th-1/clock-icon (1).svg";
import FunFactSection from "../components/FunFactSection";
import AboutConact from "../components/AboutConact";
import { Link } from "react-router-dom";
import FOG from "vanta/dist/vanta.fog.min.js";
import { useEffect, useRef, useState } from "react";

function ServiceDetails() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          // minHeight: 200.0,
          // minWidth: 200.0,
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
  return (
    <div className="page-wrapper relative z-[1] bg-white">
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Breadcrumb Section Start :::... */}
        <section id="section-breadcrumb">
          {/* Section Spacer */}
          <div className="breadcrumb-wrapper" ref={myRef}>
            {/* Section Container */}
            <div className="global-container">
              <div className="breadcrumb-block">
                <h1 className="breadcrumb-title lg:text-[120px] md:text-[58px] text-[24px]">
                  Data Analytics
                </h1>
                <ul className="breadcrumb-nav">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/service">Services</Link>
                  </li>
                  <li>Service Details</li>
                </ul>
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: Content Section Start :::... */}
        <section id="content-section-1">
          {/* Section Spacer */}
          <div className="pb-20 xl:pb-[150px]">
            {/* Section Container */}
            <div className="global-container">
              <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28">
                {/* Content Left Block */}
                <div
                  className="jos order-2 overflow-hidden rounded-md"
                  data-jos_animation="fade-left"
                >
                  {/* <img
                    src={contentimg1}
                    alt="content-image-2"
                    width={526}
                    height={450}
                    className="h-auto w-full"
                  /> */}
                  <iframe
                    src="https://lottie.host/embed/b0f19393-f44c-4061-b72d-e6491d67f8c1/FTbey5M1yb.json"
                    width={526}
                    height={450}
                  ></iframe>
                </div>
                {/* Content Left Block */}
                {/* Content Right Block */}
                <div className="jos order-1" data-jos_animation="fade-right">
                  {/* Section Content Block */}
                  <div className="mb-6">
                    <h2 className="lg:text-[80px] md:text-[41px] text-[24px]">
                      Analyze any data perfectly with AI
                    </h2>
                  </div>
                  {/* Section Content Block */}
                  <div className="text-lg leading-[1.4] lg:text-[21px]">
                    <p className="mb-7 last:mb-0">
                      AI data analysis, also known as artificial intelligence
                      data analysis or AI-driven data analysis, refers to the
                      process of using artificial intelligence and machine
                      learning techniques.
                    </p>
                  </div>
                  <ul className="mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-1 xl:mt-14 xl:grid-cols-2">
                    <li className="flex flex-col gap-y-4">
                      <div className="h-[50px] w-[50px]">
                        <img
                          src={trending}
                          alt="trending-up-icon"
                          width={50}
                          height={50}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h5>Data Preprocessing</h5>
                      <p className="text-lg">
                        AI data analysis can begin, and raw data must be
                        collected, cleaned.
                      </p>
                    </li>
                    <li className="flex flex-col gap-y-4">
                      <div className="h-[50px] w-[50px]">
                        <img
                          src={cogIcon}
                          alt="cog-icon"
                          width={50}
                          height={50}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h5>Predictive Analytics</h5>
                      <p className="text-lg">
                        Algorithms use historical data to forecast future
                        trends, behaviors.
                      </p>
                    </li>
                  </ul>
                </div>
                {/* Content Right Block */}
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Content Section End :::... */}
        {/*...::: Content Section Start :::... */}
        <section id="content-section-2">
          {/* Section Spacer */}
          <div className="pb-20 xl:pb-[150px]">
            {/* Section Container */}
            <div className="global-container">
              {/* Section Content Block */}
              <div className="jos mb-10 text-center lg:mb-16 xl:mb-20">
                <div className="mx-auto md:max-w-xl lg:max-w-4xl xl:max-w-[950px]">
                  <h2 className="lg:text-[80px] md:text-[41px] text-[24px]">
                    Widely used throughout the industry for work
                  </h2>
                </div>
              </div>
              {/* Section Content Block */}
              <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[minmax(0,_1fr)_1.2fr] xl:gap-28 xxl:gap-32">
                {/* Content Left Block */}
                <div
                  className="jos order-2 overflow-hidden rounded-md md:order-1"
                  data-jos_animation="fade-left"
                >
                  {/* <img
                    src={contentimg2}
                    alt="content-image-4"
                    width={529}
                    height={500}
                    className="h-auto w-full"
                  /> */}

                  <iframe
                    src="https://lottie.host/embed/c914747e-5210-4d5c-9553-09f5494b0476/7sZIsJfVUF.json"
                    width={529}
                    height={500}
                  ></iframe>
                </div>
                {/* Content Left Block */}
                {/* Content Right Block */}
                <div
                  className="jos order-1 md:order-2"
                  data-jos_animation="fade-right"
                >
                  <ul className="flex flex-col gap-y-6">
                    <li>
                      <h5 className="mb-[10px]">
                        1. Businesses and Corporations:
                      </h5>
                      <p className="mb-7 last:mb-0">
                        Businesses use AI data analysis to gain competitive
                        advantages, optimize operations, &amp; make data-driven
                        decisions. This includes industries such as retail,
                        finance, manufacturing.
                      </p>
                    </li>
                    <li>
                      <h5 className="mb-[10px]">
                        2. Data Scientists and Analysts:
                      </h5>
                      <p className="mb-7 last:mb-0">
                        Data scientists and analysts leverage AI tools and
                        algorithms to extract actionable insights from large
                        datasets. They alsouse AI for predictive modeling,
                        anomaly detection, and data visualization.
                      </p>
                    </li>
                    <li>
                      <h5 className="mb-[10px]">
                        3. Government and Public Sector:
                      </h5>
                      <p className="mb-7 last:mb-0">
                        Government agencies use AI data analysis for various
                        purposes, including public policy development, law
                        enforcement, urban planning, and disaster.
                      </p>
                    </li>
                  </ul>
                </div>
                {/* Content Right Block */}
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Content Section End :::... */}
        {/*...::: Funfact Section Start :::... */}
        <FunFactSection />
        {/*...::: Funfact Section End :::... */}
        {/*...::: Content Section Start :::... */}
        <section id="content-section-3">
          {/* Section Spacer */}
          <div className="pb-20 pt-20 xl:pb-[150px] xl:pt-[130px]">
            {/* Section Container */}
            <div className="global-container">
              <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28">
                {/* Content Left Block */}
                <div
                  className="jos order-2 overflow-hidden rounded-md"
                  data-jos_animation="fade-left"
                >
                  {/* <img
                    src={contentimg3}
                    alt="content-image-2"
                    width={526}
                    height={450}
                    className="h-auto w-full"
                  /> */}
                  <iframe
                  src="https://lottie.host/embed/4eb6c5f5-ff62-4ea1-bb8c-e0f2434224e5/00cOWVIryY.json"
                  width={526}
                  height={450}
                ></iframe>
                </div>
                {/* Content Left Block */}
                {/* Content Right Block */}
                <div className="jos order-1" data-jos_animation="fade-right">
                  {/* Section Content Block */}
                  <div className="mb-6">
                    <h2 className="lg:text-[80px] md:text-[41px] text-[24px]">
                      Manage large amounts of data
                    </h2>
                  </div>
                  {/* Section Content Block */}
                  <div className="text-lg leading-[1.4] lg:text-[21px]">
                    <p className="mb-7 last:mb-0">
                      AI data analysis also can handle vast amounts of data,
                      making it suitable for big data environments. Data
                      analysis can automate many aspects of data processing and
                      analysis
                    </p>
                  </div>
                  <ul className="mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-1 xl:mt-14 xl:grid-cols-2">
                    <li className="flex flex-col gap-y-4">
                      <div className="h-[50px] w-[50px]">
                        <img
                          src={clock}
                          alt="trending-up-icon"
                          width={50}
                          height={50}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h5>Real-Time Analysis</h5>
                      <p className="text-lg">
                        Some AI data analysis solutions are design to process
                        making instant.
                      </p>
                    </li>
                    <li className="flex flex-col gap-y-4">
                      <div className="h-[50px] w-[50px]">
                        <img
                          src={cursor}
                          alt="cog-icon"
                          width={50}
                          height={50}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h5>Automation</h5>
                      <p className="text-lg">
                        This leads to increased efficiency and quicker
                        decision-making.
                      </p>
                    </li>
                  </ul>
                </div>
                {/* Content Right Block */}
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>

        {/*...::: About Contact Section Start :::... */}
        <AboutConact />
        {/*...::: About Contact Section End :::... */}
      </main>
    </div>
  );
}

export default ServiceDetails;
