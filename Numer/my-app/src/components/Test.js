import React, { useState } from "react";

const Test = () => {
  const [numgen, setNumgen] = useState(0);
  const [table, setTable] = useState([]);
  //const [cValue,setcValue] = useState("6");
  const [result, setResult] = useState([]);

  const createTable = () => {
    const newTable = [];
    for (let i = 0; i < numgen; i++) {
      newTable.push({ x: "", y: "" });
    }
    setTable(newTable);
  };

  const handleInput = (index, field, value) => {
    const newTable = [...table];
    newTable[index][field] = value;
    setTable(newTable);
  };

  const handleSave = () => {
    const xInput = table.map((row) => parseFloat(row.x));
  const yInput = table.map((row) => parseFloat(row.y));
  const cValue = 6;
  calculateNewtonDivide(xInput, yInput, cValue);
  };

  const handleNumgenChange = (event) => {
    const value = parseInt(event.target.value);
    setNumgen(value);
  };
  const calculateNewtonDivide = (xInput, yInput, cValue) => {
    let n = xInput.length;

    // สร้างdivDiffมาเก็บค่าArray2มิติและเอาyมาเก็บเพื่อสร้างtable
    let divDiff = [];
    for (let i = 0; i < n; i++) {
      divDiff[i] = [];
      divDiff[i][0] = yInput[i];
    }

    // ใช้วิธีลูป2ครั้งใช้สูตร c1=fx(1)-fx(0)/x1-x0
    for (let j = 1; j < n; j++) {
      for (let i = 0; i < n - j; i++) {
        divDiff[i][j] =
          (divDiff[i + 1][j - 1] - divDiff[i][j - 1]) / (xInput[i + j] - xInput[i]);
                    /*1    0               0   0
                      2    0               1   0
                    */
      }
    }

    // Calculate result
    let result = divDiff[0][0];
    let product = 1;
    for (let i = 1; i < n; i++) {
      product *= cValue - xInput[i - 1];
      result += divDiff[0][i] * product;
    }

    setResult(result);

    console.log('xInput:', xInput);
    console.log('yInput:', yInput);
    console.log('cValue:', cValue);
    console.log('divDiff:', divDiff);
    console.log('result:', result);
  };

  const renderTable = () => {
    return (
      <div>
        {table.map((row, index) => (
          <div style={{ display: "flex" }} key={index}>
            <div>
              <input
                placeholder={"value x" + (index + 1)}
                value={row.x}
                onChange={(e) => handleInput(index, "x", e.target.value)}
              />
            </div>
            <div>
              <input
                placeholder={"value y" + (index + 1)}
                value={row.y}
                onChange={(e) => handleInput(index, "y", e.target.value)}
              />
            </div>
          </div>
        ))}
        <button onClick={handleSave}>เก็บค่า</button>
      </div>
    );
  };

  return (
    <div>
      Number
      <input onChange={handleNumgenChange} />
      <button onClick={createTable}>สร้างตาราง</button>
      {renderTable()}
    </div>
  );
};

export default Test;
