
export let imageSource: string;
const ImageViewer = async (image: Uint8Array) => {
  try {
     let binaryString = '';
    image.forEach((byte) => {
      binaryString += String.fromCharCode(byte);
    });

    const base64String = btoa(binaryString);

    // ... inside your data fetching logic
    const mimeType = 'image/jpeg'; // Determine this based on your image type
    imageSource = `data:${mimeType};base64,${base64String}`;


    return imageSource;
  } catch (error) {
      console.error('Error processing image data:', error);
      return null; // Return null in case of any errors during processing
  }};

export default ImageViewer;