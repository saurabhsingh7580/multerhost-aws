import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'

const AddUserData = () => {
  let [name, setName] = useState("")
  let [City,setCity] = useState("")
  let [Image,setImage] = useState("")

  const imageUpload =(e)=>[
     setImage(e.target.files[0])
  ]
    const submitData = async (e)=>{
      e.preventDefault()
      const formData =  new FormData()
      formData.append("name",name)
      formData.append("City",City)
      formData.append("Image",Image)
      const config = {
        "Content-Type":"multipart/form-data"
      }

      const apiData = await axios.post("http://localhost:9000/api/posttask",formData,config)
      console.log(apiData,"response")

    }

  return (
    <div>
        <Form className='container w-50'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Enter City" value={City} onChange={(e)=>setCity(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" onChange={imageUpload}  />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={submitData}>
        Submit
      </Button>
    </Form>
      
    </div>
  )
}

export default AddUserData
