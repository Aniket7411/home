import idea from "../assets/img/th-1/idea_7636236 1.svg";
import sec from "../assets/img/th-1/security.svg";
import exe from "../assets/img/th-1/Excellence.svg";
import aud from "../assets/img/th-1/target-audience_7243046 1.svg";

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="bg-black pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]">
        <div className="global-container">
          <div className="jos mb-10 text-center lg:mb-16 xl:mb-20">
            <div className="mx-auto max-w-[300px] lg:max-w-[600px] xl:max-w-[680px]">
              <h2 className="text-white lg:text-[80px] md:text-[41px]  text-[24px] ">
                AI & ML Chronicles
              </h2>
              <p className="text-white lg:text-[20px] md:text-[11px]  text-[10px] ">
                Exploring the Cutting-Edge of Technology
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-2">
            <div className="parent">
              <div>
                <ul className="menu-list">
                  <li>
                    <p data-src={idea}>
                      <h2 className="text-white lg:text-[30px] md:text-[22px]  text-[20px] mb-2">
                        Innovation
                      </h2>
                      We believe in pushing the boundaries of technology to
                      create cutting-edge AI and ML solutions that solve
                      real-world problems and drive progress.
                    </p>
                  </li>
                  <li>
                    <p data-src={exe}>
                      <h2 className="text-white lg:text-[30px] md:text-[22px]  text-[20px] mb-2">
                        Excellence
                      </h2>
                      Our commitment to excellence ensures that we deliver
                      high-quality, reliable, and efficient AI solutions that
                      exceed our clients’ expectations.
                    </p>
                  </li>
                  <li>
                    <p data-src={aud}>
                      <h2 className="text-white lg:text-[30px] md:text-[22px]  text-[20px] mb-2">
                        Customer Focus
                      </h2>
                      Our customers are at the heart of everything we do. We
                      strive to understand their needs and deliver personalized
                      AI solutions that add value to their businesses.
                    </p>
                  </li>
                  <li>
                    <p data-src={sec}>
                      <h2 className="text-white lg:text-[30px] md:text-[22px]  text-[20px] mb-2">
                        Security and Privacy
                      </h2>
                      We prioritize the security and privacy of our clients’
                      data, implementing robust measures to protect sensitive
                      information and ensure compliance with industry standards.
                    </p>
                  </li>
                </ul>
              </div>
              
            </div>
            <div className="menu-image-holder">
                <img src={idea}  className="xxl:w-full xl:w-[80%] md:w-[75%] sm:w-[80%] m-auto"  />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
