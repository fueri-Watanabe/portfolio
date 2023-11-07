import Link from "next/link";
import { HeaderLink } from "../const/linkData";

export const Header = () => {
  return (
    <>
      <div className="sticky top-0 p-6 bg-gray-500">
        <div className="flex justify-between">
          <div>fueri logo</div>
          <div className="flex gap-4">
            {HeaderLink.map((link) => {
              return (
                <Link key={link.href} href="/">
                  <div>
                    <p className="text-lg">{link.label}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
