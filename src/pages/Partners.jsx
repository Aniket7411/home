import { Link } from "react-router-dom"

function Partners() {
  const partners = [
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
    { name: "Webmerge", logo: "https://www.webmerge.me/assets/webmerge/img/logo.png" },
    { name: "Kentico", logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Kentico_logo.png" },
    { name: "Amazon Web Services", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg" },
    { name: "Cloudera", logo: "https://upload.wikimedia.org/wikipedia/commons/8/88/Cloudera_logo.png" },
    { name: "Salesforce Partner", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
  ]

  return (
    <div>
      <main className="main-wrapper relative overflow-hidden">
        <section id="section-breadcrumb">
          <div className="breadcrumb-wrapper">
            <div className="global-container">
              <div className="breadcrumb-block">
                <h1 className="breadcrumb-title lg:text-[120px] md:text-[58px] text-[24px]">Partners</h1>
                <ul className="breadcrumb-nav">
                  <li><Link to="/">Home</Link></li>
                  <li>Partners</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="lg:text-[80px] md:text-[41px]  text-[24px] font-bold text-center mb-12">Our Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`} 
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 mb-5">
          <div className="container mx-auto px-4">
            <h2 className="lg:text-[80px] md:text-[41px]  text-[24px] font-bold text-center mb-8">Why Partner With Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
                <p>Access cutting-edge technologies and stay ahead in the market.</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Collaboration</h3>
                <p>Work together on exciting projects and expand your network.</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Growth</h3>
                <p>Accelerate your business growth through our partnership program.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Partners