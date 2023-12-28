"use client";

const Complete = ({
  setModal,
  setCompleteDisplay,
}: {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCompleteDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div className="fixed flex flex-col justify-between items-center w-auto m-auto h-fit max-h-full max-w-screen-sm rounded-lg shadow-2xl p-3 inset-0 z-50 outline-none focus:outline-none bg-white dark:bg-slate-800">
        <div className="p-5">
          <p className="text-2xl font-semibold">送信完了</p>
        </div>
        <div className="p-5">
          <p className="text-lg">お問い合わせ頂きありがとうございました。</p>
        </div>
        <div className="flex flex-row justify-center items-center p-5">
          <button
            type="button"
            className="h-12 lg:h-10 w-32 custom-button"
            onClick={() => {
              setModal(false);
              setCompleteDisplay(false);
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
