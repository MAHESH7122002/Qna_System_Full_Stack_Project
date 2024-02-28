import React, { useEffect, useState } from 'react'
import { listTopicQnas } from '../services/QnaServices'
import { useNavigate, useParams } from 'react-router-dom'
import'./topic.css';
import Button from 'react-bootstrap/Button';

function Topic_Related_Qnas() 
{
    const [topic_data,setTopic_data] = useState([])
    const {topic} = useParams()  
    const {id} = useParams()
    const [length,setLength] = useState(1)
    const [count,setCount] = useState(parseInt(id,10))
    const navigator = useNavigate()
    // console.log(topic)
    // console.log(id)
    

    useEffect(() => { 
        // if (count <1) {
        //     prev.style.display = 'none';
        //   }
        //   else{
        //       prev.style.display = "block";
        //   }

        if((count<length-1) || count==0)
        {
            if(count==0)
            {
        
            }
            else{                
            // next.style.display="block"
            }
            console.log('length'+length)
        }   
        else{
            // next.style.display="none"
        }

        listTopicQnas(topic)
          .then((response) => {
            
            setTopic_data(response.data[count]);
            setLength(response.data.length)
            console.log("response data "+response.data)

          })
          .catch((error) => {
            console.log(error);
          });

      },[count]); // Empty dependency array ensures useEffect runs only once after component mounts


      useEffect(() => {
        console.log(count)
        var count_int = parseInt(count,10)
        navigator("/view/qnas/"+topic+"/"+count_int)
      },[count,navigator]); // Empty dependency array ensures useEffect runs only once after component mounts
    

    function incrementCount() 
    {
        setCount(prevCount => prevCount + 1);
    }

    
    function decrementCount()
    {
        setCount(prevCount => prevCount - 1);        
    }

    //   useEffect(()=>{
    //     console.log(count)
    
    //   },count)

  return (
    <div>Topic_Related_Qnas

        
       <center>
      <div style={{width:"1200px"}}>
        <div id="question" style={{width:"1200px",height:"75px",backgroundColor:"lightblue",borderRadius:"10px"}}>
          <br/> <b>{topic_data.question}</b>
       </div>


        {/* <h3>Question Id: 
            {topic_data.qnaId}</h3> */}
        {/* <div id="question">

          <h2>Question:</h2>
            {topic_data.question}
        </div> */}
        <br/> 
                <div id="answer" style={{backgroundColor:"#d5f4e6",borderRadius:"10px",width:"1200px"}}>
            <br/>{topic_data.answer}<br/><br/>
        </div>
        <div className='hel' >
            <Button onClick={decrementCount} variant='primary' id="prev">Previous</Button>
            <Button onClick={incrementCount} variant='primary' id="next">Next</Button>
        </div>
        </div>
        </center>
    
    </div>
  )

}

export default Topic_Related_Qnas