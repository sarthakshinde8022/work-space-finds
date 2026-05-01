import { useState } from "react";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/ui/product-card";
import { InspirationCard } from "@/components/ui/inspiration-card";
import { ArrowRight, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import heroImg from "@/assets/images/hero-desk.png";
import macImg from "@/assets/images/setup-mac.png";
import naturalImg from "@/assets/images/setup-natural.png";
import devImg from "@/assets/images/setup-dev.png";
import kbImg from "@/assets/images/product-keyboard.png";
import mouseImg from "@/assets/images/product-mouse.png";
import matImg from "@/assets/images/product-mat.png";
import lightImg from "@/assets/images/product-light.png";
import standImg from "@/assets/images/product-stand.png";
import chairImg from "@/assets/images/product-chair.png";

const PRODUCTS = [
  {
    id: "p1",
    title: "NuPhy Halo75 V2 Wireless Mechanical Keyboard",
    brand: "NuPhy",
    price: "$139.99",
    rating: 4.8,
    reviews: 1245,
    image: kbImg,
    category: "Keyboards",
    isTopPick: true,
    amazonUrl: "https://amzn.to/4n0TQyY",
  },
  {
    id: "p2",
    title: "Logitech MX Master 3S Advanced Wireless Mouse",
    brand: "Logitech",
    price: "$99.99",
    rating: 4.9,
    reviews: 38290,
    image: mouseImg,
    category: "Mice",
    amazonUrl: "https://amzn.to/4cSodTx",
  },
  {
    id: "p3",
    title: "Grovemade Matte Desk Pad - Premium Natural Linoleum",
    brand: "Grovemade",
    price: "$50.00",
    rating: 4.7,
    reviews: 892,
    image: matImg,
    category: "Desk Mats",
    isTopPick: true,
    amazonUrl: "https://amzn.to/42ycbK1",
  },
  {
    id: "p4",
    title: "BenQ ScreenBar Halo LED Monitor Light",
    brand: "BenQ",
    price: "$169.00",
    rating: 4.8,
    reviews: 4120,
    image: lightImg,
    category: "Lighting",
    amazonUrl: "https://amzn.to/4ujWn9P",
  },
  {
    id: "p5",
    title: "Walnut Wood Monitor Stand Riser with Aluminum Legs",
    brand: "Oakywood",
    price: "$119.00",
    rating: 4.9,
    reviews: 640,
    image: standImg,
    category: "Accessories",
    amazonUrl: "https://amzn.to/48MBs75",
  },
  {
    id: "p6",
    title: "Herman Miller Aeron Ergonomic Office Chair",
    brand: "Herman Miller",
    price: "$1,270.00",
    rating: 4.7,
    reviews: 2310,
    image: chairImg,
    category: "Chairs",
    amazonUrl: "https://amzn.to/3OvejPD",
  },
];

const SETUPS = [
  {
    id: "s1",
    title: "The Minimalist Mac",
    creator: "oliver.designs",
    image: macImg,
    tags: ["Minimalist", "Apple", "Productivity"],
    pinterestUrl: "https://pinterest.com",
  },
  {
    id: "s2",
    title: "Natural Light Oasis",
    creator: "botanical.desk",
    image: naturalImg,
    tags: ["Cozy", "Plants", "Wood"],
    pinterestUrl: "https://pinterest.com",
  },
  {
    id: "s3",
    title: "Deep Focus Developer",
    creator: "code.aesthetic",
    image: devImg,
    tags: ["Dark Mode", "Ultrawide", "Coding"],
    pinterestUrl: "https://pinterest.com",
  },
];

const CATEGORIES = [
  "All",
  "Keyboards",
  "Mice",
  "Lighting",
  "Desk Mats",
  "Chairs",
  "Accessories",
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="flex-1 space-y-6 z-10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Curated Workspace Gallery
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-[1.1]">
              Elevate your <br className="hidden md:block" />
              <span className="text-primary italic">daily craft.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Discover hand-picked premium products for the modern office and
              home workspace. Because your environment shapes your output.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#picks"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
              >
                Shop Top Picks
              </a>
              <a
                href="#setups"
                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-base font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-all"
              >
                View Inspiration
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-[16/10]">
              <img
                src={heroImg}
                alt="Beautiful warm desk setup"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories & Products Section */}
      <section id="picks" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Curator's Picks
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                The absolute best tools across every category, selected for
                design, build quality, and daily utility.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-secondary text-secondary-foreground shadow-sm"
                      : "bg-background border border-border hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-muted-foreground text-lg">
                No products found in this category.
              </p>
              <Button
                variant="link"
                onClick={() => setActiveCategory("All")}
                className="mt-2"
              >
                Clear filter
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Inspiration Section */}
      <section
        id="setups"
        className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Setup Inspiration
            </h2>
            <p className="text-secondary-foreground/70 max-w-2xl text-lg">
              Steal these looks. Browse our favorite setups from creators around
              the world and find the vibe that matches your workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SETUPS.map((setup, idx) => (
              <InspirationCard key={setup.id} setup={setup} index={idx} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Explore the full board on Pinterest{" "}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section id="newsletter" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center p-12 md:p-16 rounded-3xl bg-accent/50 border border-accent">
            <Mail className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              The Weekly Desk
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Join 15,000+ workspace enthusiasts. Get one beautiful setup and
              one premium product recommendation delivered every Tuesday.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 bg-background border-border/50 focus-visible:ring-primary"
                required
              />
              <Button
                type="submit"
                className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
