import React from 'react';
import './MobileGraphic.css';


export default class MobileViewComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      age: "",
      mobileno: "",
      email: "",
      password: "",
      confirmpassword: ""
    };
  }
  handleFirstName = (e) => {
    this.setState({firstname: e.target.value});
  }
  
  handleLastName= (e) => {
    this.setState({lastname: e.target.value});
  }
  
  handleAge = (e) => {
    this.setState({age: e.target.value});
  }
  
  handleMobileno = (e) => {
    this.setState({mobileno: e.target.value});
  }
  handleEmail = (e) => {
    this.setState({email: e.target.value});
  }
  handlePassword = (e) => {
    this.setState({password: e.target.value});
  }
  handleConfirmPassword = (e) => {
    this.setState({confirmpassword: e.target.value});
  }
  handleReset = () => { 
    this.setState({
        firstname: "",
        lastname: "",
        age: "",
        mobileno: "",
        email: "",
        password: "",
        confirmpassword: ""
    });
  }
  render() {
    return (
        <div className="MobileView">
        <div className="one">
        <img src={process.env.PUBLIC_URL + '/MobileGraphic.png'}  alt="mVerve login here" />
        </div>
        
        <div className="two">
        
        <h4>Create an account</h4>
     
        <form>
        <div className="Container">
        <fieldset>
            <legend>Personal Details</legend>
            <div className="form-group text-left">
            <label htmlFor="exampleFirstName">First Name</label>
            <input type="text" 
                    minLength="3"
                    maxLength="12"
                   className="form-control" 
                   id="first" 
                   aria-describedby="firstname" 
                   placeholder="First Name"
                   value={this.state.firstname}
                    onChange={this.handleFirstName} 
                    required
            />
            </div>
            <div className="form-group text-left">
            <label htmlFor="exampleLastName">Last Name</label>
            <input type="text" 
                    minLength="3"
                    maxLength="12"
                   className="form-control" 
                   id="last" 
                   aria-describedby="lastname" 
                   placeholder="Last Name"
                   value={this.state.lastname}
                    onChange={this.handleLastName} 
            />
            </div>
            <div className="form-group text-left">
            <label htmlFor="exampleAge">Age</label>
            <input type="number" 
            min="18" max="100" 
            pattern="[-+]?[0-9]"

                   className="form-control" 
                   id="ag" 
                   aria-describedby="age" 
                   placeholder="18 - 100"
                   value={this.state.age}
                    onChange={this.handleAge} 
            />
            </div>
            </fieldset>
            

            <div className="form-group text-left mobgrp" >
            <label htmlFor="exampleMobile">Mobile Number</label>
            <input type="text" 
                   className="form-control" 
                   id="mob" 
                   aria-describedby="mobilenumber" 
                   placeholder="xxxxx xxxxx"
                   value={this.state.mobileno}
                    onChange={this.handleMobileno} 
            />
           
            </div>
            <div className="form-group text-left">
            <label htmlFor="exampleEmail">Email</label>
            <input type="email" 
            pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$"
                className="form-control" 
                id="em" 
                placeholder="abc@xxx.zzz"
                value={this.state.email}
                    onChange={this.handleEmail} 
            />
        </div>
      
        <div className="form-group text-left">
        <label htmlFor="exampleDescription">Description</label>
        <textarea
            className="form-control"
            maxLength="150"  
            />
        <p>Max 150 characters</p>
        </div>
        
            <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" 
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" 
                    className="form-control" 
                    id="pwd" 
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handlePassword} 
                    required
                   
                />

            </div>
            <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Confirm Password</label>
                <input type="password" 
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" 
                    className="form-control" 
                    id="cnfpwd" 
                    placeholder="Confirm Password"
                    value={this.state.confirmpassword}
                    onChange={this.handleConfirmPassword} 
                    required
                />
            </div>
            <button 
            type="reset" 
            className="btn-reset" 
            onClick={this.handleReset}
        >
            Reset
        </button>
            <button 
                type="submit" 
                className="btn-submit"
            >
                Submit
            </button>
            </div>
            </form>

   
        </div>
    </div>

    )
  }
}


