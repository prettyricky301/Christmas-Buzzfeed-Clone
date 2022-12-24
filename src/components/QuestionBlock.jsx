



const QiestionBlock = ({question, quizItemId, setChosenAnwserItems, chosenAnswerItems, setUnansweredQuestionId, unansweredQuestionId}) => {

const validPick = !chosenAnswerItems?.includes(question.text) && !unansweredQuestionId?.includes(quizItemId)

const handleClick = () => {
    setChosenAnwserItems((prevState) => [...prevState, question.text])
    setUnansweredQuestionId( unansweredQuestionId.filter((id)=> id != quizItemId))


}

    return(
        <button
            className="question-block"
            onClick={handleClick}
            disabled={validPick}
        >
            <img src={question.image}/>
            <h3>{question.text}</h3>
            <p>
                <a href={question.url}>{ question.credit}</a>
                <a href="https://wwww.unsplash.com">unsplash</a>
            </p>

        </button>
    )
}

export default QiestionBlock