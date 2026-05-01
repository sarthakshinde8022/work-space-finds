import { motion } from "framer-motion";
import { Pin } from "lucide-react";
import { Card } from "@/components/ui/card";

interface InspirationCardProps {
  setup: {
    id: string;
    title: string;
    creator: string;
    image: string;
    tags: string[];
    pinterestUrl: string;
  };
  index?: number;
}

export function InspirationCard({ setup, index = 0 }: InspirationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <a 
        href={setup.pinterestUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative rounded-xl overflow-hidden aspect-[3/4] bg-muted shadow-md group-hover:shadow-2xl transition-all duration-500"
      >
        <img
          src={setup.image}
          alt={setup.title}
          className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        <div className="absolute top-4 right-4 bg-red-600 text-white p-2 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
          <Pin className="w-5 h-5 fill-current" />
        </div>
        
        <div className="absolute bottom-0 left-0 p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white font-serif text-xl font-medium mb-1 drop-shadow-md">
            {setup.title}
          </h3>
          <p className="text-white/80 text-sm font-medium mb-3">by {setup.creator}</p>
          <div className="flex flex-wrap gap-2">
            {setup.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs px-2 py-1 rounded-md bg-white/20 backdrop-blur-md text-white border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </motion.div>
  );
}
