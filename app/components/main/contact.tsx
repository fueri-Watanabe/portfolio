"use client";

import { useState, useTransition } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ContactSchema, ContactSchemaType } from "../tools/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Confirm from "../modal/confirm";
import Complete from "../modal/complete";
import { ContactTitles } from "@/app/_const/contactData";

export const inputTitle = {
  title: "ご用件",
  contactName: "お名前",
  company: "貴社名",
  email: "メールアドレス",
  content: "お問い合わせ内容",
};

const Form = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(ContactSchema),
  });
  const [modal, setModal] = useState(false);
  const [completeDisplay, setCompleteDisplay] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [isPending, startTransition] = useTransition();

  const onSubmit: SubmitHandler<ContactSchemaType> = async (data) => {
    startTransition(async () => {
      if (modal) {
        const fetchData = await fetch("/api/contact", {
          body: JSON.stringify({
            ...data,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });
        console.log(fetchData.ok);
        fetchData.ok ? setIsSuccess(true) : setIsSuccess(false);
        setCompleteDisplay(true);
      } else {
        setModal(true);
      }
    });
  };

  const errorMessageClassName = "text-sm text-red-500";

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center items-center">
          <div className="lg:w-1/3 lg:p-10 p-4 text-left rounded-lg bg-slate-100 dark:bg-slate-800">
            <div className="p-3 text-gray-900 dark:text-white text-xl font-medium title-font">
              <p>お問い合わせフォーム</p>
            </div>
            <ul className="p-3 leading-relaxed text-gray-600 dark:text-gray-400">
              <li>
                <p>ご依頼・ご相談は、下記のフォームから受け付けております。</p>
              </li>
              <li>
                <p>料金やサービス内容などお気軽にお問い合わせください。</p>
              </li>
              <li>
                <p>ご検討中やお悩み中の段階でもまずはその旨ご連絡ください。</p>
              </li>
            </ul>
            <div className="mb-2">
              <div className="py-4">
                <div className="my-6">
                  <label className="leading-7 text-sm">
                    {inputTitle.title}
                    <sup className="text-red-500">*</sup>
                  </label>
                  {errors.title?.message && (
                    <p className={errorMessageClassName}>
                      {errors.title?.message}
                    </p>
                  )}
                  <select
                    aria-label="title"
                    className="w-full dark:bg-gray-700 rounded text-base outline-none py-1 px-3 leading-6"
                    {...register("title", { required: true })}
                  >
                    <option hidden></option>
                    {ContactTitles.map((title, index) => {
                      return (
                        <option key={index} value={title}>
                          {title}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="my-6">
                  <label htmlFor="contactName" className="leading-7 text-sm">
                    {inputTitle.contactName}
                    <sup className="text-red-500">*</sup>
                  </label>
                  {errors.contactName?.message && (
                    <p className={errorMessageClassName}>
                      {errors.contactName?.message}
                    </p>
                  )}
                  <input
                    type="text"
                    id="contactName"
                    className="w-full dark:bg-gray-700 rounded text-base outline-none py-1 px-3 leading-6"
                    {...register("contactName", { required: true })}
                  />
                </div>
                <div className="my-6">
                  <label htmlFor="company" className="leading-7 text-sm">
                    {inputTitle.company}
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full dark:bg-gray-700 rounded text-base outline-none py-1 px-3 leading-6"
                    {...register("company")}
                  />
                </div>
                <div className="my-6">
                  <label htmlFor="email" className="leading-7 text-sm">
                    {inputTitle.email}
                    <sup className="text-red-500">*</sup>
                  </label>
                  {errors.email?.message && (
                    <p className={errorMessageClassName}>
                      {errors.email?.message}
                    </p>
                  )}
                  <input
                    type="text"
                    id="email"
                    className="w-full dark:bg-gray-700 rounded text-base outline-none py-1 px-3 leading-6"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="my-6">
                  <label htmlFor="content" className="leading-7 text-sm">
                    {inputTitle.content}
                    <sup className="text-red-500">*</sup>
                  </label>
                  {errors.content?.message && (
                    <p className={errorMessageClassName}>
                      {errors.content?.message}
                    </p>
                  )}
                  <textarea
                    id="content"
                    className="w-full dark:bg-gray-700 rounded h-32 text-base outline-none py-1 px-3 leading-6"
                    {...register("content", { required: true })}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full custom-button"
                disabled={isPending}
              >
                <p className="text-lg">送信内容確認</p>
              </button>
            </div>
          </div>
        </div>
        {modal &&
          (completeDisplay ? (
            <Complete
              setModal={setModal}
              setCompleteDisplay={setCompleteDisplay}
              isSuccess={isSuccess}
              reset={reset}
            />
          ) : (
            <Confirm
              setModal={setModal}
              values={getValues()}
              isPending={isPending}
            />
          ))}
        {modal && (
          <div className="opacity-80 fixed inset-0 z-40 bg-slate-50 dark:bg-slate-950"></div>
        )}
      </form>
    </>
  );
};

export default Form;
