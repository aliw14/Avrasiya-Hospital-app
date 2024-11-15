import { ImageSourcePropType } from "react-native";
import { SvgProps } from "react-native-svg";

export interface DepartmentCartItem {
    id: number;
    title: string;
    description: string;
    image: React.FC<SvgProps> | ImageSourcePropType;
    buttonText: string;
}