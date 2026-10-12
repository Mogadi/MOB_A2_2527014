export const AVAILABILITY_OPTIONS = [
  'Available for backend work',
  'Open to internships',
  'Booked until exams',
] as const;

export type AvailabilityStatus = (typeof AVAILABILITY_OPTIONS)[number];

export type Profile = {
  headline: string;
  biography: string;
  primarySkill: string;
  availability: AvailabilityStatus;
  portraitUri: string | null;
  verificationCardUri: string | null;
};

export type ProfileFieldErrors = {
  headline?: string;
  biography?: string;
  primarySkill?: string;
  availability?: string;
};

export const defaultProfile: Profile = {
  headline: 'Backend developer with Python and Node.js',
  biography:
    'I study Software Engineering at INES-Ruhengeri. I build backend services with Python and Node.js, and I work on Linux with Git.',
  primarySkill: 'Python',
  availability: 'Available for backend work',
  portraitUri: null,
  verificationCardUri: null,
};

const HEADLINE_MIN = 8;
const HEADLINE_MAX = 80;
const BIO_MIN = 40;
const BIO_MAX = 400;
const SKILL_MIN = 2;
const SKILL_MAX = 40;

export function validateProfile(input: Profile): ProfileFieldErrors {
  const errors: ProfileFieldErrors = {};
  const headline = input.headline.trim();
  const biography = input.biography.trim();
  const primarySkill = input.primarySkill.trim();
  const wordCount = biography.split(/\s+/).filter(Boolean).length;

  if (headline.length === 0) {
    errors.headline = 'Enter a headline.';
  } else if (headline.length < HEADLINE_MIN) {
    errors.headline = `Use at least ${HEADLINE_MIN} characters.`;
  } else if (headline.length > HEADLINE_MAX) {
    errors.headline = `Keep the headline to ${HEADLINE_MAX} characters or fewer.`;
  }

  if (biography.length === 0) {
    errors.biography = 'Enter a short biography.';
  } else if (biography.length < BIO_MIN) {
    errors.biography = `Use at least ${BIO_MIN} characters.`;
  } else if (biography.length > BIO_MAX) {
    errors.biography = `Keep the biography to ${BIO_MAX} characters or fewer.`;
  } else if (wordCount < 6) {
    errors.biography = 'Use at least six words.';
  }

  if (primarySkill.length === 0) {
    errors.primarySkill = 'Enter a primary skill.';
  } else if (primarySkill.length < SKILL_MIN || primarySkill.length > SKILL_MAX) {
    errors.primarySkill = `Use ${SKILL_MIN} to ${SKILL_MAX} characters.`;
  } else if (!/^[A-Za-z][A-Za-z\s-]*$/.test(primarySkill)) {
    errors.primarySkill = 'Use letters, spaces, and hyphens only.';
  }

  if (!AVAILABILITY_OPTIONS.includes(input.availability)) {
    errors.availability = 'Choose an availability status.';
  }

  return errors;
}

export function profileHasErrors(errors: ProfileFieldErrors): boolean {
  return Object.values(errors).some(Boolean);
}

export function sanitizeProfile(input: Profile): Profile {
  return {
    ...input,
    headline: input.headline.trim(),
    biography: input.biography.trim(),
    primarySkill: input.primarySkill.trim(),
  };
}
