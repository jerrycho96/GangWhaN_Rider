import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {MainHeader} from '../../components/MainHeader';
import {BottomTab} from '../../components/MainBottomTab';
import {ModalConfirm, Underline10} from '../../components/BOOTSTRAP';
import {navigate} from '../../navigation/RootNavigation';
import styles from '../../style/Style';

const settingData = [
  {
    id: 1,
    year: 2021,
    month: 3,
    count: '9,999',
  },
  {
    id: 2,
    year: 2021,
    month: 2,
    count: '9,999',
  },
  {
    id: 3,
    year: 2021,
    month: 1,
    count: '9,999',
  },
  {
    id: 4,
    year: 2022,
    month: 12,
    count: '9,999',
  },
];

export default function SettingHome() {
  const [bottomTab, setBottomTab] = React.useState('4');

  return <MainBody1 bottomTab={bottomTab} setBottomTab={setBottomTab} />;
}

const MainBody1 = props => {
  const {bottomTab, setBottomTab} = props;
  const [onConfirm, setOnConfirm] = React.useState(false);
  return (
    <View style={{flex: 1}}>
      {/* 헤더 */}
      <MainHeader title="설정" />
      <View style={{flex: 1}}>
        {/* 배달 수 */}
        <DeliveryCount />
        <Underline10 />
        <View
          style={{
            backgroundColor: 'white',
            height: 183,
            paddingHorizontal: 15,
          }}>
          <SettingButton
            title="회원정보 수정"
            onPress={() => navigate('UpdateProfile')}
          />
          <SettingButton title="공지사항" onPress={() => navigate('Notice')} />
          <SettingButton title="로그아웃" onPress={() => setOnConfirm(true)} />
        </View>
      </View>
      <ModalConfirm
        open={onConfirm}
        cancel={() => setOnConfirm(false)}
        confirm={() => {}}
        title="로그아웃"
        text1="연결된 계정을 로그아웃하고 퇴근하시겠습니까?"
        text2=""
        canceltxt="취소"
        submittxt="확인"
      />
      {/* 바텀탭 */}
      <BottomTab bottomTab={bottomTab} setBottomTab={setBottomTab} />
    </View>
  );
};

const SettingButton = props => {
  return (
    <>
      <TouchableOpacity
        style={[styles.Row, {height: 60, justifyContent: 'space-between'}]}
        onPress={props.onPress}>
        <Text style={{fontSize: 16}}>{props.title}</Text>
        <Image source={require('../../images/rightbutton.png')} />
      </TouchableOpacity>
      <View style={[styles.underline1, {width: '100%'}]} />
    </>
  );
};

const DeliveryCount = props => {
  return (
    <View style={{padding: 15, height: 171, backgroundColor: 'white'}}>
      {settingData.map(item => (
        <View style={styles.Row} key={item.id}>
          <View style={styles.Row}>
            <Image source={require('../../images/settingcar.png')} />
            <Text style={[styles.mediumtxt16, {marginLeft: 10}]}>
              {item.year}년 {item.month}월 배달 수
            </Text>
          </View>
          <Text style={{fontSize: 16}}>{item.count}건</Text>
        </View>
      ))}
    </View>
  );
};
