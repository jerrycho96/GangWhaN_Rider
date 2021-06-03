import * as React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  Dimensions,
  DeviceEventEmitter,
} from 'react-native';

import {
  BtnSubmit,
  InputText,
  Underline10,
  TitleAndInput,
  BlueBorderBtn,
  RowTwoText,
} from '../components/BOOTSTRAP';
import {navigate} from '../navigation/RootNavigation';
import styles from '../style/Style';

export default function RegisterInput({route}) {
  const width = Dimensions.get('window').width;
  const [addShop, setAddShop] = React.useState(false);

  // React.useEffect(() => {
  //   return () => {
  //     DeviceEventEmitter.emit('AddShop');
  //   };
  // }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView style={styles.container}>
        <View style={{padding: 15, flex: 1}}>
          <Text style={styles.mediumtxt16}>아이디</Text>
          <View
            style={[styles.Row1, {flex: 1, marginTop: 10, marginBottom: 15}]}>
            <InputText style={{flex: 1, marginRight: 10}} />
            <BlueBorderBtn title="중복확인" style={{height: 45, width: 101}} />
          </View>
          <TitleAndInput title="비밀번호" />
          <Text style={{color: '#E51A47', marginTop: -10, marginBottom: 15}}>
            영문, 숫자, 특수기호를 모두 포함해 8자 이상
          </Text>
          <TitleAndInput title="비밀번호 확인" />
          <TitleAndInput title="이름" />
          <TitleAndInput title="휴대폰 번호" />
          <BlueBorderBtn
            style={{width: '100%', marginBottom: 15, marginTop: -10}}
            title="휴대폰 본인인증"
          />
        </View>
        <Underline10 />
        <View
          style={{paddingHorizontal: 15, paddingTop: 20, paddingBottom: 10}}>
          <RowTextImg
            lefttxt="면허증 사진"
            img={require('../images/updateshopimg2.png')}
          />
          <RowTextImg
            lefttxt="통장사본 이미지"
            img={require('../images/updateshopimg3.png')}
          />
          <TitleAndInput title="은행주" />
          <TitleAndInput title="계좌번호" />
        </View>
        <Underline10 />
        <View style={{marginTop: 15}}>
          <BottomTos title="이용약관 동의" />
          <BottomTos title="개인정보처리방침 동의" />
          <BottomTos title="위치기반서비스 이용약관 동의" />

          <BtnSubmit
            title="회원가입 완료"
            style={{margin: 15}}
            onPress={() => {
              navigate('Login');
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const BottomTos = props => {
  return (
    <View
      style={[
        styles.Row1,
        {
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          marginBottom: 10,
        },
      ]}>
      <Text style={styles.mediumtxt16}>{props.title}</Text>
      <TouchableOpacity
        style={{
          width: 73,
          height: 29,
          backgroundColor: '#E1F2FF',
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={props.onPress}>
        <Text style={{fontWeight: '600', color: '#446DC2'}}>자세히</Text>
      </TouchableOpacity>
    </View>
  );
};

const RowTextImg = props => {
  const {onPress} = props;
  return (
    <View
      style={[styles.Row, {justifyContent: 'space-between', marginBottom: 15}]}>
      <Text style={styles.mediumtxt16}>{props.lefttxt}</Text>
      <TouchableOpacity onPress={onPress}>
        <Image source={props.img} style={{resizeMode: 'contain'}} />
      </TouchableOpacity>
    </View>
  );
};
