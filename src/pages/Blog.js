import React, { useState ,useEffect} from 'react'
import BreadCrumb from '../components/breadcrumb/BreadCrumb';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row} from 'react-bootstrap';
import LargeModal from '../components/Modal/LargeModal';
import Background from '../assets/images/contact_pg_backgroud.png';
import BlogPostCard from '../components/card/BlogPostCard';
import {useSelector} from 'react-redux'
import AddBlogForm from '../components/form/AddBlogForm';
import Container from '../components/container/Container';
import { useNavigate } from "react-router-dom";

function Blog() {
  const [clicked, setClicked] = useState(false);
  const [cardTitle, setCardTitle] = useState('');
  const [lgShow, setLgShow] = useState(false);
  const [isNavigate, setNavigate] = useState(false);
  const [selectedBlogPost, setSelectedBlogPost] = useState({});
  const { blogPosts } = useSelector((state) => state.blog);
  let navigate = useNavigate();

  function handleClick(title){
    setClicked(true);
    setCardTitle(title)
  };

  return (
    <div style={{ height: '95vh'}}>
    
      {/* <img src={Background} style={{position:'absolute',width:'100%',height:'50%',zIndex:-5}}/> */}
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
         <button class="btn btn-primary me-md-2 m-2" type="button" onClick={() => setLgShow(true)}> Add New </button>
      </div>

      <LargeModal show={lgShow} onHide={() => setLgShow(false)} title={"Add Blog Post"} >
          <AddBlogForm />
      </LargeModal>
     
      <Row xs={1} md={2} lg={5} className="g-4 ms-5 me-5">
        {
          blogPosts.map((data, index) => (
            <BlogPostCard data={data} index={index} onView={()=>{setNavigate(true);handleClick(data?.title);setSelectedBlogPost(data)}} />
          ))
        }
       </Row> 
        {
          isNavigate && navigate('/blogView',{ state: { blogDetails: selectedBlogPost } }) 
        } 
     </div>
  )
}

export default Blog