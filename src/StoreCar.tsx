
const StoreCart = () => {




  
  return (
    <div className="min-h-screen bg-background">
      {/* ==========================================
          HEADER - Navegación
          ========================================== */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <svg
                  className="h-5 w-5 text-primary-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-foreground">AutoDrive</span>
            </a>

            {/* Navigation - Desktop */}
            <nav className="hidden items-center gap-6 md:flex">
              <a href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Inicio
              </a>
              <a href="#cars" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Catálogo
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Nosotros
              </a>
              <a href="#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Contacto
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                Vender mi carro
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden">
              <svg className="h-5 w-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ==========================================
          HERO - Sección principal
          ========================================== */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">Más de 500 carros disponibles</span>
            </div>

            {/* Title */}
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Encuentra tu <span className="text-primary">carro ideal</span> al mejor precio
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Explora nuestra amplia selección de vehículos nuevos y usados. 
              Calidad garantizada y financiamiento disponible.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#cars"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
              >
                Ver catálogo
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted sm:w-auto">
                Contáctanos
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div>
                <p className="text-3xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Carros en stock</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">1,200+</p>
                <p className="text-sm text-muted-foreground">Clientes felices</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">15</p>
                <p className="text-sm text-muted-foreground">Años de experiencia</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">98%</p>
                <p className="text-sm text-muted-foreground">Satisfacción</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          CATÁLOGO - Lista de carros
          ========================================== */}
      <section id="cars" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Título */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Nuestro Catálogo</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Explora nuestra selección de vehículos de alta calidad. 
              Encuentra el carro perfecto para ti.
            </p>
          </div>

          {/* Filtros */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Barra de búsqueda */}
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Buscar por marca o modelo..."
                className="w-full rounded-lg border border-border bg-input px-4 py-2 pl-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary md:w-72"
              />
            </div>

            {/* Filtro por marca */}
            <div className="flex flex-wrap gap-2">
              <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors">
                Todos
              </button>
              <button className="rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                Tesla
              </button>
              <button className="rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                Honda
              </button>
              <button className="rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                Ford
              </button>
              <button className="rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                Toyota
              </button>
              <button className="rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                BMW
              </button>
              <button className="rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                Audi
              </button>
            </div>
          </div>

          {/* Contador */}
          <p className="mb-6 text-sm text-muted-foreground">Mostrando 6 de 6 vehículos</p>

          {/* Grid de carros */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&auto=format&fit=crop&q=60"
                  alt="Tesla Model S"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 rounded-md bg-background/90 px-2 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                  2023
                </div>
              </div>

              <div className="p-4">
                <div className="mb-2">
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">Tesla</p>
                  <h3 className="text-lg font-semibold text-card-foreground">Model S</h3>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Electrico
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    Automatico
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    15,000 km
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-foreground">$89,990</p>
                  <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                    Ver detalles
                  </button>
                </div>
              </div>
            </article>

            <article className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1606611013016-969c19ba27bb?w=800&auto=format&fit=crop&q=60"
                  alt="Honda Civic"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 rounded-md bg-background/90 px-2 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                  2022
                </div>
              </div>

              <div className="p-4">
                <div className="mb-2">
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">Honda</p>
                  <h3 className="text-lg font-semibold text-card-foreground">Civic</h3>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Gasolina
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    Manual
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    25,000 km
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-foreground">$28,990</p>
                  <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                    Ver detalles
                  </button>
                </div>
              </div>
            </article>

            <article className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1584345604476-8ec5f82d718c?w=800&auto=format&fit=crop&q=60"
                  alt="Ford Mustang"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 rounded-md bg-background/90 px-2 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                  2023
                </div>
              </div>

              <div className="p-4">
                <div className="mb-2">
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">Ford</p>
                  <h3 className="text-lg font-semibold text-card-foreground">Mustang</h3>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Gasolina
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    Automatico
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    8,000 km
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-foreground">$55,990</p>
                  <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                    Ver detalles
                  </button>
                </div>
              </div>
            </article>

            <article className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=800&auto=format&fit=crop&q=60"
                  alt="Toyota Corolla"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 rounded-md bg-background/90 px-2 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                  2024
                </div>
              </div>

              <div className="p-4">
                <div className="mb-2">
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">Toyota</p>
                  <h3 className="text-lg font-semibold text-card-foreground">Corolla</h3>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Hibrido
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    Automatico
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    5,000 km
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-foreground">$32,500</p>
                  <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                    Ver detalles
                  </button>
                </div>
              </div>
            </article>

            <article className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&auto=format&fit=crop&q=60"
                  alt="BMW X5"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 rounded-md bg-background/90 px-2 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                  2023
                </div>
              </div>

              <div className="p-4">
                <div className="mb-2">
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">BMW</p>
                  <h3 className="text-lg font-semibold text-card-foreground">X5</h3>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Gasolina
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    Automatico
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    12,000 km
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-foreground">$75,000</p>
                  <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                    Ver detalles
                  </button>
                </div>
              </div>
            </article>

            <article className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&auto=format&fit=crop&q=60"
                  alt="Audi A4"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 rounded-md bg-background/90 px-2 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                  2022
                </div>
              </div>

              <div className="p-4">
                <div className="mb-2">
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">Audi</p>
                  <h3 className="text-lg font-semibold text-card-foreground">A4</h3>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Gasolina
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    Automatico
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    20,000 km
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-foreground">$48,500</p>
                  <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                    Ver detalles
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ==========================================
          FOOTER - Pie de página
          ========================================== */}
      <footer id="contact" className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Logo y descripción */}
            <div className="md:col-span-2">
              <a href="/" className="mb-4 flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                  <svg className="h-5 w-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-card-foreground">AutoDrive</span>
              </a>
              <p className="mb-4 max-w-sm text-sm text-muted-foreground">
                Tu destino confiable para encontrar el carro de tus sueños. 
                Ofrecemos los mejores vehículos con garantía y financiamiento.
              </p>
              {/* Redes sociales */}
              <div className="flex gap-4">
                <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Enlaces */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-card-foreground">Enlaces</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-sm text-muted-foreground hover:text-foreground">Inicio</a></li>
                <li><a href="#cars" className="text-sm text-muted-foreground hover:text-foreground">Catálogo</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Nosotros</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Financiamiento</a></li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-card-foreground">Contacto</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Calle Principal #123
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1 234 567 890
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@autodrive.com
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2026 AutoDrive. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default StoreCart;