import React, {
  Component
} from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native'

class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.inputText} >Hello Dashboard</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputText: {
    paddingTop: 40,
    alignItems: 'center'
  }
});

export default Dashboard;
