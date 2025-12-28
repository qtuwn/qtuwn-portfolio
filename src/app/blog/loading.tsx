export default function BlogLoading() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <header className="mb-12">
          <div className="h-10 w-32 bg-foreground/10 rounded-lg animate-pulse" />
          <div className="mt-4 h-6 w-64 bg-foreground/5 rounded animate-pulse" />
        </header>

        <div className="space-y-10">
          {[1, 2, 3].map((i) => (
            <article key={i} className="border-b border-foreground/10 pb-10">
              <div className="h-4 w-24 bg-foreground/5 rounded animate-pulse" />
              <div className="mt-3 h-7 w-3/4 bg-foreground/10 rounded animate-pulse" />
              <div className="mt-4 space-y-2">
                <div className="h-4 w-full bg-foreground/5 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-foreground/5 rounded animate-pulse" />
              </div>
              <div className="mt-4 flex gap-2">
                {[1, 2, 3].map((j) => (
                  <div
                    key={j}
                    className="h-6 w-16 bg-foreground/5 rounded-full animate-pulse"
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
