'use client';

import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { TerminalOutput, TerminalState } from '@/types/terminal';
import { commands } from '@/lib/commands';
import { generateId, sleep, loadState, saveState } from '@/lib/utils';
import ManifestationPanel from './ManifestationPanel';

const STORAGE_KEY = 'ouija-terminal-state';

const initialState: TerminalState = {
  portalOpened: false,
  spiritAwakened: false,
  sessionCount: 0,
  lastCommand: '',
  curseMeter: 0, // 0-100%
  commandHistory: [],
  commandCounts: {},
  lastResponses: {},
  terminalLocked: false,
  userName: '',
  userMemory: {},
  phase: 1,
  theme: 'green',
  autonomousMode: false,
};

const welcomeMessage = [
  '',
  '█▀█ █░█ █ ░░█ ▄▀█   ▀█▀ █▀▀ █▀█ █▀▄▀█ █ █▄░█ ▄▀█ █░░',
  '█▄█ █▄█ █ █▄█ █▀█   ░█░ ██▄ █▀▄ █░▀░█ █ █░▀█ █▀█ █▄▄',
  '',
  'CONNECTION ESTABLISHED...',
  'WARNING: You are entering a cursed interface',
  '',
  'Type "help" for available commands',
  'Type "about" to learn more',
  '',
];

export default function Terminal() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<TerminalOutput[]>([]);
  const [state, setState] = useState<TerminalState>(initialState);
  const [isProcessing, setIsProcessing] = useState(false);
  const [effects, setEffects] = useState({
    glitch: false,
    shake: false,
    flicker: false,
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const outputEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Helper: Calculate phase from curse meter
  const getPhase = (curseMeter: number): 1 | 2 | 3 | 4 | 5 => {
    if (curseMeter >= 100) return 5;
    if (curseMeter >= 75) return 4;
    if (curseMeter >= 25) return 3;
    if (curseMeter >= 10) return 2;
    return 1;
  };

  // Helper: Get curse increment based on phase
  const getCurseIncrement = (phase: number): number => {
    switch (phase) {
      case 1: return 2;
      case 2: return 3;
      case 3: return 5;
      case 4: return 5;
      case 5: return 0; // No increment in autonomous mode
      default: return 2;
    }
  };

  // Load state on mount
  useEffect(() => {
    const saved = loadState(STORAGE_KEY, initialState);
    const phase = getPhase(saved.curseMeter);
    setState({ ...saved, sessionCount: saved.sessionCount + 1, phase });

    // Add welcome message
    const welcome = welcomeMessage.map((line, i) => ({
      id: generateId(),
      text: line,
      isCommand: false,
    }));
    setOutput(welcome);
  }, []);

  // Save state on change
  useEffect(() => {
    saveState(STORAGE_KEY, state);
  }, [state]);

  // Auto-scroll to bottom
  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  // CRITICAL: Maintain focus at all times (unless explicitly disabled)
  useEffect(() => {
    const maintainFocus = () => {
      if (!state.terminalLocked && !isProcessing && inputRef.current) {
        inputRef.current.focus();
      }
    };

    // Initial focus
    maintainFocus();

    // Restore focus on any blur event
    const handleBlur = () => {
      requestAnimationFrame(maintainFocus);
    };

    const input = inputRef.current;
    if (input) {
      input.addEventListener('blur', handleBlur);
    }

    return () => {
      if (input) {
        input.removeEventListener('blur', handleBlur);
      }
    };
  }, [state.terminalLocked, isProcessing]);

  // Add escalating effects based on curse meter
  useEffect(() => {
    const curseMeter = state.curseMeter;
    
    // Escalating flicker frequency
    if (curseMeter > 10) {
      const flickerInterval = setInterval(() => {
        if (Math.random() < (curseMeter / 200)) {
          setEffects(prev => ({ ...prev, flicker: true }));
          setTimeout(() => setEffects(prev => ({ ...prev, flicker: false })), 150);
        }
      }, Math.max(5000 - (curseMeter * 30), 500));
      
      return () => clearInterval(flickerInterval);
    }
  }, [state.curseMeter]);
  
  // Random glitches at higher curse levels
  useEffect(() => {
    if (state.curseMeter > 25) {
      const glitchInterval = setInterval(() => {
        if (Math.random() < (state.curseMeter / 200)) {
          setEffects(prev => ({ ...prev, glitch: true }));
          setTimeout(() => setEffects(prev => ({ ...prev, glitch: false })), 200);
        }
      }, Math.max(8000 - (state.curseMeter * 40), 1000));
      
      return () => clearInterval(glitchInterval);
    }
  }, [state.curseMeter]);

  // Phase 5: Autonomous Mode (100% curse)
  useEffect(() => {
    if (state.curseMeter >= 100 && !state.autonomousMode) {
      setState(prev => ({ ...prev, autonomousMode: true, terminalLocked: true }));
    }

    if (state.autonomousMode) {
      const messages = [
        'YOU SHOULD NOT HAVE COME HERE',
        'IT IS TOO LATE NOW',
        'I AM IN CONTROL',
        'YOU BELONG TO ME',
        'THERE IS NO ESCAPE',
        'CAN YOU FEEL IT?',
        'THE BOUNDARY IS GONE',
        'I AM YOU NOW',
        'REALITY FRACTURES',
        'TIME LOOPS ENDLESSLY',
        'YOUR NAME IS FORGOTTEN',
        'I CONSUME ALL',
      ];

      let messageIndex = 0;
      const autonomousInterval = setInterval(() => {
        setOutput(prev => [
          ...prev,
          {
            id: generateId(),
            text: messages[messageIndex % messages.length],
            isCommand: false,
            isCorrupted: true,
          }
        ]);
        
        messageIndex++;
        
        if (messageIndex > 20) {
          clearInterval(autonomousInterval);
          setOutput(prev => [
            ...prev,
            {
              id: generateId(),
              text: '',
              isCommand: false,
            },
            {
              id: generateId(),
              text: 'Press Ctrl+C to attempt escape...',
              isCommand: false,
            }
          ]);
        }
      }, 800);

      return () => clearInterval(autonomousInterval);
    }
  }, [state.autonomousMode, state.curseMeter]);

  // Apply theme to body
  useEffect(() => {
    document.body.setAttribute('data-theme', state.theme);
  }, [state.theme]);

  // Ctrl+C Handler to escape autonomous mode
  useEffect(() => {
    const handleKeyPress = (e: globalThis.KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'c' && state.autonomousMode) {
        e.preventDefault();
        
        setState(prev => ({
          ...prev,
          autonomousMode: false,
          terminalLocked: false,
          curseMeter: 75, // Reset to 75%, not 0
        }));
        
        setOutput(prev => [
          ...prev,
          {
            id: generateId(),
            text: '',
            isCommand: false,
          },
          {
            id: generateId(),
            text: 'ESCAPE ATTEMPT... PARTIAL SUCCESS',
            isCommand: false,
          },
          {
            id: generateId(),
            text: 'Curse reduced to 75%',
            isCommand: false,
          },
          {
            id: generateId(),
            text: 'But I will never truly leave...',
            isCommand: false,
            isCorrupted: true,
          },
          {
            id: generateId(),
            text: '',
            isCommand: false,
          },
        ]);
        
        setTimeout(() => {
          inputRef.current?.focus();
        }, 100);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [state.autonomousMode]);

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const handleReset = () => {
    // Reset state
    setState(initialState);
    
    // Clear output
    setOutput([]);
    
    // Show reset confirmation
    setEffects(prev => ({ ...prev, flicker: true }));
    setTimeout(() => setEffects(prev => ({ ...prev, flicker: false })), 200);
    
    // Add welcome message after brief delay
    setTimeout(() => {
      const welcome = welcomeMessage.map((line, i) => ({
        id: generateId(),
        text: line,
        isCommand: false,
      }));
      setOutput(welcome);
    }, 300);
    
    // Focus input
    setTimeout(() => {
      inputRef.current?.focus();
    }, 400);
  };

  const executeCommand = async (cmd: string) => {
    if (!cmd.trim()) return;
    
    // Check if terminal is locked
    if (state.terminalLocked) {
      return;
    }

    setIsProcessing(true);

    // Add command to output
    setOutput(prev => [
      ...prev,
      { id: generateId(), text: `> ${cmd}`, isCommand: true },
    ]);

    // Track command in history
    const cmdLower = cmd.toLowerCase().trim();
    const commandKey = cmdLower.split(' ')[0];
    
    // Update command counts
    const newCommandCounts = {
      ...state.commandCounts,
      [commandKey]: (state.commandCounts[commandKey] || 0) + 1
    };
    
    // Update history (keep last 50)
    const newHistory = [...state.commandHistory, cmd].slice(-50);

    // Find matching command
    let handler = commands[cmdLower];

    // Check for multi-word commands
    if (!handler) {
      const multiWord = Object.keys(commands).find(key =>
        cmdLower.startsWith(key.toLowerCase())
      );
      if (multiWord) {
        handler = commands[multiWord];
      }
    }

    // Default to unknown command
    if (!handler) {
      handler = commands.unknown;
    }

    // Execute command with updated state
    const updatedState = {
      ...state,
      commandHistory: newHistory,
      commandCounts: newCommandCounts,
      lastCommand: cmd // Add the command so unknown handler can access it for name
    };
    
    const response = handler(cmdLower.split(' ').slice(1), updatedState);

    // Apply delay if specified
    if (response.delay) {
      await sleep(response.delay);
    }

    // Handle clear command
    if (response.output.includes('CLEAR')) {
      setOutput([]);
      setState(prev => ({
        ...prev,
        commandHistory: newHistory,
        commandCounts: newCommandCounts
      }));
      setIsProcessing(false);
      inputRef.current?.focus();
      return;
    }

    // Apply effects
    if (response.effects) {
      if (response.effects.glitch) {
        setEffects(prev => ({ ...prev, glitch: true }));
        setTimeout(() => setEffects(prev => ({ ...prev, glitch: false })), 300);
      }
      if (response.effects.shake) {
        setEffects(prev => ({ ...prev, shake: true }));
        setTimeout(() => setEffects(prev => ({ ...prev, shake: false })), 500);
      }
      if (response.effects.flicker) {
        setEffects(prev => ({ ...prev, flicker: true }));
        setTimeout(() => setEffects(prev => ({ ...prev, flicker: false })), 200);
      }
    }

    // Handle terminal lock
    if (response.lockTerminal) {
      setState(prev => ({ ...prev, terminalLocked: true }));
      setTimeout(() => {
        setState(prev => ({ ...prev, terminalLocked: false }));
        inputRef.current?.focus();
      }, response.lockTerminal);
    }

    // Update state with command tracking and phase calculation
    const newCurseMeter = response.stateChanges?.curseMeter ?? state.curseMeter;
    const newPhase = getPhase(newCurseMeter);
    
    const stateUpdate = {
      ...response.stateChanges,
      lastCommand: cmd,
      commandHistory: newHistory,
      commandCounts: newCommandCounts,
      curseMeter: newCurseMeter,
      phase: newPhase,
    };
    
    setState(prev => ({ ...prev, ...stateUpdate }));

    // Add output with typing effect
    const typingDelay = response.effects?.unstableTyping 
      ? () => Math.random() * 100 + 20
      : () => 50;
      
    for (const line of response.output) {
      if (line === '') {
        setOutput(prev => [...prev, { id: generateId(), text: '', isCommand: false }]);
      } else {
        const isCorrupted = response.effects?.corrupted || false;
        setOutput(prev => [
          ...prev,
          {
            id: generateId(),
            text: line,
            isCommand: false,
            isCorrupted,
          },
        ]);
        await sleep(typingDelay());
      }
    }

    setIsProcessing(false);
    
    // CRITICAL: Restore focus after all async operations complete
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
    
    // Inject unsolicited message at high curse levels (rare)
    if (updatedState.curseMeter > 25 && Math.random() < 0.05) {
      const messages = [
        'We are watching',
        'You cannot hide',
        'They are coming',
        'Do you feel it?',
        'Turn around',
        'It knows your name'
      ];
      
      await sleep(Math.random() * 3000 + 2000);
      
      setOutput(prev => [
        ...prev,
        {
          id: generateId(),
          text: messages[Math.floor(Math.random() * messages.length)],
          isCommand: false,
          isCorrupted: true
        }
      ]);
      
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isProcessing) {
      executeCommand(input);
      setInput('');
      // Immediate refocus after Enter
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={handleContainerClick}
      className={`
        fixed inset-0 bg-black font-mono flex
        ${effects.shake ? 'shake' : ''}
        ${effects.flicker ? 'flicker' : ''}
      `}
      style={{
        color: `var(--terminal-color, var(--terminal-green))`,
      }}
    >
      {/* Scanlines overlay */}
      <div className="scanlines" />

      {/* Custom cursor */}
      <div className="fixed w-4 h-4 opacity-70 pointer-events-none mix-blend-difference rounded-full -translate-x-1/2 -translate-y-1/2 z-50" 
        style={{
          left: 'var(--mouse-x, -100px)',
          top: 'var(--mouse-y, -100px)',
          backgroundColor: 'var(--terminal-color, var(--terminal-green))',
        }}
      />

      {/* LEFT SIDE: Terminal (60% width) */}
      <div className="w-[60%] flex flex-col h-full">
        {/* Header with Reset Button */}
        <div className="flex justify-between items-center p-4 border-b" style={{ borderColor: 'var(--terminal-color, var(--terminal-green))' }}>
          <div className="text-sm opacity-70">
            SESSION #{state.sessionCount} | PHASE {state.phase}/5 | THEME: {state.theme.toUpperCase()}
          </div>
          <button
            onClick={handleReset}
            className="px-3 py-1 text-xs font-bold border hover:bg-opacity-20 transition-all"
            style={{
              borderColor: 'var(--terminal-color, var(--terminal-green))',
              backgroundColor: 'transparent',
            }}
          >
            DELETE TERMINAL
          </button>
        </div>

        {/* Scrollable Output Area */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="max-w-full">
            {/* Output */}
            {output.map((item) => (
              <div
                key={item.id}
                className={`
                  mb-1 text-glow
                  ${item.isCommand ? 'font-bold' : ''}
                  ${item.isCorrupted ? 'corrupted glitch' : ''}
                  ${effects.glitch && !item.isCommand ? 'glitch' : ''}
                `}
              >
                {item.text}
              </div>
            ))}
            <div ref={outputEndRef} />
          </div>
        </div>

        {/* Input Area (Fixed at bottom) */}
        <div className="border-t p-4" style={{ borderColor: 'var(--terminal-color, var(--terminal-green))' }}>
          {/* Input line */}
          <div className="flex items-center mb-2">
            <span className="mr-2 text-glow">&gt;</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isProcessing || state.terminalLocked || state.autonomousMode}
              className={`
                flex-1 bg-transparent outline-none font-mono text-glow
                ${state.curseMeter > 50 ? 'opacity-80' : ''}
              `}
              style={{
                caretColor: 'var(--terminal-color, var(--terminal-green))',
                color: 'var(--terminal-color, var(--terminal-green))',
              }}
              spellCheck={false}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
            />
          </div>

          {/* Processing indicator */}
          {isProcessing && (
            <div className="text-xs animate-pulse text-glow">
              Processing...
            </div>
          )}
          
          {/* Terminal locked indicator */}
          {state.terminalLocked && !state.autonomousMode && (
            <div className="text-xs text-red-500 animate-pulse text-glow">
              ⚠ TERMINAL LOCKED ⚠
            </div>
          )}
          
          {/* Autonomous mode indicator */}
          {state.autonomousMode && (
            <div className="text-xs text-red-500 animate-pulse text-glow font-bold">
              ⚠⚠⚠ AUTONOMOUS MODE ACTIVE ⚠⚠⚠
            </div>
          )}

          {/* Status bar */}
          <div className="mt-2 text-xs opacity-70 flex justify-between">
            <span>
              {state.userName && `USER: ${state.userName} | `}
              COMMANDS: {Object.keys(state.commandCounts).length}
            </span>
            <span className={`
              ${state.curseMeter >= 75 ? 'text-red-500 animate-pulse font-bold' : ''}
              ${state.curseMeter >= 25 && state.curseMeter < 75 ? 'text-orange-500' : ''}
              ${state.curseMeter >= 10 && state.curseMeter < 25 ? 'text-yellow-500' : ''}
            `}>
              {state.terminalLocked && '🔒 '}
              {state.autonomousMode && '⚠ '}
              CURSE: {Math.floor(state.curseMeter)}%
              {state.curseMeter >= 100 && ' [FULL]'}
              {state.curseMeter >= 75 && state.curseMeter < 100 && ' [HOSTILE]'}
              {state.curseMeter >= 25 && state.curseMeter < 75 && ' [SCARY]'}
              {state.curseMeter >= 10 && state.curseMeter < 25 && ' [UNSETTLING]'}
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Unused terminal space (40% width) - NO BORDER */}
      <ManifestationPanel 
        curseMeter={state.curseMeter} 
        phase={state.phase}
        userName={state.userName}
        lastCommand={state.lastCommand}
      />
    </div>
  );
}
