import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.red,
    width: "100%",
  },
  imageBackground: {
    flex: 1
  },
  content: {
    flex: 1,
    padding: 40,
  },
  image: {
    marginBottom: 24
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
  containerTitle: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: theme.fonts.title,
    fontSize: 40,
    color: theme.colors.white,
  },
  containerButton: {
    width: "100%",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  containerTextButton: {
    height: 56,
    padding: 15,
    width: "80%",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: theme.colors.yellow,
  },
  textButton: {
    fontSize: 15,
    fontFamily: theme.fonts.title,
    color: "#7A1818",
    textAlign: "center",
  },
  containerIcon: {
    height: 56,
    padding: 15,
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: "#FFC46B",
  }
})