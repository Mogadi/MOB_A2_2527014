import { Image, StyleSheet, Text, View } from 'react-native';
import { OfflineNote } from '../components/OfflineNote';
import { Screen } from '../components/Screen';
import { useProfile } from '../context/ProfileContext';
import { defaultPortrait } from '../data/artwork';
import { student } from '../data/identity';
import { colors, spacing } from '../theme/colors';

export function HomeScreen() {
  const { profile, ready } = useProfile();
  const portrait = profile.portraitUri ? { uri: profile.portraitUri } : defaultPortrait;

  return (
    <Screen>
      <Text style={styles.introduction}>{student.introduction}</Text>
      <View style={styles.hero}>
        <Image source={portrait} style={styles.portrait} accessibilityLabel="Profile image" />
        <View style={styles.heroCopy}>
          <Text style={styles.appName}>{student.appName}</Text>
          <Text style={styles.headline}>{profile.headline}</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{profile.availability}</Text>
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardLabel}>Short biography</Text>
        <Text style={styles.body}>{ready ? profile.biography : 'Loading the saved profile…'}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardLabel}>Primary skill</Text>
        <Text style={styles.skill}>{profile.primarySkill}</Text>
      </View>
      <View style={styles.codeCard} accessibilityLabel={`Verification code ${student.verificationCode}`}>
        <Text style={styles.cardLabel}>Verification code</Text>
        <Text style={styles.code}>{student.verificationCode}</Text>
        <Text style={styles.codeNote}>Registration {student.registrationNumber}</Text>
      </View>
      <OfflineNote />
    </Screen>
  );
}

const styles = StyleSheet.create({
  introduction: {
    color: colors.ink,
    fontFamily: 'serif',
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '700',
  },
  hero: {
    backgroundColor: colors.deep,
    borderRadius: 22,
    padding: spacing.md,
    gap: spacing.md,
  },
  portrait: {
    width: '100%',
    aspectRatio: 1.55,
    borderRadius: 16,
    backgroundColor: colors.olive,
  },
  heroCopy: {
    gap: spacing.sm,
  },
  appName: {
    color: colors.terracotta,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.4,
    textTransform: 'uppercase',
  },
  headline: {
    color: colors.white,
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '700',
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.terracotta,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  badgeText: {
    color: colors.void,
    fontSize: 13,
    fontWeight: '700',
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.line,
    padding: spacing.md,
    gap: spacing.xs,
  },
  cardLabel: {
    color: colors.terracotta,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  body: {
    color: colors.ink,
    fontSize: 16,
    lineHeight: 24,
  },
  skill: {
    color: colors.ink,
    fontSize: 22,
    lineHeight: 28,
    fontFamily: 'serif',
    fontWeight: '700',
  },
  codeCard: {
    backgroundColor: colors.olive,
    borderRadius: 18,
    padding: spacing.md,
    gap: spacing.xs,
  },
  code: {
    color: colors.white,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '700',
    letterSpacing: 1,
  },
  codeNote: {
    color: colors.muted,
    fontSize: 14,
  },
});
