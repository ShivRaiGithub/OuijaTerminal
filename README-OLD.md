# 👻 The Ouija Terminal

A browser-based horror terminal experience that bridges the gap between the living and the digital dead. Type commands into a cursed CRT terminal and interact with spirits, open portals, and descend into madness.

**This terminal is ALIVE. It remembers. It learns. It escalates.**

![License](https://img.shields.io/badge/license-MIT-green)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

## 🎭 About

**The Ouija Terminal** is an immersive, browser-based horror experience disguised as a command-line interface. Unlike traditional static terminal simulators, this experience **evolves with every interaction**. The more you use it, the more dangerous it becomes.

### What Makes This Different

- **Dynamic Curse System**: Every command you type increases the curse level
- **Unique Responses**: No command ever returns the same response twice
- **Escalating Danger**: The terminal becomes more hostile and unpredictable as the curse grows
- **Permanent Consequences**: Your actions have lasting effects that persist across sessions
- **Living Behavior**: Commands mutate, lie, and refuse based on your history
- **Psychological Horror**: No jump scares—just creeping, inevitable dread

The experience feels alive. The spirits are listening. Some doors cannot be closed.

---

## ⚠️ THE CURSE METER — HOW DANGER ESCALATES

### What Is The Curse Meter?

The **Curse Meter** is the core mechanic that makes The Ouija Terminal feel alive and dangerous. It's a hidden score that **NEVER decreases** (except via `reset`) and governs how the terminal behaves.

**Every single command** you type increases the curse level by a small random amount. Some commands increase it more than others. There is **no maximum cap**.

### Curse Level Thresholds

The terminal's behavior changes dramatically at different curse levels:

#### 🟢 CURSE 0–5: **Eerie Calm**
- Spirits respond normally but unsettlingly
- Occasional visual glitches
- Responses feel ominous but controlled

#### 🟡 CURSE 6–12: **Creeping Dread**
- Text begins to glitch and corrupt
- Whispers multiply
- Screen flickers more frequently
- Commands may delay before responding
- Spirits remember your past commands

#### 🟠 CURSE 13–20: **Reality Breakdown**
- The terminal starts **lying** to you
- Commands return altered or false information
- `help` may hide or fabricate commands
- Text corruption intensifies
- Visual effects become oppressive
- Random unsolicited messages appear
- The cursor becomes unstable

#### 🔴 CURSE 21+: **Terminal Hostage**
- The terminal becomes **actively hostile**
- Commands may refuse to execute
- `exit` can lock the terminal temporarily
- `reset` may ask for confirmation... then ignore it
- Aggressive glitches and screen shake
- The terminal injects threatening messages
- You are no longer in control

### Why This Matters

**Traditional terminals are dead interfaces.** They execute commands and return output. That's it.

**The Ouija Terminal is alive.** It:
- **Remembers** how many times you've used each command
- **Adapts** its responses based on your history
- **Escalates** its behavior the longer you interact
- **Punishes** curiosity with permanent consequences
- **Evolves** commands to behave differently at high curse levels

This is not a simulator. **It's an experience that reacts to you.**

### Command-Specific Curse Increments

| Command | Base Curse Increase | Notes |
|---------|-------------------|-------|
| `help` | +0.3 | Small but unavoidable |
| `clear` | +0.2 | May resist at high levels |
| `whoami` | +0.4 | References past usage |
| `summon spirit` | +1.2 | **High risk** — after 3 uses, forces portal open |
| `open portal` | +2.5 | **Point of no return** |
| `listen` | +0.6 | More whispers at higher levels |
| `runes` | +0.5 | Visual intensity scales |
| `exit` | +0.8 | Can lock terminal at 20+ |
| `about` | +0.3 | Corrupts at 18+ |
| `reset` | Resets to 0 | **Except** at 20+ curse, where it refuses |
| `unknown` | +0.4 | Punishes experimentation |

---

## ✨ Features

### 🖥️ Terminal Experience
- **Full-screen retro terminal UI** with authentic CRT effects
- **Auto-refocusing input** that never loses cursor (critical fix)
- **Blinking cursor** that becomes unstable at high curse levels
- **Scanline overlay** for that vintage monitor feel
- **Custom ghost cursor** that follows your mouse
- **Command history** tracked across all sessions
- **Persistent state** in localStorage — the terminal remembers you

### 👻 Horror Mechanics (All New/Enhanced)
- **✨ Curse Meter System**: Automatic escalation with every command
- **✨ No Repeated Responses**: Intelligent response pools with memory
- **✨ Command Mutation**: Commands change behavior based on curse level
- **✨ Terminal Lock**: High-curse commands can freeze input temporarily
- **✨ Unsolicited Messages**: The terminal speaks without being prompted
- **✨ Usage Tracking**: Commands reference how many times you've used them
- **✨ Rare Events (1-3%)**: Unexpected overrides that change everything
- **Visual glitches** that increase in frequency with curse level
- **Screen shake and flicker** that become relentless
- **Text corruption** at high curse levels (Zalgo-style)
- **Unstable typing speed** that varies with curse level

### 🎮 Interactive Commands
All commands now have **multiple unique responses** and **curse-level-dependent behavior**:

- `help` - View all available commands (may lie at high curse)
- `clear` - Clear the terminal output (may resist)
- `whoami` - Question your identity (references usage count)
- `summon spirit` - Call upon the spirits (**mutates after 3 uses**)
- `open portal` - Open a gateway to the other side (**permanent**)
- `listen` - Hear whispers from beyond (more at high curse)
- `runes` - Display ancient occult symbols
- `exit` - Try to leave (**can lock terminal at 20+ curse**)
- `about` - Learn about this cursed realm (corrupts at 18+)
- `reset` - Banish the spirits and reset state (**refuses at 20+ curse**)

### 🎨 Escalating Visual Effects
- **Scanlines**: Authentic CRT monitor overlay
- **Text glow**: Phosphor screen effect
- **Dynamic glitch frequency**: Tied to curse level
- **Automated flicker**: Increases with curse (8+ starts, intensifies)
- **Random corruption**: Text breaks down unpredictably
- **Cursor instability**: Cursor changes shape/behavior at 20+ curse
- **Status bar warnings**: Visual indicators for curse thresholds
- **Color shifts**: Status bar turns orange (10+) then red (20+)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ouija-terminal.git
   cd ouija-terminal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

5. **Type commands and interact with the void**

### Build for Production

```bash
npm run build
npm start
```

---

## 🧠 Technical Architecture

### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **State**: React Hooks + localStorage
- **No backend required**: Fully client-side

### Project Structure

```
ouija-terminal/
├── app/
│   ├── globals.css          # Global styles + CRT effects
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page (renders Terminal)
├── components/
│   └── Terminal.tsx         # Main terminal component
├── lib/
│   ├── commands.ts          # Command registry and handlers
│   └── utils.ts             # Utility functions
├── types/
│   └── terminal.ts          # TypeScript interfaces
└── public/                  # Static assets
```

### Key Components

#### `Terminal.tsx` — The Living Core
The main component orchestrating the curse system:
- **Auto-focus input handling** (CRITICAL FIX): Input regains focus after every command
- **Command history tracking**: Remembers every command you've ever typed
- **Command count tracking**: Knows how many times you've used each command
- **Curse escalation automation**: Automatic visual effects tied to curse level
- **Terminal lock mechanism**: Can freeze input when spirits take control
- **Unsolicited message injection**: Terminal speaks without prompting at high curse
- **State persistence**: Everything saved to localStorage
- **Escalating visual effects**: Flicker and glitch frequency increase with curse

#### `commands.ts` — The Mutating Brain
Completely refactored command system with:
- **Response pools**: Each command has 5-10 unique responses
- **Last response tracking**: Ensures no repeated responses
- **Curse-dependent behavior**: Commands change at different curse thresholds
- **Command mutation**: Usage count triggers permanent changes (e.g., summon spirit)
- **Rare event system**: 1-3% chance overrides for unexpected outcomes
- **Text corruption utility**: Dynamic text degradation
- **Unique response selector**: Guarantees variety
- **State-aware handlers**: Commands reference your history

#### State System (Enhanced)
```typescript
interface TerminalState {
  portalOpened: boolean;        // Has the portal been opened?
  spiritAwakened: boolean;      // Have spirits been summoned?
  sessionCount: number;         // How many times visited?
  lastCommand: string;          // Most recent command
  curseLevel: number;           // ⚠️ Core mechanic - no max cap
  commandHistory: string[];     // ✨ Full command history (last 50)
  commandCounts: Record<...>;   // ✨ Usage count per command
  lastResponses: Record<...>;   // ✨ Prevents response repetition
  terminalLocked: boolean;      // ✨ Can terminal accept input?
}
```

---

## 🎯 Design Philosophy

### Horror Principles
1. **Escalation over shock**: The longer you stay, the worse it gets
2. **Consequence over spectacle**: Your actions permanently alter the experience
3. **Unpredictability over patterns**: No two sessions are the same
4. **Agency with cost**: You can type anything, but everything has a price
5. **Unreliable narrator**: The terminal lies, especially at high curse levels

### Why The Curse System Works
Traditional horror games have discrete "levels" or "chapters." The Ouija Terminal has **continuous escalation** that:
- Makes every interaction feel dangerous
- Rewards (or punishes) exploration
- Creates emergent narratives from player behavior
- Never lets you feel safe
- Ensures no two playthroughs are identical

**The terminal doesn't reset between commands. It remembers everything. And it gets angrier.**

---

## 🤖 How GitHub Copilot CLI Saved This Project

This project was **debugged and massively upgraded** using **GitHub Copilot CLI** in an iterative development workflow. Without Copilot CLI, implementing this level of stateful complexity would have been prohibitively difficult.

### Critical Problems Solved With Copilot CLI

#### 1. **🐛 Input Focus Bug (CRITICAL)**

**Problem**: After pressing Enter, the terminal lost focus and required a mouse click to continue typing. This broke the entire experience.

**Copilot CLI Solution**:
```bash
# Used Copilot to debug React ref lifecycle issues
"Why does my input lose focus after async command execution?"

# Copilot suggested:
- Using useRef properly for input element
- Calling .focus() in setTimeout after state updates
- Handling focus restoration after all async operations
```

**Result**: Input now **always** refocuses automatically after commands, delays, and animations.

---

#### 2. **🎨 Designing The Curse Meter**

**Problem**: Needed a system where:
- Every command increments curse
- Curse affects behavior at specific thresholds
- State persists across sessions
- Commands change based on curse level

**Copilot CLI Solution**:
```bash
# Asked Copilot for architecture advice
"Design a state system that tracks progressive horror intensity"

# Copilot provided:
- TypeScript interface structure
- localStorage persistence pattern
- Threshold-based behavior switching
- State update patterns with React hooks
```

**Result**: Robust curse system with escalating effects and persistent state.

---

#### 3. **🔄 Preventing Repeated Responses**

**Problem**: Commands returned the same text repeatedly, making the experience feel static and scripted.

**Copilot CLI Solution**:
```bash
# Copilot helped design response variation system
"How do I ensure a function never returns the same response twice?"

# Copilot suggested:
- Response pools (arrays of possible outputs)
- Last-index tracking in state
- Selection algorithm that excludes previous choice
- Fallback for single-item pools
```

**Implementation**:
```typescript
function selectUnique(pool: string[], lastIndex: number | undefined) {
  let index = Math.floor(Math.random() * pool.length);
  
  if (lastIndex !== undefined && pool.length > 1) {
    while (index === lastIndex) {
      index = Math.floor(Math.random() * pool.length);
    }
  }
  
  return { text: pool[index], index };
}
```

**Result**: Every command feels fresh and unpredictable.

---

#### 4. **🧠 Command History & Mutation**

**Problem**: Wanted commands to:
- Reference how many times they've been used
- Trigger permanent changes after N uses
- Know what commands were typed before

**Copilot CLI Solution**:
```bash
# Asked Copilot for state tracking patterns
"Track command usage count and history in React state"

# Copilot generated:
- commandCounts: Record<string, number> pattern
- commandHistory: string[] with slicing for memory
- State update logic that increments counts
- Conditional logic based on counts
```

**Example**:
```typescript
const counts = state.commandCounts['summon'] || 0;

if (counts >= 3 && !state.portalOpened) {
  // Force portal open after 3rd summon
  return { /* hostile takeover */ };
}
```

**Result**: Commands evolve based on player behavior.

---

#### 5. **⚡ Performance & Effect Timing**

**Problem**: Multiple async operations, timeouts, and state updates caused:
- Race conditions
- Effect cleanup issues
- Memory leaks from unmounted component timers

**Copilot CLI Solution**:
```bash
# Debugging effect lifecycle
"React useEffect cleanup for setInterval with dynamic dependencies"

# Copilot provided:
- Proper cleanup return functions
- Dependency array management
- setTimeout vs setInterval trade-offs
- Effect isolation patterns
```

**Result**: Smooth animations, no memory leaks, reliable effect triggers.

---

#### 6. **📝 TypeScript Type Safety**

**Problem**: Complex nested state and response objects caused type errors.

**Copilot CLI Solution**:
```bash
# Type definition assistance
"Create TypeScript interface for command handler with optional effects"

# Copilot generated complete interfaces:
- CommandResponse with optional fields
- CommandHandler function signature
- Partial<TerminalState> for state updates
- Proper typing for effect objects
```

**Result**: Full type safety with zero `any` types.

---

### Specific Copilot CLI Usage Examples

#### Code Generation
```bash
# Generate command handler boilerplate
gh copilot suggest "Create a TypeScript function that returns different 
responses based on a numeric threshold"

# Generate corruption utility
gh copilot suggest "Write a function that randomly corrupts text strings"
```

#### Refactoring
```bash
# Consolidate command logic
gh copilot suggest "Refactor this switch statement into a registry pattern"

# Optimize state updates
gh copilot suggest "Combine multiple setState calls into single update"
```

#### Debugging
```bash
# Fix focus issues
gh copilot explain "Why does input.current.focus() not work after setState"

# Fix effect timing
gh copilot suggest "How to call focus after all async operations complete"
```

---

### What Copilot CLI Excelled At

✅ **Architectural patterns**: Suggested registry pattern for commands  
✅ **State management**: Designed curse meter and tracking system  
✅ **TypeScript interfaces**: Generated all type definitions  
✅ **React hooks**: Proper useEffect, useRef, useState usage  
✅ **Async flow control**: Handling delays, focus, and state updates  
✅ **Bug diagnosis**: Identified focus loss root cause immediately  
✅ **Code refactoring**: Cleaned up repetitive command handlers  
✅ **Performance optimization**: Effect cleanup and dependency management  

### What Still Required Human Creativity

🎨 **Horror narrative**: Spirit responses, whispers, and lore  
🎭 **UX design**: Curse thresholds and escalation pacing  
🎯 **Rare event design**: 1-3% override behaviors  
🌟 **Visual effect choreography**: When glitches trigger and why  
⚡ **Curse increment tuning**: Balancing progression speed  

---

### The Iterative Process

This project demonstrates **true AI-assisted development**:

1. **Identify problem** (e.g., input loses focus)
2. **Ask Copilot CLI** for solution approaches
3. **Implement** suggested pattern
4. **Test** in development
5. **Refine** with Copilot's help
6. **Document** what was learned

**This cycle repeated 20+ times during the upgrade.**

Without Copilot CLI:
- Focus bug would have taken hours to debug
- Curse system architecture would be fragile
- No response variation system
- Manual TypeScript type wrangling
- More bugs, less features

**With Copilot CLI:**
- All critical bugs fixed
- Advanced stateful behavior
- Clean, maintainable code
- Full TypeScript safety
- Comprehensive documentation

---

## 🎮 Gameplay Tips

1. **Start with `help`** to see available commands (but remember: it may lie later)
2. **Watch the status bar** - Curse level is always visible
3. **Every command has consequences** - Curse NEVER decreases (except `reset`)
4. **Commands evolve** - Try the same command multiple times
5. **Thresholds matter**:
   - Under 5: Relatively safe exploration
   - 6-12: Things get weird
   - 13-20: Reality breaks down
   - 21+: You are no longer in control
6. **Opening the portal is permanent** - Think carefully
7. **Summoning spirits 3+ times** has special consequences
8. **The terminal remembers everything** - Even after closing the tab
9. **There are rare events (1-3%)** - Sometimes commands override normal behavior
10. **At high curse levels**:
    - `help` may lie or hide commands
    - `exit` may lock the terminal
    - `reset` may refuse to work
    - `clear` may not clear
    - The terminal speaks without prompting

---

## 🔮 Easter Eggs & Secrets

The curse system creates emergent horror:

- **Command repetition tracking**: Use the same command 5+ times and see what happens
- **Curse thresholds unlock new behaviors**: Cross 13, 18, or 21 for permanent changes
- **Rare event overrides**: Some commands have 1-3% chance to do something unexpected
- **Terminal lock**: Get to 20+ curse and try to `exit`
- **Forced portal opening**: Summon spirits too many times
- **Hostile reset**: Try to reset at 21+ curse
- **Unsolicited messages**: At high curse, the terminal speaks between your commands
- **Session count**: Return multiple times and see references to past visits

*The spirits won't tell you everything. Experimentation is dangerous but rewarding.*

---

## 🛠️ Customization

### Adjusting Curse Progression

Edit `lib/commands.ts` to tune the experience:

```typescript
// Change base curse increments per command
function getCurseIncrement(baseIncrement: number, rare = false): number {
  if (rare) return baseIncrement * 2;
  return baseIncrement + Math.random() * 0.5; // Adjust randomness here
}

// Modify thresholds in command handlers
if (state.curseLevel > 20) {  // Change threshold value
  // Hostile behavior
}
```

### Adding New Commands

```typescript
const myCommand: CommandHandler = (args, state) => {
  const baseCurse = getCurseIncrement(1.0); // Set base increment
  
  // Define response pools
  const responses = [
    ['Response A', 'More context'],
    ['Response B', 'Different outcome'],
  ];
  
  // Select unique response
  const pool = responses[Math.floor(Math.random() * responses.length)];
  
  return {
    output: pool,
    delay: 1000,
    effects: { glitch: true },
    stateChanges: { curseLevel: state.curseLevel + baseCurse }
  };
};

// Register it
export const commands: Record<string, CommandHandler> = {
  // ... existing commands
  'my command': myCommand,
};
```

### Visual Customization

Edit `app/globals.css`:
- Change `--terminal-green` to any color
- Adjust scanline density
- Modify glitch animation intensity
- Tweak flicker timing

---

## 🚧 Future Enhancements

- [ ] Command history navigation (↑/↓ arrows)
- [ ] Sound effects and ambient audio that intensify with curse
- [ ] Multiple endings based on curse level when closing
- [ ] More hidden commands unlocked by progression
- [ ] Multiplayer séance mode (shared curse meter)
- [ ] Exportable terminal session logs
- [ ] Custom themes (amber, white phosphor, blood red)
- [ ] Achievements for reaching curse milestones
- [ ] "New Game+" mode with starting curse level

---

## 📜 License

MIT License - Feel free to summon spirits in your own projects.

---

## 🙏 Acknowledgments

- Inspired by classic terminal interfaces and occult aesthetics
- CRT effects inspired by early computing nostalgia
- Horror mechanics influenced by psychological horror games like Doki Doki Literature Club and Pony Island
- Built with ❤️ and a touch of darkness
- **Debugged and upgraded with GitHub Copilot CLI** — this project would not exist in its current form without AI-assisted development

---

## ⚠️ Warning

*This terminal is a work of fiction. No actual spirits were summoned in the making of this project. Probably.*

*Side effects may include: existential dread, questioning reality, wanting to type in green text forever, compulsive `reset` usage.*

---

## 📞 Contact

Built as a demonstration of Next.js, TypeScript, and **iterative AI-assisted development with GitHub Copilot CLI**.

This project proves that:
1. **AI can solve critical bugs** (input focus issue)
2. **AI can architect complex systems** (curse meter, state tracking)
3. **AI can refactor at scale** (command system overhaul)
4. **Human creativity + AI execution = Impossible made possible**

---

**Remember**: The terminal is always listening. Every command leaves a mark. Some doors should remain closed.

**The curse never forgets. The curse never forgives. The curse only grows.**

*Type `help` if you dare to begin...*
