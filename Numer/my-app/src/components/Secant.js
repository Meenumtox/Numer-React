import React  from "react";
import {useState} from "react" ;
import { Button } from "react-bootstrap";
import Topbar from "./Topbar";
import { Table } from 'antd';


const Secant=()=>{
    const [Equation,setEquation]= useState('(x^4)-13')
    const [x0,setx0]=useState(0)
    const [x1,setx1]=useState(1)
    const [ans,setans]=useState([]);
    const math = require('mathjs');

    
    
    const columns = [
      { title: 'Iteration', dataIndex: 'iteration', key: 'iteration' },
      { title: 'X0', dataIndex: 'x0', key: 'x0' },
      { title: 'X1', dataIndex: 'x1', key: 'x1' },
      { title: 'X2', dataIndex: 'x2', key: 'x2' },
      { title: 'Error', dataIndex: 'Error', key: 'Error' },
  ];

    
    
    


    const caluclate  = () => {
      let x0num = parseFloat(x0)
      let x1num = parseFloat(x1)
      let x2 = parseFloat(0) 
      let check 
      
      var Temp_Ans = [];
      let n = 0 

      

      do {


      n++;  
      x2 = x1num - (math.evaluate(Equation,{x:x1num}) * (x1num - x0num)) / (math.evaluate(Equation,{x:x1num}) - math.evaluate(Equation,{x:x0num}));
      check = math.abs((x2 - x1num) / x2).toFixed(7);
      Temp_Ans.push({
        iteration:n,
        x0:x0num,
        x1:x1num,
        x2:x2,
        Error:check,
    });
      x0num = x1num
      x1num = x2

      console.log(x2)

     
      }while(check > 0.000001);

      //  format data for graph
      setans(Temp_Ans)

      
    }
    
    

    return (
      <div>
      <Topbar></Topbar> 
      <div>Input f(x)</div>
      <input type="text" className="form-control" id="equation" value={Equation} onChange={e => setEquation(e.target.value)}></input>

      <div>X0</div>
      <input type="number" className="form-control" id="x0" value={x0} onChange={e => setx0(e.target.value)}></input>

      <div>X1</div>
      <input type="number" className="form-control" id="x1" value={x1} onChange={e => setx1(e.target.value)}></input>
      
      <Button variant="dark" onClick={caluclate} className="Button">Calculate</Button>

      <Table columns={columns} dataSource={ans} rowKey="iteration"/>

      

      </div>
    );
}
export default Secant