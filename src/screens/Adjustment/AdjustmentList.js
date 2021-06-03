import * as React from 'react';
import {View, Text, Image, FlatList, Dimensions} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';

import {MainWorkOnOffRefresh} from '../../components/MainWorkOnOffRefresh';
import {MainHeader} from '../../components/MainHeader';
import {TopTab} from '../../components/MainTopTab';
import {BottomTab} from '../../components/MainBottomTab';
import {AdminNotice} from '../../components/MainAdminNotice';
import {
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

const width = Dimensions.get('window').width;

export default function MainRequest({route}) {
  const [bottomTab, setBottomTab] = React.useState('3');

  return <MainBody1 bottomTab={bottomTab} setBottomTab={setBottomTab} />;
}

const MainBody1 = props => {
  const [topTab, setTopTab] = React.useState('1');
  const {bottomTab, setBottomTab} = props;
  const [accoState, setAccoState] = React.useState('상품 분류');
  const [accoState1, setAccoState1] = React.useState('전체');
  const [yearAcco, setYearAcco] = React.useState('2021');
  const [monthAcco, setMonthAcco] = React.useState('3월');
  return (
    <MenuProvider>
      <View style={{flex: 1}}>
        {/* 헤더 */}
        <MainHeader title="정산" />
        {/* 리스트 */}
        <FlatList
          contentContainerStyle={[{justifyContent: 'space-between'}]}
          style={{backgroundColor: 'white'}}
          ListHeaderComponent={
            <View style={{flex: 1}}>
              <AdjustHeader />
              <Underline10 />
              <AdjustmentTopTab topTab={topTab} setTopTab={setTopTab} />
              <View style={{padding: 15, flex: 1}}>
                {topTab === '1' ? (
                  <InputText placeholder="날짜 입력" />
                ) : topTab === '2' ? (
                  <View style={styles.Row}>
                    <InputText
                      placeholder="시작 날짜 입력"
                      style={{flex: 1, marginRight: 5}}
                    />
                    <InputText
                      placeholder="종료 날짜 입력"
                      style={{flex: 1, marginLeft: 5}}
                    />
                  </View>
                ) : (
                  <View style={styles.Row}>
                    <YearPopup yearAcco={yearAcco} setYearAcco={setYearAcco} />
                    <View style={{marginRight: 5}} />
                    <MonthPopup
                      yearAcco={monthAcco}
                      setYearAcco={setMonthAcco}
                    />
                  </View>
                )}

                <View style={[styles.Row, {marginTop: 10}]}>
                  <PopupMenu
                    accoState={accoState}
                    setAccoState={setAccoState}
                  />
                  <View style={{width: 5}} />
                  <PopupMenu1
                    menu1="전체"
                    menu2=""
                    accoState1={accoState1}
                    setAccoState1={setAccoState1}
                  />
                  <BtnSubmit
                    title="조회"
                    style={{width: 90, height: 45, marginLeft: 10}}
                  />
                </View>
                <View
                  style={[
                    styles.Row,
                    {
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: 20,
                      marginBottom: 5,
                    },
                  ]}>
                  <Text>검색된 배달 수</Text>
                  <Text>9,999건</Text>
                </View>
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

const AdjustHeader = () => {
  return (
    <View style={{padding: 15}}>
      <View
        style={[
          styles.Row,
          {justifyContent: 'space-between', alignItems: 'flex-end'},
        ]}>
        <Text style={styles.mediumtxt16}>3월 정산 금액</Text>
        <BtnSubmit
          title="정산 내역 보기"
          subtitle=""
          style={{width: 116, height: 35}}
          textStyle={styles.mediumtxt16}
          onPress={() => {
            navigate('AdjustmentView');
          }}
        />
      </View>
      <View
        style={[
          styles.Row,
          {justifyContent: 'space-between', alignItems: 'flex-end'},
        ]}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>999,000원</Text>
        <Text>정산완료 2021.04.10</Text>
      </View>
      <Underline1 />
      <View
        style={[
          styles.Row,
          {justifyContent: 'space-between', alignItems: 'center'},
        ]}>
        <View style={styles.Row}>
          <Image
            source={require('../../images/adjustmentcar.png')}
            style={{resizeMode: 'contain', width: 50, height: 50}}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 10,
            }}>
            이번 달 배달 4,999건
          </Text>
        </View>
        <Text>총 누적 5,000건</Text>
      </View>
    </View>
  );
};

const PopupMenu = props => {
  const {accoState, setAccoState} = props;

  return (
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
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 16}}>{accoState}</Text>
          <Image source={require('../../images/orderaccodiondown.png')} />
        </MenuTrigger>
        <MenuOptions
          customStyles={{
            optionsContainer: {
              ...Platform.select({
                ios: {
                  marginTop: 45,
                  paddingLeft: 11,
                  width: width / 3.1,
                },
                android: {
                  marginTop: 45,
                  paddingLeft: 11,
                  width: width / 2.9,
                },
              }),
            },
          }}>
          <MenuOption onSelect={() => setAccoState(`상품 분류`)}>
            <Text style={{color: 'black', fontSize: 16}}>상품 분류</Text>
          </MenuOption>
          <MenuOption onSelect={() => setAccoState(`상품 분류`)}>
            <Text style={{color: 'black', fontSize: 16}}>상품 분류</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};
const PopupMenu1 = props => {
  const {accoState1, setAccoState1} = props;
  return (
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
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 16}}>{accoState1}</Text>
          <Image source={require('../../images/orderaccodiondown.png')} />
        </MenuTrigger>
        <MenuOptions
          customStyles={{
            optionsContainer: {
              ...Platform.select({
                ios: {
                  marginTop: 45,
                  paddingLeft: 11,
                  width: width / 3.1,
                },
                android: {
                  marginTop: 45,
                  paddingLeft: 11,
                  width: width / 2.9,
                },
              }),
            },
          }}>
          <MenuOption onSelect={() => setAccoState1(`전체`)}>
            <Text style={{color: 'black', fontSize: 16}}>{props.menu1}</Text>
          </MenuOption>
          <MenuOption onSelect={() => setAccoState1(`전체`)}>
            <Text style={{color: 'black', fontSize: 16}}>전체</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};
const YearPopup = props => {
  const {yearAcco, setYearAcco} = props;
  return (
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
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 16}}>{yearAcco}</Text>
          <Image source={require('../../images/orderaccodiondown.png')} />
        </MenuTrigger>
        <MenuOptions
          customStyles={{
            optionsContainer: {
              ...Platform.select({
                ios: {
                  marginTop: 45,
                  paddingLeft: 11,
                  width: width / 2.2,
                },
                android: {
                  marginTop: 45,
                  paddingLeft: 11,
                  width: width / 2.2,
                },
              }),
            },
          }}>
          <MenuOption onSelect={() => setYearAcco(`2021`)}>
            <Text style={{color: 'black', fontSize: 16}}>2021</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`2020`)}>
            <Text style={{color: 'black', fontSize: 16}}>2020</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};

const MonthPopup = props => {
  const {yearAcco, setYearAcco} = props;
  return (
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
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 16}}>{yearAcco}</Text>
          <Image source={require('../../images/orderaccodiondown.png')} />
        </MenuTrigger>
        <MenuOptions
          customStyles={{
            optionsContainer: {
              ...Platform.select({
                ios: {
                  marginTop: 45,
                  paddingLeft: 11,
                  width: width / 2.2,
                },
                android: {
                  marginTop: 45,
                  paddingLeft: 11,
                  width: width / 2.2,
                },
              }),
            },
          }}>
          <MenuOption onSelect={() => setYearAcco(`1월`)}>
            <Text style={{color: 'black', fontSize: 16}}>1월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`2월`)}>
            <Text style={{color: 'black', fontSize: 16}}>2월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`3월`)}>
            <Text style={{color: 'black', fontSize: 16}}>3월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`4월`)}>
            <Text style={{color: 'black', fontSize: 16}}>4월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`5월`)}>
            <Text style={{color: 'black', fontSize: 16}}>5월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`6월`)}>
            <Text style={{color: 'black', fontSize: 16}}>6월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`7월`)}>
            <Text style={{color: 'black', fontSize: 16}}>7월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`8월`)}>
            <Text style={{color: 'black', fontSize: 16}}>8월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`9월`)}>
            <Text style={{color: 'black', fontSize: 16}}>9월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`10월`)}>
            <Text style={{color: 'black', fontSize: 16}}>10월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`11월`)}>
            <Text style={{color: 'black', fontSize: 16}}>11월</Text>
          </MenuOption>
          <MenuOption onSelect={() => setYearAcco(`12월`)}>
            <Text style={{color: 'black', fontSize: 16}}>12월</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};
