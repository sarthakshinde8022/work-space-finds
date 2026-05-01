import { Link } from "wouter";
import { Compass } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <Compass className="h-6 w-6 text-primary" />
          <span className="font-serif font-semibold text-xl tracking-tight">Workspace Finds</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#picks" className="text-muted-foreground hover:text-foreground transition-colors">Top Picks</a>
          <a href="#setups" className="text-muted-foreground hover:text-foreground transition-colors">Inspiration</a>
          <a href="#categories" className="text-muted-foreground hover:text-foreground transition-colors">Categories</a>
        </nav>
        <div>
          <a 
            href="#newsletter" 
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
          >
            Join Newsletter
          </a>
        </div>
      </div>
    </header>
  );
}
