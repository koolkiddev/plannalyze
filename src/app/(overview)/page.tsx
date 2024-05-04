import Image from "next/image";
import "&/src/app/ui/homepage_vars";
import { david, emily, hero, pricing } from "&/src/app/ui/homepage_vars";
import wordmark from "public/wordmark.png"

export default function Home() {
  return (
    <>
    <section className="text-gray-600 body-font">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap md:pt-8 md:pb-16 pt-8 pb-4 flex-col md:flex-row items-center">
          <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="/assets/wordmark.png" width={200} height={300} alt="Plannalyze wordmark"></img> 
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="/#" className="hidden md:block transition transition-1 mr-5 hover:bg-sky-100 hover:text-blue-600 p-2 rounded-lg">Solutions</a>
            <a href="/#" className="hidden md:block transition transition-1 mr-5 hover:bg-sky-100 hover:text-blue-600 p-2 rounded-lg">Product</a>
            <a href="/#" className="hidden md:block transition transition-1 mr-5 hover:bg-sky-100 hover:text-blue-600 p-2 rounded-lg">Pricing</a>
            <a href="login" className="hidden md:block transition transition-1 mr-5 hover:bg-sky-100 hover:text-blue-600 p-2 rounded-lg">Log in</a>
          </nav>
          <button type="button" className="hidden md:block transition inline-flex items-center font-bold border border-1 border-indigo-600 bg-gradient-to-r from-indigo-500 from-20% to-pink-500 py-1 px-3 hover:ring hover:ring-gray hover:ring-4 rounded-lg text-white mt-4 md:mt-0">
            Sign up
          </button>
        </div>
      </header>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full mb-10">
            <h1 className="text-center title-font text-5xl md:text-6xl mb-4 font-black text-gray-900">{hero["title1"]} 
              <br draggable="true" data-highlightable="1" id="in8l" className="hidden lg:inline-block"/>
              <b className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-40% to-blue-400">{hero["title2"]} 
              </b>
            </h1>
            <p className="mb-8 leading-relaxed text-black md:text-lg">{hero["desc"]} </p>
            <div className="justify-center">
              <a href="/signup" className="transition text-white border border-1 border-indigo-600 py-2 px-6 rounded-lg text-lg font-bold transition-all active:bg-blue-500 bg-gradient-to-r from-indigo-500 from-20% to-pink-500 hover:ring hover:ring-gray hover:ring-4">
                  Get started
              </a>            
            </div>
          </div>
          <img  className="w-5/6 mt-10 mb-20 object-cover object-center rounded outline outline-3 outline-gray-900 rounded-lg" alt="hero" src="/assets/hero_ss.png" />
        </div>
      </section>
      <hr className="mt-3 h-0.5 border-t-0 bg-neutral-100 mx-5" />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-900">
                Testimonials
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
                See how others are liking 
                <label className="text-blue-500 text-base font-medium"> Plannalyze</label>
              </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">{emily["test"]}</p>
                <a className="inline-flex items-center">
                  <img alt="testimonial" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">{emily["name"]}</span>
                    <span className="text-gray-500 text-sm uppercase">{emily["pos"]}</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">{david["test"]}</p>
                <a className="inline-flex items-center">
                  <img alt="testimonial" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">{david["name"]}</span>
                    <span className="text-gray-500 text-sm uppercase">{david["pos"]}</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="my-6 h-0.5 border-t-0 bg-neutral-100 mx-5" />
      <section className="text-gray-600 body-font">
        <section className="text-gray-600 body-font overflow-hidden">
          <section className="text-gray-600 body-font">
          </section>
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-900">Pricing
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever floats your boat</p>
            </div>
            <div className="flex flex-wrap -m-4 justify-center">
              <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium uppercase">{pricing["freeTop"]}
                  </h2>
                  <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">{pricing["freePrice"]}</h1>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" className="w-3 h-3">
                      <path d="M20 6L9 17l-5-5">
                      </path>
                      </svg></span>
                    <span>{pricing["freePerk1"]}</span>
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" className="w-3 h-3">
                      <path d="M20 6L9 17l-5-5">
                      </path>
                      </svg></span>
                    <span>{pricing["freePerk2"]}</span>
                  </p>
                  <p className="flex items-center text-gray-600 mb-6">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" className="w-3 h-3">
                      <path d="M20 6L9 17l-5-5">
                      </path>
                      </svg></span>
                    <span>{pricing["freePerk3"]}</span>
                  </p>
                  <button type="button" className="transition flex items-center mt-auto text-white bg-green-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-green-500 rounded">Get started
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-4 h-4 ml-auto">
                      <path d="M5 12h14M12 5l7 7-7 7">
                      </path>
                    </svg></button>
                  <p className="text-xs text-gray-500 mt-3">Literally you probably haven&#039;t heard of them jean shorts.
                  </p>
                </div>
              </div>
              <div className="p-4 md:p-0 xl:w-1/3 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg border-2 border-blue-500 flex flex-col relative overflow-hidden">
                  <span className="bg-blue-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl uppercase">Recommended</span>
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium uppercase">{pricing["basicTop"]}
                  </h2>
                  <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    <span>{pricing["basicPrice"]}</span>
                    <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                  </h1>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-400 text-white rounded-full flex-shrink-0"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" className="w-3 h-3">
                      <path d="M20 6L9 17l-5-5">
                      </path>
                      </svg></span>
                    <span>{pricing["basicPerk1"]}</span>
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-400 text-white rounded-full flex-shrink-0"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" className="w-3 h-3">
                      <path d="M20 6L9 17l-5-5">
                      </path>
                      </svg></span>
                    <span>{pricing["basicPerk2"]}</span>
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-400 text-white rounded-full flex-shrink-0"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" className="w-3 h-3">
                      <path d="M20 6L9 17l-5-5">
                      </path>
                      </svg></span>
                    <span>{pricing["basicPerk3"]}</span>
                  </p>
                  <p className="flex items-center text-gray-600 mb-6">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-400 text-white rounded-full flex-shrink-0"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" className="w-3 h-3">
                      <path d="M20 6L9 17l-5-5">
                      </path>
                      </svg></span>
                    <span>{pricing["basicPerk4"]}</span>
                  </p>
                  <button type="button" className="transition flex items-center mt-auto text-white bg-blue-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-600 rounded">Get started
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-4 h-4 ml-auto">
                      <path d="M5 12h14M12 5l7 7-7 7">
                      </path>
                    </svg></button>
                  <p className="text-xs text-gray-500 mt-3">Literally you probably haven&#039;t heard of them jean shorts.
                  </p>
                </div>
              </div>
              <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium uppercase">{pricing["proTop"]}</h2>
                  <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    <span>{pricing["proPrice"]}</span>
                    <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                  </h1>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-pink-400 text-white rounded-full flex-shrink-0"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" className="w-3 h-3">
                      <path d="M20 6L9 17l-5-5">
                      </path>
                      </svg></span>
                    <span>{pricing["proPerk1"]}</span>
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-pink-400 text-white rounded-full flex-shrink-0"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" className="w-3 h-3">
                      <path d="M20 6L9 17l-5-5">
                      </path>
                      </svg></span>
                    <span>{pricing["proPerk2"]}</span>
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-pink-400 text-white rounded-full flex-shrink-0"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" className="w-3 h-3">
                      <path d="M20 6L9 17l-5-5">
                      </path>
                      </svg></span>
                    <span>{pricing["proPerk3"]}</span>
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-pink-400 text-white rounded-full flex-shrink-0"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" className="w-3 h-3">
                      <path d="M20 6L9 17l-5-5">
                      </path>
                      </svg></span>
                    <span>{pricing["proPerk4"]}</span>
                  </p>
                  <p className="flex items-center text-gray-600 mb-6">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-pink-400 text-white rounded-full flex-shrink-0"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewBox="0 0 24 24" className="w-3 h-3">
                      <path d="M20 6L9 17l-5-5">
                      </path>
                      </svg></span>
                    <span>{pricing["proPerk5"]}</span>
                  </p>
                  <button type="button" className="transition flex items-center mt-auto text-white bg-pink-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-pink-500 rounded">Get started
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-4 h-4 ml-auto">
                      <path d="M5 12h14M12 5l7 7-7 7">
                      </path>
                    </svg></button>
                  <p className="text-xs text-gray-500 mt-3">Literally you probably haven&#039;t heard of them jean shorts.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
              
                <a href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 mb-4 md:mb-0">
            <img src="/assets/wordmark.png" width={200} height={300} alt="Plannalyze wordmark"></img> 
          </a>
              <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Plannalyze - 
                <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" target="_blank" className="text-gray-600 ml-1">All Rights Reserved</a>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"><a className="text-gray-500"><svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z">
                </path>
                </svg></a><a className="ml-3 text-gray-500"><svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                </path>
                </svg></a><a className="ml-3 text-gray-500"><svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-5 h-5">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5">
                </rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01">
                </path>
                </svg></a><a className="ml-3 text-gray-500"><svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" viewBox="0 0 24 24" className="w-5 h-5">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                </path>
                <circle cx="4" cy="4" r="2" stroke="none">
                </circle>
                </svg></a></span>
            </div>
          </footer>
        </section>
      </section>
    </section>
    </>
  );
}
