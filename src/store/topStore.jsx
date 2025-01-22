import { create } from "zustand"

// Step 1 Create Store
const topStore = () => ({
    firstname: 'Nattaphon',
    lastname: 'Khingthong',
    address: { street: '1234', zipcode: '567' }
})

const useTopStore = create(topStore)

export default useTopStore