import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CLIENT_ID = 'qnRTqVEChyXDvG0JZBz43w';
const CLIENT_SECRET = 'wcKPio-onu0abQog4UzkQtJx9mRl9Q';
const REDDIT_USERNAME = 'Available_Maybe_3670';
const REDDIT_PASSWORD = 'Survey1to10wing';

const authenticate = async () => {
  try {
    const response = await axios.post('https://www.reddit.com/api/v1/access_token', null, {
      auth: {
        username: CLIENT_ID,
        password: CLIENT_SECRET
      },
      params: {
        grant_type: 'password',
        username: REDDIT_USERNAME,
        password: REDDIT_PASSWORD
      }
    });

    const token = response.data.access_token;
    return token;
  } catch (error) {
    console.error('Failed to authenticate:', error.response.data.error_description);
    return null;
  }
};

const fetchTopPosts = async (subreddit, token) => {
  try {
    const response = await axios.get(`https://oauth.reddit.com/r/${subreddit}/top`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
        //console.log(response.data);
    return response.data.data.children;
  } catch (error) {
    console.error('Failed to fetch top posts:', error.response.data.error);
    return null;
  }
};

const Reddit = ({ subreddit }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [prev, setprev] = useState(0);
  const [next, setnext] = useState(5)
  useEffect(() => {
    if(loading){
    const getPosts = async () => {
      const token = await authenticate();
      if (token) {
        const topPosts = await fetchTopPosts(subreddit, token);
        if (topPosts) {
          setPosts(topPosts);
          setLoading(false);
        } else {
          setError('Failed to fetch top posts.');
          setLoading(false);
        }
      } else {
        setError('Failed to authenticate.');
        setLoading(false);
      }
    };

    getPosts();
  }
  }, [subreddit]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='w-screen md:w-96 h-fit bg-gray-900 text-white border-2 border-black rounded-md'>
      <h2 className='font-bold text-2xl p-3'>Top Posts from r/{subreddit}</h2>
      <ul className='bg-gray-800'>
        {posts.filter((post,index)=>index>=prev && index<next).map((post,index) => (
          <li key={post.data.id}className='flex flex-row hover:bg-slate-700'><pre>{index+1}. </pre>
            <a href={`https://www.reddit.com${post.data.permalink}`} target="_blank" rel="noopener noreferrer" >
              {post.data.title}
            </a>
          </li>
        ))}
      </ul>
      <div className='flex flex-row w-full h-fit justify-between'>
      <button className=' bg-gray-400 p-3 w-2/5 rounded-xl hover:bg-slate-600'onClick={()=>{if(prev!==0){setprev(index => index-5); setnext(index=>index-5)}}}>Prev</button>
      <button className=' bg-gray-400 p-3 w-2/5 rounded-xl hover:bg-slate-600' onClick={()=>{if(next!==25){setnext(index => index+5); setprev(index=>index+5)}}}>Next</button>
      </div>
    </div>
  );
};

export default Reddit;
