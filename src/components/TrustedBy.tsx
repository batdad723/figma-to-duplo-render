const companies = [
  "Flutterwave",
  "Paystack",
  "Interswitch",
  "Kuda Bank",
  "Carbon",
  "Cowrywise",
];

const TrustedBy = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Trusted by leading companies
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {companies.map((company, index) => (
            <div
              key={index}
              className="text-2xl font-bold text-muted-foreground/40 hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
