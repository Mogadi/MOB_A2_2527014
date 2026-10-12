import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../theme/colors';

export function OfflineNote() {
  return (
    <View style={styles.box} accessibilityLabel="This portfolio stays available in Airplane Mode.">
      <Text style={styles.flag}>Works offline</Text>
      <Text style={styles.body}>
        The portfolio, project details, and saved profile stay available in Airplane Mode. Any optional website link is marked Needs a connection.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.oliveSoft,
    borderRadius: 16,
    padding: spacing.md,
    gap: spacing.xs,
  },
  flag: {
    color: colors.terracotta,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  body: {
    color: colors.ink,
    fontSize: 15,
    lineHeight: 22,
  },
});
