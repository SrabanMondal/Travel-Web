import React,{useEffect,useState} from 'react'
import axios from 'axios';
const Quote = () => {
    const [quote, setquote] = useState(null);
    const [Author, setAuthor] = useState(null);
    useEffect(() => {
        const fetchQuote = async () => {
            try {
              const response = await axios.get('https://api.quotable.io/random');
              setquote(response.data.content);
              setAuthor(response.data.author);
            } catch (error) {
              console.error('Error fetching the quote', error);
            }
          };
    fetchQuote();
    }, [])
    
  return (
    <div className=' bg-transparent mx-1'><b>Quote-</b>{quote} <br/>--By <b>{Author}</b></div>
  )
}

export default Quote