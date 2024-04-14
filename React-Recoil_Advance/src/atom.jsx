import { atom, selector } from 'recoil'

export const networkAtom = atom({
    key: "networkAtom",
    default: 15
})
export const jobsAtom = atom({
    key: "jobsAtom",
    default: 10
})
export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: 105
})
export const messagesAtom = atom({
    key: "messagesAtom",
    default: 3
})

export const totalHeaderSelector = selector({
    key: "totalHeaderSelector",
    get: ({ get }) => {
        return get(networkAtom) + get(jobsAtom) + get(notificationsAtom) + get(messagesAtom);
    }
})
