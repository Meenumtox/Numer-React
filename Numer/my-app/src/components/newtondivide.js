import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Topbar from './Topbar';

function NewtonDivided() {
  const [table, setTable] = useState([]);
  const [cValue, setCValue] = useState();
  const [result, setResult] = useState();

  const calculate = () => {
    const n = table.length;
    const x = table.map(row => parseFloat(row.x));
    const y = table.map(row => parseFloat(row.y));
    const point = parseFloat(cValue);

    // Calculate divided differences
    const divdiff = new Array(n).fill().map(() => new Array(n).fill(0)); //create array n*n
    for (let i = 0; i < n; i++) {
      divdiff[i][0] = y[i];
    }
    for (let j = 1; j < n; j++) {
      for (let i = 0; i < n - j; i++) {
        divdiff[i][j] = (divdiff[i + 1][j - 1] - divdiff[i][j - 1]) / (x[i + j] - x[i]);
      }
    }

    // Evaluate polynomial at interpolation point
    let result = divdiff[0][0];
    let term = 1;
    for (let i = 1; i < n; i++) {
      term *= (point - x[i - 1]);
      result += divdiff[0][i] * term;
    }

    setResult(result.toFixed(6));
    console.log("X: ",x);
    console.log("Y: ",y);
    console.log("C: ",cValue);
    console.log("result: ",result);
  };

  const handleTableChange = (event, index, key) => {
    const newTable = [...table]; ///deconstruc ระเบิด arr เอาไปใช้ตัวต่อไป
    newTable[index][key] = event.target.value;
    setTable(newTable);
  };

  const addRow = () => {
    setTable([...table, { x: '', y: '' }]);
  };

  return (
    <div>
      <Topbar />
      <h2>Newton Divided Difference</h2>
      <table>
        <thead>
          <tr>
            <th>X</th>
            <th>Y</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {table.map((row, index) => (
            <tr key={index}>
              <td>
                <input type="number" value={row.x} onChange={(e) => handleTableChange(e, index, 'x')} />
              </td>
              <td>
                <input type="number" value={row.y} onChange={(e) => handleTableChange(e, index, 'y')} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow}>Add Row</button>
      <div>
        <label>C Value:</label>
        <input type="number" value={cValue} onChange={(e) => setCValue(e.target.value)} />
      </div>
      <Button onClick={calculate}>Calculate</Button>
      <div>
        <label>Result:</label>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default NewtonDivided;
