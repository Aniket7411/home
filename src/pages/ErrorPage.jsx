import { Link } from "react-router-dom";
import error from '../assets/img/th-1/404-text-image.jpg';

function Error404() {
  return (
    <div>
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: 404 Section Start :::... */}
        <section id="404-section">
          {/* Section Spacer */}
          <div className="py-40 pt-36 xl:pb-[200px] xl:pt-[180px]">
            {/* Section Container */}
            <div className="global-container">
              {/* 404 Content */}
              <div className="mx-auto max-w-[954px] text-center">
                <h1
                  style={{
                    backgroundImage: `url(${error})`,
                    backgroundSize: 'contain',
                    backgroundClip: 'text',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                  className="text-[150px] sm:text-[220px] lg:text-[300px] xl:text-[350px]"
                >
                  404
                </h1>
                <h2 className="mb-[50px] lg:text-[80px] md:text-[41px]  text-[24px]">
                  The page you are looking for cannot be found
                </h2>
                <Link
                  to="/"
                  className="button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-gradient-to-b from-[#480EEC] to-[#B840C7] hover:border-[#B840C7] hover:text-white"
                >
                  Go to homepage
                </Link>
              </div>
              {/* 404 Content */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: 404 Section End :::... */}
      </main>
    </div>
  );
}

export default Error404;
