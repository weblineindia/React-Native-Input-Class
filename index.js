/**
Author Name  :  WeblineIndia  |  https://www.weblineindia.com/

For more such software development components and code libraries, visit us at
https://www.weblineindia.com/software-development-resources.html 

Our Github URL : https://github.com/weblineindia
**/
import React, { Component } from 'react';
import { TextInput, Alert } from 'react-native';
import Validation from './Validation';

class InputClass extends Component {
  onChangeText = (value) => {
    if (value.trim().length > 0) {
      if (this.props.type === 'Text') {
        if (Validation.onChangePlainTextCharacter(value)) {
          this.props.onChangeText && this.props.onChangeText(value);
        }
      } else if (this.props.type === 'Number') {
        if (Validation.onChangeNumberValidate(value)) {
          this.props.onChangeText && this.props.onChangeText(value);
        }
      } else if (this.props.type === 'FreeContent') {
        if (Validation.onChangeFreeTextValidate(value)) {
          this.props.onChangeText && this.props.onChangeText(value);
        }
      } else if (this.props.type === 'Email') {
        if (Validation.onChangeEmailValidate(value)) {
          this.props.onChangeText && this.props.onChangeText(value);
        }
      } else if (this.props.type === 'PhoneNumber') {
        if (Validation.onChangePhoneNumberValidate(value)) {
          this.props.onChangeText && this.props.onChangeText(value);
        }
      }
    } else {
      this.props.onChangeText && this.props.onChangeText(value);
    }
  };

  onEndEditing = (e) => {
    if (e.nativeEvent.text.trim().length > 0) {
      if (this.props.type === 'Text') {
      } else if (this.props.type === 'Number') {
      } else if (this.props.type === 'FreeContent') {
      } else if (this.props.type === 'Email') {
        if (!Validation.isValidEmail(e.nativeEvent.text)) {
          if(this.props.onEndError) {
            this.props.onEndError(true)
          }
        }
      } else if (this.props.type === 'PhoneNumber') {
      }
    }
  }

  render() {
    const {
      placeholder, secure, autoCapitalize, keyboardType, value, placeholderTextColor, style,
    } = this.props;
    return (
      <TextInput
        placeholder={placeholder}
        value={value}
        secureTextEntry={secure}
        autoCapitalize={autoCapitalize}
        onChangeText={(text) => this.onChangeText(text)}
        onEndEditing={(e) => this.onEndEditing(e)}
        style={style}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
        maxLength={this.props.maxLength ? this.props.maxLength : 24}
      />
    );
  }
}

export default InputClass;
