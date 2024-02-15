import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactCard from '../components/card/ContactCard';
import phonebookImage from '../assets/images/phonebook_white.png';
import MailImage from '../assets/images/mailbox_white.png';
import AddressImage from '../assets/images/map_white.png';
import Background from '../assets/images/contact_pg_backgroud.png';
import Button from '../components/button/Button';
import TextField from '../components/textField/TextField';





export default function ContactUs() {
  const[email,setEmail] =useState('');
  const[name,setUserName] =useState('');


  const btnOnSubmit = () => {
    console.log("email : "+ email ," ","user-name : "+name);
  }

  
  return (
    <div class="container-fluid vh-100 d-flex flex-column align-items-center">
      <img src={Background} style={{position:'absolute',width:'100%',height:'50%',zIndex:0}}/>
     <div class="d-flex flex-column justify-content-between align-items-center">
        <h2 className='mt-5 p-4 fs-2 fw-bold' style={{zIndex:10}}>Contact</h2>
        <div class="d-flex flex-row justify-content-between border-2">
          <div class="d-flex flex-column justify-content-center align-items-center">
              <div class="row d-flex justify-content-between m-2" style={{borderRadius:'15px',backgroundColor:'#4932A2',zIndex:'10'}}>
                  <ContactCard title={"Tel"} image={phonebookImage} textOne={"+94 123456"} textTwo={"+94 879545"} />
                  <ContactCard title={"Email"} image={MailImage} textOne={"asfbd@gmail.com"} textTwo={"vdfgbghh@gmail.com"}/>
                  <ContactCard title={"Address"} image={AddressImage} textOne={"80/B koshena , Halugama , Mirigama"} />
              </div>
          </div>
      </div>
     
      <div className='container border-3 d-flex justify-content-start flex-column'> 
          <h3 className='mt-5' style={{zIndex:10}}>Send us Email</h3>
          <div className='card p-4 shadow-lg bg-body rounded'>
              <form>
                <TextField label={"Email address"} type={"email"} value={email} onChange={(e)=>{setEmail(e?.target?.value)}}/>
                <TextField label={"Name"} type={"text"} value={name} onChange={(e)=>{setUserName(e?.target?.value)}}/>
                 <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                 </div>
                 <Button title={"Submit"} onClick={(event)=>{btnOnSubmit()}}/>
              </form>
            </div>
          </div>
      </div>
    </div>
  )
}

