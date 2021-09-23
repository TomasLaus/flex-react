import {memo} from 'react'
import Item from './Item'



const ItemList = memo( ({items}) =>{ 
                   return (
                       <>
                    
                               { items.map((item)=>  <Item key={item.id}  item={item}  />  )  }
                             
                       </>
                   )
           }
, (oldProps, newProps) => oldProps.items.length === newProps.items.length )






export default ItemList
