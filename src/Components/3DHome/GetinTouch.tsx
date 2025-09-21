import Robot from "./RobotVisualization";

export default function GetinTouch() {
  return (
    <div className="scale-100 md:scale-100 relative w-full">
      {/* Contenido principal */}
      <Robot />

      {/* Gradiente inferior para difuminar el fondo */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black"></div>
    </div>
  );
}
