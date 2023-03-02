import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";

export const Contact = () => {
  return (
    <>
      <div
        id="/contact"
        className="w-full max-w-[600px] h-screen mx-auto p-4 mt-[100px]"
      >
        <h2 className="w-full mx-auto py-4 mb-4 text-4xl font-bold">
          Let's collaborate
        </h2>
        <form
          // I have used getform.io for the below form to send email for my own portfolio. You can also do so if you want.
          // Go to the getform.io. Create your account. Create a form and it will give you an endpoint link that looks something like "https://getform.io/f/537c7c00-0cd1-67kc-a8ij-897jld4024cc" This is is just an example and will not work.
          // Paste your URL inside the action attribute of this form below and you will be good to go.
          action=""
          method="POST"
        >
          <input
            className="p-3 bg-transparent border-2 border-slate-500 border-opacity-50 w-full mb-3"
            type="text"
            name="Name"
            placeholder="Name"
            required="required"
          />
          <input
            className="p-3 bg-transparent border-2 border-slate-500 border-opacity-50 w-full mb-3"
            type="email"
            name="email"
            placeholder="Email"
            required="required"
          />
          <textarea
            className="p-3 bg-transparent border-2 border-slate-500 border-opacity-50 w-full mb-3"
            name="message"
            rows="10"
            placeholder="Message"
            required="required"
          ></textarea>
          <button className="border-2 group border-[#AAAAAA] px-6 py-3 my-6 flex items-center ">
            Send
            <span>
              <RiSendPlaneFill className="ml-1 mt-[3px] rotate-45 group-hover:ml-4 duration-500" />
            </span>
          </button>
        </form>
      </div>
    </>
  );
};
