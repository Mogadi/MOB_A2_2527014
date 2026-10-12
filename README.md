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

Android:

```bash
npx expo start --android
```

Web preview:

```bash
npx expo start --web
```

## EAS build

The preview profile in `eas.json` produces an installable Android APK.

```bash
npx eas-cli login
npx eas-cli build -p android --profile preview
```

Install that APK on a phone and open it without Expo Go.

## Tested device

Physical-device results, including Airplane Mode, belong in `evidence/MOB_A2_2527014_TEST_LOG.pdf` after the APK is installed. Fill in the phone model and Android version there before submission.

## Release record

- Final commit hash: record this from `git rev-parse HEAD` after the final commit
- GitHub repository: `MOB_A2_2527014`
- Release: tag `v1.0.0` and attach `MOB_A2_2527014.apk` and `MOB_A2_2527014_DEMO.mp4`
- Release link and APK link: add the GitHub release URLs after the release is published

## Known limitations

- Project descriptions are student backend work. Replace them in `src/data/portfolio.ts` if the final titles differ.
- The APK is produced by EAS Build on your Expo account. This repository does not contain the APK.
- The demonstration video is recorded on a physical phone after the APK is installed.
- Optional website links need a connection. The rest of the portfolio does not.

## Repository evidence

- `docs/MOB_A2_2527014_UIUX.pdf`
- `evidence/MOB_A2_2527014_TEST_LOG.pdf`
- `evidence/MOB_A2_2527014_DECLARATION.pdf`
- `evidence/AI_USE.md`
