import React from 'react';

import {ActivityIndicator, Box, Button, Text} from '@components';

interface Props {
  loading: boolean;
  error: unknown;
  refetch: () => void;
}
export function HomeEmpty({loading, error, refetch}: Props) {
  let component = (
    <Text bold preset="paragraphMedium">
      None post has been posted yet.
    </Text>
  );
  if (loading) {
    component = <ActivityIndicator color="primary" />;
  }
  if (error) {
    component = (
      <>
        <Text mb="s16" preset="paragraphMedium">
          Something went wrong.
        </Text>
        <Button title="Reload" preset="outline" onPress={refetch} />
      </>
    );
  }
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      {component}
    </Box>
  );
}
