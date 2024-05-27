import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import Team from '../../types/interfaces/Team'

const initialState: Team = {
  label: '',
  link: '*',
  logo: '',
  conference: '',
  division: '',
  wordmark: '',
  uniform: ''
}

export const teamActiveSlice = createSlice({
  name: 'teamActive',
  initialState,
  reducers: {
    changeTeamActive(state, action: PayloadAction<Team>) {
      state.label = action.payload.label
      state.link = action.payload.link
      state.logo = action.payload.logo
      state.conference = action.payload.conference
      state.division = action.payload.division
      state.wordmark = action.payload.wordmark
      state.uniform = action.payload.uniform
    }
  }
})

export const { changeTeamActive } = teamActiveSlice.actions
export default teamActiveSlice.reducer
