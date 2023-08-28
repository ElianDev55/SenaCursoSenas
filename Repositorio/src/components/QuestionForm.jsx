import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Paper,
  Typography,
} from '@mui/material';

const QuestionForm = ({ onSubmit }) => {
  const [question, setQuestion] = useState('');

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(question);
    setQuestion('');
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h6">Haz una pregunta:</Typography>
        <TextField
          label="Pregunta"
          fullWidth
          multiline
          rows={4}
          value={question}
          onChange={handleQuestionChange}
          variant="outlined"
          style={{ marginBottom: '10px' }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Publicar
        </Button>
      </Paper>
    </Container>
  );
};

export default QuestionForm;
