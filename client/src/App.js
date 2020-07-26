import React from 'react';
import './App.css';
import Vid from "./images/vidbackground.jpg";
import calendaricon from "./images/calendaricon.jpg";
import fbicon from "./images/fbicon.jpg";
import igicon from "./images/igicon.jpg";
import inicon from "./images/inicon.jpg";
import mailicon from "./images/mailicon.jpg";
import messageicon from "./images/messageicon.jpg";
import formulaicon from "./images/formulaicon.jpg";
import megaphoneicon from "./images/megaphoneicon.jpg";
import whyusimage from "./images/whyusimage.jpg";
import findcustomers from "./images/findcustomers.jpg";
import noheadaches from "./images/noheadaches.jpg";
import meetingicon from "./images/meetingicon.jpg";
import dollarsign from "./images/dollarsign.jpg";
import nosaveresources from "./images/nosaveresources.jpg";
import logo from "./images/logo.jpg";



class App extends React.Component{
  constructor() {
    super();

    this.state = {
      formdisplay: "none",
      name: "",
      email: "",
      date: null
    };
    
    this.Removeoverlay = this.Removeoverlay.bind(this);
    this.ScrollFunction = this.ScrollFunction.bind(this);
  }

 
  ScrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      document.getElementById("header_scroll").style.top = "0";
    } else {
      document.getElementById("header_scroll").style.top = " -15rem";
    }
  }  

  Removeoverlay(){
    let fname = document.getElementById("schedule_date_text").value;
    let date = document.getElementById("schedule_date").value.toString();
    let email = document.getElementById("schedule_date_email").value;
    let email_domain = email.split("@");

    if(this.state.formdisplay === "none"){
      this.setState({
        formdisplay: "block"
      });
    }else if(this.state.formdisplay === "block" && (fname !== "" && email !== "" && date !== null)){
      this.setState({
        formdisplay: "none"
      });
    }
    
    if(email.replace(/[^@]/g, "").length === 1 && email_domain[1].replace(/[^.]/g, "").length >= 1 && email_domain[1].length > 1 && email_domain[0].length > 0){
      if(fname !== "" && email !== "" && date !== null){
        this.setState({
          name: fname,
          email: email,
          date: date
        });
      }else{
        throw("Invalid");
      }
    }
    else{
      throw("Invalid");
    }
  };

  render(){
    let stdemand = ["Free Evaluation on your services and products", "AI technology working for you day and night", "Field Sales and Telesales representation of product line", "Appointment setting", "Business development", "Marketing support", "Reviving cold or old customers into sales today"]
    let new_stdemand_list = [];
    let oldway_list_list = ["Recruiting", "Salary", "Benefits", "Training", "Managers", "learning curve", "motivating team", "gamification", "selling bonuses", "attrition"]
    let new_oldway_list_list = [];

    {oldway_list_list.forEach(element => {
      new_oldway_list_list.push(
          <li>{element}</li>);
  })}

    stdemand.forEach(element => {
      new_stdemand_list.push(<div class="num"><p>{element}</p></div>);
    });

    window.onscroll=this.ScrollFunction;

    let link = `http://localhost:5000/info/${this.state.name}/${this.state.email}/${this.state.date}`;
    
    return(
      <div>
        <div>
          <div id="header_scroll">
            <img alt="logo" src={logo} style={{paddingLeft: "2rem", width: "4rem", flex: "left"}}></img>
          </div>
          <section>
            <div id="body_sales">
              <div class="scheduleACallContainer" >
              <button onClick={this.Removeoverlay} id="top_call_space" class="top_call_spaces" ><div class="call_pulse"></div>SET AN APPOINTMENT TODAY </button>
                <div  style={{display: this.state.formdisplay}} id="date_schedule">
                  <form action={link} method="POST">
                    <input type="text" placeholder="Enter first and last name" id="schedule_date_text" required oninvalid="this.setCustomValidity('Enter Name Here')"
    oninput="this.setCustomValidity('')"/>
                    <input type="text" placeholder="Enter email" id="schedule_date_email" required oninvalid="this.setCustomValidity('Enter Email Here')"
    oninput="this.setCustomValidity('')"/>
                    <input type="datetime-local" id="schedule_date" required oninvalid="this.setCustomValidity('Enter Date Here')"
    oninput="this.setCustomValidity('')"/>
                    <input id="schedule_date_date"  type="submit" value="Submit" onClick={this.Removeoverlay}/>
                  </form>
                </div>
                <div class="intro_space">
                  {/* <video id="vid-background" autoPlay muted loop >
                    <source src={Vid} type="video/mp4"/>
                  </video> */}
                  <img id="vid-background" src={Vid}/>
                  <h1 id="header1"><strong>Virgin group </strong></h1>
                  <h6 id="header3"><strong>Petroleum and Petrochemical LTD </strong></h6>
                  <div>
                    <button onClick={this.Removeoverlay} id="call_space" class="call_space" >SET AN APPOINTMENT TODAY </button>
                </div>
                  <div class="call_number1">
                      <a href="tel:3174555667"> or call us at 
                        <strong class="strongTagButBlack"> (317) 455-5667</strong>
                      </a>
                  </div>
                </div>
              </div>
              <div id="roi_calculator">
                <h1 id="header1" style={{color: "white"}}><strong>Products</strong></h1>
              </div>
              <div class="salespop_content">
              <a onClick={this.Removeoverlay} class="stagnant_schedule_call" href="#top_call_space" >Set an appointment today </a><br/><br/>
              <div class="row_l">
                <div class="column_l">
                  <h2> Fuel and Petrol distribution</h2>
                    <p>  Our customers get first hand service at a good price. </p>
                    <p>  We distribute fuel constantly for 18 hours everyday</p>
                </div>
                <div class="column_l">
                  <img alt="Save resources" style={{width: "100%" }} src={nosaveresources}/>
                </div>
              </div>
              <div class="row_l">
                <div class="column_l">
                  <h2>Car Wash</h2>
                  <p> We have a very efficient and fast car wash that will make your car look as good as new. </p>
                  <li>Basic wash</li>
                  <li>Wash and wax with sealant</li>
                  <li>Wash and wax with spray wax</li>
                  <li>Basic interior cleaning</li>
                  <li>Deep interior cleaning with protection</li>
                  <li>Wheel polishing</li>

                </div>
                <div class="column_l">
                  <img alt="Prevent headaches" style={{width: "100%" }} src={noheadaches}/>
                </div>
              </div>
              <div
               class="row_l">
                <div class="column_l">
                  <h2> Car Repair shop </h2>
                  <p> 24 hour Car mechanic shop that will fix any issue going on in your car.</p>
                </div>
                <div class="column_l">
                  <img alt="Find customers" style={{width: "90%"}} src={findcustomers}/>
                </div>
              </div>
              <div class="row_l">
                <div class="column_l">
                  <h2> Repair and refurbishing on water vessels </h2>
                  <p> We repair and refurbish Water vessels including</p>
                  <li>Tug boats</li>
                  <li>Fishing boat</li>
                  <li>Speed boat</li>
                  <li>Barge</li>
                  <li>Ships</li>
                </div>
                <div class="column_l">
                  <img alt="Find customers" style={{width: "90%"}} src={meetingicon}/>
                </div>
              </div>
              </div>
              <div id="roi_calculator">
                <h1 id="header1" style={{color: "white"}}><strong>About</strong></h1>
              </div>
              <div class="row_l">
                <div class="column_l">
                  <h2>Our Experience</h2>
                  <p>Our team has over 20 years of experience in growing all sizes of companies in multiple industries. With experience in telesales and marketing strategies, we have the tools and experiences to help your company grow.  </p>
                  <h3>Why Us?</h3>
                  <p>Virgin Oil Petroleum and Petrochemicals Ltd has been known for deployment and distribution of petrol products around Nigeria. The Chief Executive Officer and his wife are people with high level business skills that do their best to develop the society.</p>
                </div>
                <div class="column_l">
                  <img alt="why us" style={{width: "90%", margin: "5rem", marginLeft: "0"}} src={whyusimage}/>
                </div>
              </div>
              <footer class="footer-area">
                <div class="footer_schedule">
                  <div style={{textAlign: "center"}}>
                    <a onClick={this.Removeoverlay} href="#top_call_space" id="call_space" class="call_space" >SET AN APPOINTMENT TODAY </a>      
                    <div class="call_number2">
                        <a href="tel:3174555667"> or call us at 
                          <strong class="strongTagButBlack"> (317) 455-5667</strong>
                        </a>
                    </div>
                </div>
                  </div>
                <div class="footer-top"><br/><br/><br/><br/>
                  <div class="container" style={{paddingLeft: "40px", paddingRight: "40px"}}>
                    <div class="footer_sidebar">
                            <h4 style={{color:"white"}}>FOLLOW US</h4>
                            <a style={{ display: "flex"}} id="foot_links" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/best_ooh/">&nbsp;Instagram</a><br/>	
                            <a style={{ display: "flex"}} id="foot_links" target="_blank" rel="noopener noreferrer"  href="https://www.facebook.com/best.ezeani">&nbsp;Facebook</a><br/>
                            <a style={{ display: "flex"}} id="foot_links" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/bestooh-ezeani-a09866146/">&nbsp;LinkedIn</a><br/>
                            <span id="foot_links"  id="location_salespop"></span><br/>
                            <h4 style={{color:"white"}}>CONTACT INFO</h4>
                            <a style={{ display: "flex"}} id="foot_links" href="tel:3174555667">&nbsp;(616) 227-9844</a><br/>
                            <a style={{ display: "flex", width: "15rem"}} id="foot_links" href="mailto:virgingroup@hotmail.com">&nbsp;Virgingroup@hotmail.com</a><br/>
                            <span style={{ display: "flex", width: "25rem"}} id="foot_links">&nbsp;No 1 Kofo Abayomi Avenue, Apapa, Lagos, Nigeria.</span><br/><br/>
                      </div>
                    </div>
                  </div>
                  <div class="footer-bottom">
                    Copyright © 2020 Virgin group - all rights reserved. | <a id="info_link" href="index.html">VIRGINGROUP@HOTMAIL.COM</a>
                  </div>
                </footer>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;