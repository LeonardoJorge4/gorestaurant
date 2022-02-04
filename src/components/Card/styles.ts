import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 128,
    backgroundColor: theme.colors.card,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "transparent",
    paddingVertical: 16,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  border: {
    borderColor: theme.colors.red
  },
  title: {
    fontSize: 14,
    fontFamily: theme.fonts.title,
    marginTop: 25
  },
  default: {
    color: theme.colors.heading,
  },
  red: {
    color: theme.colors.red,
  }
})