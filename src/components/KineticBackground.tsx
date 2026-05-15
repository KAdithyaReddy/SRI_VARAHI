import React, { useEffect, useRef } from 'react';

const KineticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Neural network nodes
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      connections: number[];
      energy: number;
    }> = [];

    // Create nodes
    const nodeCount = Math.floor((canvas.width * canvas.height) / 12000);
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 3 + 1,
        connections: [],
        energy: Math.random()
      });
    }

    // Create connections
    nodes.forEach((node, i) => {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = node.x - nodes[j].x;
        const dy = node.y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120 && Math.random() > 0.7) {
          node.connections.push(j);
        }
      }
    });

    let animationId: number;
    let time = 0;

    // Animation loop
    const animate = () => {
      time += 0.01;
      
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Mouse interaction
        const mouseDistance = Math.sqrt(
          Math.pow(node.x - mouseRef.current.x, 2) + 
          Math.pow(node.y - mouseRef.current.y, 2)
        );
        
        if (mouseDistance < 150) {
          const force = (150 - mouseDistance) / 150;
          const angle = Math.atan2(node.y - mouseRef.current.y, node.x - mouseRef.current.x);
          node.vx += Math.cos(angle) * force * 0.02;
          node.vy += Math.sin(angle) * force * 0.02;
          node.energy = Math.min(1, node.energy + force * 0.1);
        }

        // Boundary check with smooth bounce
        if (node.x < 0 || node.x > canvas.width) {
          node.vx *= -0.8;
          node.x = Math.max(0, Math.min(canvas.width, node.x));
        }
        if (node.y < 0 || node.y > canvas.height) {
          node.vy *= -0.8;
          node.y = Math.max(0, Math.min(canvas.height, node.y));
        }

        // Apply friction
        node.vx *= 0.99;
        node.vy *= 0.99;

        // Energy decay
        node.energy *= 0.98;

        // Draw node with energy-based glow
        const alpha = 0.4 + node.energy * 0.6;
        const size = node.size * (1 + node.energy * 0.5);
        
        // Outer glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, size * 3);
        gradient.addColorStop(0, `rgba(0, 191, 255, ${alpha * 0.8})`);
        gradient.addColorStop(0.5, `rgba(0, 191, 255, ${alpha * 0.3})`);
        gradient.addColorStop(1, 'rgba(0, 191, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core node
        ctx.fillStyle = `rgba(0, 191, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections with energy flow
      nodes.forEach((node, i) => {
        node.connections.forEach(connectionIndex => {
          const connectedNode = nodes[connectionIndex];
          if (!connectedNode) return;

          const dx = connectedNode.x - node.x;
          const dy = connectedNode.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            const alpha = Math.max(0.1, (200 - distance) / 200 * 0.4);
            const energyFlow = (node.energy + connectedNode.energy) / 2;
            
            // Create gradient for energy flow
            const gradient = ctx.createLinearGradient(node.x, node.y, connectedNode.x, connectedNode.y);
            gradient.addColorStop(0, `rgba(0, 191, 255, ${alpha * (1 + energyFlow)})`);
            gradient.addColorStop(0.5, `rgba(100, 200, 255, ${alpha * 0.5})`);
            gradient.addColorStop(1, `rgba(0, 191, 255, ${alpha * (1 + energyFlow)})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1 + energyFlow * 2;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(connectedNode.x, connectedNode.y);
            ctx.stroke();

            // Animated energy particles
            if (energyFlow > 0.3 && Math.random() > 0.95) {
              const progress = (time * 2) % 1;
              const particleX = node.x + dx * progress;
              const particleY = node.y + dy * progress;
              
              ctx.fillStyle = `rgba(255, 255, 255, ${energyFlow})`;
              ctx.beginPath();
              ctx.arc(particleX, particleY, 2, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        });
      });

      // Add floating data streams
      for (let i = 0; i < 3; i++) {
        const streamX = (time * 50 + i * canvas.width / 3) % (canvas.width + 100) - 50;
        const streamY = canvas.height * 0.2 + Math.sin(time * 2 + i) * 50;
        
        ctx.strokeStyle = `rgba(0, 191, 255, ${0.1 + Math.sin(time * 3 + i) * 0.1})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(streamX, streamY);
        ctx.lineTo(streamX + 30, streamY);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)',
      }}
    />
  );
};

export default KineticBackground;