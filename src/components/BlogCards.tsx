import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    category: "Product Update",
    title: "Introducing Duplo 2.0: Faster, Smarter, Better",
    excerpt: "We're excited to announce the biggest update to Duplo yet, with improved AI capabilities and new integrations.",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80"
  },
  {
    category: "Case Study",
    title: "How Acme Corp Reduced Deploy Time by 80%",
    excerpt: "Learn how Acme Corporation transformed their DevOps workflow and achieved remarkable efficiency gains.",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
  },
  {
    category: "Tutorial",
    title: "Getting Started with AI-Powered Infrastructure",
    excerpt: "A comprehensive guide to setting up your first AI DevOps agent with Duplo in under 10 minutes.",
    date: "Dec 5, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format&fit=crop&q=80"
  }
];

const BlogCards = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Latest from our <span className="text-primary">blog</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Stay updated with the latest news, tutorials, and insights
            </p>
          </div>
          <Button variant="ghost" className="hidden lg:inline-flex text-primary hover:text-primary">
            View all posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 lg:hidden">
          <Button variant="ghost" className="text-primary hover:text-primary">
            View all posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogCards;
