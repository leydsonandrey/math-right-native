import { View, Text } from 'react-native'

export default function Alert({ children }) {
  return (
    <View style={{ backgroundColor: '#3E0202', borderRadius: 10, padding: 10, borderWidth: 2, borderColor: 'tomato' }} >
      <Text style={{ fontSize: 12, padding: 5, textAlign: 'center', color: 'tomato', fontWeight: 'bold' }}>{children}</Text>
    </View>
  )
}
