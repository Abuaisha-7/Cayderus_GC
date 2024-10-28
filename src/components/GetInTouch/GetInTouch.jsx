import React from "react";

const GetInTouch = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* text detail section  */}
          <div>
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Get in touch
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 traking-widest leading-5"
            >
              Send us a message and we'll get back to you as soon as we can.
            </p>
          </div>
          {/* text detail section  */}
          <div className="flex flex-col gap-3 px-3 justify-center sm:pt-0 bg-gray-400  ">
            <div className="flex items-center mt-3 ">
              <input
                data-aos="fade-up"
                type="text"
                placeholder="Name"
                className="w-full p-4 rounded-full dark:bg-gray-900 dark:focus:outline-primary"
              />
            </div>
            <div className="flex items-center">
              <input
                data-aos="fade-up"
                type="text"
                placeholder="Email"
                className="w-full p-4 rounded-full dark:focus:outline-primary dark:bg-gray-900"
              />
            </div>
            <div className="flex items-center">
              <input
                data-aos="fade-up"
                type="text"
                placeholder="Phone"
                className="w-full p-4 rounded-full dark:focus:outline-primary dark:bg-gray-900"
              />
            </div>
            <div className="flex items-center">
              <textarea
              data-aos="fade-up"
                name="message"
                id=""
                rows="4"
                placeholder="Message"
                className="w-full p-4 mb-3 dark:focus:outline-primary dark:bg-gray-900 "
              ></textarea>
            </div>
            <div className="flex items-center justify-center mb-3">
              <button
                data-aos="fade-up"
                className="bg-primary text-white py-2 rounded-full font-bold hover:bg-secondary transition-all duration-300 w-40 text-xl"
                onClick={() => alert("Thank you for your message")}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
