import { Card } from "@/components/ui/card";

const integrations = [
  { name: "Slack", icon: "💬" },
  { name: "GitHub", icon: "🐙" },
  { name: "GitLab", icon: "🦊" },
  { name: "Jira", icon: "📊" },
  { name: "VS Code", icon: "💻" },
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "☸️" },
  { name: "AWS", icon: "☁️" }
];

const Integrations = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Integrate with your{" "}
            <span className="text-primary">favorite tools</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Seamlessly connect with the tools you already use and love
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {integrations.map((integration, index) => (
            <Card
              key={index}
              className="aspect-square flex flex-col items-center justify-center p-6 bg-card/50 border-border/50 hover:bg-card hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {integration.icon}
              </div>
              <span className="text-sm font-medium text-center group-hover:text-primary transition-colors">
                {integration.name}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
