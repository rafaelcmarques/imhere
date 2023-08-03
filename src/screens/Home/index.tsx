import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export  function Home(){

  const participants = ['Lucca', 'Rafael', 'Tyler', 'Lucy', 'Manu', 'Raul', 'Cocotinho', 'Lilico', 'Lilica']

  function handleParticipantAdd(){
   if(participants.includes('Lucca')){
    Alert.alert('Participante Existe', 'Já existe um participante com o nome Lucca na lista.')
   }
  }

   function handleParticipantRemove(name: string){
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      { 
        text: 'sim',
        onPress: ()=> Alert.alert('Deletado!')
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

