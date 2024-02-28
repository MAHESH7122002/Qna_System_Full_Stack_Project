import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { listQnas } from '../services/QnaServices';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './CssFiles/NextPrevCss.css';

function NextPrev() {
    const { id } = useParams();
    
    const parsedId = parseInt(id, 10);

    const [count, setCount] = useState(parsedId);
    const [data, setData] = useState([])
    const navigator = useNavigate(); 

    useEffect(() => {
        // if (count <2) {
        //     prev.style.display = 'none';
        //   }
        //   else{
        //       prev.style.display = "block";
        //   }
        // if(count==1)
        // {
        //     console.log('length'+length)
        //     next.style.display="block"
        // } 
        // else{
        //     next.style.display="none"
        // }
    
        listQnas(count)
          .then((response) => {
            setData(response.data);
            console.log(response.data)
            // setLength(response.data.length)
            navigator("/qna/" + count);

          })
          .catch((error) => {
            console.log(error.response.data);
          });
          navigator("/qna/" + count);

      },[count,navigator]); // Empty dependency array ensures useEffect runs only once after component mounts
    

    function incrementCount() {
        setCount(prevCount => prevCount + 1);
    }

    
    function decrementCount()
    {
        setCount(prevCount => prevCount - 1);        
    }



    return (
        < >View
    <center>
      <div style={{width:"1200px"}}>
    <div id="question" style={{width:"1200px",height:"75px",backgroundColor:"lightblue",borderRadius:"10px"}}>
       <br/> <b>{data.question}</b>
    </div>
    <br/> 
                <div id="answer" style={{backgroundColor:"#d5f4e6",borderRadius:"10px",width:"1200px"}}>
            <br/>{data.answer}
        </div>
        <div className='hel'>
            <Button onClick={decrementCount} variant='primary' id="prev">Previous</Button>
            <Button onClick={incrementCount} variant='primary' id="next">Next</Button>
        </div>
    </div>
      
 </center>
        </ >
    
      )
}
    

export default NextPrev;
