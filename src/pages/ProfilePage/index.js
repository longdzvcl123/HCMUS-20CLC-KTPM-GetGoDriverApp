import { StyleSheet, Text, View, Button } from "react-native";
// import NavBar from "../../components/NavBar";
import { colors, text } from "../../utils/colors";

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Tài khoản</Text>
      </View>
      {/* <NavBar navigation={navigation} activeIndex={3} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary_50,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfilePage;