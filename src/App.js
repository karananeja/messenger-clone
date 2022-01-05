import React, { useEffect, useState } from 'react';
import { FormControl, IconButton, Input } from '@mui/material';
import { Send } from '@mui/icons-material';
import FlipMove from 'react-flip-move';
import firebase from 'firebase';
import Message from './components/Message';
import db from './firebase';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(prompt('Please enter your name'));

    db.collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (input) {
      db.collection('messages').add({
        username: username,
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    setInput('');
  };

  return (
    <div className='app'>
      <img
        src='https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w-100&h=100'
        alt=''
      />
      <form className='app__form'>
        <FormControl className='app__formControl'>
          <Input
            className='app__input'
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Enter a Message ...'
          />
          <IconButton
            onClick={sendMessage}
            type='submit'
            variant='contained'
            color='primary'
            disabled={!input}
          >
            <Send />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, data }) => (
          <Message key={id} text={data} username={username} />
        ))}
      </FlipMove>
    </div>
  );
};

export default App;
