import Link from "next/link";
const Top = () => {
  const wait = () => console.log(false);
  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full py-36 px-8 lg:px-0">
        <div className="flex flex-col items-start gap-8">
          <div className="flex items-center lg:items-end gap-2 text-4xl font-bold text-white dark:text-slate-800 duration-300">
            <p>
              <ruby>
                fueri
                <rt>フエリ</rt>
              </ruby>
            </p>
            <p className="text-5xl">/</p>
            <p className="text-4xl">Hiroshi Watanabe</p>
          </div>
          <button className="text-4xl cursor-default hover:font-bold duration-300 focus:font-bold">
            <p className="text-white dark:text-slate-800">Web Developer</p>
          </button>
          <Link
            href={"#service"}
            className="w-auto custom-button hover:scale-110 duration-300"
          >
            <p className="text-md p-1">サービスを見る</p>
          </Link>
        </div>
        <div className="flex justify-center items-center lg:w-1/2">
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
