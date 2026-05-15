import React, { useEffect, useRef } from 'react';

const PremiumBackground: React.FC = () => {
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

    // Premium neural network with quantum effects
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      energy: number;
      pulsePhase: number;
      connections: number[];
      type: 'core' | 'satellite' | 'quantum';
    }> = [];

    // Create hierarchical node system
    const nodeCount = Math.floor((canvas.width * canvas.height) / 8000);
    
    // Core nodes (larger, more connected)
    for (let i = 0; i < Math.floor(nodeCount * 0.2); i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 4 + 3,
        energy: Math.random() * 0.8 + 0.2,
        pulsePhase: Math.random() * Math.PI * 2,
        connections: [],
        type: 'core'
      });
    }

    // Satellite nodes (medium)
    for (let i = 0; i < Math.floor(nodeCount * 0.5); i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 2,
        energy: Math.random() * 0.6 + 0.1,
        pulsePhase: Math.random() * Math.PI * 2,
        connections: [],
        type: 'satellite'
      });
    }

    // Quantum nodes (small, fast)
    for (let i = 0; i < Math.floor(nodeCount * 0.3); i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 1.5 + 0.5,
        energy: Math.random() * 0.4 + 0.1,
        pulsePhase: Math.random() * Math.PI * 2,
        connections: [],
        type: 'quantum'
      });
    }

    // Create intelligent connections
    nodes.forEach((node, i) => {
      const maxConnections = node.type === 'core' ? 8 : node.type === 'satellite' ? 4 : 2;
      let connectionCount = 0;
      
      for (let j = i + 1; j < nodes.length && connectionCount < maxConnections; j++) {
        const other = nodes[j];
        const dx = node.x - other.x;
        const dy = node.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        const maxDistance = node.type === 'core' ? 200 : node.type === 'satellite' ? 120 : 80;
        
        if (distance < maxDistance && Math.random() > 0.6) {
          node.connections.push(j);
          connectionCount++;
        }
      }
    });

    let animationId: number;
    let time = 0;

    // Animation loop
    const animate = () => {
      time += 0.008;
      
      // Create premium gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#ffffff');
      gradient.addColorStop(0.3, '#f8fafc');
      gradient.addColorStop(0.7, '#f1f5f9');
      gradient.addColorStop(1, '#ffffff');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add subtle overlay pattern
      ctx.fillStyle = 'rgba(0, 191, 255, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position with smooth movement
        node.x += node.vx;
        node.y += node.vy;

        // Advanced mouse interaction with field effect
        const mouseDistance = Math.sqrt(
          Math.pow(node.x - mouseRef.current.x, 2) + 
          Math.pow(node.y - mouseRef.current.y, 2)
        );
        
        if (mouseDistance < 200) {
          const force = (200 - mouseDistance) / 200;
          const angle = Math.atan2(node.y - mouseRef.current.y, node.x - mouseRef.current.x);
          
          // Attraction for core nodes, repulsion for quantum nodes
          const multiplier = node.type === 'core' ? -0.015 : node.type === 'satellite' ? 0.005 : 0.025;
          
          node.vx += Math.cos(angle) * force * multiplier;
          node.vy += Math.sin(angle) * force * multiplier;
          node.energy = Math.min(1, node.energy + force * 0.2);
        }

        // Boundary physics with elastic collision
        if (node.x < 0 || node.x > canvas.width) {
          node.vx *= -0.7;
          node.x = Math.max(0, Math.min(canvas.width, node.x));
        }
        if (node.y < 0 || node.y > canvas.height) {
          node.vy *= -0.7;
          node.y = Math.max(0, Math.min(canvas.height, node.y));
        }

        // Apply sophisticated physics
        node.vx *= 0.995;
        node.vy *= 0.995;
        node.energy *= 0.99;
        node.pulsePhase += 0.05 + node.energy * 0.1;

        // Draw node with advanced effects
        const pulse = Math.sin(node.pulsePhase) * 0.3 + 0.7;
        const alpha = (0.3 + node.energy * 0.7) * pulse;
        const size = node.size * (0.8 + node.energy * 0.4) * pulse;
        
        // Quantum glow effect
        if (node.type === 'core') {
          const glowGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, size * 4);
          glowGradient.addColorStop(0, `rgba(0, 191, 255, ${alpha * 0.8})`);
          glowGradient.addColorStop(0.3, `rgba(0, 191, 255, ${alpha * 0.4})`);
          glowGradient.addColorStop(0.6, `rgba(100, 200, 255, ${alpha * 0.2})`);
          glowGradient.addColorStop(1, 'rgba(0, 191, 255, 0)');
          
          ctx.fillStyle = glowGradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, size * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        // Core node
        const nodeGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, size);
        if (node.type === 'core') {
          nodeGradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
          nodeGradient.addColorStop(0.7, `rgba(0, 191, 255, ${alpha * 0.8})`);
          nodeGradient.addColorStop(1, `rgba(0, 191, 255, ${alpha * 0.3})`);
        } else if (node.type === 'satellite') {
          nodeGradient.addColorStop(0, `rgba(0, 191, 255, ${alpha * 0.9})`);
          nodeGradient.addColorStop(1, `rgba(0, 191, 255, ${alpha * 0.2})`);
        } else {
          nodeGradient.addColorStop(0, `rgba(100, 200, 255, ${alpha * 0.7})`);
          nodeGradient.addColorStop(1, `rgba(100, 200, 255, 0)`);
        }
        
        ctx.fillStyle = nodeGradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Quantum ring effect for core nodes
        if (node.type === 'core' && node.energy > 0.5) {
          ctx.strokeStyle = `rgba(0, 191, 255, ${alpha * 0.6})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(node.x, node.y, size * 2, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      // Draw premium connections with energy flow
      nodes.forEach((node, i) => {
        node.connections.forEach(connectionIndex => {
          const connectedNode = nodes[connectionIndex];
          if (!connectedNode) return;

          const dx = connectedNode.x - node.x;
          const dy = connectedNode.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 300) {
            const energyFlow = (node.energy + connectedNode.energy) / 2;
            const alpha = Math.max(0.05, (300 - distance) / 300 * 0.3 * energyFlow);
            
            // Create sophisticated connection gradient
            const connectionGradient = ctx.createLinearGradient(node.x, node.y, connectedNode.x, connectedNode.y);
            connectionGradient.addColorStop(0, `rgba(0, 191, 255, ${alpha})`);
            connectionGradient.addColorStop(0.5, `rgba(100, 200, 255, ${alpha * 0.6})`);
            connectionGradient.addColorStop(1, `rgba(0, 191, 255, ${alpha})`);
            
            ctx.strokeStyle = connectionGradient;
            ctx.lineWidth = 0.5 + energyFlow * 1.5;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(connectedNode.x, connectedNode.y);
            ctx.stroke();

            // Data packet animation
            if (energyFlow > 0.4 && Math.random() > 0.98) {
              const progress = (time * 3) % 1;
              const packetX = node.x + dx * progress;
              const packetY = node.y + dy * progress;
              
              const packetGradient = ctx.createRadialGradient(packetX, packetY, 0, packetX, packetY, 3);
              packetGradient.addColorStop(0, `rgba(255, 255, 255, ${energyFlow})`);
              packetGradient.addColorStop(0.5, `rgba(0, 191, 255, ${energyFlow * 0.8})`);
              packetGradient.addColorStop(1, 'rgba(0, 191, 255, 0)');
              
              ctx.fillStyle = packetGradient;
              ctx.beginPath();
              ctx.arc(packetX, packetY, 2, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        });
      });

      // Add floating holographic elements
      for (let i = 0; i < 5; i++) {
        const x = (time * 30 + i * canvas.width / 5) % (canvas.width + 100) - 50;
        const y = canvas.height * 0.1 + Math.sin(time * 2 + i) * 30;
        const alpha = 0.1 + Math.sin(time * 4 + i) * 0.05;
        
        ctx.strokeStyle = `rgba(0, 191, 255, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 40, y);
        ctx.moveTo(x + 10, y - 5);
        ctx.lineTo(x + 30, y + 5);
        ctx.stroke();
      }

      // Add quantum field distortion effect
      for (let ring = 0; ring < 3; ring++) {
        const centerX = canvas.width / 2 + Math.sin(time + ring) * 100;
        const centerY = canvas.height / 2 + Math.cos(time + ring) * 50;
        const fieldRadius = 80 + Math.sin(time * 2 + ring) * 30;
        
        ctx.strokeStyle = `rgba(0, 191, 255, ${0.03 + Math.sin(time * 3 + ring) * 0.02})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.arc(centerX, centerY, fieldRadius, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Add matrix-style falling code effect
      for (let i = 0; i < 5; i++) {
        const x = (time * 100 + i * canvas.width / 5) % (canvas.width + 50) - 25;
        const chars = ['0', '1', '{', '}', '<', '>', '/', '\\'];
        
        for (let j = 0; j < 8; j++) {
          const y = (time * 150 + j * 30) % (canvas.height + 100) - 50;
          const char = chars[Math.floor((time + i + j) * 10) % chars.length];
          const alpha = 0.05 + Math.sin(time * 5 + i + j) * 0.03;
          
          ctx.fillStyle = `rgba(0, 191, 255, ${alpha})`;
          ctx.font = '12px monospace';
          ctx.fillText(char, x, y);
        }
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
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 30%, #f1f5f9 70%, #ffffff 100%)',
      }}
    />
  );
};

export default PremiumBackground;