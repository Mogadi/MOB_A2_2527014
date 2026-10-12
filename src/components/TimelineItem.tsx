import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../theme/colors';

type TimelineItemProps = {
  period: string;
  title: string;
  detail: string;
  isLast?: boolean;
};

export function TimelineItem({ period, title, detail, isLast = false }: TimelineItemProps) {
  return (
    <View style={styles.row} accessibilityLabel={`${period}. ${title}. ${detail}`}>
      <View style={styles.rail}>
        <View style={styles.dot} />
        {isLast ? null : <View style={styles.line} />}
      </View>
      <View style={styles.copy}>
        <Text style={styles.period}>{period}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.detail}>{detail}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  rail: {
    width: 16,
    alignItems: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.terracotta,
    marginTop: 4,
  },
  line: {
    width: 2,
    flex: 1,
    backgroundColor: colors.line,
    marginTop: 4,
  },
  copy: {
    flex: 1,
    gap: 4,
    paddingBottom: spacing.md,
  },
  period: {
    color: colors.terracotta,
    fontSize: 13,
    fontWeight: '700',
  },
  title: {
    color: colors.ink,
    fontSize: 17,
    lineHeight: 23,
    fontWeight: '700',
  },
  detail: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
  },
});
