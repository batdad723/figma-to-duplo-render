import { Card } from "@/components/ui/card";
import { Shield, Lock, FileCheck, Award } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and security protocols to keep your data safe"
  },
  {
    icon: Lock,
    title: "SOC 2 Compliant",
    description: "Fully compliant with industry-leading security standards"
  },
  {
    icon: FileCheck,
    title: "GDPR Ready",
    description: "Built with privacy and data protection at its core"
  },
  {
    icon: Award,
    title: "ISO Certified",
    description: "Certified to meet international security standards"
  }
];

const SecurityCompliance = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Security & <span className="text-primary">Compliance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your security is our top priority. We're committed to protecting your data and meeting the highest standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center bg-card/50 border-border/50 hover:bg-card hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;
