import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: theme.fonts.title,
    fontSize: 12,
  },
  icon: {
    marginRight: 8
  },
  selected: {
    color: theme.colors.red,
  },
  notSelected: {
    color: theme.colors.input,
  }
})