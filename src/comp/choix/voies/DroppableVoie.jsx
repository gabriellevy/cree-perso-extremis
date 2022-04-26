import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import DraggableVoie from './DraggableVoie'
import { idARepartir } from './voiesARepartir'

const Container = styled.div`
  margin: 4px;
  border: 2px solid lightgrey;
  border-radius: 15px;
  width: 140px;
  background-color: ${(props) => (props.valide ? 'green' : 'red')};
`
const Title = styled.h3`
  padding: 8px;
`
const ValeurListe = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.isDragginOver ? 'skyblue' : 'none')};
  flex-grow: 1;
  min-height: 40px;
`

function DroppableVoie({ colonne, valeurs }) {
  var valide = valeurs.length === 1
  if (colonne.id === idARepartir) valide = true

  return (
    <Container valide={valide}>
      <Title>{colonne.titre}</Title>
      <Droppable droppableId={colonne.id}>
        {(provided, snapshot) => (
          <ValeurListe
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDragginOver={snapshot.isDraggingOver}
          >
            {valeurs.map((tirage, index) =>
              tirage.valeur !== '' ? (
                <DraggableVoie
                  key={tirage.id}
                  valeur={tirage.valeur}
                  id={tirage.id}
                  index={index}
                />
              ) : (
                ''
              )
            )}
            {provided.placeholder}
          </ValeurListe>
        )}
      </Droppable>
    </Container>
  )
}

export default DroppableVoie
