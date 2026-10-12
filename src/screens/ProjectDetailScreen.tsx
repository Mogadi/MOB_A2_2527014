import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { technologyParts } from '../components/ProjectCard';
import { EmptyState } from '../components/EmptyState';
import { Screen } from '../components/Screen';
import { projects } from '../data/portfolio';
import { ProjectsStackParamList } from '../navigation/types';
import { colors, spacing } from '../theme/colors';

type Props = NativeStackScreenProps<ProjectsStackParamList, 'ProjectDetail'>;

export function ProjectDetailScreen({ route }: Props) {
  const index = projects.findIndex((item) => item.id === route.params.projectId);
  const project = index >= 0 ? projects[index] : undefined;

  if (!project) {
    return (
      <Screen topInset={false}>
        <EmptyState title="Project not found" detail="Go back to the project list and choose another project." />
      </Screen>
    );
  }

  return (
    <Screen topInset={false}>
      <View style={styles.banner}>
        <View style={styles.mark}>
          <Text style={styles.markText}>{String(index + 1).padStart(2, '0')}</Text>
        </View>
        <View style={styles.bannerCopy}>
          <Text style={styles.year}>{project.year}</Text>
          <Text style={styles.title}>{project.title}</Text>
        </View>
      </View>
      <View style={styles.chips}>
        {technologyParts(project.technology).map((part) => (
          <View key={part} style={styles.chip}>
            <Text style={styles.chipText}>{part}</Text>
          </View>
        ))}
      </View>
      <DetailBlock label="Problem" body={project.problem} />
      <DetailBlock label="My contribution" body={project.contribution} />
      <DetailBlock label="Technology" body={project.technology} />
    </Screen>
  );
}

function DetailBlock({ label, body }: { label: string; body: string }) {
  return (
    <View style={styles.block}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    flexDirection: 'row',
    gap: spacing.md,
    alignItems: 'center',
    backgroundColor: colors.deep,
    borderRadius: 18,
    padding: spacing.md,
  },
  mark: {
    width: 56,
    height: 56,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.terracotta,
    alignItems: 'center',
    justifyContent: 'center',
  },
  markText: {
    color: colors.terracotta,
    fontSize: 18,
    fontWeight: '700',
  },
  bannerCopy: {
    flex: 1,
    gap: 4,
  },
  year: {
    color: colors.terracotta,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  title: {
    color: colors.white,
    fontSize: 26,
    lineHeight: 32,
    fontWeight: '700',
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  chip: {
    borderRadius: 999,
    backgroundColor: colors.olive,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  chipText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '700',
  },
  block: {
    backgroundColor: colors.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.line,
    padding: spacing.md,
    gap: spacing.xs,
  },
  label: {
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
});
