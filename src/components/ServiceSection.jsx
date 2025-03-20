import { useEffect, useState } from "react";
import images from "../assets/imageImports";
import JOS from "jos-animation";
import { Link } from "react-router-dom";
const ServiceSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched services data:", data);
        setServices(data);
      })
      .catch((error) => console.error("Error fetching the services:", error));
    JOS.init();
  }, []);

  return (
    <section id="section-service">
      <div className="pb-20 pt-20 xl:pb-[150px] xl:pt-[130px]">
        <div className="global-container">
          <div className="jos mb-10 lg:mb-16 xl:mb-20">
            <div className="md:max-w-sm lg:max-w-xl xl:max-w-[746px]">
              <h2 className="lg:text-[80px] md:text-[41px]  text-[24px] ">
                Core features that make it valuable
              </h2>
            </div>
          </div>
          <ul className="jos grid grid-cols-1 gap-[2px] overflow-hidden rounded-[10px] border-2 border-black bg-black sm:grid-cols-2 lg:grid-cols-4">
            {Array.isArray(services) &&
              services.map((service, index) => (
                <li
                  key={index}
                  className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black"
                >
                  <div className="relative mb-9 h-[70px] w-[70px]">
                    <img
                      src={images[service.iconBlack]}
                      alt={service.title}
                      width={70}
                      height={70}
                    />
                    <img
                      src={images[service.iconOrange]}
                      alt={service.title}
                      width={70}
                      height={70}
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
                    <a href={service.link} className="hover:text-[#C339C3]">
                      {service.title}
                    </a>
                  </h3>
                  <p className="mb-12 duration-300 group-hover:text-white">
                    {service.description}
                  </p>
                  <Link
                  to='/service'
                    className="relative inline-block h-[30px] w-[30px] duration-300"
                  >
                    <img
                      src={images[service.arrowBlack]}
                      alt="arrow-right-black"
                      width={30}
                      height={30}
                    />
                    <img
                      src={images[service.arrowOrange]}
                      alt="arrow-right-orange"
                      width={30}
                      height={30}
                      className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
