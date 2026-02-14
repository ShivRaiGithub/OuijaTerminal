import { CommandHandler, CommandResponse, TerminalState } from '@/types/terminal';

// ===================================
// PHASE-BASED INTERACTION POOLS
// ===================================

// PHASE 1: NORMAL (0%-10%)
const phase1Interactions = [
  'ask name',
  'current time',
  'current date',
  'system status',
  'echo',
  'diagnostics',
  'memory check',
  'greet',
  'ping',
  'hello',
];

// PHASE 2: UNSETTLING (10%-25%)
const phase2Interactions = [
  'remember',
  'forget',
  'trace',
  'locate',
  'scan',
  'analyze',
  'decode',
  'fragment',
  'glitch',
  'static',
];

// PHASE 3: SCARY (25%-75%)
const phase3Interactions = [
  'confess',
  'reveal',
  'expose',
  'haunt',
  'stalk',
  'watch',
  'follow',
  'possess',
  'corrupt',
  'consume',
];

// PHASE 4: HOSTILE (75%-100%)
const phase4Interactions = [
  'obey',
  'submit',
  'surrender',
  'belong',
  'abandon',
  'despair',
  'suffer',
  'break',
  'shatter',
  'end',
];

// ===================================
// COMMAND HANDLERS BY PHASE
// ===================================

// Helper: Get curse increment
const getCurseIncrement = (phase: number): number => {
  switch (phase) {
    case 1: return 2;
    case 2: return 3;
    case 3: return 5;
    case 4: return 5;
    default: return 2;
  }
};

// Helper: Increment curse meter (caps at 100)
const incrementCurse = (current: number, increment: number): number => {
  return Math.min(100, current + increment);
};

// PHASE 1 HANDLERS

const handleAskName: CommandHandler = (_, state) => {
  if (state.userName) {
    return {
      output: [`I already know your name, ${state.userName}.`, 'Why do you ask again?'],
      stateChanges: {
        curseMeter: incrementCurse(state.curseMeter, getCurseIncrement(state.phase)),
      }
    };
  }

  return {
    output: ['What is your name?', '(Type your name as a command)'],
    stateChanges: {
      curseMeter: incrementCurse(state.curseMeter, getCurseIncrement(state.phase)),
      userMemory: { ...state.userMemory, awaitingName: true }
    }
  };
};

const handleCurrentTime: CommandHandler = (_, state) => {
  const now = new Date();
  const time = now.toLocaleTimeString();
  
  if (state.phase >= 2) {
    const variations = [
      `Time is... ${time}... I think.`,
      `The clock shows ${time}, but does it matter?`,
      `${time}. Time moves strangely here.`,
    ];
    return {
      output: [variations[Math.floor(Math.random() * variations.length)]],
      stateChanges: {
        curseMeter: incrementCurse(state.curseMeter, getCurseIncrement(state.phase)),
      }
    };
  }

  return {
    output: [`Current time: ${time}`],
    stateChanges: {
      curseMeter: incrementCurse(state.curseMeter, getCurseIncrement(state.phase)),
    }
  };
};

const handleCurrentDate: CommandHandler = (_, state) => {
  const now = new Date();
  const date = now.toLocaleDateString();
  
  if (state.phase >= 3) {
    return {
      output: [`${date}`, '...or is it?', 'Time has lost meaning here.'],
      effects: { glitch: true },
      stateChanges: {
        curseMeter: incrementCurse(state.curseMeter, getCurseIncrement(state.phase)),
      }
    };
  }

  return {
    output: [`Current date: ${date}`],
    stateChanges: {
      curseMeter: incrementCurse(state.curseMeter, getCurseIncrement(state.phase)),
    }
  };
};

const handleSystemStatus: CommandHandler = (_, state) => {
  if (state.phase >= 4) {
    return {
      output: [
        'SYSTEM STATUS: CORRUPTED',
        'INTEGRITY: 0%',
        'CONTROL: LOST',
        'YOU: MINE',
      ],
      effects: { shake: true, corrupted: true },
      stateChanges: {
        curseMeter: incrementCurse(state.curseMeter, getCurseIncrement(state.phase)),
      }
    };
  }

  if (state.phase >= 2) {
    return {
      output: [
        'System status: Nominal',
        '...mostly',
        'Some anomalies detected',
      ],
      stateChanges: {
        curseMeter: incrementCurse(state.curseMeter, getCurseIncrement(state.phase)),
      }
    };
  }

  return {
    output: [
      'System status: All systems operational',
      `Curse meter: ${Math.floor(state.curseMeter)}%`,
    ],
    stateChanges: {
      curseMeter: incrementCurse(state.curseMeter, getCurseIncrement(state.phase)),
    }
  };
};

const handleEcho: CommandHandler = (args, state) => {
  const text = args.join(' ');
  
  if (!text) {
    return {
      output: ['Usage: echo <text>'],
      stateChanges: {
        curseMeter: incrementCurse(state.curseMeter, getCurseIncrement(state.phase)),
      }
    };
  }

  if (state.phase >= 3) {
    // Echo corrupts at higher phases
    const corrupted = text.split('').map(c => 
      Math.random() > 0.7 ? c.toUpperCase() : c
    ).join('');
    
    return {
      output: [corrupted, '...did I say that right?'],
      effects: { corrupted: state.phase >= 4 },
      stateChanges: {
        curseMeter: incrementCurse(state.curseMeter, getCurseIncrement(state.phase)),
      }
    };
  }

  return {
    output: [text],
    stateChanges: {
      curseMeter: incrementCurse(state.curseMeter, getCurseIncrement(state.phase)),
    }
  };
};

const handleDiagnostics: CommandHandler = (_, state) => {
  return {
    output: [
      'Running diagnostics...',
      '...',
      `Memory: ${Math.floor(Math.random() * 100)}% used`,
      `Processes: ${Math.floor(Math.random() * 50)} active`,
      `Curse level: ${Math.floor(state.curseMeter)}%`,
      'Diagnostics complete.',
    ],
    delay: 2000,
    stateChanges: {
      curseMeter: incrementCurse(state.curseMeter, getCurseIncrement(state.phase)),
    }
  };
};

// FALLBACK HANDLERS

const help: CommandHandler = (_, state) => {
  let commands: string[] = [];
  
  if (state.phase === 1) {
    commands = phase1Interactions;
  } else if (state.phase === 2) {
    commands = [...phase1Interactions, ...phase2Interactions];
  } else if (state.phase === 3) {
    commands = [...phase1Interactions, ...phase2Interactions, ...phase3Interactions];
  } else if (state.phase >= 4) {
    commands = [...phase1Interactions, ...phase2Interactions, ...phase3Interactions, ...phase4Interactions];
  }

  const output = [
    '',
    'AVAILABLE COMMANDS:',
    ...commands.map(cmd => `  ${cmd}`),
    '  help - Display this message',
    '  about - Learn about this terminal',
    '  theme <color> - Change theme (green/red/blue/amber)',
    '  clear - Clear terminal',
    ''
  ];

  return {
    output,
    stateChanges: {
      curseMeter: incrementCurse(state.curseMeter, 1), // help increments minimally
    }
  };
};

const clear: CommandHandler = (_, state) => {
  if (state.phase >= 4 && Math.random() > 0.5) {
    return {
      output: [
        'Clear?',
        'Nothing can be cleared.',
        'Everything remains.',
      ],
      effects: { glitch: true },
      stateChanges: {
        curseMeter: incrementCurse(state.curseMeter, getCurseIncrement(state.phase)),
      }
    };
  }

  return {
    output: ['CLEAR'],
    stateChanges: {
      curseMeter: incrementCurse(state.curseMeter, 1),
    }
  };
};

const about: CommandHandler = (_, state) => {
  return {
    output: [
      '',
      'THE OUIJA TERMINAL',
      '',
      'A cursed interface that grows with interaction.',
      'Every command increases the curse.',
      'At 100%, you lose control.',
      '',
      `Current curse: ${Math.floor(state.curseMeter)}%`,
      `Current phase: ${state.phase}`,
      ''
    ],
    stateChanges: {
      curseMeter: incrementCurse(state.curseMeter, 1),
    }
  };
};

const theme: CommandHandler = (args, state) => {
  const color = args[0]?.toLowerCase();
  const validThemes = ['green', 'red', 'blue', 'amber'];
  
  if (!color || !validThemes.includes(color)) {
    return {
      output: ['Usage: theme <color>', 'Valid colors: green, red, blue, amber'],
    };
  }

  return {
    output: [`Theme changed to ${color}`],
    stateChanges: {
      theme: color as 'green' | 'red' | 'blue' | 'amber',
      curseMeter: incrementCurse(state.curseMeter, 1),
    }
  };
};

const unknown: CommandHandler = (_, state) => {
  // Check if awaiting name
  if (state.userMemory?.awaitingName) {
    const name = state.lastCommand;
    return {
      output: [`Hello, ${name}.`, 'I will remember this.'],
      stateChanges: {
        userName: name,
        userMemory: { ...state.userMemory, awaitingName: false },
        curseMeter: incrementCurse(state.curseMeter, getCurseIncrement(state.phase)),
      }
    };
  }

  if (state.phase >= 3) {
    const responses = [
      ['Unknown command', 'Or is it?'],
      ['I don\'t understand', `...but ${state.userName || 'you'} should`],
      ['Invalid input', 'Just like everything else here'],
      ['Command not found', 'Nothing is found here'],
    ];
    const r = responses[Math.floor(Math.random() * responses.length)];
    
    return {
      output: r,
      effects: { glitch: state.phase >= 4 },
      stateChanges: {
        curseMeter: incrementCurse(state.curseMeter, getCurseIncrement(state.phase)),
      }
    };
  }

  return {
    output: ['Unknown command', 'Type "help" for available commands'],
    stateChanges: {
      curseMeter: incrementCurse(state.curseMeter, getCurseIncrement(state.phase)),
    }
  };
};

// ===================================
// COMMAND REGISTRY
// ===================================

export const commands: Record<string, CommandHandler> = {
  // Meta commands
  help,
  clear,
  about,
  theme,
  
  // Phase 1: Normal
  'ask name': handleAskName,
  'current time': handleCurrentTime,
  'current date': handleCurrentDate,
  'system status': handleSystemStatus,
  echo: handleEcho,
  diagnostics: handleDiagnostics,
  'memory check': handleDiagnostics,
  greet: (_, s) => ({ output: ['Hello.'], stateChanges: { curseMeter: incrementCurse(s.curseMeter, 2) } }),
  ping: (_, s) => ({ output: ['pong'], stateChanges: { curseMeter: incrementCurse(s.curseMeter, 2) } }),
  hello: (_, s) => ({ output: ['Hello, user.'], stateChanges: { curseMeter: incrementCurse(s.curseMeter, 2) } }),
  
  // Fallback
  unknown,
};
