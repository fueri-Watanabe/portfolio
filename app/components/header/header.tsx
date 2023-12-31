"use client";

import { HeaderLink } from "../../_const/linkData";
import ModeSwitcher from "../tools/modeSwitcher";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useRouter } from "next/navigation";

const NavLink = ({
  showNav,
  setShowNav,
}: {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();
  return (
    <>
      {HeaderLink.map((link) => {
        return (
          <button
            key={link.label}
            type="button"
            onClick={() => {
              router.push(link.href);
              showNav && setShowNav(false);
            }}
            className="w-1/2 lg:w-auto p-2 lg:p-1"
          >
            <p className="text-lg">{link.label}</p>
          </button>
        );
      })}
    </>
  );
};

export const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();
  return (
    <div className="flex justify-center items-center">
      <div className="fixed z-20 top-3 p-2 w-full lg:w-auto mx-auto rounded-lg backdrop-blur-sm shadow-md drop-shadow-lg">
        <div>
          <div className="flex justify-between items-center gap-8">
            <button
              onClick={() => {
                router.push("");
                showNav && setShowNav(false);
              }}
              className="flex justify-center items-center h-10 w-10"
            >
              <Image
                src="/logo.png"
                alt="logo"
                width={100}
                height={100}
                className="w-12 h-auto"
              />
            </button>
            <div className="lg:flex items-center gap-2 hidden">
              <NavLink showNav={showNav} setShowNav={setShowNav} />
            </div>
            <div className="lg:hidden">
              <p className="text-3xl cursor-default">fueri</p>
            </div>
            <div className="lg:flex items-center p-1 hidden">
              <ModeSwitcher />
            </div>
            <button
              type="button"
              onClick={() => setShowNav(showNav ? false : true)}
              className="flex justify-center items-center lg:hidden h-10 w-10"
              aria-label="menuBar"
            >
              <Bars3Icon className="h-8 w-8" />
            </button>
          </div>
          {showNav && (
            <div className="flex flex-col justify-center items-center text-center pt-2 lg:hidden">
              <NavLink showNav={showNav} setShowNav={setShowNav} />
            </div>
          )}
        </div>
      </div>
      {showNav && (
        <div
          onClick={(e) =>
            e.target == e.currentTarget && showNav && setShowNav(false)
          }
          className="opacity-80 fixed inset-0 z-10"
        ></div>
      )}
    </div>
  );
};
