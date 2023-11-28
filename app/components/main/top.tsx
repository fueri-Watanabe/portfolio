import Image from "next/image";
import Link from "next/link";
// TODO スマホサイズ良い感じの配置にする。
const Top = () => {
  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full py-36 px-8 lg:px-0">
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
          <Link href={"#service"} className="w-auto custom-button">
            <p className="text-lg">サービスを見る</p>
          </Link>
        </div>
        <div className="flex justify-center items-center lg:w-1/2">
          <Image src="/working.gif" alt="working" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};
export default Top;
