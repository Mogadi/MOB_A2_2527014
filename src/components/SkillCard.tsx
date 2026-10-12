import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../theme/colors';

type SkillCardProps = {
  name: string;
  detail: string;
};

export function SkillCard({ name, detail }: SkillCardProps) {
  return (
    <View style={styles.card} accessibilityLabel={`${name}. ${detail}`}>
      <View style={styles.mark} />
      <View style={styles.copy}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.detail}>{detail}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: spacing.md,
    backgroundColor: colors.card,
    borderColor: colors.line,
    borderWidth: 1,
    borderRadius: 16,
    padding: spacing.md,
  },
  mark: {
    width: 8,
    borderRadius: 8,
    backgroundColor: colors.terracotta,
  },
  copy: {
    flex: 1,
    gap: 4,
  },
  name: {
    color: colors.ink,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
  },
  detail: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
  },
});
