import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";


export const BasketContext=createContext()


const BasketProvider = ({children}) => {
    const [basket, setBasket] = useLocalStorage("basket")

    let subtotal = 0
    basket.map(e => subtotal += e.price * e.count)

    function addBasket(product) {
        const existBasket=basket.findIndex(x=>x._id===product._id)
        if (existBasket!==-1) {
            basket[existBasket].count++
            setBasket([...basket])
        }
        else{
            setBasket([...basket,{...product,count:1}])
        }
    }
    function deleteBasket(product) {
        const deletedBasket=basket.filter(x=>x._id!==product._id)
        setBasket(deletedBasket)
    }

    function incBasket(product) {
        const existBasket=basket.findIndex(x=>x._id===product._id)
        if (existBasket!==-1) {
            basket[existBasket].count++
            setBasket([...basket])
        }
       
    }
    function decBasket(product) {
        const existBasket=basket.findIndex(x=>x._id===product._id)
        if (existBasket!==-1) {
            
            basket[existBasket].count--
            setBasket([...basket])
            if (basket[existBasket].count===0) {
              return  deleteBasket(product)
            }
        }
        
       
    }
    const data={
        basket,setBasket,addBasket,decBasket,incBasket,deleteBasket,subtotal
    }
  return (
    <BasketContext.Provider value={data}>
        {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider