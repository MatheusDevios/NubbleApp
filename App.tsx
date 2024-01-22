import React from 'react';
import {SafeAreaView, TextInput, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';
import {Icon} from './src/components/Icon/Icon';
import {Button} from './src/components/Button/Button';

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
          <Box mb="s20">
            <Text preset="paragraphMedium" mb="s4">
              Email
            </Text>
            <TextInput
              style={{
                borderRadius: 15,
                height: 50,
                borderWidth: 1,
                paddingLeft: 16,
              }}
              placeholder="Email"
            />
          </Box>
          <Box>
            <Text preset="paragraphMedium" mb="s4">
              Password
            </Text>
            <TextInput
              style={{
                borderRadius: 15,
                height: 50,
                borderWidth: 1,
                paddingLeft: 16,
              }}
              placeholder="password"
            />
          </Box>
          <Text mt="s10" color="primary" preset="paragraphSmall" bold mb="s48">
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
