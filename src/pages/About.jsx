import hero from "../assets/img/th-1/about-hero-image.jpg";
import { useEffect, useRef, useState } from "react";
import { CountUp } from "countup.js";
import core1 from "../assets/img/th-1/core-value-icon-1-p.svg";
import core2 from "../assets/img/th-1/core-value-icon-2-p.svg";
import core3 from "../assets/img/th-1/core-value-icon-3-p.svg";
import core4 from "../assets/img/th-1/core-value-icon-4-p.svg";
import TeamSection from "../components/TeamSection";
import AboutConact from "../components/AboutConact";
import FOG from "vanta/dist/vanta.fog.min.js";

function About() {
  const [vantaEffect, setVantaEffect] = useState(null);
  // const [vantaEffectMain, setVantaEffectMain] = useState(null);
  const myRef = useRef(null);
  // const myRefMain = useRef(null);
  const sectionRef = useRef(null);

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

  // useEffect(() => {
  //   if (!vantaEffectMain) {
  //     setVantaEffectMain(
  //       FOG({
  //         el: myRefMain.current,
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: false,
  //         minHeight: 200.0,
  //         minWidth: 200.0,
  //         highlightColor: 0xffffff,
  //         midtoneColor: 0xffe9f6,
  //         lowlightColor: 0xff71ea,
  //         baseColor: 0xffffff,
  //         blurFactor: 0.9,
  //         speed: 2.5,
  //         zoom: 0.4,
  //       })
  //     );
  //   }
  //   return () => {
  //     if (vantaEffectMain) vantaEffectMain.destroy();
  //   };
  // }, [vantaEffectMain]);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const countUpElements = entry.target.querySelectorAll(
            '[data-module="countup"] .start-number'
          );
          countUpElements.forEach((element) => {
            const endValue = element.getAttribute("data-countup-number");
            const countUp = new CountUp(element, endValue);
            if (!countUp.error) {
              countUp.start();
            } else {
              console.error(countUp.error);
            }
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <div className="page-wrapper relative z-[1] bg-white">
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Breadcrumb Section Start :::... */}
        <section id="section-breadcrumb">
          {/* Section Spacer */}
          <div className="breadcrumb-wrapper" ref={myRef} style={{borderRadius : "100px"}}>
            {/* Section Container */}
            <div className="global-container">
              <div className="breadcrumb-block">
                <h1 className="breadcrumb-title lg:text-[120px] md:text-[58px] text-[24px]">
                  About Us
                </h1>
                <ul className="breadcrumb-nav">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>About</li>
                </ul>
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: About Us Section Start :::... */}
        <section id="about-hero-section">
          {/* Section Spacer */}
          <div className="mb-20 lg:mb-24">
            {/* Section Container */}
            <div className="global-container">
              {/* Section Content Block */}
              <div className="jos mb-10 text-center lg:mb-12 xl:mb-20">
                <div className="mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-[950px]">
                  <h2 className="lg:text-[80px] md:text-[41px] text-[24px]">
                    We are a trusted partner in our clients AI journey
                  </h2>
                </div>
              </div>
              {/* Section Content Block */}
              {/* About Hero Image */}
              <div
                className="jos overflow-hidden rounded-3xl"
                data-jos_animation="zoom"
              >
                <img
                  src={hero}
                  alt="about-hero-image"
                  width={1296}
                  height={650}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* About Hero Image */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: About Us Section End :::... */}
        {/*...::: About Funfact Start :::... */}
        <section id="about-funfact-section" ref={sectionRef}>
          {/* Section Container */}
          <div className="global-container">
            {/* Counter Scroll */}
            <ul className="grid grid-cols-1 gap-10 gap-y-5 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4">
              {/* Counter Items */}
              <li className="jos" data-jos_delay="0.1">
                <h3
                  className="text-5xl text-[#C339C3] md:text-6xl lg:text-7xl xl:text-[80px]"
                  data-module="countup"
                >
                  <span className="start-number" data-countup-number={2}>
                    2
                  </span>
                  K+
                </h3>
                <span className="block text-lg font-normal text-black">
                  Successful Implementations
                </span>
              </li>
              {/* Counter Items */}
              {/* Counter Items */}
              <li className="jos" data-jos_delay="0.2">
                <h3
                  className="text-5xl text-[#C339C3] md:text-6xl lg:text-7xl xl:text-[80px]"
                  data-module="countup"
                >
                  <span className="start-number" data-countup-number={95}>
                    95
                  </span>
                  %
                </h3>
                <span className="block text-lg font-normal text-black">
                  Client Satisfaction Rate
                </span>
              </li>
              {/* Counter Items */}
              {/* Counter Items */}
              <li className="jos" data-jos_delay="0.3">
                <h3
                  className="text-5xl text-[#C339C3] md:text-6xl lg:text-7xl xl:text-[80px]"
                  data-module="countup"
                >
                  <span className="start-number" data-countup-number={40}>
                    40
                  </span>
                  +
                </h3>
                <span className="block text-lg font-normal text-black">
                  Awards and Recognitions
                </span>
              </li>
              {/* Counter Items */}
              {/* Counter Items */}
              <li className="jos" data-jos_delay="0.4">
                <h3
                  className="text-5xl text-[#C339C3] md:text-6xl lg:text-7xl xl:text-[80px]"
                  data-module="countup"
                >
                  <span className="start-number" data-countup-number={73}>
                    73
                  </span>
                  +
                </h3>
                <span className="block text-lg font-normal text-black">
                  Growth and Expansion
                </span>
              </li>
              {/* Counter Items */}
            </ul>
            {/* Counter Scroll */}
          </div>
          {/* Section Container */}
        </section>
        {/*...::: About Funfact Start :::... */}
        {/*...::: Content Section Start :::... */}
        <section id="content-section-2">
          {/* Section Spacer */}
          <div className="pb-20 lg:pt-40 pt-12 xl:pb-[150px] xl:pt-[130px]">
            {/* Section Container */}
            <div className="global-container">
              <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,_1.3fr)_1fr]">
                {/* Content Left Block */}
                <div
                  className="jos order-2 overflow-hidden rounded-md"
                  data-jos_animation="fade-left"
                >
                  {/* <img
                    src={mind}
                    alt="content-image-2"
                    width={526}
                    height={550}
                    className="h-auto w-full"
                  /> */}

                  <iframe
                    src="https://lottie.host/embed/1f4e42fd-e284-4e98-9c77-dc17791725d3/d11YkGtVBS.json"
                    width={526}
                    height={550}
                  ></iframe>
                  
                </div>
                {/* Content Left Block */}
                {/* Content Right Block */}
                <div className="jos order-1" data-jos_animation="fade-right">
                  {/* Section Content Block */}
                  <div className="mb-6">
                    <h2 className="lg:text-[72px] md:text-[41px] text-[24px]">
                      Delivering the best solutions with AI
                    </h2>
                  </div>
                  {/* Section Content Block */}
                  <div className="text-lg leading-[1.4] lg:text-[21px]">
                    <p className="mb-7 last:mb-0">
                      Our mission is to empower businesses with AI-powered
                      solutions that increase productivity, improve
                      decision-making and drive growth.
                    </p>
                    <p className="mb-7 last:mb-0">
                      Since 2016 we have been passionate about helping our
                      clients harness With a team of AI experts and data
                      scientists their full potential &amp; stay competitive in
                      an increasingly digital world.
                    </p>
                    <a
                      href="contact.html"
                      className="button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-gradient-to-b from-[#480EEC] to-[#B840C7] hover:border-[#B840C7] hover:text-white"
                    >
                      Get in touch
                    </a>
                  </div>
                </div>
                {/* Content Right Block */}
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Content Section End :::... */}
        {/*...::: Core Value Section Start :::... */}
        <section id="core-value">
          {/* Section Spacer */}
          <div className="jos mx-5 rounded-[50px] bg-black px-[20px] py-20 sm:px-[50px] md:mx-[50px] lg:px-[100px] xl:py-[130px]">
            {/* Section Container */}
            <div className="global-container">
              {/* Section Content Block */}
              <div className="mb-10 text-center lg:mb-12 xl:mb-20">
                <div className="mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-[745px]">
                  <h2 className="text-white lg:text-[80px] md:text-[41px] text-[24px]">
                    The core values behind our work
                  </h2>
                </div>
              </div>
              {/* Section Content Block */}
              {/* Horizontal Separator */}
              <div className="mb-6 h-[4px] w-full rounded bg-colorCodGray sm:mb-0" />
              {/* Core Value list */}
              <ul className="grid grid-cols-1 justify-between gap-6 md:grid-cols-2 xxl:flex xxl:flex-nowrap">
                {/* Core Value Item */}
                <li className="relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorOrangyRed after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100">
                  <div className="mb-3 flex items-center gap-x-3 md:mb-6">
                    <div className="h-[30px] w-[30px]">
                      <img
                        src={core1}
                        alt="core-value-icon-1"
                        width={30}
                        height={30}
                      />
                    </div>
                    <h4 className="flex-1 text-white">Innovation</h4>
                  </div>
                  <p className="text-lg text-white lg:text-[21px]">
                    We’re committed to exploring new technologies, and finding
                  </p>
                </li>
                {/* Core Value Item */}
                {/* Core Value Item */}
                <li className="relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorOrangyRed after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100">
                  <div className="mb-3 flex items-center gap-x-3 md:mb-6">
                    <div className="h-[30px] w-[30px]">
                      <img
                        src={core2}
                        alt="core-value-icon-2"
                        width={30}
                        height={30}
                      />
                    </div>
                    <h4 className="flex-1 text-white">Excellence</h4>
                  </div>
                  <p className="text-lg text-white lg:text-[21px]">
                    We set high standards for our work &amp; we are dedicated
                    team
                  </p>
                </li>
                {/* Core Value Item */}
                {/* Core Value Item */}
                <li className="relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorOrangyRed after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100">
                  <div className="mb-3 flex items-center gap-x-3 md:mb-6">
                    <div className="h-[30px] w-[30px]">
                      <img
                        src={core3}
                        alt="core-value-icon-3"
                        width={30}
                        height={30}
                      />
                    </div>
                    <h4 className="flex-1 text-white">Collaboration</h4>
                  </div>
                  <p className="text-lg text-white lg:text-[21px]">
                    We believe in the power of collaboration, working closely
                  </p>
                </li>
                {/* Core Value Item */}
                {/* Core Value Item */}
                <li className="relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorOrangyRed after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100">
                  <div className="mb-3 flex items-center gap-x-3 md:mb-6">
                    <div className="h-[30px] w-[30px]">
                      <img
                        src={core4}
                        alt="core-value-icon-4"
                        width={30}
                        height={30}
                      />
                    </div>
                    <h4 className="flex-1 text-white">Integrity</h4>
                  </div>
                  <p className="text-lg text-white lg:text-[21px]">
                    We uphold the highest ethical honesty in all our
                    interactions
                  </p>
                </li>
                {/* Core Value Item */}
              </ul>
              {/* Core Value list */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Core Value Section End :::... */}
        {/*...::: Team Section Start :::... */}
        <TeamSection />
        {/*...::: Team Section End :::... */}
        {/*...::: About Contact Section Start :::... */}
        <AboutConact />
        {/*...::: About Contact Section End :::... */}
      </main>
    </div>
  );
}

export default About;
