export default function TrustBar() {
  const items = [
    "Enterprise Platforms",
    "FinTech",
    "HealthTech",
    "Real Estate",
    "SaaS",
    "AI Systems",
  ];

  return (
    <div
      className="
      mt-20
      flex
      flex-wrap
      justify-center
      gap-4
    "
    >
      {items.map((item) => (
        <div
          key={item}
          className="
          rounded-full
          border
          px-5
          py-3
          text-sm
          text-slate-500
        "
        >
          {item}
        </div>
      ))}
    </div>
  );
}