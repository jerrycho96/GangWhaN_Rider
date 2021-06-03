import * as React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import styles from '../style/Style';

// 메인 운영자 공지
export const AdminNotice = () => {
  return (
    <TouchableOpacity style={styles.noticeview}>
      <Image
        source={require('../images/mainnoticeicon.png')}
        style={{marginRight: 10}}></Image>
      <Text style={styles.mediumtxt16}>운영자 공지입니다.</Text>
    </TouchableOpacity>
  );
};
