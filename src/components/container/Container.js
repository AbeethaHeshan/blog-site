import React ,{useEffect,useState}from 'react'
import BreadCrumb from '../breadcrumb/BreadCrumb';
import { useLocation } from 'react-router-dom';

export default function Container() {

    const location = useLocation();
    const [blogDetails, setBlogDetails] = useState(null);
    const [breadCrumbStatus, setBreadCrumbStatus] = useState(false);
     
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await new Promise(resolve => setTimeout(() => resolve(location?.state?.blogDetails), 500));
          setBlogDetails(data);
          setBreadCrumbStatus(true)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [location.state]);


  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',height:'90vh',padding:'10px',width:'100%', overflowY: 'auto'}} >
    <div  style={{height:'50px',width:800,display:'flex',alignItems:'center'}}>
        <BreadCrumb clicked={breadCrumbStatus} cardTitle={blogDetails?.title}  />  
    </div>
    <div style={{width:800,height:'80vh',display:'flex',flexDirection:'column',alignItems:'center', overflowY: 'auto'}} class="shadow p-3 mb-5 bg-white rounded">
        <div style={{backgroundSize:'cover',width:'100%'}}>
            <img src={blogDetails?.image} alt="Header Image" style={{height:'150px',width:'100%'}} />
        </div>
        <div>
            <h1 className="mt-3" >{blogDetails?.title}</h1>
        </div>
        <div style={{width:'100%', overflowY: 'auto'}}>
            <p>
                {blogDetails?.content}
            </p>
        </div> 
    </div>
   </div>
  )
}


// <div style={{margin:10}}>
// <BreadCrumb clicked={breadCrumbStatus} cardTitle={blogDetails?.title}  />
// </div>

// <BSContainer className="d-flex align-items-center  flex-column" style={{ height: '100vh', width: '60vw', backgroundColor: 'red', position: 'relative', overflowY: 'scroll' }}>
//   <BSContainer className="position-relative d-flex align-items-center flex-column w-100">
//       <div style={{backgroundSize:'cover', backgroundPosition: 'center',width:'100%',height:'100px'}}>
//         <img src={blogDetails?.image} alt="Header Image" style={{backgroundSize:'cover', backgroundPosition: 'center'}} />
//       </div>
     
//       <h1 className="mt-3" >{blogDetails?.title}</h1>
//   </BSContainer>        
//   <Row>
//       <Col xs={12} className="text-center position-relative mt-2 top-50">
//           {blogDetails?.content}
          
//       </Col>
//   </Row>
// </BSContainer>  