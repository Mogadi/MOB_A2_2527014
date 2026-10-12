import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { clearStoredProfile, readStoredProfile, writeStoredProfile } from '../storage/profileStorage';
import { defaultProfile, Profile, sanitizeProfile } from '../validation/profileRules';

type ProfileContextValue = {
  profile: Profile;
  ready: boolean;
  revision: number;
  saveProfile: (next: Profile) => Promise<void>;
  resetProfile: () => Promise<void>;
};

const ProfileContext = createContext<ProfileContextValue | null>(null);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<Profile>(defaultProfile);
  const [ready, setReady] = useState(false);
  const [revision, setRevision] = useState(0);

  useEffect(() => {
    let active = true;
    readStoredProfile()
      .then((stored) => {
        if (!active) {
          return;
        }
        if (stored) {
          setProfile(stored);
        }
        setRevision((value) => value + 1);
      })
      .catch(() => {
        if (active) {
          setRevision((value) => value + 1);
        }
      })
      .finally(() => {
        if (active) {
          setReady(true);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  const value = useMemo<ProfileContextValue>(
    () => ({
      profile,
      ready,
      revision,
      saveProfile: async (next) => {
        const clean = sanitizeProfile(next);
        await writeStoredProfile(clean);
        setProfile(clean);
        setRevision((value) => value + 1);
      },
      resetProfile: async () => {
        await clearStoredProfile();
        setProfile(defaultProfile);
        setRevision((value) => value + 1);
      },
    }),
    [profile, ready, revision],
  );

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
}

export function useProfile(): ProfileContextValue {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within ProfileProvider');
  }
  return context;
}
