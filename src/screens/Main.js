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
  StatusBar,
} from 'react-native';

import {BlueBorderBtn, BtnSubmit, InputText} from '../components/BOOTSTRAP';
import {OrderListRender, OrderData} from '../components/MainOrderList';
import {DeliveryListRender, DeliveryData} from '../components/MainDeliveryList';
import {CancelListRender, CancelData} from '../components/MainCancelList';
import {SuccessListRender, SuccessData} from '../components/MainSuccessList';
import {MainWorkOnOffRefresh} from '../components/MainWorkOnOffRefresh';
import {MainHeader} from '../components/MainHeader';
import {TopTab} from '../components/MainTopTab';
import {BottomTab} from '../components/MainBottomTab';
import {AdminNotice} from '../components/MainAdminNotice';
import {navigate} from '../navigation/RootNavigation';
import styles from '../style/Style';

export default function Main(props) {
  const [topTab, setTopTab] = React.useState('1');
  const [bottomTab, setBottomTab] = React.useState('1');
  const TabRenderState = () => {
    if (topTab === '1') {
      return OrderListRender;
    } else if (topTab === '2') {
      return DeliveryListRender;
    } else if (topTab === '3') {
      return CancelListRender;
    } else if (topTab === '4') {
      return SuccessListRender;
    }
  };
  const TabDataState = () => {
    if (topTab === '1') {
      return OrderData;
    } else if (topTab === '2') {
      return DeliveryData;
    } else if (topTab === '3') {
      return CancelData;
    } else if (topTab === '4') {
      return SuccessData;
    }
  };
  return (
    <MainBody1
      TabRenderState={TabRenderState}
      TabDataState={TabDataState}
      topTab={topTab}
      setTopTab={setTopTab}
      bottomTab={bottomTab}
      setBottomTab={setBottomTab}
    />
  );
}

const MainBody1 = props => {
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
      <StatusBar
        backgroundColor={'red'}
        barStyle={'dark-content'}
        translucent={false}
      />
      {/* ?????? */}
      <MainHeader
        title="?????? ????????? ????????? 100"
        img={require('../images/maingps.png')}
      />
      {/* ????????? */}
      <FlatList
        contentContainerStyle={[{justifyContent: 'space-between'}]}
        style={{backgroundColor: 'white'}}
        ListHeaderComponent={
          <View style={{flex: 1}}>
            {/* ??????/??????/???????????? ??? */}
            <MainWorkOnOffRefresh />
            {/* ??????, ?????????, ??????, ?????? ??? */}
            <TopTab topTab={topTab} setTopTab={setTopTab} />
            <AdminNotice />
          </View>
        }
        data={TabDataState()}
        keyExtractor={item => item.id}
        renderItem={TabRenderState()}
      />
      {/* ????????? */}
      <BottomTab bottomTab={bottomTab} setBottomTab={setBottomTab} />
    </View>
  );
};
