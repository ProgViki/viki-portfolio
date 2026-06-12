interface Props {
  metrics: string[];
}

export default function ProjectMetrics({
  metrics,
}: Props) {
  return (
    <div
      className="
      mt-6
      flex
      flex-wrap
      gap-3
    "
    >
      {metrics.map((metric) => (
        <div
          key={metric}
          className="
          rounded-full
          bg-emerald-500/10
          px-4
          py-2
          text-sm
          font-medium
          text-emerald-600
        "
        >
          {metric}
        </div>
      ))}
    </div>
  );
}