const url = "https://sum-server.100xdevs.com/todo?id="
import { atomFamily, selectorFamily } from 'recoil';
import axios from 'axios';

export const toDoSelectorFamily = atomFamily({
    key: "toDoSelectorFamily",
    default: selectorFamily({
        key: "todoSelector",
        get: (id) => async ({ get }) => {
            await new Promise(r => setTimeout(r, 5000));
            const res = await axios.get(`${url}${id}`);
            return res.data.todo;
        }
    })
})