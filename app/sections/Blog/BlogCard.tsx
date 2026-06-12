interface Props {
  post: any;
}

export default function BlogCard({
  post,
}: Props) {
  return (
    <div
      className="
      rounded-[32px]
      border
      bg-white/60
      dark:bg-slate-900/60
      backdrop-blur-xl
      p-8
      hover:-translate-y-2
      transition-all
    "
    >
      <span className="text-sky-500">
        {post.category}
      </span>

      <h3
        className="
        mt-4
        text-2xl
        font-bold
      "
      >
        {post.title}
      </h3>

      <p
        className="
        mt-4
        text-slate-500
      "
      >
        {post.readTime}
      </p>
    </div>
  );
}