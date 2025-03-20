import { Link } from "react-router-dom"
import feature1 from "../assets/img/th-1/portfolio-img-1.jpg";
import feature2 from "../assets/img/th-1/portfolio-img-2.jpg";
import feature3 from "../assets/img/th-1/portfolio-img-3.jpg";
import feature4 from "../assets/img/th-1/portfolio-img-4.jpg";
import feature5 from "../assets/img/th-1/portfolio-img-5.jpg";
import feature6 from "../assets/img/th-1/portfolio-img-6.jpg";
import arrblack from "../assets/img/th-1/icon-black-long-arrow-right.svg";

function Features() {
  return (
    <div>
      <main className="main-wrapper relative overflow-hidden">
  {/*...::: Breadcrumb Section Start :::... */}
  <section id="section-breadcrumb">
    {/* Section Spacer */}
    <div className="breadcrumb-wrapper">
      {/* Section Container */}
      <div className="global-container">
        <div className="breadcrumb-block">
          <h1 className="breadcrumb-title lg:text-[120px] md:text-[58px] text-[24px]"> Features</h1>
          <ul className="breadcrumb-nav">
            <li><Link href="/">Home</Link></li>
            <li>Features</li>
          </ul>
        </div>
      </div>
      {/* Section Container */}
    </div>
    {/* Section Spacer */}
  </section>
  {/*...::: Breadcrumb Section End :::... */}

  <section id="portfolio-section">
    {/* Section Spacer */}
    <div className="pb-40 xl:pb-[220px]">
    
      <div className="global-container">
        
        <div className="jos mb-10 text-center lg:mb-16 xl:mb-20">
          <div className="mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[746px]">
            <h2 className="lg:text-[80px] md:text-[41px] text-[24px]">Valuable AI projects for new generation</h2>
          </div>
        </div>
      
        <ul className="col-1 gap-6 md:columns-2">
       
          <li className="jos group mb-10 flex flex-col gap-y-6 last:mb-0" data-jos_delay="0.1">
            <Link to="/error" className="block w-full overflow-hidden rounded-[10px] group-odd:h-80 group-even:h-96 lg:group-odd:h-[550px] lg:group-even:h-[750px]">
              <img src={feature1} alt="portfolio-img-1" width={636} height={550} className="h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105" />
            </Link>
            <Link to="/error" className="flex items-center justify-between gap-x-6 text-xl font-bold leading-[1.4] hover:text-[#6E3897] lg:gap-x-14 lg:text-2xl xl:gap-x-20 xl:text-3xl">
              <span className="flex-1">Natural language processing models to extract
                insights</span>
              <div className="h-8 w-8 lg:h-[45px] lg:w-[45px]">
                <img src={arrblack}  alt="icon-black-long-arrow-right.svg" width={45} height={45} />
              </div>
            </Link>
          </li>
         
        
          <li className="jos group mb-10 flex flex-col gap-y-6 last:mb-0" data-jos_delay="0.2">
          <Link to="/error" className="block w-full overflow-hidden rounded-[10px] group-odd:h-80 group-even:h-96 lg:group-odd:h-[550px] lg:group-even:h-[750px]">
              <img src={feature2} alt="portfolio-img-2" width={636} height={550} className="h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105" />
            </Link>
            <Link to="/error" className="flex items-center justify-between gap-x-6 text-xl font-bold leading-[1.4] hover:text-[#6E3897] lg:gap-x-14 lg:text-2xl xl:gap-x-20 xl:text-3xl">
              <span className="flex-1">Create an modern AI-powered educational platform</span>
              <div className="h-8 w-8 lg:h-[45px] lg:w-[45px]">
                <img src={arrblack}  alt="icon-black-long-arrow-right.svg" width={45} height={45} />
              </div>
            </Link>
          </li>
          {/* Portfolio Item */}
          {/* Portfolio Item */}
          <li className="jos group mb-10 flex flex-col gap-y-6 last:mb-0" data-jos_delay="0.3">
          <Link to="/error" className="block w-full overflow-hidden rounded-[10px] group-odd:h-80 group-even:h-96 lg:group-odd:h-[550px] lg:group-even:h-[750px]">
              <img src={feature3} alt="portfolio-img-3" width={636} height={550} className="h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105" />
            </Link>
            <Link to="/error" className="flex items-center justify-between gap-x-6 text-xl font-bold leading-[1.4] hover:text-[#6E3897] lg:gap-x-14 lg:text-2xl xl:gap-x-20 xl:text-3xl">
              <span className="flex-1">Develop a content generation system that uses AI
                system</span>
              <div className="h-8 w-8 lg:h-[45px] lg:w-[45px]">
                <img src={arrblack}  alt="icon-black-long-arrow-right.svg" width={45} height={45} />
              </div>
            </Link>
          </li>
          {/* Portfolio Item */}
          {/* Portfolio Item */}
          <li className="jos group mb-10 flex flex-col gap-y-6 last:mb-0" data-jos_delay="0.4">
          <Link to="/error" className="block w-full overflow-hidden rounded-[10px] group-odd:h-80 group-even:h-96 lg:group-odd:h-[550px] lg:group-even:h-[750px]">
              <img src={feature4} alt="portfolio-img-4" width={636} height={550} className="h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105" />
            </Link>
            <Link to="/error" className="flex items-center justify-between gap-x-6 text-xl font-bold leading-[1.4] hover:text-[#6E3897] lg:gap-x-14 lg:text-2xl xl:gap-x-20 xl:text-3xl">
              <span className="flex-1">Implement a predictive maintenance system with AI</span>
              <div className="h-8 w-8 lg:h-[45px] lg:w-[45px]">
                <img src={arrblack}  alt="icon-black-long-arrow-right.svg" width={45} height={45} />
              </div>
            </Link>
          </li>
          {/* Portfolio Item */}
          {/* Portfolio Item */}
          <li className="jos group mb-10 flex flex-col gap-y-6 last:mb-0" data-jos_delay="0.5">
          <Link to="/error" className="block w-full overflow-hidden rounded-[10px] group-odd:h-80 group-even:h-96 lg:group-odd:h-[550px] lg:group-even:h-[750px]">
              <img src={feature5} alt="portfolio-img-5" width={636} height={550} className="h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105" />
            </Link>
            <Link to="/error" className="flex items-center justify-between gap-x-6 text-xl font-bold leading-[1.4] hover:text-[#6E3897] lg:gap-x-14 lg:text-2xl xl:gap-x-20 xl:text-3xl">
              <span className="flex-1">Build an AI solution for precision agriculture</span>
              <div className="h-8 w-8 lg:h-[45px] lg:w-[45px]">
                <img src={arrblack}  alt="icon-black-long-arrow-right.svg" width={45} height={45} />
              </div>
            </Link>
          </li>
          {/* Portfolio Item */}
          {/* Portfolio Item */}
          <li className="jos group mb-10 flex flex-col gap-y-6 last:mb-0" data-jos_delay="0.6">
          <Link to="/error" className="block w-full overflow-hidden rounded-[10px] group-odd:h-80 group-even:h-96 lg:group-odd:h-[550px] lg:group-even:h-[750px]">
              <img src={feature6} alt="portfolio-img-6" width={636} height={550} className="h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105" />
            </Link>
            <Link to="/error" className="flex items-center justify-between gap-x-6 text-xl font-bold leading-[1.4] hover:text-[#6E3897] lg:gap-x-14 lg:text-2xl xl:gap-x-20 xl:text-3xl">
              <span className="flex-1">AI for large corporations and businesses across
                industries</span>
              <div className="h-8 w-8 lg:h-[45px] lg:w-[45px]">
                <img src={arrblack} alt="icon-black-long-arrow-right.svg" width={45} height={45} />
              </div>
            </Link>
          </li>
      
        </ul>
       
      </div>
     
    </div>
    {/* Section Spacer */}
  </section>
  
</main>

    </div>
  )
}

export default Features
