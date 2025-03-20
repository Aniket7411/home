import { useEffect, useState } from "react";
import images from "../assets/imageImports";
import JOS from "jos-animation";
const ContentSections = () => {
  const [sections, setSections] = useState({});

  useEffect(() => {
    fetch("/contentSections.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setSections(data[0]);
        } else {
          console.error("Unexpected data format:", data);
        }
      })
      .catch((error) => console.error("Error fetching the sections:", error));
    JOS.init();
  }, []);

  return (
    <>
      {/* Content Section 1 */}
      <section id="content-section-1">
        <div className="pb-20 xl:pb-[110px]">
          <div className="global-container">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:gap-28 xxl:gap-32">
              <div
                className="jos  overflow-hidden rounded-md md:order-1 order-1"
                data-jos_animation="fade-left"
              >
                {/* <img
                  src={images[sections.section1?.image]}
                  alt="content-image-1"
                  width={526}
                  height={450}
                  style={{marginTop:"-4rem"}}
                  // className="h-auto w-full"
                /> */}
                <iframe className=" xl:w-[626px] xl:h-[450px] lg:w-[480px] lg:h-[400px] md:w-[380px] md:h-[330px] " src="https://lottie.host/embed/e0016eab-50bc-404f-9d6b-2351038c6be3/cwSEjst9Ni.json" 
                 width={400} height={400} ></iframe>
              </div>
              <div
                className="jos md:order-2 order-2"
                data-jos_animation="fade-right"
              >
                <div className="mb-6">
                  <h2 className="lg:text-[80px] md:text-[41px] text-[24px]">{sections.section1?.title}</h2>
                </div>
                <div className="text-lg leading-[1.4] lg:text-[21px]">
                  {sections.section1?.paragraphs.map((paragraph, index) => (
                    <p key={index} className="mb-7 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 2 */}
      <section id="content-section-2">
        <div className="pb-20 xl:pb-[150px]">
          <div className="global-container">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28 xxl:gap-32">
              <div
                className="jos md:order-4 order-3 overflow-hidden rounded-md"
                data-jos_animation="fade-left"
              >
                {/* <img
                  src={images[sections.section2?.image]}
                  alt="content-image-2"
                  width={526}
                  height={450}
                  className="h-auto w-full"
                /> */}
                <iframe className="xl:w-[626px] xl:h-[450px] lg:w-[480px] lg:h-[400px] md:w-[380px] md:h-[330px]" src="https://lottie.host/embed/14de7b46-ee6d-4ec2-a8eb-057fec56e447/O6S2MUpm9X.json" width={500}
                  height={400}></iframe>
              </div>
              <div className="jos md:order-3 order-4" data-jos_animation="fade-right">
                <div className="mb-6">
                  <h2 className="lg:text-[80px] md:text-[41px]  text-[24px] ">{sections.section2?.title}</h2>
                </div>
                <div className="text-lg leading-[1.4] lg:text-[21px]">
                  {sections.section2?.paragraphs.map((paragraph, index) => (
                    <p key={index} className="mb-7 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                  {sections.section2?.listItems && (
                    <ul className="flex flex-col gap-y-5 font-dmSans text-xl leading-tight tracking-tighter text-black lg:mt-12 lg:text-[28px]">
                      {sections.section2.listItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-x-3">
                          <div className="mt-[2.5px] h-[30px] w-[30px]">
                            <img
                              src={images[sections.section2.checkIcon]}
                              alt="check-circle"
                              width={30}
                              height={30}
                              className="h-full w-full"
                            />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentSections;
