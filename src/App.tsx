import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenCounter } from "./state/atom/counter";


function App() {
  

  return (
    <>
     <div>hi there</div>
     <RecoilRoot>
     <Count></Count>
     </RecoilRoot>
    </>
  )
}

function Count(){
  return(
    <>
    <Button></Button>
    <CountProvider></CountProvider>
    
    </>
  )
}

function Button(){
 console.log("re-rendered buttons");
 
  const setCount = useSetRecoilState(countAtom)
    return(
    <>
     <button onClick={()=>{
      setCount(count => count + 1)
      }}>increase</button>
     <button onClick={()=>{
      setCount(count => count - 1)
      }}>decrease</button>
    </>
    );
}

function CountProvider(){
  const count = useRecoilValue(countAtom)
  const even = useRecoilValue(evenCounter)
  
  console.log("count rendered");

  
  return(

  
      <>  <div>{count}</div>
         <div>{(even==0 ? "its even " : "")}</div> 
         

      </> 
)
}

export default App
