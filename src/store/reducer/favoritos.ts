import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const favoritos = action.payload

      if (state.itens.find((p) => p.id === favoritos.id)) {
        const favoritosSemProduto = state.itens.filter(
          (p) => p.id !== action.payload.id
        )
        state.itens = favoritosSemProduto
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
