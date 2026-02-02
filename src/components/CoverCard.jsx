export default function CoverCard({ course, student }) {
  return (
    <div
      style={{
        width: "210mm",
        height: "247mm",
        backgroundColor: "#e0f2fe",
        padding: "15mm",
        boxSizing: "border-box",
        textAlign: "center",
        fontFamily: "Arial",
      }}
    >
      {/* TÍTULO DEL CURSO */}
      <div
        style={{
          backgroundColor: "#facc15",
          padding: "3mm",
          borderRadius: "10px",
          marginBottom: "3mm",
        }}
      >
        <h1
          style={{
            fontSize: "47px",
            fontWeight: 900,
          }}
        >
          {course.name}
        </h1>
      </div>

      {/* IMAGEN DEL CURSO */}
      <img
        src={course.image}
        alt={course.name}
        style={{
          width: "350px",
          height: "auto",
          margin: "0 auto 10mm auto",
          display: "block",
        }}
      />

      {/* DATOS DEL ESTUDIANTE */}
      <div style={{ marginTop: "6mm" }}>
        <h2 style={{ fontSize: "50px", fontWeight: 900, color: "#1e3a8a" }}>
          {student.name}
        </h2>

        <h2 style={{ fontSize: "50px", fontWeight: 900, color: "#6b21a8" }}>
          {student.surnames}
        </h2>

        <h3
          style={{
            fontSize: "40px",
            fontWeight: 800,
            color: "#dc2626",
            marginTop: "6mm",
          }}
        >
          {student.grade}
        </h3>

        <h1
          style={{
            fontSize: "60px",
            fontWeight: 900,
            color: "#be185d",
            marginTop: "9mm",
          }}
        >
          {student.year}
        </h1>
      </div>
    </div>
  );
}
