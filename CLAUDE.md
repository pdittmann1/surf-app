# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Environment

Node.js is managed via nvm. Always source it before running npm/node commands:

```sh
export NVM_DIR="$HOME/.nvm" && source "$NVM_DIR/nvm.sh"
```

## Commands

```sh
npm start          # Start Expo dev server (scan QR with Expo Go app)
npm run ios        # Launch in iOS simulator
npm run android    # Launch in Android emulator
npm run web        # Launch in browser
```

There is no linter or test runner configured yet.

## Architecture

This is a bare-bones Expo (React Native) app using the **classic single-file entry point** pattern — not Expo Router:

- `index.ts` — registers `App` as the root component via `expo/AppEntry`
- `App.tsx` — the entire app UI lives here for now; this is where feature development starts
- `app.json` — Expo config (name, icons, splash, platform overrides); the new React Native architecture (`newArchEnabled: true`) is on

TypeScript strict mode is enabled (`tsconfig.json` extends `expo/tsconfig.base`).
