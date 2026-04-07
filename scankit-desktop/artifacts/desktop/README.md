# ScanKit Desktop App

Electron-based desktop app for Windows and Mac.

## Build Kaise Karein

### Requirements
- Node.js 18+
- npm

### Install dependencies
```bash
cd artifacts/desktop
npm install
```

### Windows (.exe) build
```bash
npm run build:win
```
Output: `dist/ScanKit Setup 1.0.0.exe`

### Mac (.dmg) build
```bash
npm run build:mac
```
Output: `dist/ScanKit-1.0.0.dmg`

## GitHub Actions se Auto Build

1. Is code ko GitHub pe push karo
2. Tag banao: `git tag v1.0.0 && git push --tags`
3. GitHub Actions automatically Windows + Mac build karega
4. Releases tab mein `.exe` aur `.dmg` milenge

## Icons Add Karna

`build/` folder mein yeh files daalo:
- `icon.png` — 512x512 PNG (Mac ke liye)
- `icon.ico` — Windows icon
- `icon.icns` — Mac icon
- `dmg-background.png` — 660x400 PNG (optional, Mac DMG background)
