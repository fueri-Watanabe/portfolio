import { XMarkIcon } from "@heroicons/react/24/outline";
import { useFormContext, useForm } from "react-hook-form";
import { inputs, inputTitle } from "../main/form";

// TODO エラー修正
// TODO 整地。スマホ版も対応
const Confirm = ({
  setModal,
  values,
}: {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  values: inputs;
}) => {
  console.log(values);
  return (
    <>
      <div
        className="fixed flex flex-col justify-between w-auto my-10 mx-auto max-w-screen-md rounded-lg shadow-2xl
    inset-0 z-50 outline-none focus:outline-none bg-white dark:bg-slate-800"
      >
        <div>
          <div className="flex justify-between items-center dark:border-slate-600 px-5 pt-5">
            <div className="text-lg font-semibold">送信内容確認</div>
            <button type="button" onClick={() => setModal(false)}>
              <XMarkIcon className="h-6 w-6 text-gray-500" />
            </button>
          </div>
          <div className="dark:border-slate-600 px-5 py-3">
            <p>以下の内容で送信いたします。</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          {Object.keys(inputTitle).map((key, index) => {
            return (
              <div key={index} className="flex flex-row">
                <p>{inputTitle[key]}:</p>
                <p>{values[key]}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-row justify-center items-center gap-4 py-10">
          <button
            type="button"
            className="h-12 lg:h-10 w-1/2 lg:w-32 custom-button"
            onClick={() => setModal(false)}
          >
            キャンセル
          </button>
          <button
            type="submit"
            className="h-12 lg:h-10 w-1/2 lg:w-32 custom-button"
          >
            送信
          </button>
        </div>
      </div>
      <div className="opacity-80 fixed inset-0 z-40 bg-slate-50 dark:bg-slate-950"></div>
    </>
  );
};
export default Confirm;
