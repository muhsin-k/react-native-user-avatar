import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

import UserAvatar from '@muhzi/react-native-user-avatar';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.separator} />
        <UserAvatar
          size={80}
          active
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2900&q=80"
        />
        <View style={styles.separator} />
        <UserAvatar userName="Josh peter" size={80} active />
        <View style={styles.separator} />
        <UserAvatar
          size={80}
          src="https://images.unsplash.com/photo-1578635374554-b07c9b1619b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
        />
        <View style={styles.separator} />
        <UserAvatar
          initialName="SK"
          size={80}
          active
          rounded={false}
          backgroundColors={['#575fcf', '#ef5777', '#0be881']}
        />
        <View style={styles.separator} />
        <UserAvatar
          size={80}
          src="https://images.unsplash.com/photo-1574888121821-1dc5d49eeba1?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
        />
        <View style={styles.separator} />
        <UserAvatar userName="Neymar Jr" size={80} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 64,
    backgroundColor: '#F9FAFC',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  separator: {
    marginTop: 16,
  },
});

export default App;
