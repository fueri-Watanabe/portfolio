import { SiGithub } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="border-t dark:border-slate-700">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0 p-8 h-32">
          <div className="text-base font-light order-2 lg:order-1">
            <span>
              © 2021-{new Date().getFullYear()}
              <a href="https://fueri.jp/" className="ml-1 hover:underline">
                fueri
              </a>
              . All Rights Reserved.
            </span>
          </div>
          <div className="flex flex-row justify-center items-center gap-2 order-1 lg:order-2">
            <Link
              href={"https://github.com/fueri-Watanabe"}
              target="_blank"
              className="rounded-full p-1"
            >
              <SiGithub className="w-7 h-7" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
