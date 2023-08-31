import React from 'react'

export default function Excersice1() {
  return (
    <>
      <div>
        <nav className="bg-blue-800">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {/*
      Icon when menu is closed.

      Menu open: "hidden", Menu closed: "block"
    */}
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  {/*
      Icon when menu is open.

      Menu open: "block", Menu closed: "hidden"
    */}
                  <svg
                    className="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center"></div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <a
                      href="#"
                      className=" text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      aria-current="page"
                    >
                      Example Site
                    </a>
                    <a
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Link
                    </a>
                    <a
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium flex"
                    >
                      Drop-down
                      <svg
                        className="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
            </div>
          </div>
          {/* Mobile menu, show/hide based on menu state. */}
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2"></div>
          </div>
        </nav>
      </div>

      <div className="mt-10">
        <>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <img
                  src="./img/Mercedes-Benz-GLC43.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Mercedes-Benz-GLC43</h5>
                  <p className="card-text">
                    The car has a strong appearance to help users have the best
                    experience.
                  </p>
                  <button className="q-button q-button-primary ">
                    Example Button
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="./img/Mercedes AMG S63 Cabriolet Rental.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Mercedes AMG S63 Cabriolet Rental
                  </h5>
                  <p className="card-text">
                    If you are traveling with your girlfriend what are you
                    waiting for, choose this car right away.
                  </p>
                  <button className="q-button q-button-primary ">
                    Example Button
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src="./img/Mercedes-Benz EQS AMG.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Mercedes-Benz EQS AMG</h5>
                  <p className="card-text">
                    The car with the most advanced features helps protect the
                    environment and save fuel.
                  </p>
                  <button className="q-button q-button-primary ">
                    Example Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
      <div className="mt-10">
        <footer className="bg-slate-700">
          <p className="text-white text-center">
            Thank you for visiting this website
          </p>
          <p
            className="text-white
          text-center m-8"
          >
            Follow us
                  </p>
                  <div className='flex justify-around'>
                      <a className='abc' href="#">Facebook</a>
                      <a className='abc' href="#">Instagram</a>
                      <a className='abc' href="#">Twitter</a>
                  </div>
        </footer>
      </div>
    </>
  );
}
