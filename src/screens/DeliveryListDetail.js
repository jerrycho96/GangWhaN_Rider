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
  BlueBorderBtn,
  BtnSubmit,
  FooterBtn,
  IconBtn,
  ModalConfirm,
  TopDelState,
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

export default function DeliveryListDetail() {
  const [onConfirm, setOnConfirm] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={[
          {justifyContent: 'space-between', backgroundColor: 'white'},
        ]}>
        <View style={{padding: 15}}>
          <TopDelState
            title="배달이 완료되었습니다"
            style={{height: 71, backgroundColor: '#E2EBFF', borderRadius: 5}}
            textStyle={{color: '#446DC2', marginBottom: 5}}
            subtitle="2021.01.23 13:10"
          />
          <View style={[styles.Row, {marginBottom: 15}]}>
            <Text style={[styles.mediumtxt18, {color: '#446DC2'}]}>
              음식배달{' '}
            </Text>
            <Text style={styles.mediumtxt18}>입니다</Text>
          </View>
          <View style={styles.underline1}></View>
          <View>
            <Text style={[styles.boldtxt18, {marginVertical: 15}]}>매장</Text>
            <Text style={{fontSize: 16, marginBottom: 5}}>
              인천 강화군 강화읍 갑룡길 3
            </Text>
            <View style={styles.Row}>
              <Text style={[styles.mediumgreytxt16]}>[지번 주소] </Text>
              <Text style={styles.greytxt16}>
                인천광역시 강화군 강화읍 관청리 89-1
              </Text>
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
          <Text style={[styles.boldtxt18, {marginBottom: 10}]}>남기는 말</Text>
          <Text style={{fontSize: 16}}>조심히 와주세요 :)</Text>
        </View>
        <Underline10 />
        <View style={{padding: 15}}>
          <View
            style={[
              styles.Row,
              {justifyContent: 'space-between', marginBottom: 10},
            ]}>
            <Text style={styles.mediumtxt16}>결제방법</Text>
            <Text style={{fontSize: 16}}>결제완료(카드결제)</Text>
          </View>
          <View
            style={[
              styles.Row,
              {justifyContent: 'space-between', marginBottom: 10},
            ]}>
            <Text style={styles.mediumtxt16}>제품금액</Text>
            <Text style={{fontSize: 16}}>18,000원</Text>
          </View>
          <View
            style={[
              styles.Row,
              {justifyContent: 'space-between', marginBottom: 10},
            ]}>
            <Text style={styles.mediumtxt16}>배 송 비</Text>
            <Text style={{fontSize: 16}}>2,000원</Text>
          </View>
          <View style={styles.underline} />
          <View
            style={[
              styles.Row,
              {justifyContent: 'space-between', marginVertical: 10},
            ]}>
            <Text style={styles.mediumtxt18}>결제금액</Text>
            <Text style={styles.boldtxt18}>20,000 원</Text>
          </View>
        </View>
        {/* 아코디언 메뉴 */}
        <OrderMenuInfo />
      </ScrollView>
    </SafeAreaView>
  );
}

// 아코디언 메뉴
const OrderMenuInfo = () => {
  const [accodion, setAccodion] = React.useState(true);

  return (
    <View style={{backgroundColor: 'white'}}>
      <TouchableOpacity
        style={styles.accodiontitle}
        onPress={() => {
          setAccodion(!accodion);
        }}>
        <Text style={styles.mediumtxt18}>메뉴정보</Text>
        {accodion ? (
          <Image source={require('../images/orderaccodionup.png')} />
        ) : (
          <Image source={require('../images/orderaccodiondown.png')} />
        )}
      </TouchableOpacity>
      <View style={[styles.underline1]}></View>

      {menuData.map(item => {
        return accodion ? (
          <View key={item.id}>
            <View style={{backgroundColor: 'white', padding: 15}}>
              <Text style={[styles.mediumtxt16, {marginBottom: 10}]}>
                {item.name}
              </Text>
              <Text style={[styles.greytxt16, {marginBottom: 5}]}>
                기본 : {item.price}
              </Text>
              <Text style={[styles.greytxt16, {marginBottom: 5}]}>
                맵기선택 : {item.taste + '(' + item.tasteprice + '원)'}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.greytxt16}>
                  추가선택 : {item.add + '(' + item.addprice + '원)'}
                </Text>
                <Text style={styles.mediumtxt16}>{item.count}개</Text>
              </View>
            </View>
            <View style={[styles.underline1, {marginHorizontal: 15}]}></View>
          </View>
        ) : null;
      })}
    </View>
  );
};
