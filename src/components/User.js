import { useEffect } from "react";

const User = (props)=>{
    const {name, date, latest_date} = props;

    useEffect(()=>{
       let timer =  setInterval(()=>{
            console.log("Interval")
        },1000)

        return()=>{
            clearInterval(timer);
        }
    },[])

    return (

        <div className="user">
            <h1>{name}</h1>
            <h2>{date}</h2>
            <h3>{latest_date}</h3>
            <h3>Contact: +91 349254352</h3>
            <h3>Email : RK@gmail.com</h3>
        </div>
    )
}

export default User;