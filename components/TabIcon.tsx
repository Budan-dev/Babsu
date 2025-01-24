import React from "react";
import { Text } from "react-native";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
type IconProps = {
  family: "Ionicons" | "SimpleLineIcons" | "MaterialIcons" | "FontAwesome5";
  name: React.ComponentProps<typeof Ionicons>["name"] &
    React.ComponentProps<typeof SimpleLineIcons>["name"] &
    React.ComponentProps<typeof MaterialIcons>["name"] &
    React.ComponentProps<typeof FontAwesome5>["name"];
  color: string;
};

const TabIcon: React.FC<IconProps> = ({ family, name, color }) => {
  let IconComponent;
  switch (family) {
    case "Ionicons":
      IconComponent = Ionicons;
      break;
    case "SimpleLineIcons":
      IconComponent = SimpleLineIcons;
      break;
    case "MaterialIcons":
      IconComponent = MaterialIcons;
      break;
    case "FontAwesome5":
      IconComponent = FontAwesome5;
      break;
    default:
      return null;
  }
  return (
    <IconComponent
      name={name}
      size={24}
      color={color}
      style={{ marginBottom: -3 }}
    />
  );
};

export default TabIcon;
