import Link from "next/link";
import { HeaderLink } from "../_const/linkData";
import ModeSwitcher from "./modeSwitcher";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="fixed z-20 top-3 p-2 mx-auto rounded-lg backdrop-blur-sm shadow-md drop-shadow-lg">
        <div className="flex justify-between items-center gap-8">
          <div>
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="w-12 h-auto"
            />
          </div>
          <div className="flex items-center gap-4">
            {HeaderLink.map((link) => {
              return (
                <Link key={link.label} href="/">
                  <div>
                    <p className="text-lg">{link.label}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="flex items-center p-1">
            <ModeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};
