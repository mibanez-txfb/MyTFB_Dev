import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import AuthContext from "../context/AuthContext";
import AuthForm from "../components/AuthProvider";
import NavLink from "../components/async-storage";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for MyTFB"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        routeName="Signin"
        text="Already Have an account? Sign in instead!"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});

export default Signup;