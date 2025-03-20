import { useEffect, useState } from "react";
import plusicon from "../assets/img/simple/plus.svg";
import JOS from "jos-animation";
const FaqSection = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch("/faq.json")
      .then((response) => response.json())
      .then((data) => setFaqs(data))
      .catch((error) => console.error("Error fetching FAQ data:", error));
  }, []);

  useEffect(() => {
    const accordions = document.querySelectorAll(".accordion-item");
    accordions.forEach((item) => {
      const label = item.querySelector(".accordion-header");
      label.addEventListener("click", () => {
        accordions.forEach((accordionItem) => {
          accordionItem.classList.remove("active");
        });
        item.classList.toggle("active");
      });
    });
    JOS.init();
  }, [faqs]);

  return (
    <section className="faq-section">
      <div className="pb-20 xl:pb-[150px]">
        <div className="global-container">
          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2">
            <div className="jos flex flex-col" data-jos_animation="fade-right">
              <div className="mb-6">
                <div className="mx-auto md:mx-0 md:max-w-none">
                  <h2 className="lg:text-[80px] md:text-[41px]  text-[24px] ">
                    Freely ask us for more information
                  </h2>
                </div>
              </div>
              <div className="text-lg leading-[1.4] lg:text-[21px]">
                <p className="mb-7 last:mb-0">
                  Our AI SaaS solutions can be quickly deployed, enabling users
                  to start benefiting from AI capabilities without lengthy setup
                  and development times in fast-paced industries.
                </p>
                <a
                  href="faq.html"
                  className="button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-gradient-to-b from-[#480EEC] to-[#B840C7] hover:border-[#B840C7] hover:text-white"
                >
                  Ask your questions
                </a>
              </div>
            </div>
            <div
              className="jos md:ml-10 lg:ml-20 xl:ml-32"
              data-jos_animation="fade-left"
            >
              <ul className="accordion">
                {faqs.map((faq, index) => (
                  <li
                    key={index}
                    className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${
                      index === 0 ? "active" : ""
                    }`}
                  >
                    <div className="accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px]">
                      <p>{faq.question}</p>
                      <div className="accordion-icon">
                        <img src={plusicon} alt="plus" />
                      </div>
                    </div>
                    <div className="accordion-content text-[#2C2C2C]">
                      <p>{faq.answer}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
