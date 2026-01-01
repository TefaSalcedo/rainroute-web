import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-primary">
          RainRoute
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Tu compañero inteligente para evitar la lluvia. Planifica tus rutas,
          recibe alertas en tiempo real y llega seco a tu destino.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-4">
          <Link
            href="/dashboard"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Comenzar Ahora
          </Link>
          <Link
            href="/login"
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          >
            Iniciar Sesión
          </Link>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center mt-16 text-muted-foreground">
        <p>© 2025 RainRoute Web. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
