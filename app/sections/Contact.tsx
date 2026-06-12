"use client";

import { useForm } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit } =
    useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <input
        {...register("name")}
        placeholder="Name"
      />

      <input
        {...register("email")}
        placeholder="Email"
      />

      <textarea
        {...register("message")}
      />

      <button type="submit">
        Send
      </button>
    </form>
  );
}