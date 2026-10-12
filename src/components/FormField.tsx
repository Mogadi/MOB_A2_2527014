import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, spacing } from '../theme/colors';

type FormFieldProps = {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  error?: string;
  multiline?: boolean;
  hint: string;
};

export function FormField({ label, value, onChangeText, error, multiline = false, hint }: FormFieldProps) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        style={[styles.input, multiline && styles.multiline, error ? styles.inputError : null]}
        placeholderTextColor={colors.muted}
        accessibilityLabel={label}
        accessibilityHint={error ?? hint}
        textAlignVertical={multiline ? 'top' : 'center'}
      />
      <Text style={styles.meta}>{value.trim().length} characters</Text>
      {error ? (
        <Text style={styles.error} accessibilityRole="alert">
          {error}
        </Text>
      ) : (
        <Text style={styles.hint}>{hint}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: 6,
  },
  label: {
    color: colors.ink,
    fontSize: 16,
    fontWeight: '700',
  },
  input: {
    minHeight: 52,
    borderWidth: 1.5,
    borderColor: colors.line,
    backgroundColor: colors.input,
    borderRadius: 12,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    color: colors.ink,
    fontSize: 16,
    lineHeight: 22,
  },
  multiline: {
    minHeight: 140,
  },
  inputError: {
    borderColor: colors.danger,
    backgroundColor: colors.dangerSoft,
  },
  meta: {
    color: colors.muted,
    fontSize: 12,
  },
  hint: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 18,
  },
  error: {
    color: colors.danger,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
  },
});
