import { ActivityIndicator, Text, View } from 'react-native';

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
      {/* <Text style={{ alignSelf: 'center' }}> Loading...</Text> */}
      <ActivityIndicator size="large"></ActivityIndicator>
    </View>
  );
};

export default Loading;
