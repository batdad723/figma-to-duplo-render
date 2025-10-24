import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const BlogCards = () => {
  const posts = [
    {
      category: "Case Study",
      title: "How Nubank refactors millions of lines of code with Devin",
      excerpt: "8x engineering time efficiency gain and 20x cost savings",
      date: "Jan 2025"
    },
    {
      category: "Product",
      title: "Introducing Devin's new collaborative features",
      excerpt: "Work alongside Devin with real-time feedback and suggestions",
      date: "Dec 2024"
    },
    {
      category: "Engineering",
      title: "The future of AI-assisted software development",
      excerpt: "Our vision for how AI will transform engineering teams",
      date: "Nov 2024"
    }
  ];

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                Latest insights
              </h2>
              <p className="text-lg text-muted-foreground">
                News, updates, and stories from the Devin team
              </p>
            </div>
            <a href="#blog" className="text-sm font-semibold text-primary hover:underline flex items-center gap-2">
              View all posts <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <Card 
                key={index}
                className="group cursor-pointer bg-card hover:bg-accent/50 transition-all duration-300 border-border overflow-hidden"
              >
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCards;
