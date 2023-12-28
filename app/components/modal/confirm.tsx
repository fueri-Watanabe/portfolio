import { XMarkIcon } from "@heroicons/react/24/outline";
import { inputs, inputTitle } from "../main/contact";

const Confirm = ({
  setModal,
  values,
}: {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  values: inputs;
}) => {
  return (
    <>
      <div
        className="fixed flex flex-col justify-between w-auto m-auto h-fit max-h-full max-w-screen-sm rounded-lg shadow-2xl p-3
    inset-0 z-50 outline-none focus:outline-none bg-white dark:bg-slate-800"
      >
        <div className="flex flex-col gap-2 p-5 border-b">
          <div className="flex justify-between items-center dark:border-slate-600">
            <div className="text-xl font-semibold">送信内容確認</div>
            <button type="button" onClick={() => setModal(false)}>
              <XMarkIcon className="h-6 w-6 text-gray-500" />
            </button>
          </div>
          <div className="dark:border-slate-600 text-sm">
            <p>以下の内容で送信いたします。</p>
          </div>
        </div>
        <div className="relative overflow-x-hidden overflow-y-auto px-14 py-4 text-lg">
          <div className="flex flex-col justify-center items-left gap-4">
            {(Object.keys(inputTitle) as (keyof inputs)[]).map((key, index) => {
              return (
                <div key={index} className="flex flex-col">
                  <p className="font-semibold">{inputTitle[key]}</p>
                  <p className="">{values[key]}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-6 p-5">
          <button
            type="button"
            className="h-12 lg:h-10 w-32 custom-button"
            onClick={() => setModal(false)}
          >
            キャンセル
          </button>
          <button type="submit" className="h-12 lg:h-10 w-32 custom-button">
            送信
          </button>
        </div>
      </div>
    </>
  );
};
export default Confirm;
