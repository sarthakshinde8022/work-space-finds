import { Link } from "wouter";
import { Compass, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-background px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md"
      >
        <div className="inline-flex items-center justify-center p-4 bg-muted rounded-full mb-6">
          <Compass className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-5xl font-serif font-bold mb-4">404</h1>
        <h2 className="text-2xl font-medium mb-4 text-foreground/80">Page not found</h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Looks like you've wandered off the desk. The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button size="lg" className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
