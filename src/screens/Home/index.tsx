import { Text, View, TextInput, TouchableOpacity} from 'react-native'
import { styles } from './styles'

export  function Home(){
  return (
    <View style ={styles.container}>
      <Text key="1" style={styles.eventName}>
        Nome do evento
      </Text>

      <Text key="2" style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022
      </Text>

       <TextInput 
       style={styles.input}
       placeholder='Nome do participante'
       placeholderTextColor="#6B6B6B"
       />

       <TouchableOpacity style = {styles.button} >
        <Text style={styles.buttonText}>
          +
        </Text>
       </TouchableOpacity>
    </View>
  )
}

