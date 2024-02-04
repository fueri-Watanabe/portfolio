import { IconSauce } from "@/app/_const/iconSauce";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="border-t dark:border-slate-700">
      <div className="container">
        <div className="flex flex-row justify-between items-center p-8 h-32">
          <div className="text-base font-light">
            <span>
              © 2021-{new Date().getFullYear()}
              <a href="https://fueri.jp/" className="ml-1 hover:underline">
                fueri
              </a>
              . All Rights Reserved.
            </span>
          </div>
          <div className="flex flex-row justify-center items-center gap-2">
            {/* <p className="text-slate-500 text-xs cursor-default">
              {"https://github.com/fueri-Watanabe"}
            </p> */}
            <Link
              href={"https://github.com/fueri-Watanabe"}
              target="_blank"
              className="bg-black dark:bg-transparent rounded-lg p-1"
            >
              <Image
                // src={IconSauce.BackendDBCloud.icon.Github.src}
                src={"/devIcons/github-mark-white.svg"}
                alt={IconSauce.BackendDBCloud.icon.Github.iconName}
                width={45}
                height={45}
                className="lg:h-6 lg:w-6 h-7 w-7"
              />
            </Link>
          </div>
          {/* <div></div> */}
        </div>
      </div>
    </div>
  );
};
