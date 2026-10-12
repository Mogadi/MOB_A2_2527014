import { ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../theme/colors';
import { FramedImage } from './FramedImage';

type ImageSlotProps = {
  title: string;
  uri: string | null;
  fallback?: ImageSourcePropType;
  emptyText: string;
  aspectRatio: number;
  message: string | null;
  onCamera: () => void;
  onLibrary: () => void;
  onRemove: () => void;
};

export function ImageSlot({
  title,
  uri,
  fallback,
  emptyText,
  aspectRatio,
  message,
  onCamera,
  onLibrary,
  onRemove,
}: ImageSlotProps) {
  const source = uri ? { uri } : fallback;

  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{title}</Text>
      {source ? (
        <FramedImage source={source} aspectRatio={aspectRatio} label={`${title} preview`} />
      ) : (
        <View style={[styles.empty, { aspectRatio }]}>
          <Text style={styles.emptyText}>{emptyText}</Text>
        </View>
      )}
      {!uri && fallback ? <Text style={styles.caption}>Default portrait. Replace it with your photo.</Text> : null}
      <View style={styles.actions}>
        <Pressable style={styles.button} onPress={onCamera} accessibilityRole="button" accessibilityLabel={`Take a photo for ${title}`}>
          <Text style={styles.buttonText}>Take photo</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onLibrary} accessibilityRole="button" accessibilityLabel={`Choose a gallery image for ${title}`}>
          <Text style={styles.buttonText}>Choose gallery</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.remove, !uri && styles.disabled]}
          onPress={onRemove}
          disabled={!uri}
          accessibilityRole="button"
          accessibilityLabel={`Remove ${title}`}
        >
          <Text style={[styles.buttonText, styles.removeText]}>Remove</Text>
        </Pressable>
      </View>
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: spacing.sm,
    backgroundColor: colors.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.line,
    padding: spacing.md,
  },
  title: {
    color: colors.ink,
    fontSize: 18,
    fontWeight: '700',
  },
  empty: {
    width: '100%',
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.muted,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.md,
    backgroundColor: colors.paper,
  },
  emptyText: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
  caption: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 18,
  },
  actions: {
    gap: spacing.sm,
  },
  button: {
    minHeight: 48,
    borderRadius: 12,
    backgroundColor: colors.olive,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.md,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  remove: {
    backgroundColor: colors.void,
    borderWidth: 1.5,
    borderColor: colors.danger,
  },
  removeText: {
    color: colors.danger,
  },
  disabled: {
    opacity: 0.4,
  },
  message: {
    color: colors.ink,
    backgroundColor: colors.terracottaSoft,
    borderRadius: 10,
    padding: spacing.sm,
    fontSize: 14,
    lineHeight: 20,
  },
});
