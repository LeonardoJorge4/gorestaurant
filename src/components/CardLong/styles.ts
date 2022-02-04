import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 114,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center"
  },
  containerImage: {
    backgroundColor: theme.colors.yellow,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 13,
    width: "30%",
    alignItems: "center",
    justifyContent: "center"
  },
  containerText: {
    backgroundColor: theme.colors.card,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 13,
    width: "70%",
    height: "100%",
  },
  title: {
    fontFamily: theme.fonts.title,
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 6,
    color: theme.colors.title
  },
  description: {
    fontFamily: theme.fonts.heading,
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 6,
    color: theme.colors.title
  },
  price: {
    color: theme.colors.green,
    fontFamily: theme.fonts.heading,
    fontSize: 18,
    lineHeight: 21,
  }
})