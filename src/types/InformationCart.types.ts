import { ImageSourcePropType } from "react-native";
import { SvgProps } from "react-native-svg";

export interface InformationCartItem {
    id: number;
    title: string;
    description: string;
    image: React.FC<SvgProps> | ImageSourcePropType;
    date:string;
}