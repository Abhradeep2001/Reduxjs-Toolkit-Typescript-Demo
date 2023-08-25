import {useState} from "react";
import { login,logout } from "../store";
import { useDispatch, useSelector } from "react-redux/es/exports";



export const Login=()=>{

    const [newUserName,setNewUserName]=useState<string>("");
    const dispatch=useDispatch();
    const username=useSelector((state : any)=>state.user.value.username);
    return(
        <div>
            <h1>Login Page: Welcome {username}</h1>
            <input onChange={(event: React.ChangeEvent<HTMLInputElement>)=> setNewUserName(event.target.value)}/>
            <button onClick={() => dispatch(login({username:newUserName}))}>Submit Login</button>
            <button onClick={()=> dispatch(logout())}>Logout</button>
        </div>
    )
}