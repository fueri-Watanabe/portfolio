"use client";

// TODO　確認画面はモーダルで表示
// TODO submit処理の作成
import { FormEvent, useState } from "react";
import Confirm from "../modal/confirm";

const Form = () => {
  const [modal, setModal] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const toConfirm = (e: FormEvent) => {
    e.preventDefault();
    setModal(true);
    const target = e.target;
    console.log(Object.values(target).map((v) => v.value));
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          toConfirm(e);
        }}
      >
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
                    ご用件<sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    name=""
                    className="w-full dark:bg-gray-700 rounded text-base outline-none py-1 px-3 leading-6"
                  />
                </div>
                <div className="my-6">
                  <label className="leading-7 text-sm">貴社名</label>
                  <input
                    type="text"
                    name="company"
                    className="w-full dark:bg-gray-700 rounded text-base outline-none py-1 px-3 leading-6"
                  />
                </div>
                <div className="my-6">
                  <label className="leading-7 text-sm">
                    お名前<sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full dark:bg-gray-700 rounded text-base outline-none py-1 px-3 leading-6"
                  />
                </div>
                <div className="my-6">
                  <label className="leading-7 text-sm">
                    メールアドレス<sup className="text-red-500">*</sup>
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="w-full dark:bg-gray-700 rounded text-base outline-none py-1 px-3 leading-6"
                  />
                </div>
                <div className="my-6">
                  <label className="leading-7 text-sm">
                    お問い合わせ内容
                    <sup className="text-red-500">*</sup>
                  </label>
                  <textarea
                    name=""
                    className="w-full dark:bg-gray-700 rounded h-32 text-base outline-none py-1 px-3 leading-6"
                  />
                </div>
              </div>
              <button type="submit" className="w-full custom-button">
                内容確認
              </button>
            </div>
          </div>
        </div>
      </form>
      {modal && <Confirm />}
    </>
  );
};

export default Form;
