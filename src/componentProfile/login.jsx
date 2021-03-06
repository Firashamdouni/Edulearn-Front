import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import Dashboard from "../assistanAdmin/dashboard";

const users=[
    {
        name:'sabri',
        password:'selmi',
        role:0
    },
    {
        name:"hedi",
        password:"chaabeni",
        role:1
    },
    {
        name:"fathi",
        password:"mhiri",
        role:2
    },
    {
        name:'skander',
        password:"mejbri",
        role:3,
    },
    {
        name:'amani',
        password:"ghazouani",
        role:4,
    }
]
export default class Loginpage extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            pass:"",

            isIdent:false,
            user:{}
        }
    }
    onchange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
   search=(event)=>{
       var user=users.filter(el=>`${el.password}${el.name}`===`${this.state.pass}${this.state.email}`)
       if (user.length===0 ) {
           user[0] = {role: 5}
           alert("user undefined");
           event.preventDefault()
       }
       this.setState({
           user:user[0]
       })

       this.props.aspire(true,user[0].role)
    }
    fakeAuth=()=>{
        this.setState({
            isIdent:true,

        })
    }
    fakeDisconnect=()=>{
        this.setState({
            isIdent:false,
            email:"",
            pass:""
        })
        this.props.aspire(false,this.state.user.role)
    }
    render(){
        console.log(this.state.user,this.state.isIdent)
        console.log("props from app",this.props.stateApp.role,this.props.stateApp.isIdent)
       if (this.props.stateApp.role===0 && this.props.stateApp.isIdent) {
           return (<Dashboard Click={this.fakeDisconnect} user={this.state.user.name} aspire1={(x)=>this.props.aspire1(x)}/>);
        }
       else
       if (this.props.stateApp.role===1 && this.props.stateApp.isIdent) {
           return (<div style={{marginTop:"20%"}}><h1>assistant admin: Welcome {this.state.user.name}</h1><NavLink to="/profile/login" ><button onClick={this.fakeDisconnect}>logout</button></NavLink></div>);
       }
        else
       if (this.props.stateApp.role===2 && this.props.stateApp.isIdent) {
           return (<div style={{marginTop:"20%"}}><h1>professor: Welcome {this.state.user.name}</h1><NavLink to="/profile/login" ><button onClick={this.fakeDisconnect}>logout</button></NavLink></div>);
       }
        else
       if (this.props.stateApp.role===3 && this.props.stateApp.isIdent) {
           return (<div style={{marginTop:"20%"}}><h1>Parent: Welcome {this.state.user.name}</h1><NavLink to="/profile/login" ><button onClick={this.fakeDisconnect}>logout</button></NavLink></div>);
       }
        else
       if (this.props.stateApp.role===4 && this.props.stateApp.isIdent) {
           return (<div style={{marginTop:"20%"}}><h1>Student: Welcome {this.state.user.name}</h1><NavLink to="/profile/login" ><button onClick={this.fakeDisconnect}>logout</button></NavLink></div>);
       }
       else return (
                <div className="container login-container" style={{marginBottom:"10%"}}>
                    <div className="row">
                        <span className="col-md-3"></span>
                        <div className="col-md-6 login-form-1">
                            <h3>Login</h3>

                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Email *" name="email" onChange={this.onchange}/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Your Password *" name="pass" onChange={this.onchange}/>
                            </div>
                            <div className="form-group text-center">
                                <input type="submit" className="btnSubmit" value="Login" onClick={(event)=>{this.search(event);this.fakeAuth()}}/>
                            </div>
                            <div className="form-group text-center">
                                <a href="#" className="ForgetPwd">Forget Password?</a>
                            </div>

                            <div className="form-group text-center">
                                <button className="btnSubmit1" ><NavLink to ="/profile/signup" style={{color:"white"}}>Sign up</NavLink></button>
                            </div>

                            <div className="form-group text-center">
                                <NavLink to="/profile/login" className="ForgetPwd text-danger">You don't have an account yet?</NavLink>
                            </div>

                        </div>
                        <span className="col-md-3"></span>
                    </div>
                </div>
            )
        }

    }
