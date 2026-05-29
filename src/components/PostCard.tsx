import { FC } from "react";
import { Post } from "../types/types";

interface Props {
  post: Post;
}

const PostCard: FC<Props> = ({ post }) => {
  const { title, description, image, link } = post;

  return (
    <a
      className="group flex min-h-full flex-col overflow-hidden rounded-lg border border-ink/10 bg-white text-ink shadow-soft transition hover:-translate-y-1 hover:border-coral dark:border-white/10 dark:bg-slate-900 dark:text-white"
      target="_blank"
      rel="noreferrer"
      href={link}
    >
      <div className="overflow-hidden">
        <img
          className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105 sm:aspect-[4/3]"
          src={image}
          alt=""
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-coral">
          Essay
        </p>
        <h3 className="text-xl font-black leading-snug sm:text-2xl">{title}</h3>
        <p className="text-sm font-light leading-6 text-charcoal dark:text-slate-300 sm:text-base">
          {description}
        </p>
        <span className="mt-auto pt-4 text-sm font-black text-ink transition group-hover:text-coral dark:text-white">
          Read piece
        </span>
      </div>
    </a>
  );
};

export default PostCard;
