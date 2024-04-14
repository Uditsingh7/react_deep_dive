import axios from 'axios';
const url = "https://sum-server.100xdevs.com/notifications"
import { atom, selector } from 'recoil';

export const notificationAtom = atom({
    key: "notificationAtom",
    default: selector({
        key: "notificationSelector",
        get: async () => {
            const res = await axios.get(url);
            return res.data;
        }
    })
})

export const totalNetworkSelector = selector({
    key: "totalNetworkSelector",
    get: ({ get }) => {
        const allNotification = get(notificationAtom);
        return allNotification.network + allNotification.jobs + allNotification.notifications
            + allNotification.messaging;
    }
})
