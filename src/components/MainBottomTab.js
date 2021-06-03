import * as React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Header, Left, Right, Title} from 'native-base';

import {navigate, resetRoot, reset} from '../navigation/RootNavigation';
import styles from '../style/Style';

// 요청내역, 배달내역, 정산, 설정 하단 탭
export const BottomTab = props => {
  const bottomTab = props.bottomTab;
  const setBottomTab = props.setBottomTab;
  const TabMenu = ({tapNum, title, navi}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          [setBottomTab(tapNum), resetRoot(navi)];
        }}
        style={
          bottomTab === tapNum
            ? styles.mainbottomtabOn
            : styles.mainbottomtabOff
        }>
        <Text
          style={
            bottomTab === tapNum
              ? styles.mainbottomtxtOn
              : styles.mainbottomtxtOff
          }>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={styles.mainbottomtabView}>
        <TabMenu tapNum={'1'} title={'요청내역'} navi="Main" />
        <View style={{height: 25, width: 1, backgroundColor: '#E5E5E5'}} />
        <TabMenu tapNum={'2'} title={'배달내역'} navi="DeliveryList" />
        <View style={{height: 25, width: 1, backgroundColor: '#E5E5E5'}} />
        <TabMenu tapNum={'3'} title={'정산'} navi="AdjustmentList" />
        <View style={{height: 25, width: 1, backgroundColor: '#E5E5E5'}} />
        <TabMenu tapNum={'4'} title={'설정'} navi="SettingHome" />
      </View>
    </SafeAreaView>
  );
};
