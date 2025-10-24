import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  Products: ["Expense Management", "Global Payments", "Business Cards", "Invoicing"],
  Company: ["About Us", "Careers", "Blog", "Contact"],
  Resources: ["Documentation", "API Reference", "Help Center", "Community"],
  Legal: ["Privacy Policy", "Terms of Service", "Security", "Compliance"],
};

const socialLinks = [
  { icon: Twitter, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Duplo
            </h3>
            <p className="text-background/70 mb-6 max-w-sm">
              Simplifying financial management for modern businesses with powerful tools and seamless integrations.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                    aria-label="Social media link"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-background/70 hover:text-background transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-background/10 text-center text-background/70">
          <p>© 2024 Duplo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
