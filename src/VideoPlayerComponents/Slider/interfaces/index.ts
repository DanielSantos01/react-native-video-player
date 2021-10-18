import { StyleProp, ViewStyle } from "react-native";

export interface SliderProps {
  currentTime: number;
  duration: number;
  onSeek: (value: number) => void;
  onSeekRelease: (value: number) => void;
  containerStyle?: StyleProp<ViewStyle>;
}