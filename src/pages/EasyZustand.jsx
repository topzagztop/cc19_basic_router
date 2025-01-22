import useTopStore from "../store/topStore"

function EasyZustand() {    
    // Step 2 Use Store
    const firstname = useTopStore((state)=> state.firstname)
    const address = useTopStore((state)=> state.address)
    console.log(firstname)
    console.log(address)
    console.log(address.street)

  return (
    <div>EasyZustand</div>
  )
}

export default EasyZustand