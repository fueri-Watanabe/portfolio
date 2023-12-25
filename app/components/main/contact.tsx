"use client";

// TODO submit処理の作成
import { useState } from "react";
import Confirm from "../modal/confirm";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

export type inputs = {
  title: string;
  company: string;
  contactName: string;
  email: string;
  content: string;
};

export const inputTitle: inputs = {
  title: "ご用件",
  contactName: "お名前",
  company: "貴社名",
  email: "メールアドレス",
  content: "お問い合わせ内容",
};

const Form = () => {
  const { register, handleSubmit, getValues } = useForm<inputs>();
  const [modal, setModal] = useState(false);

  const onSubmit: SubmitHandler<inputs> = async (data) => {
    const res = await fetch("/api/contact", {
      body: JSON.stringify({
        email: data.email,
        message: data.content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center items-center">
          <div className="lg:w-1/3 lg:p-10 p-4 text-left rounded-lg bg-slate-100 dark:bg-slate-800">
            <div className="p-3 text-gray-900 dark:text-white text-lg font-medium title-font">
              <p>お問い合わせフォーム</p>
            </div>
            <div className="p-3 leading-relaxed text-gray-600 dark:text-gray-400">
              <p>
                ご依頼・ご相談は、下記のフォームから受け付けております。
                料金やサービス内容などお気軽にお問い合わせください。
                ご検討中やお悩み中の段階でもまずはその旨ご連絡ください。
              </p>
            </div>
            <div className="mb-2">
              <div className="py-4">
                <div className="my-6">
                  <label className="leading-7 text-sm">
                    {inputTitle.title}
                    <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="システム開発の相談・見積り"
                    className="w-full dark:bg-gray-700 rounded text-base outline-none py-1 px-3 leading-6"
                    {...register("title", { required: true })}
                  />
                </div>
                <div className="my-6">
                  <label className="leading-7 text-sm">
                    {inputTitle.contactName}
                    <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    className="w-full dark:bg-gray-700 rounded text-base outline-none py-1 px-3 leading-6"
                    {...register("contactName", { required: true })}
                  />
                </div>
                <div className="my-6">
                  <label className="leading-7 text-sm">
                    {inputTitle.company}
                  </label>
                  <input
                    type="text"
                    className="w-full dark:bg-gray-700 rounded text-base outline-none py-1 px-3 leading-6"
                    {...register("company")}
                  />
                </div>
                <div className="my-6">
                  <label className="leading-7 text-sm">
                    {inputTitle.email}
                    <sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    className="w-full dark:bg-gray-700 rounded text-base outline-none py-1 px-3 leading-6"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="my-6">
                  <label className="leading-7 text-sm">
                    {inputTitle.content}
                    <sup className="text-red-500">*</sup>
                  </label>
                  <textarea
                    className="w-full dark:bg-gray-700 rounded h-32 text-base outline-none py-1 px-3 leading-6"
                    {...register("content", { required: true })}
                  />
                </div>
              </div>
              <button
                type="button"
                className="w-full custom-button"
                onClick={() => setModal(true)}
              >
                <p className="text-lg">送信内容確認</p>
              </button>
            </div>
          </div>
        </div>
        {modal && <Confirm setModal={setModal} values={getValues()} />}
      </form>
    </>
  );
};

export default Form;
