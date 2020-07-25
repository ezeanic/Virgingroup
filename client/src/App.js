import React from 'react';
import './App.css';
import Vid from "./images/vidbackground.mp4";
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
    this.CalculateRoi = this.CalculateRoi.bind(this);
  }

  CalculateRoi(){
    let invest = document.getElementById("roi_invest").value;
    let returns = document.getElementById("roi_return").value;

    let roi = ((returns - invest)/invest)*100;
    document.getElementById("roi").value = roi+"%";
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
              <div class="scheduleACallContainer">
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
                  <video id="vid-background" autoPlay muted loop >
                    <source src={Vid} type="video/mp4"/>
                  </video>
                  <h1 id="header1"><strong>Dedicated Business Development Team </strong></h1>
                  <h3 id="header2"><strong>Guaranteed 6 qualified meetings per month</strong></h3>
                  <p id="header3">Revive stale customers or establish net new customers  today</p>
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
              <div class="salespop_content">
              <a onClick={this.Removeoverlay} class="stagnant_schedule_call" href="#top_call_space" >Set an appointment today </a><br/><br/>
              <div class="row_l">
                <div class="column_l">
                  <h2> Results are what matter</h2>
                    <p>  Our customers see revenue growth within the first month. </p>
                    <p>  Our proprietary system is quick and simple giving you what you need more sales meetings and more revenue </p>
                </div>
                <div class="column_l">
                  <img alt="Save resources" style={{width: "100%" }} src={nosaveresources}/>
                </div>
              </div>
              <div class="row_l">
                <div class="column_l">
                  <h2>Cost to have Sales team is big</h2>
                  <p> Hiring, Training and keeping Sales is expensive and time consuming. Without sales you will not survive. We can handle this for you with nothing you need to think about other than how will I manage all this qualified sales meetings to close. </p>
                </div>
                <div class="column_l">
                  <img alt="Prevent headaches" style={{width: "100%" }} src={noheadaches}/>
                </div>
              </div>
              <div class="row_l">
                <div class="column_l">
                  <h2> We have the tools for finding qualified customers </h2>
                  <p> Our network of 272 million contacts introduces your product to the right companies. We have done all the hard work for you.</p>
                </div>
                <div class="column_l">
                  <img alt="Find customers" style={{width: "90%"}} src={findcustomers}/>
                </div>
              </div>

              <div class="head_step_process">
                <h2 style={{ padding: "1rem", marginTop: "2rem"}}>Our 4 step process</h2>               
                  <div class="step_process">
                    <div id="image_process">
                      <img alt="Formula" style={{width: "100%"}}  src={formulaicon}/>
                      </div>
                      <div id="text_process">
                      <h4>Intake Interview</h4>
                        <p>Deep-dive into your product or service</p>
                        <p>Explore your ideal customer profiles</p>
                        <p>Review value propositions</p>
                    </div>
                  </div > 
                  <div class="step_process">
                    <div id="image_process">
                      <img alt="Message" style={{ width: "100%"}}  src={messageicon}/>
                      </div>
                      <div id="text_process">
                      <h4>Personalized messages on your brand from us</h4>
                        <p>Create multiple sequences and campaigns</p>
                        <p>Personalize messaging to the individual prospects, company or industry </p>
                      </div>
                    </div>
                  <div class="step_process">
                    <div id="image_process">
                      <img alt="Megaphone" style={{ width: "100%"}}  src={megaphoneicon}/>
                      </div>
                      <div id="text_process">
                      <h4>Launch of your brand</h4>
                        <p>Reach out to a minimum of 1500 new prospects per month</p>
                        <p>Review results and adapt where needed</p>
                    </div>
                  </div>
                <div class="step_process">
                    <div id="image_process">
                      <img alt="Calendar" style={{ width: "100%"}} src={meetingicon}/>
                      </div>
                      <div id="text_process">
                      <h4>Meeting Arrive</h4>
                        <p>Meetings are sent directly to your calendar</p>
                        <p>You focus on closing the deal!</p>
                    </div>
                  </div>
                </div>
               <div>
                <h3>The Old way VS the new way</h3>
                 <div class="row_l">
                  <div class="column_l">
                    <h4>Hiring a Business Development representative</h4>
                    <img id="dollar_image" src={dollarsign}/>
                    <div id="list_background">
                      <ul id="oldway_list">
                        {new_oldway_list_list}
                      </ul>
                    </div>
                </div>
                <div class="column_l" >
                  <h4>Sales Pop</h4>
                    <img alt="Calendar" style={{ width: "20rem"}} src={calendaricon} alt="Sales Pop"/>
                    <p>Log in each day and see your calendar full with sales meetings from Sales Pop</p>
                </div>
               </div>
              </div>
              </div>
              <div id="roi_calculator">
                <h1>Return of Investment</h1>
                <input type="text" id="roi_invest" placeholder="Amount Invested"/>
                <input type="text" id="roi_return" placeholder="Amount Returned"/>
                <button onClick={this.CalculateRoi}>Calculate</button>
                <input placeholder="ROI" id="roi" type="text"/>
              </div>
              <div class="row_l">
                <div class="column_l">
                  <h2>Our Experience</h2>
                  <p>Our team has over 20 years of experience in growing all sizes of companies in multiple industries. With experience in telesales and marketing strategies, we have the tools and experiences to help your company grow.  </p>
                  <h3>Why Us?</h3>
                  <p>We use our AI technology combined with our cutting edge team to find the most qualified opportunities to fill your pipeline. You are busy managing your business.  Allow us to help you keep costs down while sales revenue grows.  Why not lean on a complete sales team ready to represent your product and service and bring you the qualified sales meetings you are looking for today. Grow your business quickly without the expenses of a sales team you hir. Contact us today so we can start this partnership!</p>
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
                            <a style={{ display: "flex"}} id="foot_links" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mysalespop/"><img alt="Instagram" style={{ width: "1.5rem", height: "1.5rem", borderRadius: "0.1rem", paddingBottom: ".3rem"}} src={igicon}/>&nbsp;Instagram</a><br/>	
                            <a style={{ display: "flex"}} id="foot_links" target="_blank" rel="noopener noreferrer"  href="https://www.facebook.com/mysalespop"><img alt="Facebook" style={{ width: "1.5rem", borderRadius: "0.1rem"}} src={fbicon}/>&nbsp;Facebook</a><br/>
                            <a style={{ display: "flex"}} id="foot_links" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/mysalespop/"><img alt="LinkedIn" style={{ width: "1.5rem", borderRadius: "0.1rem"}} src={inicon}/>&nbsp;LinkedIn</a><br/>
                            <span id="foot_links"  id="location_salespop"></span><br/>
                            <h4 style={{color:"white"}}>CONTACT INFO</h4>
                            <a style={{ display: "flex"}} id="foot_links" href="tel:3174555667"> (317) 455-5667</a><br/>
                            <a style={{ display: "flex"}} id="foot_links" href="mailto:info@salespop.com"><img alt="Mail" style={{ width: "1.5rem", borderRadius: "0.2rem"}} src={mailicon}/>&nbsp;info@salespop.com</a><br/>
                            <span style={{ display: "flex", width: "15rem"}} id="foot_links">9465 Counselors Row, Suite 200, Indianapolis, IN 46240</span><br/><br/>
                      </div>
                    </div>
                  </div>
                  <div class="footer-bottom">
                    Copyright © 2020 Sales Pop - all rights reserved. Sales Pop is apart of Popcorn llc family of companies | <a id="info_link" href="index.html">INFO@THESALESPOP.COM</a>
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