import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { colors } from '../theme/colors';

type FramedImageProps = {
  source: ImageSourcePropType;
  aspectRatio: number;
  label: string;
};

export function FramedImage({ source, aspectRatio, label }: FramedImageProps) {
  return (
    <View style={[styles.frame, { aspectRatio }]}>
      <View style={styles.clip}>
        <Image source={source} style={styles.image} resizeMode="cover" accessibilityLabel={label} />
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
  },
  clip: {
    position: 'absolute',
    top: 3,
    right: 3,
    bottom: 3,
    left: 3,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: colors.oliveSoft,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
