import test1Img from "@assets/testimonial-1.jpg";
import test2Img from "@assets/testimonial-2.jpg";
import test3Img from "@assets/testimonial-3.jpg";

export default function Credibility() {
  const logos = [
    { name: "Apex Roofing", weight: "font-bold", size: "text-2xl", color: "text-white/60", prefix: "" },
    { name: "Elite HVAC", weight: "font-black", size: "text-xl", color: "text-white/40", prefix: "// " },
    { name: "Precision Flow", weight: "font-medium", size: "text-2xl", color: "text-[#765EFF]/50", prefix: "● " },
    { name: "Summit Landscapes", weight: "font-semibold", size: "text-xl", color: "text-white/50", prefix: "" },
    { name: "Vanguard Build", weight: "font-extrabold", size: "text-2xl", color: "text-white/40", prefix: "" },
    { name: "Beacon Electric", weight: "font-bold", size: "text-xl", color: "text-[#765EFF]/60", prefix: "⚡ " },
    { name: "Titan Contracting", weight: "font-black", size: "text-2xl", color: "text-white/50", prefix: "" },
    { name: "Oasis Pools", weight: "font-medium", size: "text-xl", color: "text-white/40", prefix: "~ " }
  ];

  const owners = [
    { name: "James Mitchell", company: "Apex Roofing", img: test1Img },
    { name: "Sarah Jenkins", company: "Climate Masters", img: test2Img },
    { name: "David Chen", company: "Precision Flow", img: test3Img }
  ];

  return (
    <section className="py-20 border-t border-white/5 bg-[#0A0A0A]" data-testid="section-credibility">
      <div className="container mx-auto px-4">
        <p className="text-sm text-[#666] text-center mb-10">
          You're in good hands:
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto mb-14 text-center items-center">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center justify-center">
              <span className={`font-display tracking-tight ${logo.weight} ${logo.size} ${logo.color} uppercase`}>
                {logo.prefix}{logo.name}
              </span>
            </div>
          ))}
        </div>
        
        <p className="text-sm text-[#666] text-center mt-8 mb-6">
          And these amazing business owners too:
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {owners.map((owner, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <img 
                src={owner.img} 
                alt={owner.name} 
                className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
              />
              <div className="text-center">
                <div className="text-white text-sm font-medium">{owner.name}</div>
                <div className="text-[#666] text-xs">{owner.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
