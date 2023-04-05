import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';  
import { Increment,decrement } from './redux/actions/index';

function App() {

const myState=useSelector((state)=>state.changeTheNumber)
const  dispatch=useDispatch();
  return (
    <>
      <h1>Welcome to redux</h1> 
      <div>
        <h1> Increment/Decrement Counter </h1>
        <h4> Using React and Redux </h4>
      </div>
       <div className="quanity">
      <a className="quantity_minus" title="decrement" onClick={()=>dispatch(decrement())}><span>-</span></a>
      <input name="quantity" type="text" className="quantity__input" value={myState}/>
      <a className="quantity__plus"title="Increment"  onClick={()=> dispatch(Increment())}><span>+</span></a>
      </div>
    </>
  );
}

export default App;
