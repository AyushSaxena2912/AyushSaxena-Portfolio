import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container flex flex-col items-center justify-center md:h-[65vh] h-[75vh] gap-5 text-center">
      <div className="flex flex-col items-center gap-2">
        <span className="text-6xl font-bold opacity-10">404</span>
        <h2 className="text-2xl font-bold">Page nahi mila!</h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs">
          Jo page dhundh rahe ho woh exist nahi karta ya move ho gaya.
        </p>
      </div>
      <Link
        href="/"
        className="px-5 py-2 rounded-lg bg-theme-black text-theme-white dark:bg-theme-white dark:text-theme-black text-sm font-semibold hover:opacity-80 transition-opacity duration-200"
      >
        Home pe jao
      </Link>
    </section>
  );
}
