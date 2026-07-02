"use client";

export default function Error({ error, reset }) {
  return (
    <section className="container flex flex-col items-center justify-center md:h-[65vh] h-[75vh] gap-5 text-center">
      <div className="flex flex-col items-center gap-2">
        <span className="text-5xl">⚠️</span>
        <h2 className="text-2xl font-bold">Kuch toh gadbad hai!</h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs">
          {error?.message || "Something went wrong. Please try again."}
        </p>
      </div>
      <button
        onClick={reset}
        className="px-5 py-2 rounded-lg bg-theme-black text-theme-white dark:bg-theme-white dark:text-theme-black text-sm font-semibold hover:opacity-80 transition-opacity duration-200"
      >
        Try Again
      </button>
    </section>
  );
}
