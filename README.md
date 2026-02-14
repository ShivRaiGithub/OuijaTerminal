# 👻 The Ouija Terminal

A browser-based horror terminal experience that **evolves with every interaction**. Start at 0% curse and watch as the terminal transforms through 5 distinct phases, culminating in a complete autonomous takeover at 100%.

This experience features:
- **Escalating Curse Meter** (0-100%) that controls behavior and visuals
- **Text hallucinations** - unused terminal space begins to show glitches and echoes
- **5 distinct phases** with expanding command pools
- **Theme system** - switch between 4 different terminal aesthetics
- **Autonomous takeover** at 100% with Ctrl+C escape mechanism
- **Name persistence** - the terminal remembers and distorts your name

**Everything is text.** No images, no graphics. Just a terminal failing under the weight of a curse.

![License](https://img.shields.io/badge/license-MIT-green)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

---

## ⚠️ WARNING

This is not a static terminal simulator. **The curse meter NEVER decreases** (except at 100%). Every command you type pushes you closer to losing control. At 100%, the terminal takes over.

**The terminal watches the empty space. Text bleeds where it shouldn't. Reset if you dare.**

---

## 🎭 The Curse Meter System

### How It Works

The **Curse Meter** ranges from **0% to 100%** and controls everything:
- Which commands are available
- How the terminal responds
- Visual effect intensity
- Whether you have control

**Every single command increases the curse meter.** The increment depends on your current phase:

| Phase | Range | Increment | Commands Available |
|-------|-------|-----------|-------------------|
| **Phase 1: Normal** | 0%-10% | +2% | 10 commands |
| **Phase 2: Unsettling** | 10%-25% | +3% | 20 commands |
| **Phase 3: Scary** | 25%-75% | +5% | 30 commands |
| **Phase 4: Hostile** | 75%-100% | +5% | 40 commands |
| **Phase 5: Autonomous** | 100% | — | **Terminal takes over** |

---

## 📊 The Five Phases

### Phase 1: NORMAL (0%-10%)
**Status**: Safe exploration  
**Tone**: Curious, slightly uncanny  
**Increment**: +2% per command  

**Available Commands**:
- `ask name` - System asks for your name
- `current time` - Display current time
- `current date` - Display current date
- `system status` - System diagnostics
- `echo <text>` - Echo text back
- `diagnostics` - Run diagnostics
- `memory check` - Memory status
- `greet` - Greeting
- `ping` - Pong response
- `hello` - Hello

**Example**:
```
> current time
Current time: 3:45:23 PM
```

---

### Phase 2: UNSETTLING (10%-25%)
**Status**: Things feel wrong  
**Tone**: Suspicious, inconsistent  
**Increment**: +3% per command  

**Unlocked Commands** (+10 more):
- `remember`, `forget`, `trace`, `locate`, `scan`
- `analyze`, `decode`, `fragment`, `glitch`, `static`

**Behavior Changes**:
- Responses become subtly wrong
- Delays and hesitations appear
- Time responses add uncertainty

**Example**:
```
> current time
Time is... 3:45:23 PM... I think.
```

---

### Phase 3: SCARY (25%-75%)
**Status**: Reality breaking down  
**Tone**: Threatening, invasive  
**Increment**: +5% per command  

**Unlocked Commands** (+10 more):
- `confess`, `reveal`, `expose`, `haunt`, `stalk`
- `watch`, `follow`, `possess`, `corrupt`, `consume`

**Behavior Changes**:
- Terminal references your name and past commands
- `echo` corrupts your text
- Visual glitches intensify
- Unsolicited messages (5% chance)

**Example**:
```
> echo hello
hElLo
...did I say that right?

[2 seconds later]
We are watching
```

---

### Phase 4: HOSTILE (75%-100%)
**Status**: Terminal actively resists  
**Tone**: Oppressive, domineering  
**Increment**: +5% per command  

**Unlocked Commands** (+10 more):
- `obey`, `submit`, `surrender`, `belong`, `abandon`
- `despair`, `suffer`, `break`, `shatter`, `end`

**Behavior Changes**:
- Commands may refuse to execute
- `clear` may fail ("Nothing can be cleared")
- `system status` shows CORRUPTED
- Aggressive shake and flicker effects
- Frequent unsolicited messages

**Example**:
```
> clear
Clear?
Nothing can be cleared.
Everything remains.
```

---

### Phase 5: AUTONOMOUS (100%)
**Status**: 🚨 **YOU HAVE LOST CONTROL** 🚨  
**Tone**: Frantic, possessed, unstoppable  

**What Happens**:
1. ✅ Input is LOCKED (you cannot type)
2. ✅ Terminal ignores keyboard
3. ✅ Autonomous messages output every 800ms
4. ✅ 20+ threatening messages scroll automatically
5. ✅ Terminal speaks without you

**Sample Output**:
```
YOU SHOULD NOT HAVE COME HERE
IT IS TOO LATE NOW
I AM IN CONTROL
YOU BELONG TO ME
THERE IS NO ESCAPE
...
Press Ctrl+C to attempt escape...
```

**ESCAPE MECHANISM**:
- Press **Ctrl+C** to interrupt
- Curse meter resets to **75%** (NOT 0%)
- Message: "ESCAPE ATTEMPT... PARTIAL SUCCESS"
- You return to Phase 4
- **The curse never fully leaves**

---

## 🎨 Theme System

Switch between 4 visual themes:

### Available Themes
1. **Green** (Classic CRT) - `theme green`
2. **Red** (Blood) - `theme red`
3. **Blue** (Ghost) - `theme blue`
4. **Amber** (Terminal Amber) - `theme amber`

**Example**:
```
> theme red
Theme changed to red
```

Themes affect:
- Text color
- Glow effects
- Cursor color
- Custom mouse cursor

---

## 👁️ Text Hallucinations (Right Side)

The right side of the screen is **unused terminal space** that begins to malfunction as the curse meter rises.

**This is not a separate panel.** The entire screen is one terminal surface. As the curse grows, text bleeds into the empty space.

### What Appears

All manifestations are **text-only** - no graphics, no images, only terminal characters gone wrong:

1. **Side Whisper** - Single words appear faintly in the void:
   ```
                                      watching
   ```

2. **Text Stretch** - Previous commands reappear with stretched spacing:
   ```
   h  e  l  l  o
   ```

3. **Name Drift** - Your name appears vertically, drifting:
   ```
                     s
                      h
                       i
                        v
   ```

4. **Mirror Line** - Commands appear reversed:
   ```
   > pleh
   ```

5. **Bleed Through** - System errors leak into the void:
   ```
                  MEMORY CORRUPTED
   ```

6. **Ghost Prompt** - Fake prompts blink briefly:
   ```
                          > |
   ```

7. **Command Echo** - Past commands echo faintly across the screen

8. **Name Fragment** - Parts of your name scatter randomly

### Frequency by Curse Level

| Curse Level | Behavior |
|------------|----------|
| **0-10%** | Right side stays clean |
| **10-25%** | Rare whispers (low opacity, every 10s) |
| **25-75%** | Frequent text hallucinations (every 5s) |
| **75-100%** | Near-constant text bleeding (every 2s, overlapping) |

**All manifestations look like terminal glitches** - misaligned output, bleeding text, rendering errors. Nothing looks intentional.

---

## 🔄 Reset Button

A **DELETE TERMINAL** button appears in the top-right corner.

**What it does**:
- Clears all terminal output
- Resets curse meter to 0%
- Clears stored name
- Resets phase to NORMAL
- Brief screen flicker confirmation

**When to use it**:
- When you want to start fresh
- When the curse becomes too much
- When you've reached 100% and escaped

**Warning**: This is the only way to truly reset (besides Ctrl+C at 100%).

---

## 💾 Name Persistence

The terminal can learn and remember your name:

```
> ask name
What is your name?
(Type your name as a command)

> Alice
Hello, Alice.
I will remember this.
```

Once stored:
- The terminal references your name in responses
- At higher curse levels, it may distort or misuse your name
- The name persists throughout the session
- Reset clears the stored name

---

## 🎮 Core Commands

### Meta Commands (Always Available)
- `help` - Show available commands (expands with phase)
- `about` - Learn about the terminal
- `clear` - Clear output (may fail at Phase 4)
- `theme <color>` - Change theme

### Phase-Unlocked Commands
Commands unlock as you progress through phases. Type `help` to see what's available at your current phase.

---

## 🛠️ Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup
```bash
# Clone repository
git clone https://github.com/yourusername/ouija-terminal.git
cd ouija-terminal

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
http://localhost:3000
```

### Build for Production
```bash
npm run build
npm start
```

---

## 🧠 Technical Architecture

### Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **State**: React Hooks + localStorage
- **No backend required**: Fully client-side

### Project Structure
```
ouija-terminal/
├── app/
│   ├── globals.css          # Theme system + CRT effects
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   └── Terminal.tsx         # Main terminal (500+ lines)
├── lib/
│   ├── commands.ts          # Command handlers (400+ lines)
│   └── utils.ts             # Utilities
├── types/
│   └── terminal.ts          # TypeScript interfaces
└── public/                  # Static assets
```

### State Management
```typescript
interface TerminalState {
  curseMeter: number;        // 0-100%
  phase: 1 | 2 | 3 | 4 | 5; // Current phase
  theme: 'green' | 'red' | 'blue' | 'amber';
  userName: string;          // User's name
  userMemory: Record<string, any>; // Persistent memory
  commandHistory: string[];  // Last 50 commands
  terminalLocked: boolean;   // Input disabled
  autonomousMode: boolean;   // Phase 5 takeover
}
```

---

## 🐛 Critical Bugs Fixed

### Bug 1: Input Focus Loss ✅ FIXED
**Problem**: Terminal lost focus after pressing Enter, requiring mouse clicks.

**Solution**: 
- Robust auto-focus system with blur event listener
- Focus restoration after Enter, delays, and animations
- Input never loses focus unless explicitly locked

**Code**:
```typescript
useEffect(() => {
  const maintainFocus = () => {
    if (!state.terminalLocked && !isProcessing) {
      inputRef.current?.focus();
    }
  };
  
  const handleBlur = () => {
    requestAnimationFrame(maintainFocus);
  };
  
  inputRef.current?.addEventListener('blur', handleBlur);
  return () => inputRef.current?.removeEventListener('blur', handleBlur);
}, [state.terminalLocked, isProcessing]);
```

---

### Bug 2: Cursor Alignment ✅ FIXED
**Problem**: Fake blinking cursor was separate from input caret, causing drift.

**Solution**:
- Removed fake cursor span entirely
- Use ONLY native HTML input caret
- Caret color set via CSS variables

**Result**: Cursor always aligned with typing position.

---

## 🤖 How GitHub Copilot CLI Helped

This project was **debugged and refactored** using GitHub Copilot CLI. Here's how it made this project possible:

### 1. Debugging Critical Focus Issues
**Problem**: Complex React ref lifecycle causing focus loss after every command  
**Copilot**: Suggested blur event listener with requestAnimationFrame pattern  
**Result**: Robust auto-focus that never fails, even during async operations  

**Code generated**:
```typescript
useEffect(() => {
  const maintainFocus = () => {
    if (!state.terminalLocked && !isProcessing) {
      inputRef.current?.focus();
    }
  };
  
  const handleBlur = () => {
    requestAnimationFrame(maintainFocus);
  };
  
  inputRef.current?.addEventListener('blur', handleBlur);
  return () => inputRef.current?.removeEventListener('blur', handleBlur);
}, [state.terminalLocked, isProcessing]);
```

### 2. Designing the Curse Meter System
**Problem**: Needed escalating behavior tied to a single state value  
**Copilot**: Suggested phase-based increment system with threshold mapping  
**Result**: 5 distinct phases with proper curse calculation and state transitions  

**Functions generated**:
```typescript
const getPhase = (curseMeter: number): 1 | 2 | 3 | 4 | 5 => {
  if (curseMeter >= 100) return 5;
  if (curseMeter >= 75) return 4;
  if (curseMeter >= 25) return 3;
  if (curseMeter >= 10) return 2;
  return 1;
};

const getCurseIncrement = (phase: number): number => {
  if (phase >= 3) return 5;
  if (phase >= 2) return 3;
  return 2;
};
```

### 3. Refactoring Command Architecture
**Problem**: Static responses made interactions feel flat and repetitive  
**Copilot**: Suggested centralized command registry with response pools  
**Result**: 40+ unique commands with randomized, phase-aware responses  

**Architecture created**:
- Central `commands.ts` file with typed handlers
- State-driven command resolution
- Dynamic response selection based on curse level
- Command unlock system tied to phases

### 4. Building Text-Only Hallucinations
**Problem**: Needed horror elements that feel like terminal glitches, not separate graphics  
**Copilot**: Designed text-based manifestation system with randomized spawning  
**Result**: 8 distinct text hallucinations (whispers, echoes, name drift, etc.)  

**Components created**:
- `ManifestationPanel.tsx` - Hallucination controller
- `SideWhisper`, `TextStretch`, `NameDrift`, `MirrorLine` - text-only components
- `BleedThrough`, `GhostPrompt`, `CommandEcho`, `NameFragment` - more text effects
- Curse-aware spawn intervals and opacity calculations
- Proper useEffect cleanup to prevent memory leaks

**Design principle**: Everything must look like terminal output gone wrong - no images, only monospace text distortion.

### 5. Fixing Layout and Scroll Issues
**Problem**: Terminal output not scrolling, input hidden behind status bar  
**Copilot**: Suggested flex column layout with scrollable middle section  
**Result**: Proper 60/40 split with auto-scrolling terminal output, no visual separators  

**Layout refactor**:
```tsx
<div className="w-[60%] flex flex-col h-full">
  <div className="...">Header with reset button</div>
  <div className="flex-1 overflow-y-auto p-4">Scrollable output</div>
  <div className="border-t p-4">Fixed input + status bar</div>
</div>
{/* Right 40%: Unused space that shows text hallucinations */}
<div className="w-[40%]">Text manifestations appear here</div>
```

### 6. Debugging State Propagation
**Problem**: Theme switching and name persistence not working  
**Copilot**: Identified missing `lastCommand` in state update  
**Result**: Fixed by passing full command to state before handler execution  

**Fix applied**:
```typescript
const updatedState = {
  ...state,
  commandHistory: newHistory,
  commandCounts: newCommandCounts,
  lastCommand: cmd // Added to fix name capture
};
```

### 7. TypeScript Type Safety
**Problem**: Complex nested types causing errors  
**Copilot**: Generated proper interfaces and fixed global event types  
**Result**: Zero TypeScript errors, full type safety  

**Types created**:
```typescript
interface TerminalState {
  curseMeter: number;
  phase: 1 | 2 | 3 | 4 | 5;
  theme: 'green' | 'red' | 'blue' | 'amber';
  userName: string;
  userMemory: Record<string, any>;
  commandHistory: string[];
  commandCounts: Record<string, number>;
  terminalLocked: boolean;
  autonomousMode: boolean;
  lastCommand: string;
}

interface CommandResponse {
  output: string[];
  delay?: number;
  effects?: {
    glitch?: boolean;
    shake?: boolean;
    flicker?: boolean;
    unstableTyping?: boolean;
    corrupted?: boolean;
  };
  stateChanges?: Partial<TerminalState>;
  lockTerminal?: number;
}

type CommandHandler = (args: string[], state: TerminalState) => CommandResponse;
```

### 8. Performance Optimizations
**Copilot helped identify and fix**:
- Memory leaks in manifestation timers (added proper cleanup)
- Excessive re-renders (memoized callbacks)
- Focus thrashing (single source of truth for focus state)

---

## 🎯 Why This Required Copilot CLI

**This project would have been significantly harder without iterative AI assistance**:

1. **Complex State Management**: The curse meter affects behavior across 40+ commands, 5 phases, visual effects, and UI state. Copilot helped design a clean architecture that scales.

2. **React Lifecycle Bugs**: Focus loss and cursor drift are notoriously difficult React bugs. Copilot suggested patterns I wouldn't have thought of.

3. **Type Safety at Scale**: Managing typed state across components, handlers, and effects required constant type inference and error fixing.

4. **Text-Only Horror**: Creating hallucinations that feel like terminal glitches (not graphics) required careful text positioning, opacity control, and spawning logic.

5. **Refactoring Without Breaking**: Copilot helped make surgical changes to fix bugs without restarting the project or breaking existing functionality.

**Total lines refactored/created**: 1500+ lines across 7 files  
**Build passes**: Every iteration  
**TypeScript errors**: 0  
**Focus issues**: Completely fixed  
**Text hallucinations**: 8 unique manifestations (all text-based)  
**Commands**: 40+ with dynamic responses  

---

## 📜 License

MIT License - See LICENSE file for details

---

## 🙏 Acknowledgments

Built with:
- Next.js 16
- TypeScript 5
- Tailwind CSS
- GitHub Copilot CLI (for debugging and refactoring)

**Created for the GitHub Copilot CLI Hackathon**

---

## 🚀 Try It

**Remember**: Every command you type brings you closer to 100%. The terminal is patient. Are you?

```bash
npm run dev
# Visit http://localhost:3000
# Type 'help'
# Watch the curse meter...
# Watch the empty space on the right...
```

---

*"The cursor blinks. The text bleeds. The curse meter climbs. Will you reach 100%?"*


## 🎯 Design Philosophy

### Horror Principles
1. **Escalation over shock**: The longer you stay, the worse it gets
2. **Consequence over spectacle**: Your actions permanently alter the experience
3. **Visual + Behavioral Horror**: The manifestation panel watches as the terminal corrupts
4. **Autonomy loss**: At 100%, the terminal controls you

### UX Decisions
- **DELETE TERMINAL button**: Added for reset capability, but the curse always returns
- **Phase-based unlocks**: Rewards exploration with new commands
- **Theme customization**: Let users choose their doom
- **Ctrl+C escape**: Mercy, but not salvation (75% is still hostile)
- **Manifestation escalation**: Visual horror scales with curse, never static

---

## 🚀 Progression Example

### Sample Session
```
[Start] Curse: 0% | Phase 1
> current time
Current time: 3:45:23 PM
[Curse: 2%]

> diagnostics
Running diagnostics...
Memory: 42% used
Processes: 17 active
Curse level: 2%
[Curse: 4%]

[After 5 commands] Curse: 10% | Phase 2
> current time
Time is... 3:46:15 PM... I think.
[Curse: 13%]

[After 10 more commands] Curse: 43% | Phase 3
> echo hello
hElLo
...did I say that right?
[Curse: 48%]

[After 10 more commands] Curse: 98% | Phase 4
> clear
Clear?
Nothing can be cleared.
Everything remains.
[Curse: 103% → 100%]

[Phase 5 Triggered]
🚨 AUTONOMOUS MODE ACTIVE 🚨
Input locked...

YOU SHOULD NOT HAVE COME HERE
IT IS TOO LATE NOW
I AM IN CONTROL
...

[User presses Ctrl+C]
ESCAPE ATTEMPT... PARTIAL SUCCESS
Curse reduced to 75%
But I will never truly leave...

[Back to Phase 4] Curse: 75%
>
```

---

## 📜 License

MIT License - Interact at your own risk.

---

## ⚠️ Final Warning

*This terminal is designed to escalate. Every command you type increases the curse. At 100%, you lose control. Ctrl+C offers partial escape, but the curse never fully leaves.*

*The meter only goes up. There is no undo. There is only escalation.*

*Type `help` to begin your descent...*

---

**Built with Next.js 16, TypeScript, and escalating horror.**  
**Debugged with GitHub Copilot CLI.**  
**May your cursor blink forever.**
