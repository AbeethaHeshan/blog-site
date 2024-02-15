import React,{useState,useEffect} from 'react'
import { Modal, Button ,Form ,Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { generateRandomId } from '../../util/randomGenerator';
import { addNewBlog, updateBlog, removeBlog } from '../../state/slices/blogSlice';


export default function AddBlogForm() {

    const { blogPosts} = useSelector((state) => state.blog);
    const[data,setData] = useState();
    const dispatch = useDispatch();

    const addNewBlogPost = () => {
        const blogPostId = generateRandomId();
        const blogDetails = {...data,id:blogPostId};
       dispatch(addNewBlog(blogDetails));
       setData(null);
    };

    //create a referel link to th image (ex - blob:http://localhost:3000/490c4152-fce4-419e-b3e5-bc03ed6031b3)
    const handleFileChange = (e) => {
        const file = e.target.files[0]; 
        if (!file) return null; 
        return URL.createObjectURL(file);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if(name === 'image'){
           const url =  handleFileChange(e);
           console.log(url , " url");
            setData(prevData => ({
                ...prevData,
                [name]: url
              }));
        }else{
            setData(prevData => ({
                ...prevData,
                [name]: value
              }));
        }
      };
      useEffect(()=>{
           
      },[dispatch])


  return (
    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control name="title" type="text" placeholder="name@example.com" onChange={(e)=>handleChange(e)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" rows={3}  name="content" onChange={(e)=>handleChange(e)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Auther</Form.Label>
            <Form.Control type="text"   name="author" onChange={(e)=>handleChange(e)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control type="date" name="date" onChange={(e)=>handleChange(e)}/>
        </Form.Group>

        <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Multiple files input example</Form.Label>
            <Form.Control type="file" multiple name='image' onChange={(e)=>handleChange(e)} />
        </Form.Group>

        <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Blog Catogary</Form.Label>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                select catagory
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Sport</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Foods</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Health</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Form.Group>
        <Button onClick={()=>{addNewBlogPost()}}>Save</Button>
   </Form>
  )
}
