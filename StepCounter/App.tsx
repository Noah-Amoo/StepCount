import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Noah</Text>

      <View style={{flexDirection: 'row'}}>  
        <View>
          <Text>Steps</Text>
          <Text>1219</Text>
        </View>

        <View>
          <Text>Distance</Text>
          <Text>8.75 km</Text>
        </View>
      </View>

      <View>
        <Text>Flights Climbed</Text>
        <Text>0.75 km</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 12,
  },
});
