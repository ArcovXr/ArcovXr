import { useEffect, useState } from "react";
import servicios from "./strings";

function Services() {
  const [offset, setOffset] = useState(0);
  const [activeService, setActiveService] = useState<number>(0);

  useEffect(() => {
    const updateOffset = () => {
      const width = window.innerWidth;
      setOffset(width < 768 ? 90 : 195);
    };
    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  return (
    <>
      <h1 className="text-4xl font-semibold text-center md:mt-100 mt-80">
        Servicios
      </h1>

      <div className="w-full mx-auto  anim_block overflow-hidden md:flex md:px-15">
        <div>
          <div className="transition-all hover:cursor-pointer  relative w-[300px] h-[300px] md:w-[555px] md:h-[555px] mx-auto rounded-4xl bg_opacity_img">
            <div
              className="absolute w-7/8 h-7/8 rounded-full z-10 "
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: `conic-gradient(
                  #4e4e4e38 0% 100%
                )`,
                WebkitMaskImage:
                  "radial-gradient(circle, transparent 0% 27%, black 30% 100%)",
                maskImage:
                  "radial-gradient(circle, transparent 0% 35%, black 40% 100%)",
                WebkitMaskComposite: "destination-out",
              }}
            ></div>

            <div
              className="absolute w-7/8 h-7/8 rounded-full z-20 pointer-events-none"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: `conic-gradient(
                  #ffffff 0% 100% 
                )`,
                WebkitMaskImage:
                  "radial-gradient(circle, transparent 0% 70%, black 70% 100%)",
                maskImage:
                  "radial-gradient(circle, transparent 0% 70%, black 70% 100%)",
                WebkitMaskComposite: "destination-out",
              }}
            ></div>

            {[...Array(8)].map((_, i) => {
              const angle = (360 / 8) * i;

              return (
                <div
                  key={i}
                  className="absolute left-60 top-65 z-30"
                  style={{
                    transform: `rotate(${angle}deg) translate(0px) rotate(-${angle}deg)`,
                    transformOrigin: "center",
                  }}
                >
                  <div
                    onClick={() => setActiveService(i)}
                    className={`
          group relative md:-translate-y-1 -translate-y-32 md:-translate-x-2 -translate-x-32 
          text-xs flex flex-col items-center justify-center rounded-xl px-4 py-5 text-center w-[80px] 
          transition-transform cursor-pointer
          ${
            activeService === i
              ? "scale-105 text-white fill-white" // 👈 estilo permanente si es el activo
              : "text-gray-700 fill-gray-700 hover:scale-105"
          }
        `}
                  >
                    {/* Ícono y título */}
                    <div
                      className={`
            absolute transform origin-center transition-all inset-0 flex flex-col items-center justify-center rotate-20
            ${
              activeService === i
                ? "text-white fill-white" // 👈 se mantiene activo
                : "hover:text-white hover:fill-white"
            }
          `}
                      style={{
                        transform: `rotate(${angle}deg) translate(-${offset}px) rotate(-${
                          angle + 20
                        }deg)`,
                      }}
                    >
                      <h3 className="font-bold text-sm">{servicios[i].icon}</h3>
                      <p className="md:flex text-xs hidden">
                        {servicios[i].title}
                      </p>
                    </div>

                    {/* Descripción */}
                    <div
                      className={`
            absolute text-white  px-0 py-2 rounded-md z-50 text-xs w-[190px] text-center transition-opacity
            ${
              activeService === i
                ? "opacity-100" // 👈 si está activo, siempre visible
                : "opacity-0 "
            }
          `}
                    >
                      <div className="md:flex hidden text-[15px]">
                        {servicios[i].description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {activeService !== null && (
          <div className="lg:h-145 pt-5 flex mx-15 lg:ml-20 justify-center relative py-10">
            <div className="relative flex flex-col lg:flex-row group w-full lg:w-auto">
              {servicios[activeService].subitems.map((sub, idx) => (
                <div
                  key={idx}
                  className={`
            absolute top-0 rounded-2xl bg-black border border-gray-800 hover:shadow-sm hover:shadow-white
            lg:h-full h-130 shadow-lg p-6 flex flex-col justify-center lg:mt-0 mt-10
            text-center transition-all duration-500 cursor-pointer
            ${
              idx === 0
                ? "opacity-100 lg:hover:shadow-md lg:group-hover:opacity-4 lg:hover:opacity-100"
                : "opacity-100 lg:opacity-4 lg:hover:shadow-md lg:hover:opacity-100"
            }
            lg:group-hover:scale-95 lg:hover:scale-105
          `}
                  style={{
                    // Solo en desktop se posicionan en fila
                    ...(window.innerWidth >= 1024
                      ? {
                          position: "absolute",
                          left: `${idx * 220}px`,
                          zIndex:
                            servicios[activeService].subitems.length - idx,
                          width: "280px",
                        }
                      : {
                          position: "relative",
                          width: "100%",
                        }),
                  }}
                >
                  <span
                    className="
              absolute top-0 left-1/2 -translate-x-1/2
              w-25 h-1 rounded-full
              bg-white transition-all duration-500
              group-hover:bg-white
              shadow-white
              shadow-md
              opacity-60 group-hover:opacity-100
            "
                  />
                  {/* Icono arriba opcional */}
                  <div className="flex justify-center mb-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black">
                      <span className="text-lg">⦿</span>
                    </div>
                  </div>

                  {/* Título */}
                  <h1 className="font-semibold text-white mb-3 text-xl">
                    {sub.title}
                  </h1>

                  {/* Descripción */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {sub.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Services;
