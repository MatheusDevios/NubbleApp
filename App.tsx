import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';
import {Icon} from './src/components/Icon/Icon';
import {Button} from './src/components/Button/Button';
import {TextInput} from './src/components/TextInput/TextInput';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text mt="s40" marginBottom="s8" preset="headingLarge">
            Hi there!
          </Text>
          <Text preset="paragraphLarge" mb="s40">
            Please type your email and password to login.
          </Text>
          <TextInput boxProps={{mb: 's20'}} placeholder="Email" label="Email" />
          <TextInput
            placeholder="password"
            label="Password"
            RightComponent={<Icon name="eyeOn" color="gray2" />}
            errorMessage="Error Message"
            boxProps={{mb: 's10'}}
          />
          <Text color="primary" preset="paragraphSmall" bold mb="s48">
            Forgot password
          </Text>
          <Button title="Login" mb="s12" />
          <Button title="Sign up" preset="outline" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
