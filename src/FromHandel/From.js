import { useState } from "react"
import Create from "./Create"

function From()
{

    const [name,SetNmae]  = useState("")
    const [email,SetEmail] = useState("")
    const [hover, setHover] = useState(false)

    const handelData =()=>{
        const obj = {name:name,email:email}
        Create(obj)
    }

    return (
        <form
                onSubmit={handelData}
                style={{
                    maxWidth: '400px',
                    marginTop: '200px', 
                    padding: '30px',
                    border: '1px solid #ccc',
                    borderRadius: '15px',
                    backgroundColor: '#f9fbfc',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                    fontFamily: 'Arial, sans-serif',
                }}
            >
                <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Contact Form</h2>

                <div style={{ marginBottom: '15px' }}>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                      
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '2px solid #ccc',
                            borderRadius: '8px',
                            fontSize: '16px',
                            transition: 'all 0.3s ease',
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#4a90e2'}
                        onBlur={(e) => e.target.style.borderColor = '#ccc'}
                        value={name}
                        onChange={(e)=>{SetNmae(e.target.value)}}
                        
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                       
                        style={{
                            width: '100%',
                            padding: '10px',
                            border: '2px solid #ccc',
                            borderRadius: '8px',
                            fontSize: '16px',
                            transition: 'all 0.3s ease',
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#4a90e2'}
                        onBlur={(e) => e.target.style.borderColor = '#ccc'}
                        value={email}
                        onChange={(e)=>{SetEmail(e.target.value)}}
                    />
                </div>

                <div style={{ textAlign: 'center' }}>
                    <button
                        type="submit"
                        style={{
                            width: '150px',
                            padding: '12px 0',
                            border: '2px solid #4a90e2',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            backgroundColor: hover ? '#f3f990' : '#4a90e2',
                            color: '#fff',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            transition: 'background-color 0.3s ease',
                        }}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >
                        Submit
                    </button>
                </div>
            </form>
    )
}
export default From