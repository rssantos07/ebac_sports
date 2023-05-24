import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const prod = action.payload

      if (state.itens.find((produto) => produto.id === prod.id)) {
        alert('Item já existe')
      } else {
        state.itens.push(prod)
      }
    }
  }
})
export const { adicionarAoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
