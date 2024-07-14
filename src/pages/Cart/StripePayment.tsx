import { useState } from 'react';

const StripePayment = () => {
  const [card, setCard] = useState(true);

  return (
    <div>
      <section className="bg-gray-100 text-gray-600 min-h-screen p-4 my-10">
        <div className="h-full">
          <div>
            <div className="relative px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto">
              <div className="bg-white px-8 pb-6 rounded-b shadow-lg">
                <div className="flex justify-center mb-6">
                  <div className="relative flex w-full p-1 bg-gray-50 rounded">
                    <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                      <span
                        className={`absolute inset-0 w-1/2 bg-white rounded border border-gray-200 shadow-sm transform transition duration-150 ease-in-out ${card ? 'translate-x-0' : 'translate-x-full'
                          }`}
                      ></span>
                    </span>
                    <button
                      className="relative flex-1 text-sm font-medium p-3 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2"
                      onClick={() => setCard(true)}
                    >
                      Pay With Card
                    </button>
                  </div>
                </div>
                
                  <div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="card-nr">
                          Card Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="card-nr"
                          className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                          type="text"
                          placeholder="1234 1234 1234 1234"
                        />
                      </div>
                      <div className="flex space-x-4">
                        <div className="flex-1">
                          <label className="block text-sm font-medium mb-1" htmlFor="card-expiry">
                            Expiry Date <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="card-expiry"
                            className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                            type="text"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block text-sm font-medium mb-1" htmlFor="card-cvc">
                            CVC <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="card-cvc"
                            className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                            type="text"
                            placeholder="CVC"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="card-name">
                          Name on Card <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="card-name"
                          className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                          type="text"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="card-email">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="card-email"
                          className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                          type="email"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="mb-4">
                        <button
                        disabled
                        className="w-full rounded text-white bg-[#007F6D] hover:bg-[#005f56] focus:outline-none focus:ring-4 focus:ring-[#007F6D] font-medium text-sm px-5 py-2.5 mr-2 mb-2 disabled:bg-gray-400 disabled:cursor-not-allowed">
                          This featured is under development
                        </button>
                      </div>
                      <div className="text-xs text-gray-500 italic text-center">
                        You'll be charged $253, including $48 for VAT in Italy
                      </div>
                    </div>
                  </div>                
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60"
        style={{ display: 'block' }}
      >
        <div className="bg-gray-800 text-gray-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
          <div>
            👉{' '}
            <a
              className="hover:underline ml-1"
              href="https://cruip.com/mosaic/?ref=codepen-cruip-customers-table"
              target="_blank"
              rel="noopener noreferrer"
            >
              More components on Cruip.com
            </a>
          </div>
          <button className="text-gray-500 hover:text-gray-400 ml-5" onClick={() => {}}>
            <span className="sr-only">Close</span>
            <svg className="w-4 h-4 flex-shrink-0 fill-current" viewBox="0 0 16 16">
              <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StripePayment;
