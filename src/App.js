const initialItems=[
  {
    id:1,describtion:"passport",quantity:1,
    packed:false},
    {
      id:2,describtion:"socks",quantity:2,
      packed:false},
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
    <div className="add-form">
      <h3>what do you need for your trip ?😚</h3>
    </div>
      
  }

 
  function PakagingList(){
    return (
    <div className="list">
      <ul >
      {initialItems.map((item=>
      <Item item={item}/>
      ))}
      </ul>
  
    </div>
    );
      }

function Item({item}){
  return(
    <li>
      <span>
         {""}
            {item.quantity} {item.describtion}
        </span>
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
