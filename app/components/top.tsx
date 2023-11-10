import Image from "next/image";

const Top = () => {
  return (
    <div className="container">
      <div className="flex justify-center items-center w-full py-40">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-start">
            <div className="text-4xl pb-8">
              <p className="text-white dark:text-slate-800">
                業務の手助け、イメージを形にする
              </p>
            </div>
            <div className="w-5/6 border-t border-slate-800 dark:border-white"></div>
            <div className="text-4xl pt-8">
              <p className="text-white dark:text-slate-800">
                システム開発・ツール開発
              </p>
            </div>
            <div className="py-8">
              <p className="text-slate-800 dark:text-white text-2xl font-medium">
                fueri/Hiroshi Watanabe
              </p>
            </div>
            <button className="w-auto custom-button">
              <p className="text-lg">サービスを見る</p>
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center w-1/3">
          <Image src="/working.gif" alt="working" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};
export default Top;
