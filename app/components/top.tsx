import Image from "next/image";

const Top = () => {
  return (
    <div className="container">
      <div className="flex justify-center items-center w-full py-36">
        <div className="flex flex-col items-start gap-8">
          <div className="flex items-end gap-2 text-4xl font-bold text-white dark:text-slate-800">
            <p>
              <ruby>
                fueri
                <rt>フエリ</rt>
              </ruby>
            </p>
            <p className="text-5xl">/</p>
            <p>Hiroshi Watanabe</p>
          </div>
          <div className="text-4xl">
            <p className="text-white dark:text-slate-800">Web Developer</p>
          </div>
          <button className="w-auto custom-button">
            <p className="text-lg">サービスを見る</p>
          </button>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <Image src="/working.gif" alt="working" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};
export default Top;
