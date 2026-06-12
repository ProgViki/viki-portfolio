const skills = [
  "Software Architecture",
  "Cloud Engineering",
  "Backend Development",
  "Frontend Development",
  "AI Engineering",
];

export default function Competencies() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-12">
          Competencies
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="p-8 rounded-2xl border"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}