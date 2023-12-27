"use client";

import Link from "next/link";
import { HeaderLink } from "../../_const/linkData";
import ModeSwitcher from "../tools/modeSwitcher";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";

const NavLink = () => {
  return (
    <>
      {HeaderLink.map((link) => {
        return (
          <Link
            key={link.label}
            href={link.href}
            className="w-1/2 lg:w-auto p-2 lg:p-1"
          >
            <div>
              <p className="text-lg">{link.label}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="flex justify-center items-center">
      <div className="fixed z-20 top-3 p-2 w-full lg:w-auto mx-auto rounded-lg backdrop-blur-sm shadow-md drop-shadow-lg">
        <div>
          <div className="flex justify-between items-center gap-8">
            <Link
              href={""}
              className="flex justify-center items-center h-10 w-10"
            >
              <Image
                src="/logo.png"
                alt="logo"
                width={100}
                height={100}
                className="w-12 h-auto"
              />
            </Link>
            <div className="lg:flex items-center gap-2 hidden">
              <NavLink />
            </div>
            <div className="lg:hidden">
              <p className="text-3xl">fueri</p>
            </div>
            <div className="lg:flex items-center p-1 hidden">
              <ModeSwitcher />
            </div>
            <button
              type="button"
              onClick={() => setShowNav(showNav ? false : true)}
              // onMouseLeave={() => setShowNav(false)}
              className="flex justify-center items-center lg:hidden h-10 w-10"
            >
              <Bars3Icon className="h-8 w-8" />
            </button>
          </div>
          {showNav && (
            <div className="flex flex-col justify-center items-center text-center pt-2 lg:hidden">
              <NavLink />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
