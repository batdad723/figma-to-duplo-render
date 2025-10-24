import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const BlogCards = () => {
  const posts = [
    {
      category: "DevOps",
      title: "Why Vendors Love Using Multi Cloud",
      excerpt: "Reducing cloud costs by 40% with intelligent resource optimization",
      date: "Jan 2025"
    },
    {
      category: "DevOps",
      title: "Why Vendors Love Using Multi Cloud",
      excerpt: "Automated incident response reduces MTTR by 75%",
      date: "Dec 2024"
    },
    {
      category: "DevOps",
      title: "Why Vendors Love Using Multi Cloud",
      excerpt: "From hours to minutes: AI-powered infrastructure deployment",
      date: "Nov 2024"
    },
    {
      category: "DevOps",
      title: "Why Vendors Love Using Multi Cloud",
      excerpt: "Ensuring compliance across multi-cloud environments",
      date: "Oct 2024"
    }
  ];

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                Ready to transform your
                <br />
                <span className="text-primary">DevOps workflow?</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Join teams already automating their infrastructure with AI
              </p>
            </div>
            <a href="#blog" className="text-sm font-semibold text-primary hover:underline flex items-center gap-2">
              View all posts <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
