export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    default:
      return state;
  }
}


// todos os reducers ouvem todas as actions. é por isso que precisa fazer o switch case
//  o campo dispatch leva uma função que manda em action tudo que foi passado no objeto dispatch.


// o componente dispara uma action
// a action avisa o reducer
// o reducer faz as alterações que ele precisa
// o redux avisa todos os componentes que precisam daquela informação para que eles se atualizem.
