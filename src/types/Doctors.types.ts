import { ImageSourcePropType } from "react-native";
import { SvgProps } from "react-native-svg";

export interface DoctorsCartItem {
    id: number;
    image: React.FC<SvgProps> | ImageSourcePropType;
    name: string;
}