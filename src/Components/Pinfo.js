import React from "react";

const Pinfo = () => {
  return (
    <>
      <div className="flex justify-center flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 my-6">
        <div className="flex items-center bg-gradient-to-r from-blue-900 to-black  p-4 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="mr-2 text-green-400"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm0-15c-3.31 0-6 2.69-6 6c0 3.31 2.69 6 6 6c3.31 0 6-2.69 6-6c0-3.31-2.69-6-6-6zm-2 10H9v-2h1zm2 0h-1v-2h1zm2 0h-1v-2h1zm0-3H9V9h6zm2-5h-1v2h1zm0 3h-1v2h1z" />
          </svg>
          <span className="text-green-400 font-semibold">PhoneNo:</span>
          <span className="ml-1 text-blue-400 font-medium">+918171244560</span>
        </div>

        <div className="flex items-center bg-gradient-to-r from-blue-900 to-black p-4 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="mr-2 text-green-400"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 3.59 8 8 8c4.41 0 8-3.59 8-8c0-4.41-3.59-8-8-8zm0 14c-3.31 0-6-2.69-6-6c0-3.31 2.69-6 6-6c3.31 0 6 2.69 6 6c0 3.31-2.69 6-6 6zm-1-10h2v2h-2zm0 4h2v6h-2z" />
          </svg>
          <span className="text-green-400 font-semibold">GmailID:</span>
          <span className="ml-1  text-blue-400 font-medium">
            marufkhan2002@gmail.com
          </span>
        </div>

        <div className="flex items-center bg-gradient-to-r from-blue-900 to-black p-4 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="mr-2 text-green-400"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12c0 3.43 1.34 6.57 3.52 8.89l1.42-1.42C5.99 16.63 5 14.42 5 12c0-4.41 3.59-8 8-8c2.42 0 4.63 1 6.22 2.61l1.42-1.42C18.57 3.34 15.43 2 12 2zm7.78 4.22L17 7.05c.45.18.84.47 1.17.83c.37.4.64.88.79 1.41l.97 3.94l-3.93-.98c-.54-.14-1.01-.41-1.39-.79L12 9.88L8.05 12l2.26 4.2c.37.68.34 1.53-.06 2.24c-.29.56-.8.99-1.42 1.17l-4.22 1.05l1.05-4.22c.18-.62.61-1.13 1.17-1.42c.71-.4 1.56-.43 2.24-.06L12 14.12l2.12-2.13c.68-.37 1.54-.34 2.24.06c.56.29.99.8 1.17 1.42l1.05 4.22l-4.22-1.05c-.62-.18-1.13-.61-1.42-1.17c-.4-.71-.43-1.56-.06-2.24L14.12 12l2.13-2.12c.37-.68.34-1.54-.06-2.24c-.29-.56-.8-.99-1.42-1.17zM12 14l-4 4l-1.41-1.41L10.17 13H7v-2h5.17l-3.58-3.59L8 6l4 4z" />
          </svg>
          <span className="text-green-400 font-semibold">Location:</span>
          <span className="ml-1 text-blue-400 font-medium">Ghaziabad,U.P.</span>
        </div>
      </div>
    </>
  );
};

export default Pinfo;
