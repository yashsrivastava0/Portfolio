import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/blljvzjb", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      name="contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-4">Message</h1>
      <span>Please fill out the form below to contact me</span>
      <div className="flex flex-col items-center justify-center mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
        >
          <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              {...register("name", { required: true })}
              className="shadow rounded-lg bg-white border-none focus:ring focus:ring-gray-200 p-2"
              type="text"
              placeholder="Yash Srivastava"
            />
            {errors.name && (
              <p className="text-red-500 mt-1">This field is required</p>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              {...register("email", { required: true })}
              className="shadow rounded-lg bg-white border-none focus:ring focus:ring-gray-200 p-2"
              type="email"
              placeholder="yash@gmail.com"
            />
            {errors.email && (
              <p className="text-red-500 mt-1">This field is required</p>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              {...register("message", { required: true })}
              className="shadow rounded-lg bg-white border-none focus:ring focus:ring-gray-200 p-2"
              placeholder="Write your message here"
              rows="4"
            />
            {errors.message && (
              <p className="text-red-500 mt-1">This field is required</p>
            )}
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
