import blog1 from "../assets/img/th-1/blog-main-1.jpg";
import blog2 from "../assets/img/th-1/blog-main-2.jpg";
import blog3 from "../assets/img/th-1/blog-main-3.jpg";
import blog4 from "../assets/img/th-1/blog-main-4.jpg";
import blog5 from "../assets/img/th-1/blog-main-5.jpg";
import blog6 from "../assets/img/th-1/blog-main-6.jpg";
import search from "../assets/img/th-1/icon-black-search.svg";
import calendar from "../assets/img/th-1/icon-black-calendar.svg";
import cheveronblack from "../assets/img/th-1/icon-black-cheveron-left.svg";
import cheveronwhite from "../assets/img/th-1/icon-white-cheveron-left.svg";
import cheveronblack1 from "../assets/img/th-1/icon-black-cheveron-right.svg";
import cheveronwhite2 from "../assets/img/th-1/icon-white-cheveron-right.svg";
import blogRecent1 from "../assets/img/th-1/blog-recent-img-1.jpg";
import blogRecent2 from "../assets/img/th-1/blog-recent-img-2.jpg";
import blogRecent3 from "../assets/img/th-1/blog-recent-img-2.jpg";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div className="page-wrapper relative z-[1] bg-white">
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Breadcrumb Section Start :::... */}
        <section id="section-breadcrumb">
          {/* Section Spacer */}
          <div className="breadcrumb-wrapper">
            {/* Section Container */}
            <div className="global-container">
              <div className="breadcrumb-block">
                <h1 className="breadcrumb-title lg:text-[120px] md:text-[58px] text-[24px]">
                  Our Blog
                </h1>
                <ul className="breadcrumb-nav">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Our Blog</li>
                </ul>
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Breadcrumb Section End :::... */}
        {/*...::: Blog Section Start :::... */}
        <section className="blog-section">
          {/* Section Spacer */}
          <div className="pb-40 xl:pb-[220px]">
            {/* Section Container */}
            <div className="global-container">
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-[1fr,minmax(416px,_0.45fr)]">
                <div className="flex flex-col gap-y-10 lg:gap-y-14 xl:gap-y-20">
                  {/* Blog Post List */}
                  <ul className="grid grid-cols-2 gap-6">
                    {/* Blog Post Single Item */}
                    <li className="jos group overflow-hidden rounded-[10px] bg-white shadow-[0_4px_80px_rgba(0,0,0,0.08)]">
                      <Link
                        to="/blog-details"
                        className="block overflow-hidden"
                      >
                        <img
                          src={blog1}
                          alt="blog-main-1"
                          width={856}
                          height={540}
                          className="h-auto w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105"
                        />
                      </Link>
                      <div className="border border-[#EAEDF0] p-[30px]">
                        {/* Blog Post Meta */}
                        <ul className="flex flex-wrap items-center gap-6">
                          <li className="relative font-semibold after:absolute after:left-full after:top-1/2 after:h-[7px] after:w-[7px] after:-translate-y-1/2 after:translate-x-2 after:rounded-full after:bg-colorCodGray last:after:hidden">
                            <Link
                              to="/blog-details"
                              className="hover:text-[#6E3897]"
                            >
                              Business
                            </Link>
                          </li>
                          <li className="relative font-semibold after:absolute after:left-full after:top-1/2 after:h-[7px] after:w-[7px] after:-translate-y-1/2 after:translate-x-2 after:rounded-full after:bg-colorCodGray last:after:hidden">
                            <Link
                              to="/blog-details"
                              className="hover:text-[#6E3897]"
                            >
                              June 12, 2024
                            </Link>
                          </li>
                        </ul>
                        {/* Blog Post Meta */}
                        <h5 className="mb-3 mt-7 text-[28px] hover:text-[#6E3897]">
                          <Link to="/blog-details" >
                            10 ways to supercharge startup with AI integration
                          </Link>
                        </h5>
                        <p className="mb-7 line-clamp-2 last:mb-0">
                          The rapid advancements in AI have paved the way for
                          startups to revolutionize various industries, from
                          healthcare to finance, by leveraging the power of
                          machine learning and automation.
                        </p>
                      </div>
                    </li>
                    {/* Blog Post Single Item */}
                    {/* Blog Post Single Item */}
                    <li className="jos group overflow-hidden rounded-[10px] bg-white shadow-[0_4px_80px_rgba(0,0,0,0.08)]">
                      <Link
                        to="/blog-details"
                        className="block overflow-hidden"
                      >
                        <img
                          src={blog2}
                          alt="blog-main-2"
                          width={856}
                          height={540}
                          className="h-auto w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105"
                        />
                      </Link>
                      <div className="border border-[#EAEDF0] p-[30px]">
                        {/* Blog Post Meta */}
                        <ul className="flex flex-wrap items-center gap-6">
                          <li className="relative font-semibold after:absolute after:left-full after:top-1/2 after:h-[7px] after:w-[7px] after:-translate-y-1/2 after:translate-x-2 after:rounded-full after:bg-colorCodGray last:after:hidden">
                            <Link
                              to="/blog-details"
                              className="hover:text-[#6E3897]"
                            >
                              Technology
                            </Link>
                          </li>
                          <li className="relative font-semibold after:absolute after:left-full after:top-1/2 after:h-[7px] after:w-[7px] after:-translate-y-1/2 after:translate-x-2 after:rounded-full after:bg-colorCodGray last:after:hidden">
                            <Link
                              to="/blog-details"
                              className="hover:text-[#6E3897]"
                            >
                              June 10, 2024
                            </Link>
                          </li>
                        </ul>
                        {/* Blog Post Meta */}
                        <h5 className="mb-3 mt-7 text-[28px] hover:text-[#6E3897]">
                          <Link to="/blog-details">
                            Testing AI tools to improve product descriptions
                          </Link>
                        </h5>
                        <p className="mb-7 line-clamp-2 last:mb-0">
                          Amazon is currently testing generative artificial
                          intelligence (AI) tools for...
                        </p>
                      </div>
                    </li>
                    {/* Blog Post Single Item */}
                    {/* Blog Post Single Item */}
                    <li className="jos group overflow-hidden rounded-[10px] bg-white shadow-[0_4px_80px_rgba(0,0,0,0.08)]">
                      <Link
                        to="/blog-details"
                        className="block overflow-hidden"
                      >
                        <img
                          src={blog3}
                          alt="blog-main-3"
                          width={856}
                          height={540}
                          className="h-auto w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105"
                        />
                      </Link>
                      <div className="border border-[#EAEDF0] p-[30px]">
                        {/* Blog Post Meta */}
                        <ul className="flex flex-wrap items-center gap-6">
                          <li className="relative font-semibold after:absolute after:left-full after:top-1/2 after:h-[7px] after:w-[7px] after:-translate-y-1/2 after:translate-x-2 after:rounded-full after:bg-colorCodGray last:after:hidden">
                            <Link
                              to="blog-details"
                              className="hover:text-[#6E3897]"
                            >
                              Marketing
                            </Link>
                          </li>
                          <li className="relative font-semibold after:absolute after:left-full after:top-1/2 after:h-[7px] after:w-[7px] after:-translate-y-1/2 after:translate-x-2 after:rounded-full after:bg-colorCodGray last:after:hidden">
                            <Link
                              to="/blog-details"
                              className="hover:text-[#6E3897]"
                            >
                              June 09, 2024
                            </Link>
                          </li>
                        </ul>
                        {/* Blog Post Meta */}
                        <h5 className="mb-3 mt-7 text-[28px] hover:text-[#6E3897]">
                          <Link to="/blog-details">
                            3 best AI businesses to make money with in 2024
                          </Link>
                        </h5>
                        <p className="mb-7 line-clamp-2 last:mb-0">
                          Everyone is buzzing about AI and its potential to
                          revolutionize the business...
                        </p>
                      </div>
                    </li>
                    {/* Blog Post Single Item */}
                    {/* Blog Post Single Item */}
                    <li className="jos group overflow-hidden rounded-[10px] bg-white shadow-[0_4px_80px_rgba(0,0,0,0.08)]">
                      <Link
                        to="/blog-details"
                        className="block overflow-hidden"
                      >
                        <img
                          src={blog4}
                          alt="blog-main-4"
                          width={856}
                          height={540}
                          className="h-auto w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105"
                        />
                      </Link>
                      <div className="border border-[#EAEDF0] p-[30px]">
                        {/* Blog Post Meta */}
                        <ul className="flex flex-wrap items-center gap-6">
                          <li className="relative font-semibold after:absolute after:left-full after:top-1/2 after:h-[7px] after:w-[7px] after:-translate-y-1/2 after:translate-x-2 after:rounded-full after:bg-colorCodGray last:after:hidden">
                            <Link
                              to="/blog-details"
                              className="hover:text-[#6E3897]"
                            >
                              Artificial Intelligence
                            </Link>
                          </li>
                          <li className="relative font-semibold after:absolute after:left-full after:top-1/2 after:h-[7px] after:w-[7px] after:-translate-y-1/2 after:translate-x-2 after:rounded-full after:bg-colorCodGray last:after:hidden">
                            <Link
                              to="/blog-details"
                              className="hover:text-[#6E3897]"
                            >
                              June 07, 2024
                            </Link>
                          </li>
                        </ul>
                        {/* Blog Post Meta */}
                        <h5 className="mb-3 mt-7 text-[28px] hover:text-[#6E3897]">
                          <Link to="/blog-details">
                            Phrase gives AI-generated content for me at a glance
                          </Link>
                        </h5>
                        <p className="mb-7 line-clamp-2 last:mb-0">
                          While this is incredibly rewarding and has sharpened
                          my editorial skills...
                        </p>
                      </div>
                    </li>
                    {/* Blog Post Single Item */}
                    {/* Blog Post Single Item */}
                    <li className="jos group overflow-hidden rounded-[10px] bg-white shadow-[0_4px_80px_rgba(0,0,0,0.08)]">
                      <Link
                        to="/blog-details"
                        className="block overflow-hidden"
                      >
                        <img
                          src={blog5}
                          alt="blog-main-5"
                          width={856}
                          height={540}
                          className="h-auto w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105"
                        />
                      </Link>
                      <div className="border border-[#EAEDF0] p-[30px]">
                        {/* Blog Post Meta */}
                        <ul className="flex flex-wrap items-center gap-6">
                          <li className="relative font-semibold after:absolute after:left-full after:top-1/2 after:h-[7px] after:w-[7px] after:-translate-y-1/2 after:translate-x-2 after:rounded-full after:bg-colorCodGray last:after:hidden">
                            <Link
                              to="/blog-details"
                              className="hover:text-[#6E3897]"
                            >
                              Graphics
                            </Link>
                          </li>
                          <li className="relative font-semibold after:absolute after:left-full after:top-1/2 after:h-[7px] after:w-[7px] after:-translate-y-1/2 after:translate-x-2 after:rounded-full after:bg-colorCodGray last:after:hidden">
                            <Link
                              to="/blog-details"
                              className="hover:text-[#6E3897]"
                            >
                              June 05, 2024
                            </Link>
                          </li>
                        </ul>
                        {/* Blog Post Meta */}
                        <h5 className="mb-3 mt-7 text-[28px] hover:text-[#6E3897]">
                          <Link to="/blog-details">
                            Testing out Stabilization AIs free image editing
                            tool
                          </Link>
                        </h5>
                        <p className="mb-7 line-clamp-2 last:mb-0">
                          Stability AI is the company that created an
                          open-source AI image generator...
                        </p>
                      </div>
                    </li>
                    {/* Blog Post Single Item */}
                    {/* Blog Post Single Item */}
                    <li className="jos group overflow-hidden rounded-[10px] bg-white shadow-[0_4px_80px_rgba(0,0,0,0.08)]">
                      <Link
                        to="/blog-details"
                        className="block overflow-hidden"
                      >
                        <img
                          src={blog6}
                          alt="blog-main-6"
                          width={856}
                          height={540}
                          className="h-auto w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105"
                        />
                      </Link>
                      <div className="border border-[#EAEDF0] p-[30px]">
                        {/* Blog Post Meta */}
                        <ul className="flex flex-wrap items-center gap-6">
                          <li className="relative font-semibold after:absolute after:left-full after:top-1/2 after:h-[7px] after:w-[7px] after:-translate-y-1/2 after:translate-x-2 after:rounded-full after:bg-colorCodGray last:after:hidden">
                            <Link
                              to="/blog-details"
                              className="hover:text-[#6E3897]"
                            >
                              UI/UX
                            </Link>
                          </li>
                          <li className="relative font-semibold after:absolute after:left-full after:top-1/2 after:h-[7px] after:w-[7px] after:-translate-y-1/2 after:translate-x-2 after:rounded-full after:bg-colorCodGray last:after:hidden">
                            <Link
                              to="/blog-details"
                              className="hover:text-[#6E3897]"
                            >
                              June 01, 2024
                            </Link>
                          </li>
                        </ul>
                        {/* Blog Post Meta */}
                        <h5 className="mb-3 mt-7 text-[28px] hover:text-[#6E3897]">
                          <Link to="/blog-details">
                            How to started using AI-based tools as a designer
                          </Link>
                        </h5>
                        <p className="mb-7 line-clamp-2 last:mb-0">
                          Acting on Jakob Nielsen’s stunning prediction of AI
                          being the future...
                        </p>
                      </div>
                    </li>
                    {/* Blog Post Single Item */}
                  </ul>
                  {/* Blog Post List */}
                  {/* Pagination */}
                  <nav
                    className="jos flex justify-center"
                    data-jos_animation="fade"
                  >
                    <ul className="flex gap-x-[15px]">
                      <li>
                        <a
                          href="#"
                          className="group flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-lg font-bold transition-all duration-300 hover:bg-black hover:text-white active:bg-black"
                        >
                          <img
                            src={cheveronblack}
                            alt="icon-black-cheveron-left"
                            width={24}
                            height={24}
                            className="group-active: h-6 w-6 opacity-100 group-hover:opacity-0"
                          />
                          <img
                            src={cheveronwhite}
                            alt="icon-white-cheveron-left"
                            width={24}
                            height={24}
                            className="absolute h-6 w-6 opacity-0 group-hover:opacity-100"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="group flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-lg font-bold transition-all duration-300 hover:bg-black hover:text-white active:bg-black active:text-white"
                        >
                          1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="group flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-lg font-bold transition-all duration-300 hover:bg-black hover:text-white"
                        >
                          2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="group flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-lg font-bold transition-all duration-300 hover:bg-black hover:text-white"
                        >
                          3
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="group flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-lg font-bold transition-all duration-300 hover:bg-black hover:text-white"
                        >
                          <img
                            src={cheveronblack1}
                            alt="icon-black-cheveron-right"
                            width={24}
                            height={24}
                            className="h-6 w-6 opacity-100 group-hover:opacity-0"
                          />
                          <img
                            src={cheveronwhite2}
                            alt="icon-white-cheveron-right"
                            width={24}
                            height={24}
                            className="absolute h-6 w-6 opacity-0 group-hover:opacity-100"
                          />
                        </a>
                      </li>
                    </ul>
                  </nav>
                  {/* Pagination */}
                </div>
                {/* Blog Aside */}
                <aside className="jos flex flex-col gap-y-[30px]">
                  {/* Single Sidebar */}
                  <div>
                    {/* Sidebar Search */}
                    <form
                      action="#"
                      method="post"
                      className="relative h-[60px]"
                    >
                      <input
                        type="search"
                        name="sidebar-search"
                        id="sidebar-search"
                        placeholder="Type to search..."
                        className="h-full w-full rounded-[50px] border border-[#E1E1E1] bg-white py-[15px] pl-16 pr-8 text-lg outline-none transition-all focus:border-[#6E3897]"
                        required
                      />
                      <button
                        type="submit"
                        className="absolute left-[30px] top-0 h-full"
                      >
                        <img src={search} alt="search" width={20} height={20} />
                      </button>
                    </form>
                    {/* Sidebar Search */}
                  </div>
                  {/* Single Sidebar */}
                  {/* Single Sidebar */}
                  <div className="rounded-[10px] border border-[#EAEDF0] p-8">
                    <div className="relative mb-[30px] inline-block pb-[10px] text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black">
                      Blog Categories
                    </div>
                    {/* Blog Categories List */}
                    <ul>
                      <li className="mb-6 last:mb-0">
                        <a
                          href="blog-details.html"
                          className="text-black hover:text-[#6E3897]"
                        >
                          Business &amp; Marketing (18)
                        </a>
                      </li>
                      <li className="mb-6 last:mb-0">
                        <a
                          href="blog-details.html"
                          className="text-black hover:text-[#6E3897]"
                        >
                          Technology (05)
                        </a>
                      </li>
                      <li className="mb-6 last:mb-0">
                        <a
                          href="blog-details.html"
                          className="text-black hover:text-[#6E3897]"
                        >
                          Art &amp; Beauty (23)
                        </a>
                      </li>
                      <li className="mb-6 last:mb-0">
                        <a
                          href="blog-details.html"
                          className="text-black hover:text-[#6E3897]"
                        >
                          Digital Agency (10)
                        </a>
                      </li>
                    </ul>
                    {/* Blog Categories List */}
                  </div>
                  {/* Single Sidebar */}
                  {/* Single Sidebar */}
                  <div className="rounded-[10px] border border-[#EAEDF0] p-8">
                    <div className="relative mb-[30px] inline-block pb-[10px] text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black">
                      Recent Posts
                    </div>
                    {/* Blog Recent Post List */}
                    <ul className="flex flex-col gap-y-6">
                      <li className="group flex flex-col items-center gap-x-4 gap-y-4 sm:flex-row">
                        <a
                          href="blog-details.html"
                          className="inline-block h-[150px] w-full overflow-hidden rounded-[5px] sm:h-[100px] sm:w-[150px]"
                        >
                          <img
                            src={blogRecent1}
                            alt="blog-recent-img-1"
                            width={150}
                            height={130}
                            className="h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105"
                          />
                        </a>
                        <div className="flex w-full flex-col gap-y-3 sm:w-auto sm:flex-1">
                          <a
                            href="blog-details.html"
                            className="flex items-center gap-[10px] text-sm hover:text-[#6E3897]"
                          >
                            <div className="h-6 w-6">
                              <img
                                src={calendar}
                                alt="icon-black-calendar"
                                width={24}
                                height={24}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            June 12, 2024
                          </a>
                          <a
                            href="blog-details.html"
                            className="text-base font-bold hover:text-[#6E3897]"
                          >
                            6 profitable AI tech businesses to start
                          </a>
                        </div>
                      </li>
                      <li className="group flex flex-col items-center gap-x-4 gap-y-4 sm:flex-row">
                        <a
                          href="blog-details.html"
                          className="inline-block h-[150px] w-full overflow-hidden rounded-[5px] sm:h-[100px] sm:w-[150px]"
                        >
                          <img
                            src={blogRecent2}
                            alt="blog-recent-img-2"
                            width={150}
                            height={130}
                            className="h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105"
                          />
                        </a>
                        <div className="flex w-full flex-col gap-y-3 sm:w-auto sm:flex-1">
                          <a
                            href="blog-details.html"
                            className="flex items-center gap-[10px] text-sm hover:text-[#6E3897]"
                          >
                            <div className="h-6 w-6">
                              <img
                                src={calendar}
                                alt="icon-black-calendar"
                                width={24}
                                height={24}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            June 13, 2024
                          </a>
                          <a
                            href="blog-details.html"
                            className="text-base font-bold hover:text-[#6E3897]"
                          >
                            Why i decided to sell my B2B SaaS AI business
                          </a>
                        </div>
                      </li>
                      <li className="group flex flex-col items-center gap-x-4 gap-y-4 sm:flex-row">
                        <a
                          href="blog-details.html"
                          className="inline-block h-[150px] w-full overflow-hidden rounded-[5px] sm:h-[100px] sm:w-[150px]"
                        >
                          <img
                            src={blogRecent3}
                            alt="blog-recent-img-3"
                            width={150}
                            height={130}
                            className="h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105"
                          />
                        </a>
                        <div className="flex w-full flex-col gap-y-3 sm:w-auto sm:flex-1">
                          <a
                            href="blog-details.html"
                            className="flex items-center gap-[10px] text-sm hover:text-[#6E3897]"
                          >
                            <div className="h-6 w-6">
                              <img
                                src={calendar}
                                alt="icon-black-calendar"
                                width={24}
                                height={24}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            June 07, 2024
                          </a>
                          <a
                            href="blog-details.html"
                            className="text-base font-bold hover:text-[#6E3897]"
                          >
                            8 AI tools that will your streamline workflows
                          </a>
                        </div>
                      </li>
                    </ul>
                    {/* Blog Recent Post List */}
                  </div>
                  {/* Single Sidebar */}
                  {/* Single Sidebar */}
                  <div className="rounded-[10px] border border-[#EAEDF0] p-8">
                    <div className="relative mb-[30px] inline-block pb-[10px] text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black">
                      Tags
                    </div>
                    {/* Blog Tags Post List */}
                    <ul className="flex flex-wrap gap-x-2 gap-y-4">
                      <li>
                        <a
                          href="blog-details.html"
                          className="inline-block rounded-[55px] bg-black bg-opacity-5 px-5 py-1 hover:bg-[#6E3897] hover:text-white"
                        >
                          Article
                        </a>
                      </li>
                      <li>
                        <a
                          href="blog-details.html"
                          className="inline-block rounded-[55px] bg-black bg-opacity-5 px-5 py-1 hover:bg-[#6E3897] hover:text-white"
                        >
                          Business
                        </a>
                      </li>
                      <li>
                        <a
                          href="blog-details.html"
                          className="inline-block rounded-[55px] bg-black bg-opacity-5 px-5 py-1 hover:bg-[#6E3897] hover:text-white"
                        >
                          Digital
                        </a>
                      </li>
                      <li>
                        <a
                          href="blog-details.html"
                          className="inline-block rounded-[55px] bg-black bg-opacity-5 px-5 py-1 hover:bg-[#6E3897] hover:text-white"
                        >
                          Technology
                        </a>
                      </li>
                      <li>
                        <a
                          href="blog-details.html"
                          className="inline-block rounded-[55px] bg-black bg-opacity-5 px-5 py-1 hover:bg-[#6E3897] hover:text-white"
                        >
                          UI/UX
                        </a>
                      </li>
                    </ul>
                    {/* Blog Tags Post List */}
                  </div>
                  {/* Single Sidebar */}
                  {/* Single Sidebar */}
                  <div className="rounded-[10px] border border-[#EAEDF0] p-8">
                    <div className="relative mb-[30px] inline-block pb-[10px] text-lg font-semibold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black">
                      Subscribe
                    </div>
                    <p className="mb-3">
                      Subscribe to our newsletter and get the latest news
                      updates lifetime
                    </p>
                    <form action="#" method="post" className="flex flex-col">
                      <input
                        type="email"
                        name="sidebar-newsletter"
                        id="sidebar-newsletter"
                        placeholder="Enter your email address"
                        className="h-[60px] w-full rounded-[50px] border border-colorCodGray bg-transparent px-10 py-[15px] text-lg outline-none transition-all placeholder:text-black focus:border-[#6E3897]"
                        required
                      />
                      <button
                        type="submit"
                        className="button mt-5 block rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-[#6E3897] hover:border-[#6E3897] hover:text-white"
                      >
                        Subscribe Now
                      </button>
                    </form>
                  </div>
                  {/* Single Sidebar */}
                </aside>
                {/* Blog Aside */}
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Blog Section End :::... */}
      </main>
    </div>
  );
}

export default Blog;
