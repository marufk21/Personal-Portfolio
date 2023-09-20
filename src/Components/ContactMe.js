import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Pinfo from "./Pinfo";

const ContactMe = () => {
  const [state, handleSubmit] = useForm("xzbqavyq");
  if (state.succeeded) {
    return (
      <div className="bg-gradient-to-r from-blue-900 to-black flex justify-center">
        <div className="flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-gradient-to-r from-blue-900 to-black divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-blue-600 dark:text-blue-500"
            focusable="false"
            data-prefix="fas"
            data-icon="paper-plane"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
            ></path>
          </svg>
          <div className="pl-4 text-sm font-normal">
            Message sent successfully.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      id="contact"
      name="contact"
      className="h-screen w-full  bg-gradient-to-r from-blue-900 to-black"
    >
      <div className="max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="my-12 text-4xl text-blue-500 font-bold inline border-b-4 border-green-500">
            Contact Me
          </p>
        </div>
        <Pinfo />

        <div className="flex justify-center items-center ">
          <p></p>
          <form
            form="true"
            onSubmit={handleSubmit}
            method="POST"
            className="flex flex-col w-full md:w-1/2 text"
          >
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-green-500 focus:outline-none border-blue-600 placeholder-purple-400"
            />

            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-green-400 focus:outline-none border-blue-600 placeholder-purple-400"
            />

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-green-400 focus:outline-none border-blue-600 placeholder-purple-400"
            ></textarea>

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button
              type="submit"
              disabled={state.submitting}
              className="text-blue-900 font-bold bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-3xl hover:scale-110 duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
