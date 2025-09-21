import SplineScene from "./BgKeyboard";

export default function ThreedHome() {
  return (
    <>
      <div>
        <SplineScene />

        <div className=" mx-auto w-2/3 text-left pt-32 outer_block md:mb-24 relative">
          <div className="text-gray-400 text-xl md:text-2xl">
            Bienvenidos a
          </div>

          <div className="text-6xl md:text-8xl font-semibold mt-6">
            <span className="text-white">Arcov</span>
            <span className="text-cyan-400">Xr</span>
          </div>

          <div className="text-white font-light text-2xl md:text-3xl mt-6">
            Consultora en Tecnologías Emergentes
          </div>

          <div className="text-gray-400 mt-6 text-lg md:text-xl">
            Sección especializada en previsualización 3D
          </div>
        </div>
      </div>

      {/* Gradiente inferior para difuminar el fondo */}
      <div className="pointer-events-none absolute -bottom-1 left-0 w-full h-48 bg-gradient-to-b from-transparent to-black"></div>
    </>
  );
}
