import { FC } from "react";
import { posts } from "../types/posts";
import PostCard from "./PostCard";

const Post: FC = () => {
  return (
    <section
      className="border-y border-ink/10 bg-slate-50 py-14 transition-colors duration-300 dark:border-white/10 dark:bg-slate-950 sm:py-20"
      aria-labelledby="writing-heading"
    >
      <div className="section-shell">
        <div className="mb-10 flex flex-col gap-5 text-ink dark:text-white sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker">Selected Essays</p>
            {/* <h2
              id="writing-heading"
              className="mt-3 max-w-2xl text-3xl font-black leading-tight sm:text-4xl"
            >
              Notes, essays, and work doctrine.
            </h2> */}
          </div>
          <a
            className="inline-flex min-h-11 w-fit items-center justify-center rounded-full border border-ink/15 bg-white px-5 text-sm font-black text-ink transition hover:-translate-y-0.5 hover:border-ink dark:border-white/15 dark:bg-slate-900 dark:text-white dark:hover:border-white"
            target="_blank"
            rel="noreferrer"
            href="https://theswiish.substack.com/"
          >
            View all
          </a>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Post;
