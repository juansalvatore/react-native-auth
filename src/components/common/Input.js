import React, { Component } from 'react'
import { TextInput, View, Text } from 'react-native'

const Input = ({ label, value, onTextChange }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        value={value}
        onTextChange={onTextChange}
        style={{ height: 20, width: 100 }}
      />
    </View>
  )
}

export { Input }
