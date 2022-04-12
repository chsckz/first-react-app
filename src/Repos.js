import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Repos = () => {
  const [repos, setRepos] = useState([])
  useEffect(async() => {
    // Update the document title using the browser API
    const {data} = await axios.get('https://api.github.com/users/chsckz/repos');
    console.log(data);
    setRepos(data);
  }, []);
  return (
    <div>
      <h1>Repos</h1>
      {repos.map(r => <p><a href={r.html_url}>{r.name}</a></p>)}
    </div>
  )
}

export default Repos