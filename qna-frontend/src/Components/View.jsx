import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { listQnas, listTopics } from '../services/QnaServices';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function View() 
{
    const [count,setCount]=useState(1)
    const [data,setData] = useState([])
    const [topics,setTopics] = useState([])
    const navigator = useNavigate()

    

    useEffect(() => {

      listTopics()
        .then((response) => {
          console.log(response)
          setTopics(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  
      listQnas(count)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }, []); // Empty dependency array ensures useEffect runs only once after component mounts
  
 
    function incrementCount()
    {
        setCount(prevcount => prevcount+1)
        navigator("/qna/"+count)
    }

    function TopicQnas()
    {
      var x = document.getElementById('topic').value
      navigator("/view/qnas/"+x+"/"+0)
    }





  return (
    <div style={{height:"580px",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundImage:`url("https://img.freepik.com/premium-photo/text-q-written-cubes-black-letters-cubes-are-located-gray-surface-concept-word-forming-with-cubes-background-questions-answers_384017-4124.jpg")`}}>View

        
         <h4>Filter By Topic</h4>
        <select id='topic'>
          {topics.map((topic,index)=><option key={index}>{topic}</option>)
          }
        </select>
        <Button id="prev" variant='success' onClick={TopicQnas}>Topic Qnas</Button>
<br/><br/>
        <Button onClick={incrementCount} variant="info" id="next">See All Qnas</Button>


        {/* <h3>Question Id: {data.qnaId}</h3>

        <div id="question">
          <h2>Question:</h2>
{data.question}
        </div>

        <div id="answer">
          <h2>Answer:</h2>
{data.answer}
        </div> */}
    </div>

  )
}

export default View