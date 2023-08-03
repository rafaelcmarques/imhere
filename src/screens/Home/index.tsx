import { Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export  function Home(){

  const participants = ['Lucca', 'Rafael', 'Tyler', 'Lucy', 'Manu', 'Raul', 'Cocotinho', 'Lilico', 'Lilica', 'Yara', 'Julia', 'Lauro', 'Lays']

  function handleParticipantAdd(){
    console.log('Você clicou no botão de adicionar')
  }

   function handleParticipantRemove(name: string){
    console.log(`Você remover o participante ${name}`)
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
      
      <ScrollView>
        { 
        participants.map(participant => {
          return(
            <Participant 
              name={participant} 
              onRemove= {()=> handleParticipantRemove(participant)}
            />
          )
        })
        }
      </ScrollView>

   


    </View>
  )
}

