# 🎮 Quick Start Guide - The Ouija Terminal

## First Time Setup

```bash
# 1. Navigate to the project
cd ouija-terminal

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Open browser
# Visit http://localhost:3000
```

## 🎯 5-Minute Demo Path

### **Phase 1: Introduction (1 min)**
1. When the terminal loads, you'll see the ASCII art logo
2. Type: `about` → Learn what this is
3. Type: `help` → See all available commands

### **Phase 2: Gentle Exploration (1 min)**
4. Type: `whoami` → Question your identity
5. Type: `runes` → See ancient symbols (try it multiple times)
6. Type: `clear` → Clear the terminal

### **Phase 3: Summoning (2 min)**
7. Type: `summon spirit` → Call upon spirits
   - Try this 3-4 times to see different responses
   - Watch for screen shake/flicker (30% chance)
   - Notice curse level increasing in status bar
8. Type: `listen` → Hear whispers from beyond
   - Try multiple times for different whispers

### **Phase 4: The Descent (1 min)**
9. Type: `open portal` → **WARNING: This changes everything**
   - Screen will shake and flicker
   - Portal status appears in status bar
   - Curse level jumps significantly
10. Type: `exit` → Try to leave...
    - Portal makes escape impossible
    - Screen effects intensify

### **Bonus: Reset**
11. Type: `reset` → Banish spirits and start fresh

## 🎨 Things to Notice

### **Visual Effects**
- **Scanlines**: Subtle horizontal lines across screen
- **Text Glow**: Green phosphor effect
- **Cursor**: Blinking block cursor
- **Status Bar**: Tracks session count and curse level

### **Progressive Horror**
- Commands increase curse level
- Higher curse = more corruption
- Portal opening is permanent (until reset)
- Some responses change based on state

### **Random Elements**
- Spirit messages vary each time
- Whispers change randomly
- Runes display different symbols
- Identity responses rotate

## 🔍 Testing Checklist

### **Basic Functionality**
- [ ] Terminal loads without errors
- [ ] Input accepts text
- [ ] Commands execute on Enter
- [ ] Output displays correctly
- [ ] Clear command works
- [ ] Help lists all commands

### **Command Responses**
- [ ] `whoami` gives identity responses
- [ ] `summon spirit` shows random spirits
- [ ] `open portal` triggers effects
- [ ] `listen` displays whispers
- [ ] `runes` shows symbols
- [ ] `exit` refuses to close
- [ ] `about` explains terminal
- [ ] `reset` clears state

### **Visual Effects**
- [ ] Scanlines visible
- [ ] Text has green glow
- [ ] Cursor blinks
- [ ] Glitch animation triggers
- [ ] Screen shake works
- [ ] Flicker effect appears

### **State Management**
- [ ] Curse level increases
- [ ] Portal status updates
- [ ] Session count tracks visits
- [ ] Refresh preserves state
- [ ] Reset clears everything

### **Edge Cases**
- [ ] Unknown commands handled
- [ ] Empty input ignored
- [ ] Multiple spaces work
- [ ] Case insensitive commands
- [ ] Multi-word commands (summon spirit)

## 🐛 Known Behaviors (Not Bugs)

1. **Portal is permanent**: Once opened, portal stays open until reset
2. **Exit always fails**: By design, you cannot leave
3. **Random effects**: Not all commands trigger effects every time
4. **Curse builds up**: Intentional progression system
5. **No command history**: Navigation with arrows not implemented

## 💡 Easter Eggs to Discover

- Try commands multiple times for variety
- Watch status bar changes
- Notice text corruption at high curse levels
- Commands affect future responses
- Some effects are rare (keep trying)

## 🎯 Developer Testing

### **Performance**
```bash
# Check build
npm run build

# Should complete without errors
# Check for TypeScript issues
```

### **Console Logs**
- Open browser DevTools
- Check for errors
- localStorage should persist state

### **State Inspection**
```javascript
// In browser console
localStorage.getItem('ouija-terminal-state')
// See current state JSON
```

## 📊 Expected Behavior

### **First Visit**
- Session count: 1
- Curse level: 0
- No portal
- No spirits

### **After Summoning**
- Curse level: 1
- Spirit awakened: true
- Random spirit message

### **After Portal**
- Curse level: 3+
- Portal opened: true
- Cannot exit
- Effects intensify

### **After Reset**
- Curse level: 0
- Portal closed
- Spirits banished
- Session count preserved

## 🚨 Troubleshooting

### **Terminal not loading?**
- Check console for errors
- Ensure dev server is running
- Try hard refresh (Ctrl+Shift+R)

### **Commands not working?**
- Check spelling
- Commands are case-insensitive
- Try `help` to verify

### **Effects not triggering?**
- Some effects are random
- Requires certain curse levels
- Try the command multiple times

### **State not persisting?**
- Check browser localStorage enabled
- Try in different browser
- Clear cache and reload

## 🎬 Demo Script for Presentation

> "Welcome to The Ouija Terminal - a browser-based horror experience."
>
> **[Type: about]**
> "This is a cursed interface to the other side."
>
> **[Type: whoami]**
> "Even your identity is uncertain here."
>
> **[Type: summon spirit]**
> "The spirits respond... unpredictably."
>
> **[Type: listen]**
> "Whispers from beyond the veil."
>
> **[Type: open portal]**
> "Some doors should not be opened..."
>
> **[Type: exit]**
> "There is no escape. The terminal has you."
>
> **[Type: reset]**
> "But you can always try to start again."

---

## 📞 Questions?

Check the main README.md for:
- Full documentation
- Architecture details
- Customization guide
- GitHub Copilot CLI usage

**The terminal awaits. Type `help` if you dare...**
