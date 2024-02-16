import React,{useState,useEffect} from 'react'
import {Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateBlog, } from '../../state/slices/blogSlice';
import Button from '../button/Button';

export default function UpdateBlogForm({blogDetails}) {
    const { blogPosts} = useSelector((state) => state.blog);
    const[data,setData] = useState(blogDetails);
    const dispatch = useDispatch();

    const updateBlogPost = () => {
       dispatch(updateBlog(data));
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
        <Form.Group className="mb-3" >
            <Form.Label>Title</Form.Label>
            <Form.Control name="title" type="text" placeholder="title" value={data?.title !== undefined ? data?.title : blogDetails?.title}  onChange={(e)=>handleChange(e)} />
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" rows={3}  name="content" value={data?.content !== undefined ? data?.content : blogDetails?.content}   onChange={(e)=>handleChange(e)}/>
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Author</Form.Label>
            <Form.Control type="text"   name="author" value={data?.author !== undefined ? data?.author : blogDetails?.author}   onChange={(e)=>handleChange(e)}/>
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Created Date</Form.Label>
            <Form.Control type="date" name="date" value={data?.date !== undefined ? data?.date : blogDetails?.date}  onChange={(e)=>handleChange(e)}/>
        </Form.Group>
        <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Blog Post Banner</Form.Label>
            <Form.Control type="file" multiple name='image' onChange={(e)=>handleChange(e)} />
        </Form.Group>
        <Button  title={"Update"}  onClick={()=>{updateBlogPost()}} />
   </Form>
  )
}
