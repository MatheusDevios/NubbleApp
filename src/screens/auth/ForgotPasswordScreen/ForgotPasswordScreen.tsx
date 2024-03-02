import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {RootStackParamList} from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

export const ForgotPasswordScreen = ({navigation}: ScreenProps) => {
  const submitForm = () => {
    navigation.navigate('SuccessScreen', {
      title: 'Check your email',
      description: 'We sent you the instructions to modify your password.',
      icon: {name: 'messageRound', color: 'primary'},
    });
  };

  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Forgot Password
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Type your email and we'll send you the instructions to modify your
        password.
      </Text>
      <TextInput boxProps={{mb: 's40'}} placeholder="Email" label="Email" />
      <Button onPress={submitForm} title="Forgot Password" mb="s12" />
    </Screen>
  );
};
