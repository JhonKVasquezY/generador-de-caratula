import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { COURSES } from "./data/courses";
import { STUDENT_DEFAULT } from "./data/student";
import CoverCard from "./components/CoverCard";

export default function App() {
  const [index, setIndex] = useState(0);
  const cardRef = useRef(null);

  const downloadImage = async () => {
    const canvas = await html2canvas(cardRef.current, {
      scale: 2, // mejora calidad del PNG
      useCORS: true,
    });

    const link = document.createElement("a");
    link.download = `${COURSES[index].name}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const prevCourse = () => {
    setIndex((prev) => (prev === 0 ? COURSES.length - 1 : prev - 1));
  };

  const nextCourse = () => {
    setIndex((prev) => (prev === COURSES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* CONTROLES */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={prevCourse}>⬅ Anterior</button>
        <button onClick={nextCourse} style={{ marginLeft: "10px" }}>
          Siguiente ➡
        </button>
      </div>

      {/* PREVIEW (ESCALADO SOLO PARA PANTALLA) */}
      <div
        ref={cardRef}
        style={{
          transform: "scale(0.6)",
          transformOrigin: "top center",
          margin: "0 auto",
          width: "fit-content",
        }}
      >
        <CoverCard
          course={COURSES[index]}
          student={STUDENT_DEFAULT}
        />
      </div>

      {/* DESCARGA */}
      <div style={{ marginTop: "30px" }}>
        <button onClick={downloadImage}>
          ⬇️ Descargar carátula
        </button>
      </div>
    </div>
  );
}
