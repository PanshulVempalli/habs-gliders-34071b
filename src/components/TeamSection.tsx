import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const members = [
  {
    name: "Kayan Shah",
    role: "Lead Programmer & Strategy",
    desc: "Led a VEX IQ team in Year 8, strong coder taking CS IGCSE early. Also leads the HABS PowerStrike Greenpower team.",
  },
  {
    name: "Panshul Vempalli",
    role: "Notebook Lead & Programmer",
    desc: "First year in VEX with strengths in Python coding and technical writing. Also competed in Greenpower alongside Kayan.",
  },
  {
    name: "Asha Patel Davis",
    role: "Builder & Designer",
    desc: "Three years of VEX experience (Years 7–9), bringing deep knowledge of robot construction and competition dynamics.",
  },
  {
    name: "Tasnim Magamedova",
    role: "Mechanical Design",
    desc: "Key contributor to drivetrain engineering, design cycle documentation, and mechanical testing protocols.",
  },
  {
    name: "Asha R",
    role: "Builder & Designer",
    desc: "Contributes to structural design, robot assembly, and design board creation for competitions.",
  },
  {
    name: "Joshua",
    role: "Builder & Strategy",
    desc: "Supports mechanical builds, strategic planning, and competition-day preparation.",
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="team" className="py-24 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl text-primary text-center mb-4"
        >
          MEET THE TEAM
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground text-center mb-16 max-w-xl mx-auto"
        >
          A mixed Year 10 team from Haberdashers' Boys' and Girls' School — united by a passion for robotics.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="bg-card border-gradient-gold rounded-lg p-6 hover:glow-gold transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                <span className="font-display text-gold text-lg">
                  {m.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <h3 className="font-display text-lg text-primary">{m.name}</h3>
              <p className="text-gold text-xs uppercase tracking-wider mb-3">{m.role}</p>
              <p className="text-foreground/60 text-sm leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
