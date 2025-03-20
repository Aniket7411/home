import { Link } from "react-router-dom"
import map from '../assets/img/th-1/mapbase.svg';
import marker from '../assets/img/th-1/icon-gray-location-marker.svg';
import marker2 from '../assets/img/th-1/icon-orange-location-marker.svg';
import blackmarker from '../assets/img/th-1/icon-black-location-marker.svg';
import twitter1 from '../assets/img/th-1/twitter-icon-white.svg';
import twitter2 from '../assets/img/th-1/twitter-icon-black.svg';
import instagram1 from '../assets/img/th-1/instagram-icon-white.svg';
import instagram2 from '../assets/img/th-1/instagram-icon-black.svg';
import linkedin1 from '../assets/img/th-1/linkedin-icon-white.svg';
import linkedin2 from '../assets/img/th-1/linkedin-icon-black.svg';
import facebook1 from '../assets/img/th-1/facebook-icon-white.svg';
import facebook2 from '../assets/img/th-1/facebook-icon-black.svg';
import FOG from "vanta/dist/vanta.fog.min.js";
import { useEffect, useRef, useState } from "react";
function Contact() {
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
    <div>
        <main className="main-wrapper relative overflow-hidden">
  {/*...::: Breadcrumb Section Start :::... */}
  <section id="section-breadcrumb">
    {/* Section Spacer */}
    <div className="breadcrumb-wrapper" ref={myRef} style={{borderRadius : "100px"}}>
      {/* Section Container */}
      <div className="global-container">
        <div className="breadcrumb-block">
          <h1 className="breadcrumb-title lg:text-[120px] md:text-[58px]  text-[24px]">Contact Us</h1>
          <ul className="breadcrumb-nav">
            <li><Link to="/">Home</Link></li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      {/* Section Container */}
    </div>
    {/* Section Spacer */}
  </section>
  {/*...::: Breadcrumb Section End :::... */}
  {/*...::: Contact Section Start :::... */}
  <section className="contact-section">
    {/* Section Spacer */}
    <div className="pb-20 xl:pb-[150px]">
      {/* Section Container */}
      <div className="global-container">
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2 xl:grid-cols-[minmax(0,_1fr)_1.1fr]">
          {/* Contact Left Block */}
          <div className="order-2 flex flex-col md:order-1">
            {/* Section Content Block */}
            <div className="mb-8 text-left lg:mb-16 xl:mb-6">
              <div className="mx-auto md:mx-0 md:max-w-none">
                <h2 className="lg:text-[80px] md:text-[41px]  text-[24px]">Get in touch with us directly</h2>
              </div>
            </div>
            {/* Section Content Block */}
            <div className="text-lg leading-[1.4] lg:text-[21px]">
              <p className="mb-7 last:mb-0">
                We are here to help you! Tell us how we can help &amp; well
                be in touch with an expert within the next 24 hours.
              </p>
              <ul className="mt-12 flex flex-col gap-y-8 lg:gap-y-12">
                <li className="flex flex-col gap-y-4 text-2xl font-bold">
                  Send us an email:
                  <a href="mailto:yourmail@email.com" className="text-2xl font-normal leading-loose hover:text-[#6E3897] lg:text-3xl">info@mthemeus.com</a>
                </li>
                <li className="flex flex-col gap-y-4 text-2xl font-bold">
                  Give us a call:
                  <a href="tel:+0123456789" className="text-2xl font-normal leading-loose hover:text-[#6E3897] lg:text-3xl">+(012)
                    345 6789</a>
                </li>
                <li className="flex flex-col gap-y-4 text-2xl font-bold">
                  Follow us:
                  <ul className="mt-auto flex gap-x-[15px]">
                    <li>
                      <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-[#6E3897]">
                        <img src={facebook1} alt="facebook" width={14} height={14} className="opacity-100 group-hover:opacity-0" />
                        <img src={facebook2} alt="facebook" width={14} height={14} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" />
                      </a>
                    </li>
                    <li>
                      <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer" className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-[#6E3897]">
                        <img src={twitter1} alt="twitter" width={14} height={14} className="opacity-100 group-hover:opacity-0" />
                        <img src={twitter2} alt="twitter" width={14} height={14} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" />
                      </a>
                    </li>
                    <li>
                      <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-[#6E3897]">
                        <img src={linkedin1} alt="linkedin" width={14} height={14} className="opacity-100 group-hover:opacity-0" />
                        <img src={linkedin2} alt="linkedin" width={14} height={14} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" />
                      </a>
                    </li>
                    <li>
                      <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" className="group relative flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-black hover:bg-[#6E3897]">
                        <img src={instagram1} alt="instagram" width={14} height={14} className="opacity-100 group-hover:opacity-0" />
                        <img src={instagram2} alt="instagram" width={14} height={14} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact Left Block */}
          {/* Contact Right Block */}
          <div className="order-1 block rounded-lg bg-white px-[30px] py-[50px] shadow-[0_4px_60px_0_rgba(0,0,0,0.1)] md:order-2">
            {/* Contact Form */}
            <form action="https://formspree.io/f/mlqvzkyx" method="post" className="flex flex-col gap-y-5">
              {/* Form Group */}
              <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                {/* Form Single Input */}
                <div className="flex flex-col gap-y-[10px]">
                  <label htmlFor="contact-name" className="text-lg font-bold leading-[1.6]">Enter your
                    name</label>
                  <input type="text" name="contact-name" id="contact-name" placeholder="Adam Smith" className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-[#6E3897]" required />
                </div>
                {/* Form Single Input */}
                {/* Form Single Input */}
                <div className="flex flex-col gap-y-[10px]">
                  <label htmlFor="contact-email" className="text-lg font-bold leading-[1.6]">Email
                    address</label>
                  <input type="email" name="contact-email" id="contact-email" placeholder="example@gmail.com" className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-[#6E3897]" required />
                </div>
                {/* Form Single Input */}
              </div>
              {/* Form Group */}
              {/* Form Group */}
              <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                {/* Form Single Input */}
                <div className="flex flex-col gap-y-[10px]">
                  <label htmlFor="contact-phone" className="text-lg font-bold leading-[1.6]">Phone
                    number</label>
                  <input type="tel" name="contact-phone" id="contact-phone" placeholder="(123) 456 - 7890" className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-[#6E3897]" required />
                </div>
                {/* Form Single Input */}
                {/* Form Single Input */}
                <div className="flex flex-col gap-y-[10px]">
                  <label htmlFor="contact-company" className="text-lg font-bold leading-[1.6]">Company</label>
                  <input type="text" name="contact-company" id="contact-company" placeholder="EX Facebook" className="rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-[#6E3897]" required />
                </div>
                {/* Form Single Input */}
              </div>
              {/* Form Group */}
              {/* Form Group */}
              <div className="grid grid-cols-1 gap-6">
                {/* Form Single Input */}
                <div className="flex flex-col gap-y-[10px]">
                  <label htmlFor="contact-message" className="text-lg font-bold leading-[1.6]">Message</label>
                  <textarea name="contact-message" id="contact-message" className="min-h-[180px] rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-[#6E3897]" placeholder="Write your message here..." required defaultValue={"                                            "} />
                </div>
                {/* Form Single Input */}
              </div>
              <div>
                <button type="submit" className="button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-[#6E3897] hover:border-[#6E3897] hover:text-white">
                  Send your message
                </button>
              </div>
              {/* Form Group */}
            </form>
            {/* Contact Form */}
          </div>
          {/* Contact Right Block */}
        </div>
      </div>
      {/* Section Container */}
    </div>
    {/* Section Spacer */}
  </section>
  {/*...::: Contact Section End :::... */}
  {/*...::: Map Section Start :::... */}
  <section className="map-section">
    {/* Section Spacer */}
    <div className="bg-black pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]">
      {/* Section Container */}
      <div className="global-container">
        {/* Section Content Block */}
        <div className="mb-10 text-center lg:mb-16 xl:mb-20">
          <div className="mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[950px]">
            <h2 className="text-white lg:text-[80px] md:text-[41px]  text-[24px]">
              We always welcome our clients to our office
            </h2>
          </div>
        </div>
        {/* Section Content Block */}
        {/* Map Block */}
        <div className="relative">
          <img src={map} alt="mapbase" className="h-auto w-full" />
          {/* Location 1 */}
          <div className="group absolute hidden sm:flex gap-2 sm:top-[10%] sm:left-[13%]">
            <div className="relative w-[50px] h-[50px]">
              <button className="group flex justify-center items-center w-[50px] h-[50px] relative transition-all duration-300">
                <img src={marker} alt="icon-gray-location-marker" width={35} height={35} className="opacity-100 group-hover:opacity-0 transition-all duration-300" />
                <img src={marker2}  alt="icon-gray-location-marker" width={50} height={50} className="absolute opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
              </button>
              <div className="absolute bg-white rounded-[8px] p-4 text-sm w-[170px] bottom-0 right-0 xl:right-[50px] xxl:right-auto xxl:left-[50px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 xl:translate-y-12 group-hover:translate-y-0">
                <div className="flex gap-1 font-bold pb-3">
                  <img src="assets/img/th-1/icon-black-location-marker.svg" alt="icon-black-location-marker" width={17} height={17} />
                  Toronto, Canada
                </div>
                <address className="not-italic font-semibold">
                  Line 1: House/Flat 208, Venue Street
                </address>
              </div>
            </div>
          </div>
          {/* Location 1 */}
          {/* Location 2 */}
          <div className="group absolute hidden sm:flex gap-2 sm:top-[65%] sm:left-[18%]">
            <div className="relative w-[50px] h-[50px]">
              <button className="group flex justify-center items-center w-[50px] h-[50px] relative transition-all duration-300">
                <img src={marker} alt="icon-gray-location-marker" width={35} height={35} className="opacity-100 group-hover:opacity-0 transition-all duration-300" />
                <img src={marker2} alt="icon-gray-location-marker" width={50} height={50} className="absolute opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
              </button>
              <div className="absolute bg-white rounded-[8px] p-4 text-sm w-[170px] bottom-0 right-0 xl:right-[50px] xxl:right-auto xxl:left-[50px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 xl:translate-y-12 group-hover:translate-y-0">
                <div className="flex gap-1 font-bold pb-3">
                  <img src={blackmarker} alt="icon-black-location-marker" width={17} height={17} />
                  Sao Paulo, Brazil
                </div>
                <address className="not-italic font-semibold">
                  Line 1: House/Flat 208, Venue Street
                </address>
              </div>
            </div>
          </div>
          {/* Location 2 */}
          {/* Location 3 */}
          <div className="group absolute hidden sm:flex gap-2 sm:top-[38%] sm:left-[38%]">
            <div className="relative w-[50px] h-[50px]">
              <button className="group flex justify-center items-center w-[50px] h-[50px] relative transition-all duration-300">
                <img src={marker} alt="icon-gray-location-marker" width={35} height={35} className="opacity-100 group-hover:opacity-0 transition-all duration-300" />
                <img src={marker2} alt="icon-gray-location-marker" width={50} height={50} className="absolute opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
              </button>
              <div className="absolute bg-white rounded-[8px] p-4 text-sm w-[170px] bottom-0 right-0 xl:right-[50px] xxl:right-auto xxl:left-[50px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 xl:translate-y-12 group-hover:translate-y-0">
                <div className="flex gap-1 font-bold pb-3">
                  <img src={blackmarker} alt="icon-black-location-marker" width={17} height={17} />
                  Bamako, Mali
                </div>
                <address className="not-italic font-semibold">
                  Line 1: House/Flat 208, Venue Street
                </address>
              </div>
            </div>
          </div>
          {/* Location 3 */}
          {/* Location 4 */}
          <div className="group absolute hidden sm:flex gap-2 sm:top-[5%]  sm:left-[61%]">
            <div className="relative w-[50px] h-[50px]">
              <button className="group flex justify-center items-center w-[50px] h-[50px] relative transition-all duration-300">
                <img src={marker} alt="icon-gray-location-marker" width={35} height={35} className="opacity-100 group-hover:opacity-0 transition-all duration-300" />
                <img src={marker2} alt="icon-gray-location-marker" width={50} height={50} className="absolute opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
              </button>
              <div className="absolute bg-white rounded-[8px] p-4 text-sm w-[170px] bottom-0 right-0 xl:right-[50px] xxl:right-auto xxl:left-[50px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 xl:translate-y-12 group-hover:translate-y-0">
                <div className="flex gap-1 font-bold pb-3">
                  <img src={blackmarker} alt="icon-black-location-marker" width={17} height={17} />
                  Noril sk, Russia
                </div>
                <address className="not-italic font-semibold">
                  Line 1: House/Flat 208, Venue Street
                </address>
              </div>
            </div>
          </div>
          {/* Location 4 */}
          {/* Location 5 */}
          <div className="group absolute hidden sm:flex gap-2 sm:top-[72%] sm:left-[88%]">
            <div className="relative w-[50px] h-[50px]">
              <button className="group flex justify-center items-center w-[50px] h-[50px] relative transition-all duration-300">
                <img src={marker} alt="icon-gray-location-marker" width={35} height={35} className="opacity-100 group-hover:opacity-0 transition-all duration-300" />
                <img src={marker2} alt="icon-gray-location-marker" width={50} height={50} className="absolute opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
              </button>
              <div className="absolute bg-white rounded-[8px] p-4 text-sm w-[170px] bottom-0 right-0 xl:right-[50px] xxl:right-auto xxl:left-[50px] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 xl:translate-y-12 group-hover:translate-y-0">
                <div className="flex gap-1 font-bold pb-3">
                  <img src={blackmarker} alt="icon-black-location-marker" width={17} height={17} />
                  Lake Eyre, Australia
                </div>
                <address className="not-italic font-semibold">
                  Line 1: House/Flat 208, Venue Street
                </address>
              </div>
            </div>
          </div>
          {/* Location 5 */}
        </div>
        {/* Map Block */}
      </div>
      {/* Section Container */}
    </div>
    {/* Section Spacer */}
  </section>
  {/*...::: Map Section Start :::... */}
</main>

    </div>
  )
}

export default Contact