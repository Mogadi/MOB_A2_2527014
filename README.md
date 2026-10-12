My name is Mohammed Osama Hasan Hossein.

Registration number: 25/27014

App name: MOHHPortfolio

Verification code: MOB-A2-7014

Android package: rw.ac.ines.ug2527014.mohhportfolio

## Purpose

MOHHPortfolio is an offline Android portfolio for a recruiter. It introduces Mohammed Osama Hasan Hossein, a Software Engineering student at INES-Ruhengeri, and shows backend work with Python, Node.js, Linux, and Git.

## Features

- Home screen with the required introduction, profile image, headline, biography, and verification code
- Skills list and an education timeline
- Two backend projects, each with a detail screen for the problem, contribution, and technology
- Profile editor with validation, field messages, and a blocked invalid save
- Camera or gallery selection, preview, replace, and remove for a profile image and a verification card
- Local save and reset with AsyncStorage, restored after the app restarts
- About screen with the app name, student name, registration number, verification code, version, and data-use statement
- Core screens work in Airplane Mode. Email, LinkedIn, and WhatsApp are marked Needs a connection

## Setup and run

```bash
npm install
npx expo start
```

Android development build:

```bash
npx expo run:android
```

Web preview:

```bash
npx expo start --web
```

## EAS build

The preview profile in `eas.json` produces an installable Android APK on an Expo account.

```bash
npx eas-cli login
npx eas-cli build -p android --profile preview
```

Install that APK on a phone and open it without Expo Go.

## Tested device

Tested on 12 October 2026 in BlueStacks App Player 5.22. The physical phone runs an Android version that is too old to install this APK, so the standalone APK was installed and tested in BlueStacks instead. Every check passed, including Airplane Mode. The record is in `evidence/MOB_A2_2527014_TEST_LOG.pdf`.

## Release record

- GitHub repository: https://github.com/Mogadi/MOB_A2_2527014
- Release: https://github.com/Mogadi/MOB_A2_2527014/releases/tag/v1.0.0
- APK: https://github.com/Mogadi/MOB_A2_2527014/releases/download/v1.0.0/MOB_A2_2527014.apk
- Final commit hash: the latest commit on `master`, which records this BlueStacks test
- The release APK is a standalone arm64 build. It includes the JavaScript bundle and opens without Expo Go.
- Demonstration video: `MOB_A2_2527014_DEMO.mp4` is recorded on a phone and attached to the same release. It is not stored in this repository.

## Known limitations

- Project descriptions are student backend work. Replace them in `src/data/portfolio.ts` if the final titles differ.
- The APK is attached to the GitHub release. This repository does not contain the APK binary.
- The demonstration video has to be recorded on a physical phone. It must be continuous, unedited, and no longer than two minutes.
- Optional website links need a connection. The rest of the portfolio does not.

## Repository evidence

- `docs/MOB_A2_2527014_UIUX.pdf`
- `evidence/MOB_A2_2527014_TEST_LOG.pdf`
- `evidence/MOB_A2_2527014_DECLARATION.pdf`
- `evidence/AI_USE.md`
