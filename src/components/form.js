import React, { useState } from 'react'
import axios from 'axios'


const Form = () => {
    

    /* const [user, setUser] = useState({
        user: '',
        password: '',
        fullname :''
    }); */
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const [fullname, setFullname]= useState('');

    
   /*  const handleChange = (e) =>{
        setUser({...user,[e.target.name]: e.target.value});
        
    }    */ 
    
    const onsubmit = async (e) => {
            
        axios.post('http://localhost:4000/api', {
            username,
            password,
            fullname
        
        }).then(() => {
            alert('todo cool');
        });
        console.log(username)
        e.preventDefault();
        

    } 

        /* async componentDidMount(){
            await this.fetchTest()
        }

        fetchTest = async () => {
            let res = await fetch('http://localhost:4000/api');
            let data = await res.json();

            console.log(data)
        } */

        
        return(
        <div>
            <nav>
                <div className="nav-wrapper red darken-2">
                <div className="brand-logo right">MERN</div>
            
                </div>
            </nav>

                <div className="container ">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit = {onsubmit} >
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="user" onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder="Usuario"/>
                                            </div>
                                            <div className="input-field col s12">
                                                <input name="fullname" onChange={(e)=>{setFullname(e.target.value)}} type="text" placeholder="Fullname"/>
                                            </div>
                                            <div className="input-field col s12">
                                                <input name="password"  onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Contraseña"/>                                            
                                            </div>    
                                            <button type="submit" className="btn red darken-2">Iniciar Sesión </button>        
                                        </div>
                                    </form> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
            
        )
    
}

export default Form;