import { View, Image } from 'react-native';

interface Props {
  stickerSource: any,
  imageSize: number
}

export default function EmojiSticker(props: Props) {
  return (
    <View style={{ top: -350 }}>
      <Image
        source={props.stickerSource}
        resizeMode="contain"
        style={{ width: props.imageSize, height: props.imageSize }}
         />
    </View>
  )
}