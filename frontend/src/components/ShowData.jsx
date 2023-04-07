import React,{useState,useEffect} from 'react'
import {Table} from 'react-bootstrap'
import axios from 'axios'
// import jsPDF from 'jspdf';
import 'jspdf-autotable'

const ShowData = () => {
    const [data,setData] = useState([]);

    const show = async ()=>{
        const api = await axios.get("http://localhost:9000/api/task")
        setData(api.data.response)
        
    }
    useEffect(()=>{
       show()
    },[])
    console.log(data)

    // const downloadPDF = () => {
    //   const doc = new jsPDF();
    //   doc.text('Student Table Data', 20, 10);
    //   doc.autoTable({data:data.map(value=>({...value,dataKey:value.user_id})),
    //   body:data
    // });
    //   doc.save('table.pdf');  
    // }
  return (
    <div>
      {/* <button onClick={downloadPDF} className='primary'>Download PDF</button> */}
      <Table striped bordered hover className='container' style={{width:"900px"}}>
      <thead>
        <tr>
          <th>User_id</th>
          <th> Name</th>
          <th> City</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {
            data.map((value,index)=>{
                return(
                    <tr>
                    <td>{value.user_id}</td>
                    <td>{value.name}</td>
                    <td>{value.City}</td>
                    <td><img style={{height:'100px', width:'100px'}} src={`http://localhost:9000/${value.Image}`} alt='img_logo' /></td>
                  </tr>

                )
            })
        }
       
      </tbody>
    </Table>
    </div>
  )
}

export default ShowData
