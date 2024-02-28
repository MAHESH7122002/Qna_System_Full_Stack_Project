// Filename - App.js

import React, { useState } from "react";
import Papa from "papaparse";
import './CssFiles/UploadAFile.css';
// import './JsFiles/UploadFile'
import { createQna } from "../services/QnaServices";
import 'bootstrap/dist/css/bootstrap.css'
// Allowed extensions for input file
import Button from 'react-bootstrap/Button';

const allowedExtensions = ["csv"];

const UploadAFile = () => 
{

	// This state will store the parsed data
	const [data, setData] = useState([]);

	// It state will contain the error when
	// correct file extension is not used
	const [error, setError] = useState("");



	// It will store the file uploaded by the user
	const [file, setFile] = useState("");

	// This function will be called when
	// the file input changes
	const handleFileChange = (e) => 
	{

		// Check if user has entered the file
		if (e.target.files.length) 
		{
			const inputFile = e.target.files[0];
			console.log(inputFile);
			// Check the file extensions, if it not
			// included in the allowed extensions
			// we show the error
			const fileExtension = inputFile?.type.split("/")[1];
			if ( !allowedExtensions.includes(fileExtension) ) {
				setError("Please input a csv file");
				return;
			}

			// If input type is correct set the state
			setFile(inputFile);
			console.log(inputFile);
		}
	};
	const handleParse = () => 
	{
	
		// If user clicks the parse button without
		// a file we show a error
		if (!file) 
			return alert("Enter a valid file");

		// Initialize a reader which allows user
		// to read any file or blob.
		const reader = new FileReader();

		// Event listener on reader when the file
		// loads, we parse it and set the data.
		console.log(reader)
		reader.onload = async ({ target }) => {
			const csv = Papa.parse(target.result, {
				header: true,
			});

			//If csv file is null or undefined then parsed data will be undefined else (csv.data) will be stored
			const parsedData = csv?.data;
			const rows = Object.keys(parsedData);
			console.log(rows);

			const columns = Object.values(parsedData);
			console.log(columns);

			const res = rows.reduce((acc, e, i) => {
				return [...acc, [[e], columns[i]]];
			}, []);

			
			console.log("res  "+res);
			console.log(res[20]+"  "+res[21])
			console.log(res[0][1])
			console.log(res[19][1])
			setData(res);
		};
		reader.readAsText(file);
	};


    function sendToDatabase(event)
    {
        event.preventDefault();
        const qnaDetails = {data}
		console.log({data})
		var i=0;
		console.log(qnaDetails.data.length)
		for(i=0;i<qnaDetails.data.length-2;i++)
		{

		const formattedData = {
			userId: 1,
			level: qnaDetails.data[i][1]['Level'],
			question: qnaDetails.data[i][1]['Question'],
			answer: qnaDetails.data[i][1]['Answer'],
			topic: qnaDetails.data[i][1]['Topic'],
		  };
		  

		createQna(formattedData)
		.then((response) => {
		  console.log('Q&A entry created successfully:', response.data);
		})
		.catch((error) => {
		  console.error('Failed to create Q&A entry:', error.response.data);
		});
	}

    }

	return (
		<>		
		<div   style={{height:"580px",backgroundImage:`url("https://www.surveylegend.com/wordpress/wp-content/themes/sage/resources/images/img/modal/upgrade-file-upload.png")`,backgroundRepeat:"no-repeat",backgroundSize:"100%"}}>
<center>
	<br/><br/>
<div style={{ width:"500px",height:"200px"}}>
	<br />	<br />
			<div class="file-field">
				<div class="btn btn-primary btn-sm float-left">
				<input className="primary-btn" onChange={handleFileChange} id="csvInput" name="file" type="File" />
				</div>

				<Button onClick={handleParse} style={{marginLeft:"10px"}} variant="success">Submit</Button> 
			</div>
			
			<div>	<br />	<br />
					<Button onClick={sendToDatabase} variant="info">
						View
					</Button>
			</div>
</div>
 

 </center>

 
		</div>
		</>
	);
};

export default UploadAFile;
