import { create } from "zustand"

// Step 1 Create Store
const topStore = (set) => ({
    firstname: 'Nattaphon',
    lastname: 'Khingthong',
    address: { street: '1234', zipcode: '567' },
    profile: ['Nattaphol', 'Khingthong'],
    products: [
        {id: 1, title: 'ASUS', price: 5000},
        {id: 2, title: 'MSI', price: 40000}
    ],
    number: 5,
    actionIncrease: ()=> {
        // setNumber2((state) => ({ num: state.number + 2 }))
        set((state)=> ({number: state.number + 1}))
    },
    actionDecrease: ()=> {
        // code body
        set((state)=> ({number: Math.max(0, state.number - 1)}))
    },
    actionMulti: () => {
        set((state)=> ({number: state.number * 2}))
    },
    actionDivide: () => {
        set((state)=> ({number: state.number / 2}))
    }
})

const useTopStore = create(topStore)

export default useTopStore