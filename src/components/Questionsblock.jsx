import QuestionBlock from './QuestionBlock'


const QuestionsBlock = ({quizItem, 
    setChosenAnwserItems, 
    chosenAnswerItems, 
    unansweredQuestionId, 
    setUnansweredQuestionId
}) => {

    
   
    return (
        <>
            <h2 id={quizItem.id} className="question-title">{quizItem.text}</h2>
            <div className="questions-container">
                {quizItem.questions.map((question, _index) =>(
                    <QuestionBlock 
                        key={_index} 
                        quizItemId={quizItem.id}
                        question={question} 
                        setChosenAnwserItems={setChosenAnwserItems}
                        chosenAnswerItems ={chosenAnswerItems}
                        unansweredQuestionId={unansweredQuestionId}
                        setUnansweredQuestionId={setUnansweredQuestionId}
                    />
                ))}
            </div>
        </>
    )
}

export default QuestionsBlock