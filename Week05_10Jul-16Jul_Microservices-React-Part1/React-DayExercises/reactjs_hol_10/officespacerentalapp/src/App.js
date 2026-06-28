import './App.css'
import office from './office.jpg'

function App() {

  const element="Office Space";
  const jsxatt=(
    <img src={office} width="25%" height="25%" alt="Office Space"/>
  );
  const ItemName={
    Name:"DBS",
    Rent:50000,
    Address:"Chennai"
  }
  let colors=[];

  if(ItemName.Rent<=60000){
    colors.push("textRed")
  }
  else{
    colors.push("textGreen");
  }


  return (
    <div className="App">
    
    <h1>{element},at affordable range</h1>
    {jsxatt}

    <h1>Name: {ItemName.name}</h1>
    <h3 className={colors[0]}>
      Rent: Rs. {ItemName.Rent}
    </h3>
    <h3>Address:{ItemName.Address}</h3>
      

    </div>
  );
}

export default App;
