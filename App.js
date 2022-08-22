import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    
    <div className="App">
      <div className="key-App">
Num1:<input type="n1" id='num1'></input>
Num2:<input type="n2" id='num2'></input>
<button placeholder='Add' onClick={()=>document.write(parseInt(document.getElementById('num1').value)+parseInt(document.getElementById('num2').value))}>Add</button><br></br>
Num3:<input type="n3" id='num3'></input>
Num4:<input type="n4" id='num4'></input>
<button placeholder='Sub' onClick={()=>document.write(parseInt(document.getElementById('num3').value)-parseInt(document.getElementById('num4').value))}>Sub</button><br></br>
Num5:<input type="n5" id='num5'></input>
Num6:<input type="n6" id='num6'></input>
<button placeholder='Mul' onClick={()=>document.write(parseInt(document.getElementById('num5').value)*parseInt(document.getElementById('num6').value))}>Mul</button><br></br>
Num7:<input type="n7" id='num7'></input>
Num8:<input type="n8" id='num8'></input>
<button placeholder='Divi' onClick={()=>document.write(parseInt(document.getElementById('num7').value)/parseInt(document.getElementById('num8').value))}>Divi</button>
<br></br>
</div>
    </div>
  );
}

export default App;
