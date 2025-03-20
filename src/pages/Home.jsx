import card1 from "../assets/img/simple/card1.gif";
import card2 from "../assets/img/simple/card2.gif";
import card3 from "../assets/img/simple/card3.gif";
import card4 from "../assets/img/simple/card4.gif";
import bigimg from "../assets/img/simple/bigimg.png";
import newuu from "../assets/img/simple/newuu.png";

function Home() {
  const images = [card1, card2, card3, card4 ];
  return (
    <div>
      {/* hero image part */}
      <div className="hero-image">
        <div className="heading">
          <h1 className="mb-5">
            Transform Your Business with AI & Machine Learning Solutions
          </h1>
        </div>
      </div>

      <section className="p-4">
        <div className="">
          <h1 className="text-5xl md:p-24 mx-32 font-semibold text-center m-auto">
            Amplify helps companies modernize
            <span className="text-[#6811AC]"> technology,</span> reimagine{" "}
            <span className="text-[#6811AC]"> processes,</span> and transform{" "}
            <span className="text-[#6811AC]"> experiences,</span>
            so they stay ahead in a fast-changing world.
          </h1>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#181B63] via-[#6D1F7A] to-[#181B63] md:p-24 p-4">
        <h1 className="text-center py-4 text-white w-full text-[48px]">
          Why choose us?
        </h1>
        <p className="text-center text-white pb-4">
          Unlock the power of AI to drive innovation, efficiency, and growth in
          your business
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-4 m-auto">
          {images
            .map((image, i) => (
              <div key={i} className="p-4">
                <div className="card bg-white">
                  <div className="card-body p-5">
                    <img src={image} loading="lazy" className="m-auto" />
                    <h5 className="text-2xl text-center my-2">
                      Innovative Solutions
                    </h5>
                    <p className="text-center px-4">
                      We provide state-of-the-art AI and ML solutions tailored
                      to your business needs.
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="bg-[#FFFFFF]  py-10">
        <div className="border-b-2 border-indigo-600">
          <img
            src={bigimg}
            loading="lazy"
            className="m-auto h-full object-contain"
          />
        </div>
      </section>
      <section className="md:p-16 overflow-hidden">
  <div className="mx-32 m-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center mx-32 m-auto">
      <div>
        <img
          src={newuu}
          loading="lazy"
          className="m-auto h-full object-contain rounded-full animate-spin"
        />
      </div>

      <div>
        <h1 className="text-5xl text-indigo-500 font-semibold text-center mb-10">
          Facing a Challenge?
        </h1>
        <p className="text-2xl mb-10 mx-24 text-indigo-500 font-semibold text-center">
          Talk to our industry experts for Seamless Solutions
        </p>
        <div className="flex justify-center">
          <button className="bg-gradient-to-b from-[#480EEC] to-[#B840C7] py-3 px-10 text-white rounded-md">
            Lets Talk
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="bg-gradient-to-b from-[#181B63] via-[#6D1F7A] to-[#181B63]">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div className="mx-auto max-w-screen-md sm:text-center">
      <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">Sign up for our newsletter</h2>
      <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
      <form action="#">
        <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
          <div className="relative w-full">
            <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
            </div>
            <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required />
          </div>
          <div>
            <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>
          </div>
        </div>
        <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
      </form>
    </div>
  </div>
</section>

    </div>
  );
}

export default Home;
