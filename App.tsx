import React, { useEffect } from 'react';
import Root from './src/Root';
import BootSplash from 'react-native-bootsplash'
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const styles = StyleSheet.create({
  keyboardAvoiding: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

function App(): React.JSX.Element {

  useEffect(() => {
    BootSplash.hide();

  }, []);

  const content = (
      <SafeAreaProvider>
        <Root/>
      </SafeAreaProvider>
  )

  {
    return Platform.OS === 'ios' ? (
            <KeyboardAvoidingView style={styles.keyboardAvoiding} behavior={'padding'}>
              {content}
            </KeyboardAvoidingView>
        )
        :
        content
  }

}


export default App;
