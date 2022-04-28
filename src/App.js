import {React,useState} from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import axios from 'axios';
function App() {
  const [users,setUsers]=useState([])

    const handleAddBtn=()=>{
        if(users.length===10){
            window.alert('All records added')
            return
        }     
        var url=`https://swapi.dev/api/people/${Math.floor(Math.random() * 10)+1}`
        axios.get(url)
        .then(res => {
            var flag=true
            for(var i=0;i<users.length;i++){
                if(users[i].name===res.data.name){
                   flag=false
                   window.alert('This id is already added')
                }
            }
            if(flag)
            setUsers([...users,res.data])
        })
    }

     const handleDel=(e,n)=>{
        setUsers(users.filter(us=>us.name !== n))
    }


  return (
    <>
    <div className="container">
         
            <button onClick={e=>handleAddBtn(e)} className="addBtn">Add record</button>
            <br/>
            <h4>Name</h4>
            
            {users.map((val,key)=>{
                return(
                    <div className="card" key={key}>
                        <div className="entry d-flex">
                            <h4>{val.name}</h4>
                            <button onClick={e=>handleDel(e,val.name)} className="delBtn">DELETE</button>
                        </div>
                        
                    </div>
                );
            })}
        </div>
        <div className="lowerStrip">
          Submitted by <a href="https://ss-portfolio-frontend.vercel.app/">Shruti Sharma</a>
        </div>

        </>
  );
}

export default App;
