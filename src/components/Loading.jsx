import { Text, View } from 'react-native';

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <Text style={{ alignSelf: 'center' }}> Loading...</Text>
    </View>
  );
};

export default Loading;
