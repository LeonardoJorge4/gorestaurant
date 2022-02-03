import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    height: 56,
    padding: 16,
    backgroundColor: theme.colors.card,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
    marginTop: - 28.5
  },
  icon: {
    marginRight: 12,
    height: '100%',
  },
  input: {
    fontSize: 15,
    fontFamily: theme.fonts.heading,
    height: '100%',
  },
  border: {
    borderColor: theme.colors.red
  }
})