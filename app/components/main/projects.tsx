import { ProjectData } from "../../_const/projectData";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      <div className="container">
        <div className="max-w-sm lg:max-w-full mx-auto grid lg:grid-cols-2 gap-12">
          {ProjectData.map((value, index) => {
            return (
              <Link
                key={index}
                href={value.url}
                target="_blank"
                className="group w-full h-80 lg:h-60 border rounded-xl shadow hover:border-slate-100 hover:dark:border-slate-600 hover:shadow-xl duration-300"
              >
                <div className="flex flex-col lg:flex-row items-center h-full">
                  <div className="order-2 lg:order-1 flex flex-col justify-between items-center lg:items-start p-2 lg:p-6 h-full lg:w-1/2 group-hover:scale-105 duration-300">
                    <div className="lg:order-2 lg:basis-4/6 flex justify-center items-center">
                      <p className="text-lg font-medium">{value.title}</p>
                    </div>
                    <div className="lg:order-1 lg:basis-1/6 flex gap-2 border-t-2 border-b-2">
                      {value.icon.map((iconSvg, iconIndex) => {
                        return (
                          <div
                            key={iconIndex}
                            className="w-10 h-10 flex justify-center items-center p-2"
                          >
                            {iconSvg}
                          </div>
                        );
                      })}
                    </div>
                    <div className="lg:order-3 lg:basis-1/6 text-center lg:text-start">
                      <p className="text-slate-500 text-xs">{value.url}</p>
                    </div>
                  </div>
                  <Image
                    className="order-1 lg:order-2 object-cover lg:w-1/2 h-full rounded-t-xl lg:rounded-r-xl"
                    src={value.image}
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Projects;
