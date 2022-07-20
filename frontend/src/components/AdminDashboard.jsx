import React, { Component } from 'react';
import { Button } from "antd";
import "./Dashboard.css"
import background from "../images/slide_img05.jpg";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";

export default class MainDashboard extends Component {

  render() {
    return (
      <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      

    <div className='page'>
    <div><br/>
    <h1 className="text-center">Admin Dashboard</h1>

<div class="py-3">
    <div class="container">
      <div class="row hidden-md-up">
{/* 01 */}
<div class="col-md-3" >
           <div class="card text-center" style = {{backgroundColor:'#dddddd'}}>
             <div class="card-block" ><br/>
             <img  style={{height: 130, width: 180}} class="rounded-circle" src={image1} alt="User Management"/>
               <h4 class="card-title"></h4>                
               <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/AuthenticationManagement" style={{ textDecoration: 'none', color: 'Info' }}>
               Authentication Management </a>
               </Button>
             </div>
           </div>
         </div>
{/* 02 */}
          <div class="col-md-3" >
           <div class="card text-center" style = {{backgroundColor:'#e5e3e3'}}>
             <div class="card-block" ><br/>
             <img  style={{height: 130, width: 180}} class="rounded-circle" src={image2} alt="Card image cap"/>
               <h4 class="card-title"></h4>                
               <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/" style={{ textDecoration: 'none', color: 'Info' }}>
               Notice Management </a>
               </Button>
             </div>
           </div>
         </div>
{/* 03 */}
<div class="col-md-3" >
           <div class="card text-center" style = {{backgroundColor:'#e5e3e3'}}>
             <div class="card-block" ><br/>
             <img  style={{height: 130, width: 180}} class="rounded-circle" src={image3} alt="Card image cap"/>
               <h4 class="card-title"></h4>                
               <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/Resources" style={{ textDecoration: 'none', color: 'Info' }}>
                   File Uploads </a>
               </Button>
             </div>
           </div>
         </div>
{/* 04 */}
          <div class="col-md-3" >
           <div class="card text-center" style = {{backgroundColor:'#e5e3e3'}}>
             <div class="card-block" ><br/>
             <img  style={{height: 130, width: 180}} class="rounded-circle" src={image4} alt="Card image cap"/>
               <h4 class="card-title"></h4>                
               <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/marking" style={{ textDecoration: 'none', color: 'Info' }}>
                   Marking Scheme Creating </a>
               </Button>
             </div>
           </div>
         </div>

      </div><br/>
{/* 05 */}
        <div class="row">
        <div class="col-md-3" >
           <div class="card text-center" style = {{backgroundColor:'#e5e3e3'}}>
             <div class="card-block" ><br/>
             <img  style={{height: 130, width: 180}} class="rounded-circle" src={image2} alt="Card image cap"/>
               <h4 class="card-title"></h4>                
               <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/StudentDetails" style={{ textDecoration: 'none', color: 'Info' }}>
                  Research Group Management </a>
               </Button>
             </div>
           </div>
        </div>
{/* 06 */}
        <div class="col-md-3" >
           <div class="card text-center" style = {{backgroundColor:'#e5e3e3'}}>
             <div class="card-block" ><br/>
             <img  style={{height: 130, width: 180}} class="rounded-circle" src={image3} alt="Card image cap"/>
               <h4 class="card-title"></h4>                
               <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="#" style={{ textDecoration: 'none', color: 'Info' }}>
                   Feedback Management </a>
               </Button>
             </div>
           </div>
         </div>
{/* 07 */}
         <div class="col-md-3" >
           <div class="card text-center" style = {{backgroundColor:'#e5e3e3'}}>
             <div class="card-block" ><br/>
             <img  style={{height: 130, width: 180}} class="rounded-circle" src={image4} alt="Card image cap"/>
               <h4 class="card-title"></h4>                
               <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/Panel" style={{ textDecoration: 'none', color: 'Info' }}>
                   Staff Management </a>
               </Button>
             </div>
           </div>
         </div>
{/* 08 */}
         <div class="col-md-3" >
           <div class="card text-center" style = {{backgroundColor:'#e5e3e3'}}>
             <div class="card-block" ><br/>
             <img  style={{height: 130, width: 180}} class="rounded-circle" src={image1} alt="Card image cap"/>
               <h4 class="card-title"></h4>                
               <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/paneltable" style={{ textDecoration: 'none', color: 'Info' }}>
                   Panel Member Management </a>
               </Button>
             </div>
           </div>
         </div>

         </div><br/>
{/* 09 */}
        <div class="row">
        <div class="col-md-3" >
           <div class="card text-center" style = {{backgroundColor:'#e5e3e3'}}>
             <div class="card-block" ><br/>
             <img  style={{height: 130, width: 180}} class="rounded-circle" src={image3} alt="Card image cap"/>
               <h4 class="card-title"></h4>                
               <Button class="btn btn btn-outline-light, hidden-md-up" ><a href="/sheduletable" style={{ textDecoration: 'none', color: 'Info' }}>
                    Panel Allocation Management </a>
               </Button>
             </div>
           </div>
        </div>


        </div><br></br>

    </div>
  </div>







    </div>
      
    

    </div>
    </div>
    )


    
  }
}