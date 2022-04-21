import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
border: 1px solid lightgrey;
border-radius: 2px
padding: 8px;
margin-bottom: 8px;
background-color: white;
`

function Valeur({ valeur, id, index }) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {valeur}
        </Container>
      )}
    </Draggable>
  )
}

export default Valeur
