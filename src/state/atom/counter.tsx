import { atom, selector } from "recoil";


export const countAtom = atom({
    key:"counter",
    default:0
})

export const evenCounter = selector({
    key: "evenCounter",
    get: ({get}) =>{
        const isEven = get(countAtom);
        return isEven % 2 ;
    }

})