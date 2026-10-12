import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../theme/colors';

type ProjectCardProps = {
  index: number;
  title: string;
  year: string;
  technology: string;
  onPress: () => void;
};

export function technologyParts(technology: string): string[] {
  return technology
    .split(/,| and /)
    .map((part) => part.trim())
    .filter(Boolean);
}

export function ProjectCard({ index, title, year, technology, onPress }: ProjectCardProps) {
  const parts = technologyParts(technology);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      accessibilityRole="button"
      accessibilityLabel={`Open project ${title}`}
    >
      <View style={styles.mark}>
        <Text style={styles.markText}>{String(index + 1).padStart(2, '0')}</Text>
      </View>
      <View style={styles.copy}>
        <Text style={styles.year}>{year}</Text>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.chips}>
          {parts.map((part) => (
            <View key={part} style={styles.chip}>
              <Text style={styles.chipText}>{part}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.action}>Open details</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: spacing.md,
    backgroundColor: colors.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.line,
    padding: spacing.md,
  },
  pressed: {
    opacity: 0.86,
  },
  mark: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.deep,
    borderWidth: 1,
    borderColor: colors.terracotta,
    alignItems: 'center',
    justifyContent: 'center',
  },
  markText: {
    color: colors.terracotta,
    fontSize: 16,
    fontWeight: '700',
  },
  copy: {
    flex: 1,
    gap: 4,
  },
  year: {
    color: colors.terracotta,
    fontSize: 13,
    fontWeight: '700',
  },
  title: {
    color: colors.ink,
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '700',
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
    marginTop: 4,
  },
  chip: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.oliveSoft,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  chipText: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: '600',
  },
  action: {
    marginTop: spacing.xs,
    color: colors.ink,
    fontSize: 15,
    fontWeight: '700',
  },
});
