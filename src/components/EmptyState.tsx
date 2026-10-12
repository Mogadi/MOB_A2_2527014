import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../theme/colors';

export function EmptyState({ title, detail }: { title: string; detail: string }) {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.detail}>{detail}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.muted,
    borderRadius: 16,
    padding: spacing.lg,
    gap: spacing.sm,
    backgroundColor: colors.card,
  },
  title: {
    color: colors.ink,
    fontSize: 18,
    fontWeight: '700',
  },
  detail: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
  },
});
