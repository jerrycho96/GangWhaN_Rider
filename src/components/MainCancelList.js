import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Header, Left, Right, Title} from 'native-base';

import {BlueBorderBtn, BtnSubmit, InputText} from '../../components/BOOTSTRAP';
import {navigate} from '../navigation/RootNavigation';
import styles from '../style/Style';

export const CancelData = [
  {
    id: 1,
    resName: '토종꿀',
    picAddress: '인천광역시 강화군 강화읍 관청리 89-1',
    delAddress: '인천 강화군 강화읍 갑릉길 3',
    picKm: '0.1',
    delKm: '1.2',
    delState: '주문완료',
    pay: '온.결제완료',
    picKg: '1',
    color: '#E1F2FF',
  },
  {
    id: 2,
    resName: '토종꿀',
    picAddress: '인천광역시 강화군 강화읍 관청리 89-1',
    delAddress: '인천 강화군 강화읍 갑릉길 3',
    picKm: '0.1',
    delKm: '1.2',
    delState: '주문완료',
    pay: '온.결제완료',
    picKg: '1',
    color: '#E1F2FF',
  },
];

// 리스트 내용
export const CancelListRender = ({item}) => (
  <TouchableOpacity
    onPress={() => {
      navigate('QuickCancelDetail');
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
        <Text>{item.delState}</Text>
      </View>
    </View>
    <View style={{height: 1, backgroundColor: '#CCCCCC'}}></View>
  </TouchableOpacity>
);
