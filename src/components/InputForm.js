import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const InputForm = ({ apiKey, setApiData, apiData }) => {
    const [inputData, setInputData] = useState('')
    const navigate = useNavigate()
    const handleApiClick = (e) => {
        e.preventDefault()
        fetch(`https://api.nasa.gov/neo/rest/v1/neo/${inputData}?api_key=${apiKey}`)
            .then((res) => res.json())
            .then((result) => {
                setApiData(result); 
                // navigate('/asteroids')
                console.log('result from inputForm', result);
                return apiData
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    console.log('apidata',apiData);
    return (
        <div><br /><br />
            <input placeholder='Enter Asteroid ID' onClick={(e) => setInputData(e.target.value)} /><br /><br />
            <button onClick={(e) => handleApiClick(e)}>Submit</button>
        </div>
    )
}

export default InputForm