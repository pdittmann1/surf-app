import * as ImageManipulator from 'expo-image-manipulator';

const MAX_SIDE = 1024;
const JPEG_QUALITY = 0.8;

/**
 * Resize (if needed) and compress an image to JPEG.
 * Returns { uri, base64, mimeType } ready to send to the API.
 */
export async function compressImage(
  uri: string,
  originalWidth: number,
  originalHeight: number,
): Promise<{ uri: string; base64: string; mimeType: string }> {
  const longest = Math.max(originalWidth, originalHeight);
  const resize =
    longest > MAX_SIDE
      ? originalWidth >= originalHeight
        ? { width: MAX_SIDE }
        : { height: MAX_SIDE }
      : undefined;

  const actions: ImageManipulator.Action[] = resize ? [{ resize }] : [];

  const result = await ImageManipulator.manipulateAsync(uri, actions, {
    compress: JPEG_QUALITY,
    format: ImageManipulator.SaveFormat.JPEG,
    base64: true,
  });

  return {
    uri: result.uri,
    base64: result.base64!,
    mimeType: 'image/jpeg',
  };
}
