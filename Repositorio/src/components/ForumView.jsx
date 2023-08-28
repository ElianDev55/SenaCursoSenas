import React, { useState } from 'react';
import QuestionForm from './QuestionForm';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@mui/material';

const ForumView = () => {
  const [questions, setQuestions] = useState([]);
  const [isCommenting, setIsCommenting] = useState(false);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

  const handleQuestionSubmit = (question) => {
    setQuestions([...questions, { text: question, comments: [] }]);
  };

  const handleCommentSubmit = (comment) => {
    if (selectedQuestionIndex !== null) {
      const updatedQuestions = [...questions];
      updatedQuestions[selectedQuestionIndex].comments.push(comment);
      setQuestions(updatedQuestions);
      setSelectedQuestionIndex(null);
      setIsCommenting(false);
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Foro de Preguntas
      </Typography>
      <QuestionForm
        onSubmit={isCommenting ? handleCommentSubmit : handleQuestionSubmit}
        buttonText={isCommenting ? 'Agregar comentario' : 'Hacer una pregunta'}
      />
      <List>
        {questions.map((question, questionIndex) => (
          <ListItem key={questionIndex}>
            <Card>
              <CardContent>
                <Typography variant="body1">{question.text}</Typography>
                <List>
                  {question.comments.map((comment, commentIndex) => (
                    <ListItem key={commentIndex}>
                      <ListItemText primary={comment} />
                    </ListItem>
                  ))}
                </List>
                {!isCommenting && (
                  <Button
                    onClick={() => {
                      setSelectedQuestionIndex(questionIndex);
                      setIsCommenting(true);
                    }}
                  >
                    Agregar comentario
                  </Button>
                )}
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ForumView;



