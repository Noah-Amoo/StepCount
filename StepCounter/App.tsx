import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Value = ({label, value}) => {
  return (
    <View style={styles.valueContainer}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Counter</Text>

      <View style={{flexDirection: 'row'}}>  
        {/* <View style={styles.valueContainer}>
          <Text style={styles.label}>Steps</Text>
          <Text style={styles.value}>1219</Text>
        </View>

        <View style={styles.valueContainer}>
          <Text style={styles.label}>Distance</Text>
          <Text style={styles.value}>8.75 km</Text>
        </View> */}
        <Value label = "Steps" value = "1219" />
        <Value label = "Distance" value = "0.75 km" />
      </View>

      {/* <View style={styles.valueContainer}>
        <Text style={styles.label}>Flights Climbed</Text>
        <Text style={styles.value}>0.75 km</Text>
      </View> */}
      <Value label = "Flights Climbed" value = "12" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: 12,
  },
  valueContainer: {
    marginRight: 50,
    marginVertical: 10,
  },
  label: {
    color: 'white',
    fontSize: 20,
  },
  value: {
    fontSize: 35,
    color: '#AFB3BE',
    fontWeight: '500',
  },
});
