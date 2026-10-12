import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { colors } from '../theme/colors';

type FramedImageProps = {
  source: ImageSourcePropType;
  aspectRatio: number;
  label: string;
};

export function FramedImage({ source, aspectRatio, label }: FramedImageProps) {
  return (
    <View style={styles.frame}>
      <View style={styles.clip} collapsable={false}>
        <Image
          source={source}
          style={[styles.image, { aspectRatio }]}
          resizeMode="cover"
          resizeMethod="resize"
          accessibilityLabel={label}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    width: '100%',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.terracotta,
    backgroundColor: colors.deep,
    padding: 3,
  },
  clip: {
    width: '100%',
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: colors.oliveSoft,
  },
  image: {
    width: '100%',
    borderRadius: 15,
  },
});
