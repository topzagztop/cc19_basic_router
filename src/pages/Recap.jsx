function Recap() {
    const obj = {
        firstname: 'Nattaphon',
        lastname: 'Khingthong'
    }
    obj.address = 'BKK'

    // console.log(obj.firstname)

    const obj2 = {
        street: '1234',
        zipcode: '5678'
    }

    const mergeObj = {
        ...obj, ...obj2
    }

    // console.log(mergeObj)

    const arr = ['Nattaphon', 'Khingthong']
    arr[2] = 'Bkk'
    // arr.push('Bangkok')

    const arr2 = ['1234', '5678']

    const mergeArr = [...arr, ...arr2]
    // console.log(mergeArr)

    const product = [
        {id: 1, title: 'ASUS', price: 4000},
        {id: 2, title: 'MSI', price: 59000}
    ]

    // console.log(product[1].title)

    const newProduct = {
        id: 3, title: "Lenovo", price: 2000
    }

    const mergeNewObj = [...product, newProduct]

    console.log(mergeNewObj)

  return (
    <div>Easy, Zustand</div>
  )
}

export default Recap