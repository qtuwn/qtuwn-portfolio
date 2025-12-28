export default function ProjectsLoading() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="mb-12">
          <div className="h-10 w-40 bg-foreground/10 rounded-lg animate-pulse" />
          <div className="mt-4 h-6 w-80 bg-foreground/5 rounded animate-pulse" />
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <article
              key={i}
              className="rounded-xl border border-foreground/10 p-6"
            >
              <div className="h-6 w-40 bg-foreground/10 rounded animate-pulse" />
              <div className="mt-3 space-y-2">
                <div className="h-4 w-full bg-foreground/5 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-foreground/5 rounded animate-pulse" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {[1, 2, 3].map((j) => (
                  <div
                    key={j}
                    className="h-6 w-16 bg-foreground/5 rounded-full animate-pulse"
                  />
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <div className="h-9 w-20 bg-foreground/5 rounded-lg animate-pulse" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
