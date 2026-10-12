import * as ImagePicker from 'expo-image-picker';

export type PickResult =
  | { status: 'selected'; uri: string }
  | { status: 'cancelled' }
  | { status: 'denied' }
  | { status: 'failed'; message: string };

export async function pickProfileImage(
  source: 'camera' | 'library',
  aspect: [number, number],
): Promise<PickResult> {
  try {
    const permission =
      source === 'camera'
        ? await ImagePicker.requestCameraPermissionsAsync()
        : await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      return { status: 'denied' };
    }

    const options = {
      mediaTypes: ['images'] as ImagePicker.MediaType[],
      allowsEditing: true,
      aspect,
      quality: 0.7,
    };

    const result =
      source === 'camera'
        ? await ImagePicker.launchCameraAsync(options)
        : await ImagePicker.launchImageLibraryAsync(options);

    if (result.canceled) {
      return { status: 'cancelled' };
    }

    const uri = result.assets[0]?.uri;
    if (!uri) {
      return { status: 'failed', message: 'No image was returned. The current image was kept.' };
    }

    return { status: 'selected', uri };
  } catch {
    return {
      status: 'failed',
      message: 'The camera or gallery could not be opened. Try the other option.',
    };
  }
}
