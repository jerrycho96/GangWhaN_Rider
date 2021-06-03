import * as React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import {MainWorkOnOffRefresh} from '../../components/MainWorkOnOffRefresh';
import {MainHeader} from '../../components/MainHeader';
import {TopTab} from '../../components/MainTopTab';
import {BottomTab} from '../../components/MainBottomTab';
import {AdminNotice} from '../../components/MainAdminNotice';
import {
  BlueBorderBtn,
  BtnSubmit,
  InputText,
  TopDelState,
  Underline1,
  Underline10,
} from '../../components/BOOTSTRAP';
import {navigate} from '../../navigation/RootNavigation';
import styles from '../../style/Style';
import {DelListSuccess, DelSuccessData} from '../../components/DelListSuccess';
import {AdjustmentTopTab} from '../../components/AdjustmentTopTab';

export default function UpdateProfile() {
  return (
    <View style={styles.container}>
      <View style={{padding: 15}}>
        <TextLine title="아이디" value="emp1001" />
        <TextLine title="이름" value="홍길동" />
        <Text style={styles.mediumtxt16}>비밀번호 변경</Text>
        <InputText
          placeholder="비밀번호 입력"
          style={{marginBottom: 5, marginTop: 10}}
        />
        <InputText placeholder="비밀번호 확인" />
        <View style={[styles.Row1, {marginTop: 8}]}>
          <Image source={require('../../images/profilepasswarning.png')} />
          <Text style={{color: 'red', marginLeft: 5}}>
            비밀번호가 일치하지 않습니다.
          </Text>
        </View>

        <Text style={[styles.mediumtxt16, {marginTop: 15}]}>휴대폰 번호</Text>
        <View style={[styles.Row1, {marginTop: 10}]}>
          <InputText
            placeholder="휴대폰 번호 입력"
            style={{flex: 1, marginRight: 8}}
          />
          <BlueBorderBtn title="인증완료" onPress={() => {}} />
        </View>
        <View style={[styles.Row1, {marginTop: 10}]}>
          <InputText
            placeholder="인증번호 입력"
            style={{flex: 1, marginRight: 8}}
            onPress={() => {}}
          />
          <BlueBorderBtn title="재인증" />
        </View>
      </View>
      <Underline10 />
      <View style={{padding: 15, paddingTop: 20}}>
        <TextLine title="계좌정보" value="신한은행 | 56211924568" />
        <TextLine title="등록일" value="2021.01.23" />
      </View>
      <BottomButton />
    </View>
  );
}

const TextLine = props => {
  return (
    <View
      style={[
        styles.Row1,
        {justifyContent: 'space-between', marginBottom: 10},
      ]}>
      <Text style={styles.mediumtxt16}>{props.title}</Text>
      <Text style={{fontSize: 16}}>{props.value}</Text>
    </View>
  );
};

const BottomButton = props => {
  return (
    <SafeAreaView
      style={{
        justifyContent: 'flex-end',
        flex: 1,
        margin: 15,
      }}>
      <BtnSubmit title="수정 완료" />
    </SafeAreaView>
  );
};
