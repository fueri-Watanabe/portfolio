import { ProjectData } from "../../_const/projectData";
import Image from "next/image";
import Link from "next/link";

// TODO デモの共有
const Projects = () => {
  return (
    <>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          {ProjectData.map((value, index) => {
            return (
              <Link
                key={index}
                href={value.url}
                // type="button"
                className="w-full h-60 border rounded-xl shadow hover:border-slate-100 hover:dark:border-slate-600 hover:shadow-xl duration-300"
              >
                <div className="flex items-center gap-4 h-full p-6 hover:scale-105 duration-300">
                  <div className="flex flex-col justify-between items-start h-full w-1/2">
                    <div className="flex gap-2">
                      {value.icon.map((iconSrc, iconIndex) => {
                        return (
                          <div
                            key={iconIndex}
                            className="w-10 h-10 flex justify-center items-center rounded-full bg-slate-200 dark:bg-white p-2"
                          >
                            <Image
                              src={iconSrc}
                              alt=""
                              width={45}
                              height={45}
                            />
                          </div>
                        );
                      })}
                    </div>
                    <p className="font-medium">{value.title}</p>
                    <p className="text-slate-500 text-xs">{value.url}</p>
                  </div>
                  <Image
                    className="w-1/2 rounded-xl"
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
