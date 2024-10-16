import { useState, useCallback,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function App() {
  const [length, setLength] = useState(8)
   const [numberAllowed,setNumberAllowed] =useState(false)
   const [charAllowed,setcharAllowed]=useState(false)
   const [password,setpassword]=useState('')


 const passwordRef= useRef(null)

   const generatePassword =useCallback(()=>{
    let pass=""
    let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed)   str+="!@#$%^&*()_+"

    for (let i = 1; i < length; i++) {
     const char =  Math.floor(Math.random()*str.length+1 )
      pass+=str.charAt(char)
    
      
    }
    setpassword(pass)
   }, [length,numberAllowed,charAllowed])
      
   useEffect(()=>{
   generatePassword()
   },[length,numberAllowed,charAllowed])



const copyPasswordToClipboard=()=>{
  window.navigator.clipboard.writeText(password)
  passwordRef.current.select()
}

   

  return (
    <>
    <div className='container-fluid  vw-100 vh-100 px-auto bg-black'>
      <h2 className='text-light text-center my-4 py-4 m-lg-0 '>Password Generator</h2>
      <div className='flex  rounded overflow-hidden mb-3'>
        <input 
        type="text"
        value={password} 
        className='outline-none  w-25 py-1 px-2'
        placeholder='Password'
        readOnly
        ref={passwordRef} 
        /> {''}

        <button className='outline-none bg-primary text-light px-3 py-1' onClick={copyPasswordToClipboard}>Copy</button>
        

      </div>
      <div className='text-sm p-auto '>
        <div className='d-flex justify-content-center p-3'>
          <input 
          type="range"
          nin={6}
          max={50}
          value={length} 
          className='pe-auto'
          onChange={(e)=>setLength(e.target.value)}
          name=""
           id="" />
         <label  className='text-light'  htmlFor="lenght ">length:{length}</label>
        </div>

      </div>
      <div className='text-sm p-auto '>
        
        <input 
        type="checkbox"
        defaultChecked={numberAllowed}
        onChange={()=>{
          setNumberAllowed((prev) => !prev)
        }}
         name="" 
         id="" />
         <label   className=' text-light' htmlFor="number ">Numbers</label>
      </div>
      <div className='text-sm p-auto '>
        
        <input 
        type="checkbox"
        defaultChecked={charAllowed}
        onChange={()=>{
          setcharAllowed((prev) => !prev)
        }}
         name="" 
         id="" />
         <label  className='text-light'  htmlFor="CharInput ">Character</label>
      </div>

    </div>

     
    </>
  )
}

export default App
