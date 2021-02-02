import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions';

const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={(text) => setEmail(text)} />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        onPress={() => {
          props.loginUser({ email, password });
        }}
        title="Login"
      />
    </View>
  );
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(null, mapDispatchToProps)(LoginScreen);
