import useTopStore from "../store/topStore"

function EasyZustand() {    
    // Step 2 Use Store
    const firstname = useTopStore((state)=> state.firstname)
    const address = useTopStore((state)=> state.address)
    const profile = useTopStore((state)=> state.profile)
    const products = useTopStore((state)=> state.products)
    const number = useTopStore((state)=> state.number)
    const actionIncrease = useTopStore((state) => state.actionIncrease)
    const actionDecrease = useTopStore((state) => state.actionDecrease )
    const actionMulti = useTopStore((state)=> state.actionMulti)
    const actionDivide = useTopStore((state)=> state.actionDivide)
    console.log(firstname)
    console.log(address)
    console.log(address.street)
    console.log(products)
    console.log(number)
    console.log(actionIncrease)

    const hdlClick = () => {
        // body
        actionDecrease()
    }

  return (
    <div>EasyZustand
        <p className="text-8xl">No. {number}</p>
        <p>{profile[0]}</p>
        <p>{address.zipcode}</p>
        <p>{products[1].title} price: {products[1].price}</p>
        <button
            onClick={actionIncrease}
            className="bg-slate-300 p-2 mr-2"
        >
            Increase
        </button>
        <button 
            onClick={hdlClick}
            className="bg-slate-300 p-2 mr-2">
            Decrease
        </button>
        <button 
            onClick={actionMulti}
            className="bg-slate-300 p-2 mr-2">
            Multi
        </button>
        <button 
            onClick={actionDivide}
            className="bg-slate-300 p-2 mr-2">
            Divide
        </button>
    </div>
  )
}

export default EasyZustand