import footerIcon from "../assets/img/th-1/footer-text-slider-icon.svg";
import newsletter from "../assets/img/th-1/arrow-right-large.svg";
import logo from "../assets/img/simple/newlogo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative z-[1] -mt-[70px] overflow-hidden bg-[aliceblue]
     rounded-tl-[30px] rounded-tr-[30px] bg-colorLinenRuffle lg:rounded-tl-[50px] lg:rounded-tr-[50px]">
      <div className="py-[60px] xl:pb-[100px] xl:pt-[130px]">
        <div className="overflow-hidden">
          {/* Footer Text Slider */}
          <div className="footer-text-slider flex w-full items-center gap-x-[30px] whitespace-nowrap">
            {/* Footer Slide Item  */}
            <img
              src={footerIcon}
              alt="footer-text-slider-icon"
              width={60}
              height={60}
              className="h-10 w-10 lg:h-[60px] lg:w-[60px]"
            />
            <div className="block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]">
            Data Analytics
            </div>

            <img
              src={footerIcon}
              alt="footer-text-slider-icon"
              width={60}
              height={60}
              className="h-10 w-10 lg:h-[60px] lg:w-[60px]"
            />
            <div className="block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]">
            ML Models
            </div>

            <img
              src={footerIcon}
              alt="footer-text-slider-icon"
              width={60}
              height={60}
              className="h-10 w-10 lg:h-[60px] lg:w-[60px]"
            />
            <div className="block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]">
            Automation &amp; Robotics
            </div>
            <img
              src={footerIcon}
              alt="footer-text-slider-icon"
              width={60}
              height={60}
              className="h-10 w-10 lg:h-[60px] lg:w-[60px]"
            />
            <div className="block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl xxl:text-[80px]">
            AI Consulting
            </div>
          </div>
        </div>
      </div>

      <div className="global-container">
        <div className="h-[1px] w-full bg-[#DBD6CF]" />

        <div className="lg grid grid-cols-1 gap-10 py-[60px] md:grid-cols-[1fr_auto_auto] xl:grid-cols-[1fr_auto_auto_1fr] xl:gap-20 xl:py-[100px]">
          <div className="flex flex-col gap-y-6">
            <a href="index.html" className="inline-block">
              <img src={logo} alt="logo" width={200} height={100} />
            </a>
            <p>
              Our mission is to harness the power of AI to solve complex
              business challenges &amp; decision-makers with data-driven
              insights, and enhance user experiences across digital platforms.
            </p>
            {/* <p>
              Website:{" "}
              <a href="https://www.blockverse.co.in" target="_blank">
                www.blockverse.co.in
              </a>
            </p> */}
          </div>

          <div className="flex flex-col gap-y-6">
            <h4 className="text-[21px] font-semibold capitalize text-black">
              Primary Pages
            </h4>

            <ul className="flex flex-col gap-y-[10px] capitalize">
              <li>
                <Link
                  to="/"
                  className="transition-all duration-300 ease-linear hover:text-[#C339C3]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="transition-all duration-300 ease-linear hover:text-[#C339C3]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="transition-all duration-300 ease-linear hover:text-[#C339C3]"
                >
                  Services
                </Link>
              </li>
              {/* <li>
                <a
                  href="pricing.html"
                  className="transition-all duration-300 ease-linear hover:text-[#C339C3]"
                >
                  pricing
                </a>
              </li> */}
              <li>
                <Link
                  to="/contact"
                  className="transition-all duration-300 ease-linear hover:text-[#C339C3]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-6">
            <h4 className="text-[21px] font-semibold capitalize text-black">
              Utility pages
            </h4>

            <ul className="flex flex-col gap-y-[10px] capitalize">
              <li>
                <a
                  href="signup.html"
                  className="transition-all duration-300 ease-linear hover:text-[#C339C3]"
                >
                  Signup
                </a>
              </li>
              <li>
                <a
                  href="login.html"
                  className="transition-all duration-300 ease-linear hover:text-[#C339C3]"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="error-404.html"
                  className="transition-all duration-300 ease-linear hover:text-[#C339C3]"
                >
                  404 Not found
                </a>
              </li>
              <li>
                <a
                  href="reset-password.html"
                  className="transition-all duration-300 ease-linear hover:text-[#C339C3]"
                >
                  Password Reset
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-6">
            <h4 className="text-[21px] font-semibold capitalize text-black">
              Subscribe to our newsletter
            </h4>

            <form action="#" method="post" className>
              <div className="relative h-[50px] max-w-[300px]">
                <input
                  type="email"
                  name="newsletter-email"
                  id="newsletter-email"
                  placeholder="Enter your email"
                  className="p-y-[18px] h-full w-full rounded-[50px] border-[1px] border-black px-[24px] pr-20 outline-none"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-[5px] top-[50%] inline-block h-10 -translate-y-[50%] rounded-[50px] bg-black px-6 transition-all hover:bg-[#C339C3]"
                >
                  <img src={newsletter} alt="newsletter" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="h-[1px] w-full bg-[#DBD6CF]" />

        <div className="py-9 text-center">
          <p>© Copyright 2023, All Rights Reserved by Blockverse</p>
        </div>
      </div>

      <div className="orange-gradient-2 absolute -top-[290px] right-[90px] -z-[1] h-[406px] w-[406px] -rotate-[58deg] rounded-[406px]"></div>

      <div className="orange-gradient-1 absolute -right-[200px] -top-[205px] -z-[1] h-[451px] w-[451px] -rotate-[58deg] rounded-[451px]"></div>
    </footer>
  );
}

export default Footer;
