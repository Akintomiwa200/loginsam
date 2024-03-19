import { useState } from 'react'


const Form = ()=>{
    const [userdetails, setUserdetails] = useState({name: "", email: "" })


    // const [username , setUsername] = useState('')
    // const [useremail, setUseremail] = useState('')
    // const database = []

    // const handleInputName = (e)=>{
    //     setUsername(e.target.value)
    // }
    // const handleInputEmail = (e)=>{
    //     setUseremail(e.target.value)
    // }

    const handleForm = (e)=>{
        setUserdetails((user)=> ({
                ...user,
                [e.target.name]: e.target.value
            }))
    };

    return(
        <>
            <h1>Form</h1>
            <form onSubmit={handleForm}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input type="text" onChange={(e)=>{setUserdetails({name:e.target.value})}} placeholder="yokao" name="name"/>
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={(e)=>{setUserdetails({email: e.target.value})}} placeholder="xyz@g.co" name="email"/>
                </div>
                <button type="submit">Submit</button>
            </form>
            <div>
                <p>NAme:{userdetails.name}</p>
                <p>Email: {userdetails.email}</p>
            </div>
        </>
    )
}
export default Form