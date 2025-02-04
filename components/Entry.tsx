import { StyleSheet, Text, View, Image, Pressable, Button } from 'react-native';
import ImageViewer from './imageViewer';
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from 'react';
import JournalEntryInput from './journalEntry';
import { AppDispatch, RootState } from '../app/store';
import { useDispatch } from 'react-redux';
import { setSelectedUrl } from '../app/slices/imageSlice';
import { setPrompt, setEntry, createPost } from "../app/slices/postSlice"
import PromptPicker from './promptPicker';

const placeholderImage = require('../assets/images/background-image.png');

const Entry = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedPrompt, setSelectedPrompt] = useState("");
  const [entryText, setEntryText] = useState("");
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const imageSource = selectedImage ? { uri: selectedImage } : placeholderImage;

  useEffect(() => {
    dispatch(setSelectedUrl(selectedImage));
    console.log("set selected image dispatched");
  }, [selectedImage, dispatch]);

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onSaveImage = () => {
   
  };
  const handleSelectPrompt = (prompt: string) => {
		setSelectedPrompt(prompt);
		dispatch(setPrompt(prompt));
	};

  const handleTextChange = (text: string) => {
		setEntryText(text);
		dispatch(setEntry(text));
	};

  const handleEntrySubmit = () => {
    dispatch(createPost());
    console.log(`pressed`);
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
      </View>
      <View style={styles.entryContainer}>
        <PromptPicker 
          selectedPrompt={selectedPrompt}
          setSelectedPrompt={setSelectedPrompt}
          handleSelectPrompt={handleSelectPrompt}
        />
        <JournalEntryInput 
          entryText={entryText}
          setEntryText={setEntryText}
          handleTextChange={handleTextChange}
        />
        <Button title='Save Entry' onPress={handleEntrySubmit} />
      </View>
    </View>
  );
}

export default Entry;

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