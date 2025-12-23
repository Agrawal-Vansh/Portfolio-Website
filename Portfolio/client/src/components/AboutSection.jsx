import React, { useEffect, useRef, useState } from "react";

const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

const AboutSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const wandRef = useRef(null);
  const cardRef= useRef(null); 
  const [active, setActive] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const posRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  const [proximity, setProximity] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onMove = (e) => setCursor({ x: e.clientX, y: e.clientY });
    const onEnter = () => setActive(true);
    const onLeave = () => setActive(false);

    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerenter", onEnter);
    section.addEventListener("pointerleave", onLeave);

    return () => {
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerenter", onEnter);
      section.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      if (!active) {
        if (wandRef.current) wandRef.current.style.opacity = 0;
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      const wand = wandRef.current;
      const img = imageRef.current;

      posRef.current.x = lerp(posRef.current.x, cursor.x, 0.2);
      posRef.current.y = lerp(posRef.current.y, cursor.y, 0.2);

      if (wand) {
        wand.style.opacity = 1;
        wand.style.transform = `
          translate(${posRef.current.x}px, ${posRef.current.y}px)
        `;
      }

      if (img) {
        const rect = img.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const dx = cx - posRef.current.x;
        const dy = cy - posRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const maxDist = rect.width * 0.9;
        const strength = clamp(1 - dist / maxDist, 0, 1);
        setProximity(strength);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    const card = cardRef.current;

if (card) {
  const rect = card.getBoundingClientRect();
  const dx = posRef.current.x - (rect.left + rect.width / 2);
  const dy = posRef.current.y - (rect.top + rect.height / 2);
  const dist = Math.sqrt(dx * dx + dy * dy);

  const glow = clamp(1 - dist / 420, 0, 1);

  card.style.boxShadow = `
  0 0 ${8 + glow * 18}px rgba(20,184,166,${0.35 + glow * 0.45}),
  0 0 ${20 + glow * 40}px rgba(20,184,166,${0.25 + glow * 0.35}),
  inset 0 0 0 1px rgba(20,184,166,${0.3 + glow * 0.5})
`;

}

    return () => cancelAnimationFrame(rafRef.current);
    
  }, [cursor, active]);


  const overlayOpacity = clamp(proximity * 1.2, 0, 1);
  const overlayBlur = lerp(14, 0, clamp(proximity * 1.1, 0, 1));
  const baseDim = lerp(1, 0.9, proximity);

  return (
    <section
      ref={sectionRef}
      id="about"
      className=" py-28"
    >

      <div
        ref={wandRef}
        className="pointer-events-none fixed z-40"
        style={{
          left: 0,
          top: 0,
          opacity: 0,
          transition: "opacity 200ms ease",
        }}
      >
        <div
          style={{
            width: 22,
            height: 220,
            borderRadius: 14,
            background:
              "linear-gradient(180deg,#111 0%, #2a2a2a 40%, #0a0a0a 100%)",
            boxShadow: "0 10px 30px rgba(0,0,0,.6)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              marginTop: -16,
              background: "linear-gradient(#fff,#ddd)",
              boxShadow: "0 0 20px rgba(255,255,255,.6)",
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 items-center px-6 ">
       <div className="md:col-span-7 flex">
  <div
    ref={cardRef}
    className="
      relative w-full
      px-8 py-10
      rounded-3xl

      border border-teal-400/30
      backdrop-blur-sm

      text-gray-700 dark:text-gray-300
      transition-shadow duration-300
    "
  >
    <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6 text-gray-900 dark:text-white">
      About Me
    </h2>

    <div className="space-y-5 max-w-2xl">
      <p>
        Hi! I’m <span className="text-teal-500 font-medium">Vansh Agrawal</span>, a
        B.Tech student in Information Technology at the
        <span className="text-gray-900 dark:text-gray-200 font-medium">
          {" "}National Institute of Technology, Kurukshetra
        </span>.
        I’m passionate about software development, problem-solving, and building
        clean, impactful digital experiences.
      </p>

      <p>
        I was a
        <span className="text-teal-400 font-medium">
          {" "}Finalist in Salesforce’s Futureforce AI Challenge
        </span>,
        placing among the top 60 finalists. The experience gave me valuable
        exposure to AI-driven problem solving, system thinking, and collaborating
        in a competitive environment.
      </p>

      <p>
        I’ve also participated in hackathons such as
        <span className="text-gray-900 dark:text-gray-200 font-medium">
          {" "}Smart India Hackathon, Flipkart Grid, and Excalibur
        </span>,
        which helped strengthen my teamwork, adaptability, and real-world
        problem-solving skills.
      </p>

      <p>
        I enjoy competitive programming and hold a
        <span className="text-teal-400 font-medium">
          {" "}3★ rating on CodeChef
        </span>{" "}
        along with a
        <span className="text-teal-400 font-medium">
          {" "}Specialist rank on Codeforces
        </span>,
        reflecting my ongoing focus on algorithmic thinking and clean coding.
      </p>

      <p className="text-gray-800 dark:text-gray-200 font-medium">
        I’m always eager to learn new technologies and take on challenges that
        help me grow as a developer.
      </p>
    </div>
  </div>
</div>


        {/* Image */}
        <div className="md:col-span-5">
          <div
            ref={imageRef}
            className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl"
          >
            {/* Profile 1 – clear initially */}
            <img
              src="/images/profile1.jpg"
              alt="Profile 1"
              className="w-full h-auto"
              style={{
                filter: `brightness(${baseDim})`,
                transition: "filter 200ms ease",
              }}
            />

            {/* Profile 2 – blur → fully clear */}
            <img
              src="/images/profile2.jpg"
              alt="Profile 2"
              className="absolute inset-0 w-full h-90 object-fit"
              style={{
                opacity: overlayOpacity,
                filter: `blur(${overlayBlur}px) contrast(${lerp(
                  0.95,
                  1.05,
                  proximity
                )})`,
                transition: "opacity 120ms linear, filter 120ms linear",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
