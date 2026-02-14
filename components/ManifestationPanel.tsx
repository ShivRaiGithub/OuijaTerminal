'use client';

import { useState, useEffect } from 'react';

interface ManifestationPanelProps {
  curseMeter: number;
  phase: number;
  userName: string;
  lastCommand: string;
}

interface Manifestation {
  id: string;
  type: 'whisper' | 'stretch' | 'name-drift' | 'mirror' | 'bleed' | 'ghost-prompt' | 'echo' | 'fragment';
  opacity: number;
  duration: number;
}

export default function ManifestationPanel({ curseMeter, phase, userName, lastCommand }: ManifestationPanelProps) {
  const [manifestations, setManifestations] = useState<Manifestation[]>([]);

  // Calculate manifestation frequency based on curse meter
  const getManifestationInterval = () => {
    if (curseMeter >= 75) return 2000; // Every 2s at hostile phase
    if (curseMeter >= 25) return 5000; // Every 5s at scary phase
    if (curseMeter >= 10) return 10000; // Every 10s at unsettling phase
    return 20000; // Every 20s at normal phase
  };

  const getManifestationOpacity = () => {
    if (curseMeter >= 75) return 0.6;
    if (curseMeter >= 25) return 0.4;
    if (curseMeter >= 10) return 0.2;
    return 0.1;
  };

  const getManifestationDuration = () => {
    if (curseMeter >= 75) return Math.random() * 1000 + 800; // 800-1800ms
    if (curseMeter >= 25) return Math.random() * 800 + 500; // 500-1300ms
    if (curseMeter >= 10) return Math.random() * 600 + 400; // 400-1000ms
    return Math.random() * 500 + 300; // 300-800ms
  };

  // Trigger manifestations
  useEffect(() => {
    if (curseMeter < 10) return; // No manifestations below 10%

    const interval = setInterval(() => {
      // Random chance to spawn manifestation (higher curse = higher chance)
      const spawnChance = curseMeter / 150; // Adjusted to prevent too many
      if (Math.random() < spawnChance) {
        const types: Manifestation['type'][] = ['whisper', 'stretch', 'name-drift', 'mirror', 'bleed', 'ghost-prompt', 'echo', 'fragment'];
        const type = types[Math.floor(Math.random() * types.length)];
        
        const manifestation: Manifestation = {
          id: `${Date.now()}-${Math.random()}`,
          type,
          opacity: getManifestationOpacity(),
          duration: getManifestationDuration(),
        };

        setManifestations(prev => [...prev, manifestation]);

        // Remove after duration
        setTimeout(() => {
          setManifestations(prev => prev.filter(m => m.id !== manifestation.id));
        }, manifestation.duration);
      }
    }, getManifestationInterval());

    return () => clearInterval(interval);
  }, [curseMeter]);

  return (
    <div className="w-[40%] h-full relative overflow-hidden pointer-events-none">
      {/* Text-only manifestations */}
      {manifestations.map(manifestation => (
        <div key={manifestation.id}>
          {manifestation.type === 'whisper' && (
            <SideWhisper opacity={manifestation.opacity} />
          )}
          {manifestation.type === 'stretch' && (
            <TextStretch opacity={manifestation.opacity} lastCommand={lastCommand} />
          )}
          {manifestation.type === 'name-drift' && userName && (
            <NameDrift opacity={manifestation.opacity} userName={userName} />
          )}
          {manifestation.type === 'mirror' && (
            <MirrorLine opacity={manifestation.opacity} lastCommand={lastCommand} />
          )}
          {manifestation.type === 'bleed' && (
            <BleedThrough opacity={manifestation.opacity} />
          )}
          {manifestation.type === 'ghost-prompt' && (
            <GhostPrompt opacity={manifestation.opacity} />
          )}
          {manifestation.type === 'echo' && (
            <CommandEcho opacity={manifestation.opacity} lastCommand={lastCommand} />
          )}
          {manifestation.type === 'fragment' && userName && (
            <NameFragment opacity={manifestation.opacity} userName={userName} />
          )}
        </div>
      ))}
    </div>
  );
}

// ===================================
// TEXT-ONLY MANIFESTATION COMPONENTS
// ===================================

// 1. SIDE WHISPER - Single word appears far right
function SideWhisper({ opacity }: { opacity: number }) {
  const whispers = ['behind', 'watching', 'closer', 'listening', 'waiting', 'here', 'now'];
  const word = whispers[Math.floor(Math.random() * whispers.length)];

  return (
    <div 
      className="absolute font-mono text-sm animate-fade-in-out"
      style={{
        opacity,
        top: `${Math.random() * 80 + 10}%`,
        right: `${Math.random() * 20 + 5}%`,
        color: 'var(--terminal-color, var(--terminal-green))',
      }}
    >
      {word}
    </div>
  );
}

// 2. TEXT STRETCH - Previous output stretched with spaces
function TextStretch({ opacity, lastCommand }: { opacity: number; lastCommand: string }) {
  const text = lastCommand || 'hello';
  const stretched = text.split('').join(' ');

  return (
    <div 
      className="absolute font-mono text-sm animate-fade-in-out"
      style={{
        opacity,
        top: `${Math.random() * 60 + 20}%`,
        left: `${Math.random() * 30}%`,
        color: 'var(--terminal-color, var(--terminal-green))',
        letterSpacing: '0.5em',
      }}
    >
      {stretched}
    </div>
  );
}

// 3. NAME DRIFT - User's name vertically stacked
function NameDrift({ opacity, userName }: { opacity: number; userName: string }) {
  return (
    <div 
      className="absolute font-mono text-sm animate-fade-in-out flex flex-col"
      style={{
        opacity,
        top: `${Math.random() * 50 + 10}%`,
        right: `${Math.random() * 30 + 10}%`,
        color: 'var(--terminal-color, var(--terminal-green))',
      }}
    >
      {userName.split('').map((char, i) => (
        <span key={i} style={{ paddingLeft: `${i * 4}px` }}>{char}</span>
      ))}
    </div>
  );
}

// 4. MIRROR LINE - Reversed line appears
function MirrorLine({ opacity, lastCommand }: { opacity: number; lastCommand: string }) {
  const reversed = (lastCommand || 'help').split('').reverse().join('');

  return (
    <div 
      className="absolute font-mono text-sm animate-fade-in-out"
      style={{
        opacity,
        top: `${Math.random() * 70 + 15}%`,
        left: `${Math.random() * 40}%`,
        color: 'var(--terminal-color, var(--terminal-green))',
      }}
    >
      &gt; {reversed}
    </div>
  );
}

// 5. BLEED THROUGH - Terminal output overflow
function BleedThrough({ opacity }: { opacity: number }) {
  const lines = [
    'SYSTEM ERROR',
    'MEMORY CORRUPTED',
    'STACK OVERFLOW',
    'SEGMENTATION FAULT',
    'ACCESS VIOLATION',
  ];
  const line = lines[Math.floor(Math.random() * lines.length)];

  return (
    <div 
      className="absolute font-mono text-xs animate-fade-in-out"
      style={{
        opacity: opacity * 0.5,
        top: `${Math.random() * 80 + 10}%`,
        left: `${Math.random() * 50}%`,
        color: 'var(--terminal-color, var(--terminal-green))',
        transform: `rotate(${Math.random() * 4 - 2}deg)`,
      }}
    >
      {line}
    </div>
  );
}

// 6. GHOST PROMPT - Fake prompt appears
function GhostPrompt({ opacity }: { opacity: number }) {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowCursor(false), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="absolute font-mono text-sm animate-fade-in-out"
      style={{
        opacity,
        top: `${Math.random() * 70 + 15}%`,
        right: `${Math.random() * 30 + 5}%`,
        color: 'var(--terminal-color, var(--terminal-green))',
      }}
    >
      &gt;{showCursor ? ' |' : ''}
    </div>
  );
}

// 7. COMMAND ECHO - Previous command echoes faintly
function CommandEcho({ opacity, lastCommand }: { opacity: number; lastCommand: string }) {
  const cmd = lastCommand || '';
  
  return (
    <div 
      className="absolute font-mono text-xs animate-fade-in-out"
      style={{
        opacity: opacity * 0.3,
        top: `${Math.random() * 60 + 20}%`,
        left: `${Math.random() * 40 + 10}%`,
        color: 'var(--terminal-color, var(--terminal-green))',
      }}
    >
      {cmd}
    </div>
  );
}

// 8. NAME FRAGMENT - Parts of name scattered
function NameFragment({ opacity, userName }: { opacity: number; userName: string }) {
  const fragments = userName.match(/.{1,2}/g) || [userName];
  const fragment = fragments[Math.floor(Math.random() * fragments.length)];

  return (
    <div 
      className="absolute font-mono text-sm animate-fade-in-out"
      style={{
        opacity,
        top: `${Math.random() * 80 + 10}%`,
        right: `${Math.random() * 40}%`,
        color: 'var(--terminal-color, var(--terminal-green))',
        letterSpacing: '1em',
      }}
    >
      {fragment}
    </div>
  );
}
