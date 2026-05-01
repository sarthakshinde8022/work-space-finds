import { motion } from "framer-motion";
import { Star, ExternalLink, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    brand: string;
    price: string;
    rating: number;
    reviews: number;
    image: string;
    category: string;
    isTopPick?: boolean;
    amazonUrl: string;
  };
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden group h-full flex flex-col border-border/50 bg-card hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          {product.isTopPick && (
            <div className="absolute top-3 left-3 z-10">
              <Badge className="bg-primary text-primary-foreground font-medium shadow-sm">
                Curator's Pick
              </Badge>
            </div>
          )}
          <img
            src={product.image}
            alt={product.title}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        </div>
        
        <CardContent className="p-5 flex-1 flex flex-col">
          <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-2">
            {product.brand}
          </div>
          <h3 className="font-serif text-lg font-medium leading-tight mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {product.title}
          </h3>
          <div className="mt-auto flex items-center justify-between">
            <span className="font-semibold text-lg">{product.price}</span>
            <div className="flex items-center gap-1 text-sm">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-medium">{product.rating}</span>
              <span className="text-muted-foreground">({product.reviews})</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-5 pt-0">
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground py-2.5 rounded-md font-medium transition-colors duration-300"
          >
            <ShoppingCart className="w-4 h-4" />
            Buy on Amazon
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
