import { StyleSheet, Image } from "react-native";

interface Props {
  image: any
}

export default function ImageViewer(props: Props) {
  const { image } = props;
  
  return (
    <Image source={image} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});