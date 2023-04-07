import React,{useState} from 'react'
import jsPDF from 'jspdf';
import '../App.css'
import 'jspdf-autotable'

const Table = () => {
    const [tableData, setTableData] = useState([
        { id: 1, name: 'John', age: 25 },
        { id: 2, name: 'Jane', age: 30 },
        { id: 3, name: 'Bob', age: 40 },
      ]);
      const downloadPDF = () => {
        const doc = new jsPDF();
        doc.text('Table Data', 20, 10);
        doc.autoTable({ html: '#my-table' });
        doc.save('table.pdf');
      };
      
     
         
       
      
  return (
    <div>
         <button onClick={downloadPDF}>Download PDF</button>
      <table id="my-table" className="pdf-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      {tableData.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>
        </tr>
      ))}
    </tbody>
  </table>
    </div>
  )
}

export default Table
