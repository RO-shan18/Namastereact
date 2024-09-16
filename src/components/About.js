import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            userinfo: {
                name : "dummy",
                created_at: "yy-mm-dd",
                updated_at: "yy-mm-dd"
            }
        }

        console.log("Parent constructor")
    }

    async componentDidMount(){
       let data = await fetch("https://api.github.com/users/RO-shan18");
       let json =  await data.json();

       console.log("Parent Component did Mount")

       this.setState({
         userinfo : json
       })

       this.timer = setInterval(()=>{
        console.log("setinterval")
       },1000)
    }

    componentDidUpdate(){
        console.log("Parent Component did Update")
      }

    componentWillUnmount(){
        console.log("Parent Component Will Unmount")
        clearInterval(this.timer);
      }

    render(){
       const {login, created_at, updated_at} = this.state.userinfo;
       console.log("Parent render")
    return(
        <div className="Aboutus">
            <h1>About us</h1>
            <UserClass name={login} date={created_at} latest_date={updated_at}/>
            <User name={login} date={created_at} latest_date={updated_at}/>
        </div>
    )
}
}

export default About;