import React,{useState} from 'react'
import { Col, Card, Button } from 'react-bootstrap';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import LargeModal from '../Modal/LargeModal';
import UpdateBlogForm from '../form/UpdateBlogForm';
import { useDispatch, useSelector } from 'react-redux';
import { addNewBlog, updateBlog, removeBlog } from '../../state/slices/blogSlice';


export default function BlogPostCard({data,index}) {
    const dispatch = useDispatch();

    const[show,setModel] = useState(false);
     
   const onDeleteBlogPost = () => {
      const blogId = data?.id;
      dispatch(removeBlog(blogId))
      console.log(blogId);
   }


  return (
    <Col key={index} className="d-flex justify-content-center">
        <Card style={{ width: '18rem' }}>
        <div style={{ position: 'relative' }}>
            <Button variant="danger" style={{ position: 'absolute', top: '0', right: '0', zIndex: '1' }} onClick={()=>{onDeleteBlogPost()}}>
            <FaTrash />
            </Button>
            <Card.Img variant="top" src={data?.image} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
        </div>
        <Card.Body>
            <Card.Title>{data?.title}</Card.Title>
            <Card.Text>
            <div className="d-flex justify-content-between mt-2 mb-5">
                <span>{data?.author}</span>
                <span>{data?.date}</span>
            </div>
            </Card.Text>
            <div style={{ position: 'relative' }}>
            <Button variant="secondary" style={{ position: 'absolute', bottom: '0', left: '0', zIndex: '1' }} onClick={()=>{}}>
                <FaEye />
            </Button>
            <Button variant="primary" style={{ position: 'absolute', bottom: '0', right: '0', zIndex: '1' }} onClick={()=>{setModel(true);console.log(data?.id);}}>
                <FaEdit />
            </Button>
            </div>
        </Card.Body>
        </Card>
        <LargeModal show={show} onHide={()=>{setModel(false)}} title={"Update Blog Post"} >
              <UpdateBlogForm blogDetails={data}/>
        </LargeModal>
    </Col>
  )
}
