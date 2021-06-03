import React, {useEffect, useState, useRef} from 'react';
import {TouchableOpacity, Text, TextInput, Image, View} from 'react-native';
import Modal from 'react-native-modal';

import styles from '../style/Style';

export const BtnSubmit = props => {
  const {style = {}, textStyle = {}, onPress} = props;
  return (
    <TouchableOpacity
      style={[styles.bluebackgroundbutton, style]}
      onPress={onPress}>
      <Text style={[styles.boldwhite16, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export const IconBtn = props => {
  const {style = {}, textStyle = {}, onPress} = props;
  return (
    <TouchableOpacity style={[styles.bluebutton50, style]} onPress={onPress}>
      <Image source={props.require} style={{marginRight: 10}} />
      <Text style={[styles.mediumwhitetxt16, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export const BlueBorderBtn = props => {
  const {style = {}, textStyle = {}, onPress} = props;

  return (
    <TouchableOpacity
      style={[styles.blueborderbutton, style]}
      onPress={onPress}>
      <Text style={[styles.bluetext16, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export const InputText = props => {
  const {style = {}, textStyle = {}, onPress} = props;

  return (
    <TextInput
      style={[styles.textinput, style]}
      placeholder={props.placeholder}></TextInput>
  );
};

export const FooterBtn = props => {
  const {style = {}, textStyle = {}, onPress} = props;

  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: 50,
        backgroundColor: '#446DC2',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}>
      <Text style={[styles.mediumtxt16, {color: 'white'}]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export const Underline10 = () => {
  return <View style={{height: 10, backgroundColor: '#F5F5F5'}} />;
};

export const Underline1 = () => {
  return (
    <View style={{height: 1, backgroundColor: '#F5F5F5', marginVertical: 15}} />
  );
};

export const TitleAndInput = props => {
  const {style = {}, textStyle = {}, onPress} = props;

  return (
    <View>
      <Text style={[styles.mediumtxt16, textStyle]}>{props.title}</Text>
      <InputText
        placeholder={props.placeholder}
        style={[{marginBottom: 15, marginTop: 10}, style]}
        multiline={props.multiline}>
        {props.input}
      </InputText>
    </View>
  );
};

export const TopDelState = props => {
  const {style = {}, textStyle = {}, onPress} = props;

  return (
    <View>
      <View style={[styles.topdelstateview, style]}>
        <Text style={[styles.mediumtxt18, textStyle]}>{props.title}</Text>
        {props.subtitle !== '' ? <Text>{props.subtitle}</Text> : null}
      </View>
    </View>
  );
};

export const ModalConfirm = props => {
  const Cancel = () => {
    props.cancel();
  };

  function Submit() {
    props.confirm();
  }

  return (
    <Modal isVisible={props.open} onBackButtonPress={() => Cancel()}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 15,
          }}>
          <Text style={styles.boldtxt18}>{props.title}</Text>
          {/* <Underline1 /> */}
          <View
            style={{
              height: 1,
              backgroundColor: '#E5E5E5',
              width: '100%',
              marginTop: 15,
            }}
          />
          <View style={{marginVertical: 20}}>
            <Text style={{textAlign: 'center', fontSize: 16, marginBottom: 10}}>
              {props.text1}
            </Text>
            {props.text2 !== '' ? (
              <Text style={{textAlign: 'center', fontSize: 16}}>
                {props.text2}
              </Text>
            ) : null}
          </View>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <TouchableOpacity
              style={[
                styles.bluebackgroundbutton,
                {flex: 1, backgroundColor: '#777777', marginRight: 5},
              ]}
              onPress={() => Cancel()}>
              <Text style={styles.boldwhite16}>{props.canceltxt}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.bluebackgroundbutton, {flex: 1, marginLeft: 5}]}>
              <Text style={styles.boldwhite16}>{props.submittxt}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export const RowTwoText = props => {
  return (
    <View
      style={[styles.Row, {justifyContent: 'space-between', marginBottom: 15}]}>
      <Text style={styles.mediumtxt16}>{props.lefttxt}</Text>
      <Text style={{fontSize: 16}}>{props.righttxt}</Text>
    </View>
  );
};
