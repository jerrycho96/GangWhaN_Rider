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
} from 'react-native';
import {Header, Left, Right, Title} from 'native-base';

import {BlueBorderBtn, BtnSubmit, InputText} from '../components/BOOTSTRAP';
import {navigate} from '../navigation/RootNavigation';
import styles from '../style/Style';

export const SuccessData = [
  {
    id: 1,
    resName: '토종꿀',
    picAddress: '인천광역시 강화군 강화읍 관청리 89-1',
    delAddress: '인천 강화군 강화읍 갑릉길 3',
    picKm: '0.1',
    delKm: '1.2',
    delState: '배달완료',
    delDate: '2021.01.23 13:10',
    pay: '온.결제완료',
    picKg: '1',
    color: '#E1F2FF',
  },
  {
    id: 3,
    resName: '카페051',
    picAddress: '인천광역시 강화군 강화읍 관청리 89-1',
    delAddress: '인천 강화군 강화읍 갑릉길 3',
    picKm: '0.1',
    delKm: '1.2',
    delState: '배달완료',
    delDate: '2021.01.23 13:10',
    pay: '온.결제완료',
    picKg: null,
    color: '#FFFFAE',
  },
];

// 리스트 내용
export const SuccessListRender = ({item}) => (
  <TouchableOpacity
    onPress={() => {
      navigate(
        item.color === '#E1F2FF'
          ? 'QuickSuccessDetail'
          : 'DeliverySuccessDetail',
      );
    }}>
    <View
      style={{
        backgroundColor: item.color,
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 20,
      }}>
      <Text style={[styles.mediumtxt16, {marginBottom: 10}]}>
        {item.resName}
      </Text>
      {item.picAddress != null ? (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[styles.mediumtxt16, {marginRight: 8}]}>[픽업]</Text>
          <Text style={{fontSize: 16}}>{item.picAddress}</Text>
        </View>
      ) : null}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: item.picAddress === null ? 0 : 5,
        }}>
        {item.picAddress != null ? (
          <Text style={[styles.mediumtxt16, {marginRight: 8}]}>[배달]</Text>
        ) : null}
        <Text style={{fontSize: 16}}>{item.delAddress}</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: 'grey',
            height: 20,
            borderRadius: 4,
            textAlign: 'center',
            marginVertical: 10,
          }}>
          <Text
            style={{
              padding: 2,
              paddingHorizontal: 5,
              color: 'white',
            }}>
            {item.picKg != null ? item.picKg + 'kg  |  ' + item.pay : item.pay}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text>
          픽업 {item.picKm}km | 배달 {item.delKm}km
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: '#777777', marginRight: 5}}>{item.delDate}</Text>
          <Text>{item.delState}</Text>
        </View>
      </View>
    </View>
    <View style={{height: 1, backgroundColor: '#CCCCCC'}}></View>
  </TouchableOpacity>
);
