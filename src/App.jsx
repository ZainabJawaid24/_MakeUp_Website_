import React from 'react';
import img1 from './assets/img1.jpeg';
import bridal from './assets/bridalmakeup.jpeg';
import engagement from './assets/engagement.jpeg';
import hdluxury from './assets/hdluxury.jpeg';
import course from './assets/makeupcourse.jpeg';
import party from './assets/party.jpeg';
import photo from './assets/photoshoot.jpeg';
import about from './assets/about.bridal.jpeg';
import lipstick from './assets/lipstick.jpeg';
import mascara from './assets/mascara.jpeg';
import highlighter from './assets/highlighter.jpeg';
import foundation from './assets/foundation.jpeg';
import eyebrow from './assets/eyebrow.jpeg';
import blush from './assets/blushon.jpeg';
import eyeshadow from './assets/eyeshadow.jpeg';
import powder from './assets/facepowder.jpeg';
import hair1 from './assets/bridehairs.jpeg';
import hair2 from './assets/partyhair.jpeg';
import hair3 from './assets/ponytail.jpeg';
import serum from './assets/faceserum.jpeg';
import wash from './assets/facewash.jpeg';
import cleanser from './assets/cleanser.jpeg';
import wax from './assets/wax.jpeg';
import mask from './assets/mask.jpeg';
import gel from './assets/gel.jpeg';
import cus1 from './assets/cus1.jpeg';
import cus2 from './assets/cus2.jpeg';
import cus3 from './assets/cus3.jpeg';
import './App.css';
import { useState, useEffect } from 'react';

function Makeup() {
  // mobile screen
  const [menuOpen, setMenuOpen] = useState(false);

  // useeffect
  useEffect(() => {
    const handleClick = (e) => {
      const btn = e.target.closest("[data-collapse-toggle]");
      if (!btn) return;

      const targetId = btn.getAttribute("data-collapse-toggle");
      const menu = document.getElementById(targetId);

      if (menu) {
        menu.classList.toggle("hidden");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0 navbar">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#luxeglow" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap nav-bar">LuXeGlOw</span>
          </a>
          <div className="flex items-center md:order-2">
            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="flex items-center justify-center md:hidden text-body hover:text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-2 focus:ring-neutral-tertiary font-medium leading-5 rounded-base text-sm w-10 h-10 focus:outline-none">
              <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
              <span className="sr-only">Search</span>
            </button>
            <label htmlFor="input-group-1" className="sr-only">Your Email</label>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
              </div>
              <input type="text" id="input-group-1" className="block w-full ps-9 pe-3 py-2\.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-2.5 py-2 shadow-xs placeholder:text-body search" placeholder="Search here.." />
            </div>
            <button data-collapse-toggle="navbar-search" type="button" onClick={() => setMenuOpen(!menuOpen)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-search" aria-expanded='false'>
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" /></svg>
            </button>
          </div>
          <div className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ${menuOpen ? "block" : "hidden"}`} id="navbar-search">
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
              </div>
              <input type="text" id="input-group-1" className="block w-full ps-9 pe-3 py-2\.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="Search" />
            </div>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary {`nav-list ${isOpen ? 'active' : ''}`}">
              <li>
                <a href="#home" className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#service" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Services</a>
              </li>
              <li>
                <a href="#about" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">About</a>
              </li>
              <li>
                <a href="#hair" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Hair</a>
              </li>
              <li>
                <a href="#makeup" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Makeup</a>
              </li>
              <li>
                <a href="#skincare" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Skincare & Facial</a>
              </li>
              <li>
                <a href="#testimonials" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* hero section */}
      <section href="home" id='home' className="text-gray-400 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg\:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white hero">Enhance Your Natural Beauty
              <br className="hidden lg:inline-block he-ro" />with Timeless Luxury
            </h1>
            <p className="mb-8 leading-relaxed p1">
              LuxeGlow offers carefully curated shades and formulas that enhance your skin, add confidence, and deliver a smooth, luminous finish.
              Discover high-quality makeup crafted to highlight your features, elevate your confidence, and give you a flawless glow—every single day.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg btn1">Book An Appointment</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 img-hero transition-transform duration-500 hover:scale-105 hover:translate-y-1">
            <img className="object-cover object-center rounded girl" src={img1} />
          </div>
        </div>
      </section>

      {/* services section */}
      <section id="service" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className='title-font text-lg font-medium text-gray-900 mb-3 service'>Services</h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 hover:translate-y-1 cards">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-500 hover:scale-105 hover:translate-y-1" src={bridal} />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">💄 Bridal Makeup</h1>
                  <p className="leading-relaxed mb-3">Complete bridal transformation with premium products for long-lasting, HD finish for your special day..</p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0 link1">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 hover:translate-y-1 cards">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center  transition-transform duration-500 hover:scale-105 hover:translate-y-1" src={engagement} />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">👰 Engagement / Wedding Events.</h1>
                  <p className="leading-relaxed mb-3">Soft glam, bold glam, traditional or modern looks for all wedding functions (mehndi, barat, walima).</p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0 link1">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 hover:translate-y-1 cards">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center  transition-transform duration-500 hover:scale-105 hover:translate-y-1" src={party} />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">🎉 Party Makeup</h1>
                  <p className="leading-relaxed mb-3">Elegant party looks customized to your dress, skin tone, and event style</p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0 link1">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 hover:translate-y-1 cards">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-500 hover:scale-105 hover:translate-y-1" src={photo} />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">📸 Photoshoot Makeup</h1>
                  <p className="leading-relaxed mb-3">Camera-ready professional makeup for studio, fashion, or portfolio shoots.</p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0 link1">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 hover:translate-y-1 cards">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center  transition-transform duration-500 hover:scale-105 hover:translate-y-1" src={hdluxury} />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">🌟 HD & Luxury Makeup</h1>
                  <p className="leading-relaxed mb-3">High-definition flawless base using luxury branded products..</p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0 link1">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden  transition-transform duration-500 hover:scale-105 hover:translate-y-1 cards">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center  transition-transform duration-500 hover:scale-105 hover:translate-y-1" src={course} />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">🎓 Makeup Courses</h1>
                  <p className="leading-relaxed mb-3">Beginner to advanced self-makeup & professional training.</p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-pink-500 inline-flex items-center md:mb-2 lg:mb-0 link1">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about section */}
      <section id="about" className="text-gray-600 body-font">
        <h1 className='title-font text-lg font-medium text-gray-900 mb-3 service'>About Me</h1>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 about-img">
            <img className="object-cover object-center rounded transition-transform duration-500 hover:scale-105 hover:translate-y-1 aboutbridal" src={about} />
          </div>
          <br />
          <div className="lg\:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <p className="mb-8 leading-relaxed">
              LuxeGlow is a premium makeup studio where beauty is not just makeup — it is a complete transformation experience. Our mission is to enhance every client’s natural beauty so they feel confident, graceful, and unforgettable on their special day.
              <br /> <br />
              Each look is carefully personalized according to face shape, skin tone, and the nature of the event. At LuxeGlow, only high-quality, skin-friendly products that meet international standards are used to ensure flawless and long-lasting results.
              <br /> <br />
              Whether it’s bridal elegance or party glam, every service is delivered with a touch of luxury, strict hygiene, and attention to fine detail. Our goal is not simply to apply makeup, but to give you a glow that truly stands out.
              LuxeGlow believes:
              Every face is beautiful — it just needs the right glow.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg btn2">Read More</button>
            </div>
          </div>
        </div>
      </section>

      {/* gallery section */}
      <section id="hair" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Hair Accessories</h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4 hair-card">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center gal" src={hair1} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 hair">
                  <h2 className="tracking-widest text-sm title-font font-medium text-white mb-1">Bride Hairstyle</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Bun Hairstyle</h1>
                  <p className="leading-relaxed">A timeless bridal bun that adds grace, elegance, and a royal finish to your wedding look.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 hair-card">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center gal" src={hair2} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 hair">
                  <h2 className="tracking-widest text-sm title-font font-medium text-white mb-1">Any Event</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Simple Twisted</h1>
                  <p className="leading-relaxed">
                    A soft twisted hairstyle perfect for parties, creating a classNamey and glamorous vibe. ✨</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 hair-card">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center gal" src={hair3} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 hair">
                  <h2 className="tracking-widest text-sm title-font font-medium text-white mb-1">Any Event</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Ponytails</h1>
                  <p className="leading-relaxed">
                    A sleek and stylish ponytail that gives a modern, chic,
                    <br />and youthful appearance. 🌟</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* shops section */}
     <section class="shop-category makeup">
  <h2 className='text-white'>Make Up</h2>

  <div className="category-container">
    <div className="category-item">
      <img src={blush} alt="blushon"/>
      <p>BLUSH ON</p>
    </div>

    <div className="category-item">
      <img src={powder} alt="facepowder"/>
      <p>FACE POWDER</p>
    </div>

    <div className="category-item">
      <img src={eyebrow} alt="eyebrow"/>
      <p>EYEBROW</p>
    </div>

    <div className="category-item">
      <img src={highlighter} alt="highlighter"/>
      <p>HIGHLIGHTER</p>
    </div>

    <div className="category-item">
      <img src={lipstick} alt="lipstick"/>
      <p>LIPSTICK</p>
    </div>

     <div className="category-item">
      <img src={mascara} alt="mascara"/>
      <p>MASCARA</p>
    </div>

     <div className="category-item">
      <img src={foundation} alt="foundation"/>
      <p>FOUNDATION</p>
    </div>

     <div className="category-item">
      <img src={eyeshadow} alt="eyeshadow"/>
      <p>EYESHADOW</p>
    </div>
  </div>
</section>

      {/* skincare section  */}
      <section id="skincare" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">SkinCare & Facial</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Our skincare and facial treatments deeply cleanse, hydrate, and refresh your skin, leaving it smooth, healthy, and glowing with a natural radiance. ✨.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative care">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center facial" src={serum} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 skin">
                  <h2 className="tracking-widest text-sm title-font font-medium text-white mb-1">Skincare</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Face Serum</h1>
                  <p className="leading-relaxed">A lightweight formula that deeply nourishes skin and boosts natural glow</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative care">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center facial" src={wash} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 skin">
                  <h2 className="tracking-widest text-sm title-font font-medium text-white mb-1">Skincare</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Face Wash</h1>
                  <p className="leading-relaxed">Gently removes dirt and oil to leave your skin fresh and clean.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative care">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center facial" src={cleanser} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 skin">
                  <h2 className="tracking-widest text-sm title-font font-medium text-white mb-1">Facial</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Cleanser</h1>
                  <p className="leading-relaxed">Deeply cleans pores and removes makeup for a healthy, clear complexion. ✨</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative care">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center facial" src={wax} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 skin">
                  <h2 className="tracking-widest text-sm title-font font-medium text-white mb-1">Facial</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Waxing</h1>
                  <p className="leading-relaxed">Smooth hair removal treatment for soft, flawless, and silky skin.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative care">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center facial" src={mask} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 skin">
                  <h2 className="tracking-widest text-sm title-font font-medium text-white mb-1">Facial</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Face Mask</h1>
                  <p className="leading-relaxed">Purifies and refreshes the skin while improving texture and brightness.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative care">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center facial" src={gel} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 skin">
                  <h2 className="tracking-widest text-sm title-font font-medium text-white mb-1">Skincare</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Gel/Cream</h1>
                  <p className="leading-relaxed">Hydrates and moisturizes the skin to maintain softness and shine.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonial */}
      <section id="testimonials" className="text-gray-600 body-font testimonial">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-white text-center">Testimonials</h1>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={cus1} />
                <p className="leading-relaxed">
                  <i>Absolutely loved my bridal look! 
                  <br />LuxeGlow made me feel confident 
                  <br />and beautiful on my big day </i></p>
                <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4"></span>
                <h2 className="text-gray-400 font-medium title-font tracking-wider text-sm">Ayesha Khan</h2>
                <p className="text-white">Senior Product Designer</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={cus2} />
                <p className="leading-relaxed">
                  <i>The party makeup was flawless 
                  <br />and long-lasting. Highly professional
                  <br /> and friendly service.. </i></p>
                <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4"></span>
                <h2 className="text-gray-400 font-medium title-font tracking-wider text-sm">Maham Ali</h2>
                <p className="text-white">UI Develeoper</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={cus3} />
                <p className="leading-relaxed text-white">
                 <i> LuxeGlow understands face features so
                  <br /> well. My makeup looked natural
                  <br /> yet stunning.</i></p>
                <span className="inline-block h-1 w-10 rounded bg-white mt-6 mb-4"></span>
                <h2 className="text-gray-400 font-medium title-font tracking-wider text-sm">Komal Raza</h2>
                <p className="text-white">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact section */}
      <section className="text-gray-600 body-font relative" id='contact'>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Connect with us for a flawless and luxurious makeup experience.</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out out-line" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out out-line" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                  <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out out-line"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg btn3">Button</button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-pink-500 text">example@email.com</a>
                <p className="leading-normal my-5">49 Smith St.
                  <br />Saint Cloud, MN 56301
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500 icon">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500 icon">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500 icon">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500 icon">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer section */}
      <footer className="text-gray-600 body-font footer">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white" href='luxeglow'>
            <span className="ml-3 text-xl footer-font">LuXeGlOw</span>
          </a>
          <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2026 LuxeGlow —
            <a href="https://twitter.com/knyttneve" className="text-white ml-1" rel="noopener noreferrer" target="_blank">@Made by Zainab Jawaid</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-white">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>,
      </footer>
    </>
  )
}

export default Makeup;
