import { useState } from "react";
import { useHistory } from "react-router-dom";
import './login.css';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (
    <div id="wrap" className="input">
    <section className="input-content">
        <h2 className="login-head">New Note</h2>
        <div className="input-content-wrap">
        <div className="inputbox">
            <dd className="inputbox-content">
            <input 
                id="input0" 
                value={title} 
                type="text" 
                required
                onChange={(e) => setTitle(e.target.value)}    
            />
            <label for="input0">Title</label>
            <span className="underline"></span>
            </dd>
        </div>
        <div className="inputbox">
            <dd className="inputbox-content">
            <textarea 
                id="input1" 
                value={body} 
                type="password" 
                required
                onChange={(e) => setBody(e.target.value)}    
            />
            <label for="input1">Note</label>
            <span className="underline"></span>
            </dd>
        </div>
        <div className="btns">
            <button className="btn btn-confirm" onClick={handleSubmit}>Add Note</button>
        </div>
        </div>
    </section>
</div>
  );
}
 
export default Create;