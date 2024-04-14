import { atomFamily } from 'recoil'
import { TODO } from './TODO'

export const toDosAtomFamily = atomFamily({
    key: "toDosAtomFamily",
    default: (id) => {
        return TODO.find(el => el.id == id);
    }
})


