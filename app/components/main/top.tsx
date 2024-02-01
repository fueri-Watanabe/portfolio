import Link from "next/link";
const Top = () => {
  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full py-36 px-8 lg:px-0">
        <div className="flex flex-col items-center lg:items-start gap-8 lg:gap-16">
          <div className="flex flex-col lg:flex-row items-center lg:items-end gap-16 lg:gap-2 text-4xl lg:text-5xl font-bold text-white dark:text-slate-800 duration-300">
            <p className="text-5xl">
              <ruby>
                fueri
                <rt>フエリ</rt>
              </ruby>
            </p>
            <p className="text-5xl lg:text-6xl hidden lg:block">/</p>
            <p>Hiroshi Watanabe</p>
          </div>
          <button className="text-4xl lg:text-5xl cursor-default font-bold hover:font-normal duration-300 focus:font-normal">
            <p className="text-white dark:text-slate-800">Web Developer</p>
          </button>
          <Link
            href={"#service"}
            className="w-fit custom-button hover:scale-110 duration-300"
          >
            <p className="text-lg p-1">サービスを見る</p>
          </Link>
        </div>
        <div className="flex justify-center items-center lg:w-[576px] lg:h-[576px]">
          <video autoPlay loop muted playsInline poster="/working.webp">
            <source src="/animation/working.webm" type="video/webm" />
            <source src="/animation/working.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};
export default Top;
