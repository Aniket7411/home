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

function WhatWeDo() {
  const [vantaEffect, setVantaEffect] = useState(null);
  // const [vantaEffectMain, setVantaEffectMain] = useState(null);
  const myRef = useRef(null);
  // const myRefMain = useRef(null);
  const sectionRef = useRef(null);

  const [activeTab, setActiveTab] = useState(6);
  const [activeTab2, setActiveTab2] = useState(6);
  const [activeTab3, setActiveTab3] = useState(6);

  const tabs = [
    { id: 6, title: 'Industry-Specific Solutions', content: 'Whether you’re in retail, healthcare or finance, we have AI models that address specific industry challenges, from inventory management to customer behavior predictions.' },
    { id: 7, title: 'Seamless Integration', content: 'Our AI tools integrate effortlessly with your existing software and systems, minimizing disruptions and maximizing efficiency.' },
    { id: 8, title: 'Scalable Customization', content: 'As your business evolves, so do our solutions. You can adjust and expand features as your operational requirements grow.' },
    { id: 9, title: 'White-Label AI Tools', content: 'Provide your customers with the latest AI technology under your own brand, allowing you to build stronger customer loyalty and a unique value proposition.' },
    // { id: 10, title: 'Brand Consistency', content: 'Our solutions maintain your brand’s visual and operational identity, ensuring that your AI offerings reflect your brand values and aesthetics.' },
  ];

  const tabs2 = [
    { id: 6, title: 'Cost-Effective Scaling', content: 'Start small and scale up as your business grows. Our pricing and resource structure ensures that you can gradually expand without unnecessary upfront costs.' },
    { id: 7, title: 'Predictive Maintenance', content: 'Our managed services include predictive analytics that identifies potential issues before they become problems, ensuring maximum uptime and efficiency.' },
    { id: 8, title: 'Real-Time Collaboration', content: 'Teams can collaborate in real-time, accessing the same data and insights to make informed decisions faster, no matter where they are.' },
    { id: 9, title: 'Rapid Setup', content: 'Get started with our AI solutions in days, not months. Our team handles the entire setup process to ensure your systems are operational as quickly as possible.' },
    
  ];

  const tabs3 = [
    { id: 6, title: 'No Downtime', content: 'Our deployment process is designed to avoid disruptions to your business. We integrate AI tools without the need for extended maintenance windows or downtime.' },
    { id: 7, title: 'Effortless Scaling', content: 'As your business grows, so do our AI tools. Easily scale your solution with more users, larger data sets, and additional features with just a few clicks.' },
    { id: 8, title: 'On-Demand Availability', content: 'Our AI solutions are available on-demand, allowing you to activate or deactivate them as needed, ensuring you only use what you need, when you need it.' },
    { id: 9, title: 'Cloud-Native Scalability', content: 'Our platform leverages the power of the cloud to offer near-limitless scalability, so you never outgrow the capabilities of our tools.' },
    
  ];

  const images = {
    6: "https://eschool-saas.wrteam.me/storage/feature_section/ztUiYIT1WtGkOYw0iPrfjtTD83r3xJnkJEo5lhCh.jpg",
    7: "https://eschool-saas.wrteam.me/storage/feature_section/s0ypdCHgrDirFnQGqglmkQjJts8jUwH7B1ByDr45.jpg",
    8: "https://eschool-saas.wrteam.me/storage/feature_section/7h2CsvJfXXj2T4jX2n8ZE4aV2jIUQuDJPOujfSSP.jpg",
    9: "https://eschool-saas.wrteam.me/storage/feature_section/0D0sVFix1Zs41J0kfLKdPECzxtTXxRY1xeVfgEVy.jpg",
    10: "https://eschool-saas.wrteam.me/storage/feature_section/J2T07wjYrWphuiEEJnSA7ufoex6oFUWFHo2sLgXV.jpg",
    11: "https://eschool-saas.wrteam.me/storage/feature_section/jcFItfbmjim7bOt9sreEULH6jQJcRY6p8xXdv85I.jpg",
  };

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
                What We Do
                </h1>
                <ul className="breadcrumb-nav">
                  {/* <li>
                    <a href="index.html">Home</a>
                  </li> */}
                  <li>Transforming Business Operations with AI Solutions</li>
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
                  <span className="lg:text-[20px] md:text-[14px] text-[20px]" style={{fontWeight : "500"}}>
                  At Amplify, we specialize in transforming business operations through innovative AI solutions. Our AI SaaS platform is designed to help businesses enhance their efficiency, streamline operations, and drive growth with powerful and easy-to-use tools.
                  </span>
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
        {/*...::: About Funfact Start :::... */}
        {/*...::: Content Section Start :::... */}
        <section id="content-section-2">
          
        <section className="right-section-2 mb-32 lg:px-32 md:px-18 right-feature-section commonMT">
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="col-12">
            <div className="sectionTitle text-center mb-6">
              <span className="block text-[#8523E8] font-semibold text-xl">Personalized AI Solutions</span>
              <span className="block text-gray-700 mt-2">We work closely with your team to understand your business challenges and customize AI tools that fit seamlessly into your operations.</span>
            </div>
          </div>

          <div className="col-12 flex items-center flex-wrap">
            {/* Image Section */}
            <div className="lg:w-1/2 w-full flex justify-center">
              <img src={images[activeTab]} alt="Admin panel" className="w-full " />
            </div>

            {/* Tabs Section */}
            <div className="lg:w-1/2 w-full">
              <div className="tabsWrapper mt-8 lg:mt-0 lg:ml-8">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={`cursor-pointer p-4 border mb-2 rounded-md ${activeTab === tab.id ? 'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white' : 'bg-white text-gray-800 border-gray-300'}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <span className="block font-semibold text-lg">{tab.title}</span>
                    <span className="block text-sm mt-2">{tab.content}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="right-section-2 mb-32 lg:px-32 md:px-18 right-feature-section commonMT">
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="col-12">
            <div className="sectionTitle text-center mb-6">
              <span className="block text-[#8523E8] font-semibold text-xl">Resource Flexibility & Managed Services</span>
              <span className="block text-gray-700 mt-2">Whether you're a small startup or an established enterprise, our AI solutions are designed to fit your resource and budget constraints.</span>
            </div>
          </div>

          <div className="col-12 flex items-center flex-wrap">
           

            {/* Tabs Section */}
            <div className="lg:w-1/2 w-full">
              <div className="tabsWrapper mt-8 lg:mt-0 lg:mr-8">
                {tabs2.map((tab) => (
                  <div
                    key={tab.id}
                    className={`cursor-pointer p-4 border mb-2 rounded-md ${activeTab2 === tab.id ? 'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white' : 'bg-white text-gray-800 border-gray-300'}`}
                    
                    onClick={() => setActiveTab2(tab.id)}
                  >
                    <span className="block font-semibold text-lg">{tab.title}</span>
                    <span className="block text-sm mt-2">{tab.content}</span>
                  </div>
                ))}
              </div>
            </div>

             {/* Image Section */}
             <div className="lg:w-1/2 w-full flex justify-center">
              <img src={images[activeTab2]} alt="Admin panel" className="w-full " />
            </div>
          </div>
        </div>
      </div>
    </section>
    

    <section className="right-section-2 mb-32 lg:px-32 md:px-18 right-feature-section commonMT">
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="col-12">
            <div className="sectionTitle text-center mb-6">
              <span className="block text-[#8523E8] font-semibold text-xl">Quick Deployment & Scalability</span>
              <span className="block text-gray-700 mt-2">Many of our AI tools are pre-configured and ready to deploy instantly, reducing the need for lengthy customization or adjustments.</span>
            </div>
          </div>

          <div className="col-12 flex items-center flex-wrap">
            {/* Image Section */}
            <div className="lg:w-1/2 w-full flex justify-center">
              <img src={images[activeTab3]} alt="Admin panel" className="w-full " />
            </div>

            {/* Tabs Section */}
            <div className="lg:w-1/2 w-full">
              <div className="tabsWrapper mt-8 lg:mt-0 lg:ml-8">
                {tabs3.map((tab) => (
                  <div
                    key={tab.id}
                    className={`cursor-pointer p-4 border mb-2 rounded-md ${activeTab3 === tab.id ? 'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white' : 'bg-white text-gray-800 border-gray-300'}`}
                    onClick={() => setActiveTab3(tab.id)}
                  >
                    <span className="block font-semibold text-lg">{tab.title}</span>
                    <span className="block text-sm mt-2">{tab.content}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
          
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

export default WhatWeDo;
