import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   if (!canvas) return;

  //   const ctx = canvas.getContext('2d');
  //   if (!ctx) return;

  //   const isDarkTheme = () => {
  //     const root = document.documentElement;
  //     return (
  //       root.getAttribute('data-theme') === 'dark' ||
  //       root.classList.contains('dark')
  //     );
  //   };

  //   const resizeCanvas = () => {
  //     canvas.width = window.innerWidth;
  //     canvas.height = window.innerHeight;
  //   };

  //   const createParticles = () => {
  //     const count = Math.min(
  //       80,
  //       Math.floor((window.innerWidth * window.innerHeight) / 15000)
  //     );

  //     particlesRef.current = Array.from({ length: count }, () => ({
  //       x: Math.random() * canvas.width,
  //       y: Math.random() * canvas.height,
  //       vx: (Math.random() - 0.5) * 0.3,
  //       vy: (Math.random() - 0.5) * 0.3,
  //       size: Math.random() * 2.2 + 1,
  //       opacity: Math.random() * 0.35 + 0.35,
  //     }));
  //   };

  //   const drawParticles = () => {
  //     const darkMode = isDarkTheme();

  //     /* ===============================
  //        LIGHT MODE COLORED BACKGROUND
  //        =============================== */
  //     if (!darkMode) {
  //       const gradient = ctx.createLinearGradient(
  //         0,
  //         0,
  //         canvas.width,
  //         canvas.height
  //       );

  //       gradient.addColorStop(0, '#eef3ff'); // soft blue
  //       gradient.addColorStop(0.5, '#f3eefe'); // lavender tint
  //       gradient.addColorStop(1, '#f7f1ed'); // warm off-gray

  //       ctx.fillStyle = gradient;
  //       ctx.fillRect(0, 0, canvas.width, canvas.height);
  //     } else {
  //       ctx.clearRect(0, 0, canvas.width, canvas.height);
  //     }

  //     /* ===============================
  //        PARTICLE COLORS
  //        =============================== */
  //     const DOT = darkMode
  //       ? 'hsla(175, 85%, 32%, OP)'
  //       : 'hsla(220, 18%, 30%, OP)';

  //     const LINE = darkMode
  //       ? 'hsla(175, 85%, 32%, OP)'
  //       : 'hsla(220, 18%, 30%, OP)';

  //     const MOUSE = darkMode
  //       ? 'hsla(20, 90%, 45%, OP)'
  //       : 'hsla(220, 25%, 25%, OP)';

  //     particlesRef.current.forEach((p, i) => {
  //       p.x += p.vx;
  //       p.y += p.vy;

  //       if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
  //       if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

  //       // Dot
  //       ctx.beginPath();
  //       ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
  //       ctx.fillStyle = DOT.replace('OP', p.opacity);
  //       ctx.fill();

  //       // Lines
  //       particlesRef.current.slice(i + 1).forEach((o) => {
  //         const dx = p.x - o.x;
  //         const dy = p.y - o.y;
  //         const d = Math.sqrt(dx * dx + dy * dy);

  //         if (d < 150) {
  //           ctx.beginPath();
  //           ctx.moveTo(p.x, p.y);
  //           ctx.lineTo(o.x, o.y);
  //           ctx.strokeStyle = LINE.replace(
  //             'OP',
  //             (darkMode ? 0.9 : 0.18) * (1 - d / 150)
  //           );
  //           ctx.lineWidth = darkMode ? 0.7 : 0.6;
  //           ctx.stroke();
  //         }
  //       });

  //       // Mouse interaction
  //       const mx = p.x - mouseRef.current.x;
  //       const my = p.y - mouseRef.current.y;
  //       const md = Math.sqrt(mx * mx + my * my);

  //       if (md < 150) {
  //         ctx.beginPath();
  //         ctx.moveTo(p.x, p.y);
  //         ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
  //         ctx.strokeStyle = MOUSE.replace(
  //           'OP',
  //           (darkMode ? 0.35 : 0.25) * (1 - md / 150)
  //         );
  //         ctx.lineWidth = darkMode ? 1 : 0.8;
  //         ctx.stroke();
  //       }
  //     });

  //     animationRef.current = requestAnimationFrame(drawParticles);
  //   };

  //   const handleMouseMove = (e) => {
  //     mouseRef.current = { x: e.clientX, y: e.clientY };
  //   };

  //   resizeCanvas();
  //   createParticles();
  //   drawParticles();

  //   window.addEventListener('resize', resizeCanvas);
  //   window.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     if (animationRef.current) cancelAnimationFrame(animationRef.current);
  //     window.removeEventListener('resize', resizeCanvas);
  //     window.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const isDarkTheme = () => {
    const root = document.documentElement;
    return (
      root.getAttribute('data-theme') === 'dark' ||
      root.classList.contains('dark')
    );
  };

  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const createParticles = () => {
    const count = Math.min(
      90,
      Math.floor((window.innerWidth * window.innerHeight) / 14000)
    );

    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 2.6 + 1.4,
      opacity: Math.random() * 0.4 + 0.5,
    }));
  };

  const drawParticles = () => {
    const darkMode = isDarkTheme();

    /* ===============================
       BACKGROUND
       =============================== */
    if (!darkMode) {
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, '#eef3ff');
      gradient.addColorStop(0.5, '#f3eefe');
      gradient.addColorStop(1, '#f7f1ed');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    /* ===============================
       ADDITIVE GLOW BLENDING
       =============================== */
    ctx.globalCompositeOperation = darkMode ? 'lighter' : 'source-over';

    /* ===============================
       COLORS (BRIGHT)
       =============================== */
    const DOT = darkMode
      ? 'hsla(175, 60%, 35%, OP)'
      : 'hsla(268 ,100% ,63.5%, OP)';

    const LINE = darkMode
      ? 'hsla(175, 45%, 25%, OP)'
      : 'hsla(268 ,100% ,63.5%, OP)';

    const MOUSE = darkMode
      ? 'hsla(175, 65%, 25%, 0.5)'
      // : 'hsla(220, 30%, 30%, OP)';
      : 'hsla(268 ,100% ,33.5%, 0.5)';

    /* ===============================
       PARTICLES
       =============================== */
    particlesRef.current.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      // Dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = DOT.replace(
        'OP',
        p.opacity + (darkMode ? 0.15 : 0)
      );
      ctx.fill();

      // Lines between particles
      particlesRef.current.slice(i + 1).forEach((o) => {
        const dx = p.x - o.x;
        const dy = p.y - o.y;
        const d = Math.sqrt(dx * dx + dy * dy);

        if (d < 160) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(o.x, o.y);
          ctx.strokeStyle = LINE.replace(
            'OP',
            (darkMode ? 0.6 : 0.25) * (1 - d / 160)
          );
          ctx.lineWidth = darkMode ? 1.2 : 0.8;
          ctx.stroke();
        }
      });

      // Mouse interaction
      const mx = p.x - mouseRef.current.x;
      const my = p.y - mouseRef.current.y;
      const md = Math.sqrt(mx * mx + my * my);

      if (md < 160) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
        ctx.strokeStyle = MOUSE.replace(
          'OP',
          (darkMode ? 0.6 : 0.35) * (1 - md / 160)
        );
        ctx.lineWidth = darkMode ? 1.5 : 1;
        ctx.stroke();
      }
    });

    /* ===============================
       RESET BLENDING
       =============================== */
    ctx.globalCompositeOperation = 'source-over';

    animationRef.current = requestAnimationFrame(drawParticles);
  };

  const handleMouseMove = (e) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  };

  resizeCanvas();
  createParticles();
  drawParticles();

  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('mousemove', handleMouseMove);

  return () => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    window.removeEventListener('resize', resizeCanvas);
    window.removeEventListener('mousemove', handleMouseMove);
  };
}, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed dark:bg-black inset-0 pointer-events-none z-0 "
      style={{ opacity: 0.85 }}
    />
  );
};

export default ParticleBackground;
