import { ProjectData } from "../const/projectData";
import Image from "next/image";
// TODO デモの共有
// TODO URL先のプレビューの実装
const Projects = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-2 gap-12">
          {ProjectData.map((value, index) => {
            return (
              <button
                key={index}
                type="button"
                className="w-full h-60 border rounded-xl"
              >
                <div className="flex items-center gap-4 h-full p-6">
                  <div className="flex flex-col justify-between items-start h-full w-1/2">
                    <div className="flex gap-2">
                      {value.icon.map((iconSrc, iconIndex) => {
                        return (
                          <div
                            key={iconIndex}
                            className="w-8 h-8 flex justify-center items-center"
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
                    className="w-1/2 border rounded-xl"
                    src={value.image}
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Projects;
