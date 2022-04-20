import styled from 'styled-components'
import Valeur from './Valeur'

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
      <ValeurListe>
        {valeurs.map((tirage) => (
          <Valeur key={tirage.id} valeur={tirage.valeur} />
        ))}
      </ValeurListe>
    </Container>
  )
}

export default Colonne
