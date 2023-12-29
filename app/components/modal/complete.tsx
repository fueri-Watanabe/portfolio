"use client";

import { UseFormReset } from "react-hook-form";

const Complete = ({
  setModal,
  setCompleteDisplay,
  isSuccess,
  reset,
}: {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCompleteDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  isSuccess: boolean;
  reset: UseFormReset<{
    title: string;
    contactName: string;
    company: string;
    email: string;
    content: string;
  }>;
}) => {
  return (
    <>
      <div className="fixed flex flex-col justify-between items-center w-auto m-auto h-fit max-h-full max-w-screen-sm rounded-lg shadow-2xl p-3 inset-0 z-50 outline-none focus:outline-none bg-white dark:bg-slate-800">
        <div className="p-5">
          <p className="text-2xl font-semibold">
            {isSuccess ? "送信完了" : "送信エラー"}
          </p>
        </div>
        <div className="p-5">
          <p className="text-lg">
            {isSuccess
              ? "お問い合わせ頂きありがとうございました。"
              : "メールアドレスなどご確認の上再度送信をお願いいたします。"}
          </p>
          {!isSuccess && (
            <>
              <p>
                またはお手数ですが、こちらのメールアドレスへ直接ご連絡ください。
              </p>
              <p className="text-center">watanabe@fueri.jp</p>
            </>
          )}
        </div>
        <div className="flex flex-row justify-center items-center p-5">
          <button
            type="button"
            className="h-12 lg:h-10 w-32 custom-button"
            onClick={() => {
              setModal(false);
              setCompleteDisplay(false);
              if (isSuccess) {
                reset();
              }
            }}
          >
            閉じる
          </button>
        </div>
      </div>
    </>
  );
};
export default Complete;
