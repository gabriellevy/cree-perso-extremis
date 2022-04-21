import styled from 'styled-components'
import Valeur from './Valeur'
import { Droppable } from 'react-beautiful-dnd'

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`
const Title = styled.h3`
  padding: 8px;
`
const ValeurListe = styled.div`
  padding: 8px;
`

function Colonne({ colonne, valeurs }) {
  return (
    <Container>
      <Title>{colonne.id}</Title>
      <Droppable droppableId={colonne.id}>
        {(provided) => (
          <ValeurListe ref={provided.innerRef} {...provided.droppableProps}>
            {valeurs.map((tirage, index) => (
              <Valeur
                key={tirage.id}
                valeur={tirage.valeur}
                id={tirage.id}
                index={index}
              />
            ))}
            {provided.placeholder}
          </ValeurListe>
        )}
      </Droppable>
    </Container>
  )
}

export default Colonne
