import { Text, View, TextInput, TouchableOpacity} from 'react-native'
import { styles } from './styles'

export  function Home(){
  function handleParticipantAdd(){
    console.log('Você clicou no botão de adicionar')
  }
  return (
    <View style ={styles.container}>
      <Text key="1" style={styles.eventName}>
        Nome do evento
      </Text>

      <Text key="2" style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style = {styles.button} onPress={handleParticipantAdd} >
          <Text style={styles.buttonText}>
            +
        </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

