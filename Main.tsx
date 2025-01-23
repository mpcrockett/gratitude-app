import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import ImageViewer from './components/imageViewer';
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from 'react';
import EmojiSticker from './components/EmojiSticker';
import JournalEntryInput from './components/journalEntry';
import { RootState } from './app/store';
import { useDispatch } from 'react-redux';
import { setSelectedUrl } from './app/slices/imageSlice';

const placeholderImage = require('./assets/images/background-image.png');

export default function Main() {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState<null | NodeRequire>(null);
  const imageSource = selectedImage ? { uri: selectedImage } : placeholderImage;

  useEffect(() => {
    dispatch(setSelectedUrl(selectedImage));
    console.log("set selected image dispatched");
  }, [selectedImage, dispatch]);

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImage = () => {
   
  };

  const handleEntrySubmit = (selectedPrompt: string, entryText: string) => {
    console.log(`Journal Entry Submitted: ${selectedPrompt}, ${entryText}`);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select an image.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Pressable onPress={pickImage}>
          <Image source={imageSource} style={styles.image} />
        </Pressable>
        {pickedEmoji !== null && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
      </View>
      <View style={styles.entryContainer}>
        <JournalEntryInput onEntrySubmit={handleEntrySubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CFDBD5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  entryContainer: {
    flex: 1,
    width: '100%',
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});