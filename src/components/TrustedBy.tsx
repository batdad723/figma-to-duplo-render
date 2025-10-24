const TrustedBy = () => {
  const companies = [
    "Anthropic", "OpenAI", "Stripe", "Coinbase", "Databricks", "Replit"
  ];

  return (
    <section className="py-16 border-y border-border bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center space-y-8">
          <p className="text-sm text-muted-foreground uppercase tracking-wider">
            Trusted by leading engineering teams
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {companies.map((company) => (
              <div key={company} className="text-lg font-semibold text-muted-foreground/60">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
