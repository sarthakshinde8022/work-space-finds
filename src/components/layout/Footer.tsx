import { Compass } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 inline-flex">
              <Compass className="h-6 w-6 text-primary" />
              <span className="font-serif font-semibold text-xl">Workspace Finds</span>
            </Link>
            <p className="text-secondary-foreground/70 max-w-sm mb-6">
              A curated gallery of premium products for the modern office and home workspace. Discover tools that elevate your craft.
            </p>
            <p className="text-xs text-secondary-foreground/50 max-w-sm">
              As an Amazon Associate we earn from qualifying purchases. We only recommend products we truly believe in and would use in our own setups.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-primary">Categories</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">Mechanical Keyboards</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ergonomic Mice</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ambient Lighting</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Desk Mats</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Monitor Arms</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-primary">Connect</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pinterest</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Newsletter</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-secondary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary-foreground/50">
          <p>© {new Date().getFullYear()} Workspace Finds. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-secondary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
