/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import NewsItem from './NewsItem.js';

const App: () => React$Node = () => {
  return (
      <SafeAreaView>
        <View><Text style={styles.bas}> ENSONHABER </Text></View>
        <ScrollView>
        <NewsItem type='saglik' title='KISITLAMA!' description='Hata içi akşam Hafta Sonu tam gün'/>
        <NewsItem type='siyaset' title='SEÇİM!' description='Kabine erken seçim iddialarıyla çalkalanıyor'/>
        <NewsItem type='spor' title='BAHİS!' description='Süper ligde şampiyonluk oranları güncellendi!'/>
        <NewsItem type='saglik' title='KALORİSİZ EKMEK!' description='Kalorisiz ekmek üretilebileceği iddiaları diyetisyenleri şaşkına çevirdi.'/>
        <NewsItem type='spor' title='IBRA!' description='İbrahimovic FIFA ya yüz haklarıyla ilgili dava açıyor!'/>
        <NewsItem type='magazin' title='KORONA OLDU!' description='Eser Yenenler Korona olduğunu açıkladı'/>
        <NewsItem type='bilim' title='GUNSEL!' description='KKTC kendi ürettikleri araç olan GUNSEL i tanıttı.'/>
        <NewsItem type='spor' title='AMATÖR SPOR!' description='Amatör sporcular müsabakların devam etmemesinden şikayetçi.'/>
        </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bas:{
    fontSize: 40,
    fontWeight: "bold"
  }
});

export default App;