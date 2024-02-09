import {ScrollView, View} from 'react-native';

interface ScrollViewContainerProps {
  children: React.ReactNode;
  backgroundColor: string;
}

export function ScrollViewContainer({
  children,
  backgroundColor,
}: ScrollViewContainerProps) {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{backgroundColor, flex: 1}}>
      {children}
    </ScrollView>
  );
}

export function ViewContainer({
  children,
  backgroundColor,
}: ScrollViewContainerProps) {
  return <View style={{backgroundColor}}>{children}</View>;
}
