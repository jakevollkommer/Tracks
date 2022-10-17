import { Input } from '@rneui/themed';
import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Pressable } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import { Colors } from '../constants';
import { signIn, signUp } from '../firebase/auth';

const LoginScreen = () => {
  const tw = useTailwind();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const validate = (): boolean => {
    if (email.length === 0) {
      // TODO popup error
      console.log("Username field must not be empty");
      return false;
    }
    if (password.length === 0) {
      // TODO popup error
      console.log("Password field must not be empty");
      return false;
    }
    return true;
  };

  // Handle the login errors
  const handleLoginError = (error: Error) => {
    console.log(error)
  }

  // Sign up with Firebase
  const signup = async () => {
    // TODO activity indicator
    if (!validate()) return;
    try {
      const user = await signUp(email, password);
      if (user) {
        console.log("signed up, redirect");
      }
    } catch (error) {
      handleLoginError(error);
    }
  };

  // Sign in with Firebase
  const login = async () => {
    // TODO activity indicator
    if (!validate()) return;
    try {
      const user = await signIn(email, password);
      if (user) {
        console.log("signed in, redirect");
      }
    } catch (error) {
      handleLoginError(error);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: Colors.backgroundGreen }}>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        containerStyle={tw('pt-5 pb-0 px-10')}
      />
      <Input
        placeholder="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={setPassword}
        containerStyle={tw('pt-5 pb-0 px-10')}
      />
      <Pressable
        onPressOut={login}
        style={[tw("p-5"), { backgroundColor: Colors.mainGreen }]}>
        <Text style={tw("text-center")}>
          Login
        </Text>
      </Pressable>
      <Pressable
        onPressOut={signup}
        style={[tw("p-5"), { backgroundColor: Colors.mainGreen }]}>
        <Text style={tw("text-center")}>
          Sign up
        </Text>
      </Pressable>
    </SafeAreaView >
  );
};

export default LoginScreen;
