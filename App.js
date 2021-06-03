import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {
  navigate,
  navigationRef,
  resetRoot,
} from './src/navigation/RootNavigation';
import {IconButton, Colors} from 'react-native-paper';

import Login from './src/screens/Login';
import GangwhaSplash from './src/screens/GangwhaSplash';
import FindAccount from './src/screens/FindAccount/FindAccount';
import FindPassPhone from './src/screens/FindAccount/FindPassPhone';
import FindId from './src/screens/FindAccount/FindId';
import FindIdResult from './src/screens/FindAccount/FindIdResult';
import FindIdPhone from './src/screens/FindAccount/FindIdPhone';
import FindPass from './src/screens/FindAccount/FindPass';
import FindPassReset from './src/screens/FindAccount/FindPassReset';
import Main from './src/screens/Main';
import OrderDelDetail from './src/screens/OrderDelDetail';
import QuickDelDetail from './src/screens/QuickDelDetail';
import DeliveryOrderDetail from './src/screens/DeliveryOrderDetail';
import QuickOrderDetail from './src/screens/QuickOrderDetail';
import QuickCancelDetail from './src/screens/QuickCancelDetail';
import DeliverySuccessDetail from './src/screens/DeliverySuccessDetail';
import QuickSuccessDetail from './src/screens/QuickSuccessDetail';
import DeliveryList from './src/screens/DeliveryList';
import RegisterInput from './src/screens/RegisterInput';
import DeliveryListDetail from './src/screens/DeliveryListDetail';
import QuickListDetail from './src/screens/QuickListDetail';
import AdjustmentList from './src/screens/Adjustment/AdjustmentList';
import AdjustmentView from './src/screens/Adjustment/AdjustmentView';
import SettingHome from './src/screens/Settings/SettingHome';
import UpdateProfile from './src/screens/Settings/UpdateProfile';
import Notice from './src/screens/Settings/Notice';
import NoticeView from './src/screens/Settings/NoticeView';

const Stack = createStackNavigator();

function App() {
  React.useEffect(() => {
    setTimeout(() => {
      resetRoot('Login');
    }, 2000);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,

          headerBackImage: () => (
            <IconButton
              icon={require('./src/images/headerback.png')}
              color="#000"
              size={18}
              style={{}}></IconButton>
          ),
        }}
        mode="card"
        initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={GangwhaSplash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="FindAccount"
          component={FindAccount}
          options={{
            headerTitle: '계정 찾기',
          }}
        />
        <Stack.Screen
          name="RegisterInput"
          component={RegisterInput}
          options={{headerTitle: '회원가입'}}
        />
        <Stack.Screen
          name="FindId"
          component={FindId}
          options={{headerTitle: '아이디 찾기'}}
        />
        <Stack.Screen
          name="FindIdPhone"
          component={FindIdPhone}
          options={{headerTitle: '아이디 찾기'}}
        />
        <Stack.Screen
          name="FindIdResult"
          component={FindIdResult}
          options={{headerTitle: '아이디 찾기'}}
        />
        <Stack.Screen
          name="FindPass"
          component={FindPass}
          options={{headerTitle: '비밀번호 찾기'}}
        />
        <Stack.Screen
          name="FindPassPhone"
          component={FindPassPhone}
          options={{headerTitle: '비밀번호 찾기'}}
        />
        <Stack.Screen
          name="FindPassReset"
          component={FindPassReset}
          options={{headerTitle: '비밀번호 찾기'}}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OrderDelDetail"
          component={OrderDelDetail}
          options={{headerTitle: '요청 상세 정보'}}
        />
        <Stack.Screen
          name="QuickDelDetail"
          component={QuickDelDetail}
          options={{headerTitle: '요청 상세 정보'}}
        />
        <Stack.Screen
          name="DeliveryOrderDetail"
          component={DeliveryOrderDetail}
          options={{headerTitle: '요청 상세 정보'}}
        />
        <Stack.Screen
          name="QuickOrderDetail"
          component={QuickOrderDetail}
          options={{headerTitle: '요청 상세 정보'}}
        />
        <Stack.Screen
          name="QuickCancelDetail"
          component={QuickCancelDetail}
          options={{headerTitle: '요청 상세 정보'}}
        />
        <Stack.Screen
          name="DeliverySuccessDetail"
          component={DeliverySuccessDetail}
          options={{headerTitle: '요청 상세 정보'}}
        />
        <Stack.Screen
          name="QuickSuccessDetail"
          component={QuickSuccessDetail}
          options={{headerTitle: '요청 상세 정보'}}
        />
        <Stack.Screen
          name="DeliveryList"
          component={DeliveryList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DeliveryListDetail"
          component={DeliveryListDetail}
          options={{headerTitle: '배달 상세 정보'}}
        />
        <Stack.Screen
          name="QuickListDetail"
          component={QuickListDetail}
          options={{headerTitle: '배달 상세 정보'}}
        />
        <Stack.Screen
          name="AdjustmentList"
          component={AdjustmentList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AdjustmentView"
          component={AdjustmentView}
          options={{headerTitle: '정산내역'}}
        />
        <Stack.Screen
          name="SettingHome"
          component={SettingHome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UpdateProfile"
          component={UpdateProfile}
          options={{headerTitle: '회원 정보 수정'}}
        />
        <Stack.Screen
          name="Notice"
          component={Notice}
          options={{
            headerTitle: '공지사항',
          }}
        />
        <Stack.Screen
          name="NoticeView"
          component={NoticeView}
          options={{
            headerTitle: '공지사항',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigate('Notice');
                }}>
                <Text style={{marginRight: 15, fontSize: 16}}>목록</Text>
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
