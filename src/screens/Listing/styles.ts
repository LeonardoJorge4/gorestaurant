import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  content: {
    flex: 1
  },
  spacing: {
    paddingHorizontal: 24
  },
  title: {
    fontFamily: theme.fonts.title,
    fontSize: 20,
    marginTop: 40,
    marginBottom: 15
  },
  separator: {
    paddingRight: 16,
  },
  separatorLong: {
    paddingBottom: 16
  }
})