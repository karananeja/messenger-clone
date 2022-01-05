import React, { forwardRef } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import '../css/Message.css';

const Message = forwardRef(({ text, username }, ref) => {
  const isUser = username === text.username;

  return (
    <div ref={ref} className={`message ${isUser && 'message--user'}`}>
      <Card className={isUser ? 'message__userCard' : 'message__guestCard'}>
        <CardContent>
          <Typography color='black' variant='h5' component='h2'>
            {!isUser && `${text.username || 'Facebook User'} :`} {text.message}
          </Typography>
        </CardContent>
      </Card>
      <p></p>
    </div>
  );
});

export default Message;
