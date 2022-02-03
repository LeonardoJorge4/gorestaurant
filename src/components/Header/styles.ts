import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    height: 148,
    backgroundColor: theme.colors.red,
    paddingHorizontal: 24,
  },
  containerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    height: "100%",
    justifyContent: "space-between"
  },
  contentLogo: {
    flexDirection: 'row',
  },
  image: {
    marginRight: 15
  },
  subtitle: {
    color: theme.colors.white,
    fontFamily: theme.fonts.title,
    fontSize: 26,
    lineHeight: 30
  },
  text: {
    color: "#FFB1B1",
    fontFamily: theme.fonts.heading,
    fontSize: 14,
  },
})