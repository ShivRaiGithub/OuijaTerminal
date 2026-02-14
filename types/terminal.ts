export interface TerminalOutput {
  id: string;
  text: string;
  isCommand?: boolean;
  isError?: boolean;
  isCorrupted?: boolean;
  delay?: number;
}

export interface TerminalState {
  portalOpened: boolean;
  spiritAwakened: boolean;
  sessionCount: number;
  lastCommand: string;
  curseMeter: number; // 0-100 percentage
  commandHistory: string[];
  commandCounts: Record<string, number>;
  lastResponses: Record<string, number>;
  terminalLocked: boolean;
  userName: string;
  userMemory: Record<string, any>;
  phase: 1 | 2 | 3 | 4 | 5;
  theme: 'green' | 'red' | 'blue' | 'amber';
  autonomousMode: boolean;
}

export interface CommandResponse {
  output: string[];
  delay?: number;
  effects?: {
    glitch?: boolean;
    shake?: boolean;
    flicker?: boolean;
    corrupted?: boolean;
    unstableTyping?: boolean;
    cursorLag?: boolean;
  };
  stateChanges?: Partial<TerminalState>;
  lockTerminal?: number;
  injectMessage?: {
    text: string;
    delay: number;
  };
}

export type CommandHandler = (
  args: string[],
  state: TerminalState
) => CommandResponse;
