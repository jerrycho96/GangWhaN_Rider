import * as React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {List} from 'react-native-paper';
import {
  BtnSubmit,
  FooterBtn,
  IconBtn,
  Underline10,
} from '../components/BOOTSTRAP';

import {navigate} from '../navigation/RootNavigation';
import styles from '../style/Style';

const menuData = [
  {
    id: 1,
    name: '김치찌개',
    price: '7,000',
    taste: '기본맛',
    tasteprice: '+0',
    add: '김치추가',
    addprice: '+500',
    count: 2,
  },
  {
    id: 2,
    name: '김치찌개',
    price: '7,000',
    taste: '중간맛',
    tasteprice: '+500',
    add: '김치추가',
    addprice: '+500',
    count: 1,
  },
  {
    id: 3,
    name: '김치찌개',
    price: '7,000',
    taste: '매운맛',
    tasteprice: '+1,000',
    add: '고기추가',
    addprice: '+1,000',
    count: 1,
  },
];

export default function QuickSuccessDetail() {
  const [onConfirm, setOnConfirm] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={[
          {justifyContent: 'space-between', backgroundColor: 'white'},
        ]}>
        <View style={{padding: 15}}>
          <View style={[styles.Row, {marginBottom: 15}]}>
            <Text style={[styles.mediumtxt18, {color: '#446DC2'}]}>
              퀵배달{' '}
            </Text>
            <Text style={styles.mediumtxt18}>입니다</Text>
          </View>
          <View style={styles.underline1}></View>
          <View>
            <Text style={[styles.boldtxt18, {marginVertical: 15}]}>출발지</Text>
            <Text style={{fontSize: 16, marginBottom: 5}}>
              인천 강화군 강화읍 갑룡길 3
            </Text>
            <View style={[styles.Row, {marginBottom: 8}]}>
              <Text style={[styles.mediumgreytxt16]}>[지번 주소] </Text>
              <Text style={styles.greytxt16}>
                인천광역시 강화군 강화읍 관청리 89-1
              </Text>
            </View>
            <View style={styles.Row}>
              <Image source={require('../images/contacts.png')} />
              <Text style={{fontSize: 16, marginLeft: 10}}>010-1234-5678</Text>
            </View>
            <View style={[styles.Row, {marginVertical: 15}]}>
              <IconBtn
                title="전화하기"
                require={require('../images/callicon.png')}
                style={{marginRight: 5}}
              />
              <IconBtn
                title="길찾기"
                require={require('../images/gpsicon.png')}
                style={{backgroundColor: '#777777', marginLeft: 5}}
              />
            </View>
          </View>
          <View>
            <Text style={[styles.boldtxt18, {marginVertical: 15}]}>도착지</Text>
            <Text style={{fontSize: 16, marginBottom: 5}}>
              인천 강화군 강화읍 갑룡길 3
            </Text>
            <View style={[styles.Row, {marginBottom: 8}]}>
              <Text style={[styles.mediumgreytxt16]}>[지번 주소] </Text>
              <Text style={styles.greytxt16}>
                인천광역시 강화군 강화읍 관청리 89-1
              </Text>
            </View>
            <View style={styles.Row}>
              <Image source={require('../images/contacts.png')} />
              <Text style={{fontSize: 16, marginLeft: 10}}>010-1234-5678</Text>
            </View>
            <View style={[styles.Row, {marginVertical: 15}]}>
              <IconBtn
                title="전화하기"
                require={require('../images/callicon.png')}
                style={{marginRight: 5}}
              />
              <IconBtn
                title="길찾기"
                require={require('../images/gpsicon.png')}
                style={{backgroundColor: '#777777', marginLeft: 5}}
              />
            </View>
          </View>
        </View>
        <Underline10 />
        <View style={{padding: 15}}>
          <View
            style={[
              styles.Row,
              {justifyContent: 'space-between', marginVertical: 10},
            ]}>
            <Text style={styles.mediumtxt16}>배달상품</Text>
            <Text style={{fontSize: 16}}>토종꿀</Text>
          </View>
          <View
            style={[
              styles.Row,
              {justifyContent: 'space-between', marginBottom: 10},
            ]}>
            <Text style={styles.mediumtxt16}>무게</Text>
            <Text style={{fontSize: 16}}>1 Kg</Text>
          </View>
          <View style={styles.underline} />
          <View>
            <Text style={[styles.boldtxt18, {marginVertical: 15}]}>
              주문자 정보
            </Text>
            <View
              style={[
                styles.Row,
                {justifyContent: 'space-between', marginBottom: 10},
              ]}>
              <Text style={styles.mediumtxt16}>이름</Text>
              <Text style={{fontSize: 16}}>홍길동</Text>
            </View>
            <View
              style={[
                styles.Row,
                {justifyContent: 'space-between', marginBottom: 10},
              ]}>
              <Text style={styles.mediumtxt16}>휴대폰번호</Text>
              <Text style={{fontSize: 16}}>010-1234-5678</Text>
            </View>
            <View style={[styles.Row, {marginVertical: 15}]}>
              <IconBtn
                title="전화하기"
                require={require('../images/callicon.png')}
              />
            </View>
          </View>
        </View>
        <Underline10 />
        <View style={{padding: 15}}>
          <View
            style={[
              styles.Row,
              {justifyContent: 'space-between', marginVertical: 10},
            ]}>
            <Text style={styles.mediumtxt16}>결제방법</Text>
            <Text style={{fontSize: 16}}>결제완료(카드결제)</Text>
          </View>
          <View
            style={[
              styles.Row,
              {justifyContent: 'space-between', marginBottom: 10},
            ]}>
            <Text style={styles.mediumtxt16}>배달비용</Text>
            <Text style={{fontSize: 16}}>18,000원</Text>
          </View>
          <View
            style={[
              styles.Row,
              {justifyContent: 'space-between', marginBottom: 10},
            ]}>
            <Text style={styles.mediumtxt16}>배달거리</Text>
            <Text style={{fontSize: 16}}>5.5 Km</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
