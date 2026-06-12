import { Check } from "lucide-react";

interface Props {
  text: string;
}

export default function ServiceFeature({
  text,
}: Props) {
  return (
    <div
      className="
      flex
      items-center
      gap-3
    "
    >
      <div
        className="
        flex
        h-6
        w-6
        items-center
        justify-center
        rounded-full
        bg-emerald-500/10
      "
      >
        <Check
          size={14}
          className="text-emerald-500"
        />
      </div>

      <span>{text}</span>
    </div>
  );
}
