import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-8 h-32 border-t dark:border-slate-700">
        <span className="text-base">
          © 2021-{new Date().getFullYear()}{" "}
          <a href="https://fueri.jp/" className="hover:underline">
            fueri
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </>
  );
};
