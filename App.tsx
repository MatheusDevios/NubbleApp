import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text bold preset="paragraphMedium">
            Matheus
          </Text>
          <Button title="Primary" marginTop="s24" />
          <Button disabled title="Primary" marginTop="s24" />
          <Button loading title="Primary" marginTop="s24" />
          <Button title="Outline" preset="outline" marginTop="s24" />
          <Button disabled title="Outline" preset="outline" marginTop="s24" />
          <Button loading title="Outline" preset="outline" marginTop="s24" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
