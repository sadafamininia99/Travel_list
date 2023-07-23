const initialItems=[
  {
    id:1,describtion:"passport",quantity:2,
    packed:false},
    {
      id:2,describtion:"socks",quantity:12,
      packed:false},
]


export default function App(){
  return <div className="app">
    <Logo />
    <Form />
    <PakagingList/>
  </div>

  function Logo (){
    return <h1>

      Far away  ✌️🤣
      damn 

    </h1>

  }

  function Form (){
    <div className="add-form">
      <h3>
        what do you need for your trip ?😚
      </h3>
    </div>
    
  }

  // function PakagingList(){
  //   return <ul className="list">{
  //     {initialItems.map(item=>)
  //     }</ul>
    
  // }

  function Stats  (){
    return <footer className="stats">
      toyour items on the list
    </footer>
    
  }
}
