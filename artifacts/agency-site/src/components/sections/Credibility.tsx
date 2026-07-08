export default function Credibility() {
  const logos = [
    "Apex Roofing", "Elite HVAC", "Precision Plumbing", "Summit Landscapes", 
    "Vanguard Remodeling", "Oasis Pools", "Beacon Electrical", "Titan Contracting"
  ];

  return (
    <section className="py-12 border-y border-border bg-card/50 overflow-hidden" data-testid="section-credibility">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Scaling the best in the trades
        </p>
      </div>
      
      <div className="relative flex w-full max-w-full overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        
        {/* Right fade */}
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex items-center justify-center px-12 group cursor-default">
              <span className="text-2xl font-display font-semibold text-muted-foreground/60 uppercase tracking-wider transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#2563EB] group-hover:to-[#10B981]">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
