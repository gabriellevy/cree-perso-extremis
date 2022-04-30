export function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

export const typesDes = ['D4', 'D6', 'D8', 'D10', 'D12', 'D20']

export function lancerDe(strDe) {
  switch (typesDes) {
    case typesDes[0]:
      return getRandomInt(4)
    case typesDes[1]:
      return getRandomInt(6)
    case typesDes[2]:
      return getRandomInt(8)
    case typesDes[3]:
      return getRandomInt(10)
    case typesDes[4]:
      return getRandomInt(12)
    case typesDes[5]:
      return getRandomInt(20)

    default:
      return -1
  }
}
