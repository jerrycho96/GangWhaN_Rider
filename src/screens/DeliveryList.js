import * as React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import {MainWorkOnOffRefresh} from '../components/MainWorkOnOffRefresh';
import {MainHeader} from '../components/MainHeader';
import {TopTab} from '../components/MainTopTab';
import {BottomTab} from '../components/MainBottomTab';
import {AdminNotice} from '../components/MainAdminNotice';
import {BtnSubmit, InputText, TopDelState} from '../components/BOOTSTRAP';
import {navigate} from '../navigation/RootNavigation';
import styles from '../style/Style';
import {DelListSuccess, DelSuccessData} from '../components/DelListSuccess';

export default function MainRequest({route}) {
  const [bottomTab, setBottomTab] = React.useState('2');

  return <MainBody1 bottomTab={bottomTab} setBottomTab={setBottomTab} />;
}

const MainBody1 = props => {
  const {bottomTab, setBottomTab} = props;
  const [accoState, setAccoState] = React.useState('날짜 검색');

  const width = Dimensions.get('window').width;
  return (
    <MenuProvider>
      <View style={{flex: 1}}>
        {/* 헤더 */}
        <MainHeader title="배달내역" />
        {/* 리스트 */}
        <FlatList
          contentContainerStyle={[{justifyContent: 'space-between'}]}
          style={{backgroundColor: 'white'}}
          ListHeaderComponent={
            <View style={{flex: 1, padding: 15}}>
              <View style={[styles.Row, {marginBottom: 10}]}>
                <TouchableOpacity>
                  <TopDelState
                    title="오늘 배달한 목록보기"
                    subtitle=""
                    style={{
                      backgroundColor: '#E2EBFF',
                      width: 164,
                      marginBottom: 0,
                      justifyContent: 'center',
                    }}
                    textStyle={{color: '#446DC2', fontSize: 16}}
                  />
                </TouchableOpacity>
                <View style={{flex: 1}}>
                  <Menu>
                    <MenuTrigger
                      style={{
                        borderRadius: 5,
                        borderWidth: 1,
                        height: 45,
                        flex: 1,
                        borderColor: '#CCCCCC',
                        paddingHorizontal: 15,
                        marginLeft: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={{fontSize: 16}}>{accoState}</Text>
                      <Image
                        source={require('../images/orderaccodiondown.png')}
                      />
                    </MenuTrigger>
                    <MenuOptions
                      customStyles={{
                        optionsContainer: {
                          ...Platform.select({
                            ios: {
                              marginTop: 45,
                              marginLeft: 10,
                              paddingLeft: 11,
                              width: width / 2.12,
                            },
                            android: {
                              marginTop: 45,
                              paddingLeft: 11,
                              marginLeft: 11,
                              width: width / 1.9,
                            },
                          }),
                        },
                      }}>
                      <MenuOption onSelect={() => setAccoState(`날짜 검색`)}>
                        <Text style={{color: 'black', fontSize: 16}}>
                          날짜 검색
                        </Text>
                      </MenuOption>
                      <MenuOption onSelect={() => setAccoState(`기간 검색`)}>
                        <Text style={{color: 'black', fontSize: 16}}>
                          기간 검색
                        </Text>
                      </MenuOption>
                    </MenuOptions>
                  </Menu>
                </View>
              </View>
              {accoState === '기간 검색' ? (
                <View style={[styles.Row]}>
                  <InputText
                    placeholder="시작 날짜 입력"
                    style={{paddingHorizontal: 15, flex: 1, marginRight: 5}}
                  />
                  <InputText
                    placeholder="종료 날짜 입력"
                    style={{paddingHorizontal: 15, flex: 1, marginLeft: 5}}
                  />
                </View>
              ) : (
                <View>
                  <InputText
                    placeholder="날짜 입력"
                    style={{paddingHorizontal: 15}}
                  />
                </View>
              )}
              <View style={[styles.underline1, {marginVertical: 10}]} />
              <View style={styles.Row}>
                <InputText
                  placeholder="매장명을 입력하세요"
                  style={{flex: 1, marginRight: 10}}
                />
                <BtnSubmit
                  title="내역 조회"
                  style={{width: 93, height: 45}}
                  textStyle={{fontWeight: '600'}}
                />
              </View>
            </View>
          }
          data={DelSuccessData}
          keyExtractor={item => item.id}
          renderItem={DelListSuccess}
        />
        {/* 바텀탭 */}
        <BottomTab bottomTab={bottomTab} setBottomTab={setBottomTab} />
      </View>
    </MenuProvider>
  );
};

const MainBody2 = props => {
  const {
    TabRenderState,
    TabDataState,
    topTab,
    setTopTab,
    bottomTab,
    setBottomTab,
  } = props;
  return (
    <View style={{flex: 1}}>
      {/* 헤더 */}
      <MainHeader title="인천 강화군 강화읍 100" />
      {/* 리스트 */}
      <FlatList
        contentContainerStyle={[{justifyContent: 'space-between'}]}
        style={{backgroundColor: 'white'}}
        ListHeaderComponent={
          <View style={{flex: 1}}>
            {/* 출근/퇴근/새로고침 탭 */}
            <MainWorkOnOffRefresh />
            {/* 주문, 배달중, 취소, 완료 탭 */}
            <TopTab topTab={topTab} setTopTab={setTopTab} />
            <AdminNotice />
          </View>
        }
        data={TabDataState()}
        keyExtractor={item => item.id}
        renderItem={TabRenderState()}
      />
      {/* 바텀탭 */}
      <BottomTab bottomTab={bottomTab} setBottomTab={setBottomTab} />
    </View>
  );
};
