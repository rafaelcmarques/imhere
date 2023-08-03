import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native'
import { useState } from 'react'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export  function Home(){

  const [participantName, setParticipantName] = useState<string>('')
  const [participants, setParticipants] = useState<string[]>([])
  

  function handleParticipantAdd(){
   if(participants.includes(participantName)){
    return Alert.alert('Participante Existe',` Já existe um participante com o nome ${participantName} na lista.`)
   }
   setParticipants(prevState => [...prevState, participantName])
   setParticipantName('')
  }

   function handleParticipantRemove(name: string){
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      { 
        text: 'sim',
        onPress: ()=> {
          const filteredParticipants = participants.filter(participant => participant != name)
          setParticipants(filteredParticipants)
        }
      },
      { 
        text: 'não',
        style: 'cancel'
      }

    ])
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
          value={participantName}
          onChangeText={(text) => setParticipantName(text)}
        />

        <TouchableOpacity style = {styles.button} onPress={handleParticipantAdd} >
          <Text style={styles.buttonText}>
            +
        </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant 
              name={item} 
              key={item}
              onRemove= {()=> handleParticipantRemove(item)}
            />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={()=>(
          <Text style={styles.emptyListText}>
            Ninguém chegou ao evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}

