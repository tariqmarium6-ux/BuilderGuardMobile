import React from 'react';
import { StyleSheet, StatusBar, ActivityIndicator, View, Share, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  // JavaScript with strict layout text isolation matching
  const injectShareBridge = `
    (function() {
      document.addEventListener('click', function(e) {
        var target = e.target;
        while (target) {
          // STricT MATCH: Strip extra spaces/newlines and check for exact text equivalence
          var cleanText = target.innerText ? target.innerText.replace(/\\s+/g, ' ').trim().toUpperCase() : '';
          
          if (cleanText === 'DOWNLOAD REPORT') {
            e.preventDefault();
            e.stopPropagation();

            var reportElement = document.querySelector('.report-content') || document.querySelector('article') || document.body;
            var reportText = reportElement ? reportElement.innerText : 'BuilderGuard Audit Report';

            window.ReactNativeWebView.postMessage(JSON.stringify({
              type: 'SHARE_REPORT',
              text: reportText
            }));
            break;
          }
          target = target.parentNode;
        }
      }, true);
    })();
    true;
  `;

  const handleWebViewMessage = async (event: any) => {
    try {
      const messageData = JSON.parse(event.nativeEvent.data);
      if (messageData.type === 'SHARE_REPORT') {
        await Share.share({
          message: messageData.text,
          title: 'BuilderGuard Land Audit Report'
        });
      }
    } catch (error) {
      console.error("Native share bridge exception:", error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0F172A" translucent={true} />
      
      {Platform.OS === 'android' && <View style={styles.statusBarSpacer} />}
      
      <WebView 
        source={{ uri: 'https://builderguard-ai-84942831573.asia-southeast1.run.app/' }} 
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        injectedJavaScript={injectShareBridge}
        onMessage={handleWebViewMessage}
        renderLoading={() => (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#10B981" />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A' },
  statusBarSpacer: {
    height: StatusBar.currentHeight,
    backgroundColor: '#0F172A', 
  },
  webview: { flex: 1 },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#0F172A',
    justifyContent: 'center',
    alignItems: 'center',
  },
});