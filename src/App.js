import { useState } from "react";

const initialItems=[
  {
    id:1,describtion:"passport",quantity:1,
    packed:false
  },
  {
      id:2,describtion:"socks",quantity:2,
      packed:false
  },
  {
    id:3,describtion:"Books",quantity:12,
    packed:true
  },
]


export default function App(){

  
  return <div className="app">
    <Logo />
    <Form />
    <PakagingList/> 
    <Stats/>
  </div>

  function Logo (){
    return <h1>Far away </h1>

  }
 
  function Form (){
    const [describtion,setDescribtion] =useState('');

    return(
       <form className="add-form">
      <h3>what do you need for your trip ?😚</h3>
      <select >
      {Array.from({length :20}, ( _ , i)=> i+1).map
      ((num)=>(
        <option value={num} key={num}>
          {num}
        </option>
      ))}

      </select>
      <input type="text" 
      placeholder="Item ..."
      value={describtion}
      onChange={(e) =>  
        setDescribtion(e.target.value)}
      />
      <button>Add</button>
    </form>
    )
   
      
  }

 
  function PakagingList(){
    return (
    <div className="list">
      <ul >
      {initialItems.map((item=>
      <Item item={item} key={item.id}/>
      ))}
      </ul>
  
    </div>
    );
      }

function Item({item}){
  return(
    <li>
      <span style={item.packed ? {textDecoration:"line-through"}  : {}}>
         {""}
            {item.quantity} {item.describtion}
        </span>
        <button>❌</button>
        </li>
     );
    }
  


  function Stats  (){
    return <footer className="stats">
      <em>YOU have X </em>
      toyour items on the list
    </footer>
    
  }
}
