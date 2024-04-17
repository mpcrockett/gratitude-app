import { StyleSheet, Text, View, Image } from 'react-native';
import ImageViewer from './components/imageViewer';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import EmojiSticker from './components/EmojiSticker';
import JournalEntryInput from './components/journalEntry';

const placeholderImage = require('./assets/images/background-image.png');

export default function Main() {
 
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const imageSource = selectedImage ? { uri: selectedImage } : placeholderImage;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState<null | NodeRequire>(null);

  const onReset = () => {
    setShowAppOptions(false);
  }

  const onAddSticker = () => {
    setIsModalVisible(true);
  }

  const onModalClose = () => {
    setIsModalVisible(false);
  }

  const onSaveImage = () => {
    
  }
  const handleJournalEntrySubmit = (entryText: any) => {
    console.log('Journal Entry Submitted:', entryText);
    // Here you can handle the submitted text, such as saving it to state or sending it to a server
  };



  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select an image.')
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer image={imageSource} />
        {pickedEmoji !== null && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} /> }
      </View>
      <View style={styles.entryContainer}>
        <JournalEntryInput onEntrySubmit={handleJournalEntrySubmit} />
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
    width: '100%'
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  subtitle: {
    padding: 10,
    fontFamily: 'Oswald_500Medium',
    fontSize: 20,
    textTransform: 'uppercase'
  }
});
