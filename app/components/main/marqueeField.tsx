import Marquee from "react-fast-marquee";
import { IconSauce } from "@/app/_const/iconSauce";

const MarqueeField = () => {
  return (
    <>
      <div className="w-20 py-4 shadow-lg rounded-2xl">
        <Marquee
          pauseOnClick
          //    gradient gradientColor="hsl(var(--widget))"
        >
          {Object.values(IconSauce).map((iconSauceValue) => {
            return Object.values(iconSauceValue.icon).map((iconValues) => {
              return iconValues.svg ? (
                <div key={iconValues.iconName} className="mx-8">
                  {iconValues.svg}
                </div>
              ) : (
                ""
              );
            });
          })}
        </Marquee>
      </div>
    </>
  );
};
export default MarqueeField;
