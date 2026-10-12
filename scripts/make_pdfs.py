#!/usr/bin/env python3
"""Write the UI/UX, test log, and declaration PDFs required by the assignment."""

from pathlib import Path

from reportlab.lib.colors import Color, white
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

ROOT = Path("/home/muhammad/Downloads/Uni/Individual_app")
DOCS = ROOT / "docs"
EVIDENCE = ROOT / "evidence"

pdfmetrics.registerFont(TTFont("Serif", "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"))
pdfmetrics.registerFont(TTFont("SerifBold", "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf"))
pdfmetrics.registerFont(TTFont("Sans", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("SansBold", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"))

INK = Color(28 / 255, 20 / 255, 16 / 255)
PAPER = Color(244 / 255, 239 / 255, 230 / 255)
TERR = Color(140 / 255, 52 / 255, 24 / 255)
MUTED = Color(92 / 255, 83 / 255, 76 / 255)
OLIVE = Color(36 / 255, 50 / 255, 38 / 255)
LINE = Color(226 / 255, 216 / 255, 204 / 255)
CARD = Color(1, 252 / 255, 247 / 255)


def header(c: canvas.Canvas, page: str, title: str) -> None:
    width, height = A4
    c.setFillColor(INK)
    c.rect(0, height - 36, width, 36, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("SansBold", 9)
    c.drawString(36, height - 23, "MOHHPortfolio  ·  MOB_A2_2527014")
    c.drawRightString(width - 36, height - 23, page)
    c.setFillColor(INK)
    c.setFont("SerifBold", 16)
    c.drawString(36, height - 64, title)


def footer(c: canvas.Canvas, number: int, total: int) -> None:
    c.setFillColor(MUTED)
    c.setFont("Sans", 8)
    c.drawString(36, 28, "Mohammed Osama Hasan Hossein  ·  25/27014  ·  MOB-A2-7014")
    c.drawRightString(A4[0] - 36, 28, f"{number} / {total}")


def paragraph(c: canvas.Canvas, text: str, x: float, y: float, width: float, font="Sans", size=10, leading=14, color=INK) -> float:
    c.setFont(font, size)
    c.setFillColor(color)
    words = text.split()
    line = ""
    for word in words:
        trial = word if not line else f"{line} {word}"
        if c.stringWidth(trial, font, size) <= width:
            line = trial
        else:
            c.drawString(x, y, line)
            y -= leading
            line = word
    if line:
        c.drawString(x, y, line)
        y -= leading
    return y


def phone(c: canvas.Canvas, x: float, y: float, w: float, h: float, caption: str, lines: list[str]) -> None:
    c.setStrokeColor(INK)
    c.setFillColor(CARD)
    c.setLineWidth(1.2)
    c.roundRect(x, y, w, h, 10, fill=1, stroke=1)
    c.setFillColor(INK)
    c.rect(x, y + h - 22, w, 22, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("SansBold", 8)
    c.drawString(x + 8, y + h - 15, caption)
    text_y = y + h - 40
    c.setFillColor(INK)
    for line in lines:
        c.setFont("Sans", 8)
        c.drawString(x + 8, text_y, line[:42])
        text_y -= 12


def build_uiux() -> None:
    path = DOCS / "MOB_A2_2527014_UIUX.pdf"
    c = canvas.Canvas(str(path), pagesize=A4)
    total = 6
    width, height = A4

    header(c, "Page 1", "Identity and concept")
    y = height - 92
    c.setFont("SerifBold", 13)
    c.setFillColor(INK)
    c.drawString(36, y, "My name is Mohammed Osama Hasan Hossein.")
    y -= 28
    rows = [
        ("App name", "MOHHPortfolio, from the initials M.O.H.H."),
        ("Student", "Mohammed Osama Hasan Hossein"),
        ("Registration", "25/27014"),
        ("Verification code", "MOB-A2-7014"),
        ("Package", "rw.ac.ines.ug2527014.mohhportfolio"),
        ("Intended recruiter", "A recruiter for an internship or a first backend role"),
        ("Portfolio focus", "Backend development: Python, Node.js, Linux, and Git"),
    ]
    for label, value in rows:
        c.setFont("SansBold", 10)
        c.setFillColor(TERR)
        c.drawString(36, y, label)
        c.setFont("Sans", 10)
        c.setFillColor(INK)
        c.drawString(170, y, value)
        y -= 18
    y -= 8
    y = paragraph(
        c,
        "The app replaces a paper CV for a short meeting. The recruiter installs one APK, opens it without Expo Go, and can read the introduction, two backend projects, and contact status while the phone is offline.",
        36,
        y,
        width - 72,
    )
    y -= 8
    y = paragraph(
        c,
        "Visual direction: the colors come from the live portfolio at mohammedosamaportfolio.vercel.app. The ground is void black #03070E, cards are deep navy, body text is off-white, secondary text is dust blue #9BCDDD, and the only accent is gold #A5743D. The layout stays in one column so a narrow Android phone and a larger system text size can scroll instead of clipping.",
        36,
        y,
        width - 72,
    )
    footer(c, 1, total)
    c.showPage()

    header(c, "Page 2", "User flow and information architecture")
    y = height - 92
    y = paragraph(
        c,
        "Five bottom tabs hold the major sections. Projects is the only nested stack. Android Back from a project detail returns to the project list and leaves the other tabs as they were.",
        36,
        y,
        width - 72,
    )
    y -= 6
    flows = [
        "Home: introduction, portrait, headline, biography, primary skill, code MOB-A2-7014, offline note.",
        "Skills: seven skill cards, then an education and training timeline.",
        "Projects: project list, then Project details with problem, contribution, and technology.",
        "Profile: capture or choose a portrait and a verification-card photo, edit four fields, save or reset.",
        "About: app name, student, registration, code, version, package, data-use statement, card preview.",
        "Saved state: Save writes AsyncStorage. Reset deletes that record and the copied images.",
        "Media: permission denial and cancellation keep the current image and show a message.",
        "Connection: the INES website link is labeled Needs a connection. Everything else is local.",
    ]
    for item in flows:
        c.setFillColor(TERR)
        c.circle(44, y + 3, 3, fill=1, stroke=0)
        y = paragraph(c, item, 56, y, width - 92)
        y -= 4
    footer(c, 2, total)
    c.showPage()

    header(c, "Page 3", "Annotated wireframes")
    phone(
        c,
        36,
        250,
        160,
        430,
        "Home",
        [
            "My name is Mohammed",
            "Osama Hasan Hossein.",
            "[ portrait ]",
            "MOHHPORTFOLIO",
            "Headline",
            "Availability badge",
            "Short biography",
            "Primary skill",
            "MOB-A2-7014",
            "Works offline",
        ],
    )
    phone(
        c,
        214,
        250,
        160,
        430,
        "Skills",
        [
            "SKILLS",
            "Linux",
            "Git",
            "Python",
            "JavaScript",
            "Node.js",
            "REST APIs",
            "SQL",
            "Education timeline",
            "Empty state if none",
        ],
    )
    phone(
        c,
        392,
        250,
        160,
        430,
        "Projects",
        [
            "PROJECTS",
            "Node.js request API",
            "Python tools on Linux",
        ],
    )
    c.setFont("Sans", 9)
    c.setFillColor(MUTED)
    note_y = 220
    for note in [
        "Annotation: the first sentence on Home is the required name sentence, before the app name.",
        "Annotation: skill cards and timeline rows are reusable components, not one-off layouts.",
        "Annotation: each project card opens the stack route Project details and passes the project id.",
    ]:
        note_y = paragraph(c, note, 36, note_y, width - 72, size=9, leading=12, color=MUTED)
        note_y -= 4
    footer(c, 3, total)
    c.showPage()

    header(c, "Page 4", "Annotated wireframes")
    phone(
        c,
        36,
        280,
        160,
        400,
        "Project details",
        [
            "Back to Projects",
            "[ 01 Node.js API ]",
            "Title",
            "PROBLEM",
            "MY CONTRIBUTION",
            "TECHNOLOGY",
            "Missing id shows",
            "an empty state",
        ],
    )
    phone(
        c,
        214,
        250,
        170,
        430,
        "Profile editor",
        [
            "Profile image preview",
            "Take / Gallery / Remove",
            "Verification card",
            "Take / Gallery / Remove",
            "Headline",
            "Short biography",
            "Primary skill",
            "Availability choices",
            "Save profile",
            "Reset saved profile",
        ],
    )
    phone(
        c,
        402,
        320,
        160,
        360,
        "Error and empty",
        [
            "Headline too short",
            "field message in red",
            "Save was blocked",
            "Card photo empty:",
            "dashed empty state",
            "Permission denied",
            "Selection cancelled",
        ],
    )
    c.setFillColor(MUTED)
    paragraph(
        c,
        "Validation rules: headline 8–80 characters; biography 40–400 characters and at least six words; primary skill 2–40 characters using letters, spaces, and hyphens; availability must be one of the three statuses. An invalid save does not write AsyncStorage.",
        36,
        220,
        width - 72,
        size=9,
        leading=12,
        color=MUTED,
    )
    footer(c, 4, total)
    c.showPage()

    header(c, "Page 5", "Visual and accessibility decisions")
    y = height - 92
    swatches = [
        (Color(3 / 255, 7 / 255, 14 / 255), "Void #03070E", "Screen background"),
        (Color(244 / 255, 247 / 255, 248 / 255), "Star #F4F7F8", "Body text"),
        (Color(165 / 255, 116 / 255, 61 / 255), "Gold #A5743D", "Labels and the save button"),
        (Color(155 / 255, 205 / 255, 221 / 255), "Dust #9BCDDD", "Secondary text"),
        (Color(5 / 255, 69 / 255, 105 / 255), "Nebula #054569", "Secondary buttons"),
    ]
    x = 36
    for color, name, use in swatches:
        c.setFillColor(color)
        c.roundRect(x, y - 36, 100, 28, 4, fill=1, stroke=0)
        c.setFillColor(INK)
        c.setFont("SansBold", 8)
        c.drawString(x, y - 52, name)
        c.setFont("Sans", 8)
        c.setFillColor(MUTED)
        c.drawString(x, y - 64, use)
        x += 104
    y -= 96
    decisions = [
        "Type: serif for the introduction and project titles, sans for controls. Body text is 15–16 pt with line height around 22 so enlarged system text wraps inside the scroll view.",
        "Spacing: 16 pt page padding, 10–16 pt gaps, and 48 pt minimum height on buttons and choice rows.",
        "Contrast: off-white text on void #03070E, dust blue for secondary text, and void text on the gold button. Error text is light on a dark red field.",
        "Labels: image actions include the slot name, for example Take a photo for Verification card. The external link exposes Needs a connection in its accessible name.",
        "Large text: screens scroll. The name sentence is not limited to one line. Tab labels stay short: Home, Skills, Projects, Profile, About.",
        "Images: the default portrait can be replaced from the Profile tab. Remove clears the saved reference after Save.",
        "Offline: no portfolio content is fetched from the network. Email, LinkedIn, and WhatsApp are marked Needs a connection.",
    ]
    for item in decisions:
        y = paragraph(c, item, 36, y, width - 72, size=10, leading=13)
        y -= 8
    footer(c, 5, total)
    c.showPage()

    header(c, "Page 6", "Implementation comparison")
    y = height - 92
    y = paragraph(
        c,
        "The built screens follow these wireframes. The comparison below records the choices that changed during implementation and why they were kept.",
        36,
        y,
        width - 72,
    )
    y -= 8
    changes = [
        ("App name on Home", "The wireframe showed the app name first. The build places the required name sentence first, then the portrait and the app name, so the assessor sees the exact sentence immediately."),
        ("Verification card", "The profile image and the handwritten-card photo are separate slots. Home shows the portrait. About shows the card preview the demonstration video asks for."),
        ("Five tabs", "About is its own tab rather than a button on Home, so the release facts and data-use statement stay one tap away."),
        ("Availability", "Three large choice rows replace a dropdown so the status is visible without an extra dialog and remains usable with large text."),
        ("Artwork", "Project covers use the same void, gold, and off-white palette as the rest of the app."),
    ]
    for title, body in changes:
        c.setFont("SansBold", 11)
        c.setFillColor(TERR)
        c.drawString(36, y, title)
        y -= 16
        y = paragraph(c, body, 36, y, width - 72)
        y -= 8
    footer(c, 6, total)
    c.save()
    print(path)


def build_test_log() -> None:
    path = EVIDENCE / "MOB_A2_2527014_TEST_LOG.pdf"
    c = canvas.Canvas(str(path), pagesize=A4)
    width, height = A4
    c.setFillColor(INK)
    c.rect(0, height - 36, width, 36, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("SansBold", 10)
    c.drawString(36, height - 23, "MOHHPortfolio test log  ·  MOB_A2_2527014")
    y = height - 70
    c.setFillColor(INK)
    c.setFont("SerifBold", 16)
    c.drawString(36, y, "Test log")
    y -= 24
    facts = [
        "Student: Mohammed Osama Hasan Hossein",
        "Registration: 25/27014",
        "Verification code: MOB-A2-7014",
        "App: MOHHPortfolio 1.0.0",
        "Package: rw.ac.ines.ug2527014.mohhportfolio",
        "Device model: ______________________________",
        "Android version: ___________________________",
        "APK file: MOB_A2_2527014.apk",
        "Date tested: _______________________________",
    ]
    for line in facts:
        c.setFont("Sans", 11)
        c.drawString(36, y, line)
        y -= 16
    y -= 8
    c.setFont("SansBold", 12)
    c.drawString(36, y, "Checks")
    y -= 18
    checks = [
        "Installed APK opens without Expo Go",
        "Home begins: My name is Mohammed Osama Hasan Hossein.",
        "Verification code MOB-A2-7014 is visible on Home and About",
        "Skills show at least five items and an education timeline",
        "A project opens on its own detail screen and Back returns to the list",
        "A too-short headline blocks save and shows a field message",
        "A valid profile saves and is still there after the app is closed and opened",
        "Camera or gallery preview, replace, and remove work, including cancel and denial",
        "Verification-card photo previews on the Profile and About screens",
        "Portfolio still works in Airplane Mode, and the device clock is visible in the video",
        "The INES link is labeled Needs a connection",
    ]
    for index, check in enumerate(checks, start=1):
        c.setFont("Sans", 10)
        c.drawString(36, y, f"{index}.")
        c.drawString(56, y, check)
        c.drawRightString(width - 36, y, "Pass / Fail")
        y -= 22
    y -= 6
    y = paragraph(
        c,
        "Write Pass or Fail after testing the installed APK on the phone. Do not mark a row as passed from the Expo Go app or from a web preview. Note any failure under Comments.",
        36,
        y,
        width - 72,
        size=10,
        leading=13,
    )
    y -= 8
    c.setFont("SansBold", 11)
    c.setFillColor(INK)
    c.drawString(36, y, "Comments")
    y -= 16
    c.setStrokeColor(LINE)
    for _ in range(4):
        c.line(36, y, width - 36, y)
        y -= 18
    c.setFont("Sans", 8)
    c.setFillColor(MUTED)
    c.drawString(36, 28, "Complete this log on the physical device before submission.")
    c.save()
    print(path)


def build_declaration() -> None:
    path = EVIDENCE / "MOB_A2_2527014_DECLARATION.pdf"
    c = canvas.Canvas(str(path), pagesize=A4)
    width, height = A4
    c.setFillColor(INK)
    c.rect(0, height - 36, width, 36, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("SansBold", 10)
    c.drawString(36, height - 23, "MOHHPortfolio declaration  ·  MOB_A2_2527014")
    y = height - 78
    c.setFillColor(INK)
    c.setFont("SerifBold", 16)
    c.drawString(36, y, "Student declaration")
    y -= 28
    y = paragraph(
        c,
        "I, Mohammed Osama Hasan Hossein, registration number 25/27014, submit MOHHPortfolio for SWE 3409 Individual Assignment 2. The verification code on the About screen and on my handwritten card is MOB-A2-7014.",
        36,
        y,
        width - 72,
        size=11,
        leading=15,
    )
    y -= 8
    y = paragraph(
        c,
        "I understand that the portfolio content must be my own. I will correct any project, skill, or biography text that does not describe my real backend work before I submit. I will not present another student's screens, wording, or visual design as mine.",
        36,
        y,
        width - 72,
        size=11,
        leading=15,
    )
    y -= 8
    y = paragraph(
        c,
        "I used Cursor's coding assistant while building the app. The assistance is described in evidence/AI_USE.md. I have reviewed the source, and I am responsible for the submitted app, the APK, the video, and this declaration.",
        36,
        y,
        width - 72,
        size=11,
        leading=15,
    )
    y -= 28
    c.setFont("Sans", 11)
    c.drawString(36, y, "Signature: _______________________________")
    y -= 28
    c.drawString(36, y, "Date: ____________________________________")
    y -= 36
    c.setFont("Sans", 9)
    c.setFillColor(MUTED)
    paragraph(
        c,
        "Sign this page by hand, then export or scan it as evidence/MOB_A2_2527014_DECLARATION.pdf if you replace this file with the signed copy.",
        36,
        y,
        width - 72,
        size=9,
        leading=12,
        color=MUTED,
    )
    c.save()
    print(path)


if __name__ == "__main__":
    DOCS.mkdir(parents=True, exist_ok=True)
    EVIDENCE.mkdir(parents=True, exist_ok=True)
    build_uiux()
    build_test_log()
    build_declaration()
