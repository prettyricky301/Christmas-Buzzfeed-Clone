
import{useState, useEffect} from 'react'

import Title from './components/Title'

import QuestionsBlock from './components/Questionsblock'
import AnswerBlock from './components/AnswerBlock'

const App = () => {

  const [quiz, setQuiz] = useState(null)
  const [chosenAnswerItems, setChosenAnwserItems] = useState([])
  const [unansweredQuestionId, setUnansweredQuestionId] = useState([null])
  const [showAnswer, setShowAnswer] = useState(false)

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/quiz')
      const json = await response.json()
      console.log(json)
      setQuiz(json) 
    } catch(err){
        console.log(err)
    }
  }

////will keep running till it needs the data from the app
  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    const unansweredIds = quiz?.content?.map(({id}) => id)
    setUnansweredQuestionId(unansweredIds)
}, [quiz])


  useEffect(() => {
    if(unansweredQuestionId){
      if(unansweredQuestionId.length<=0 && chosenAnswerItems.length>=1){
        setShowAnswer(true)
        const answerBlock = document.getElementById('anwser-block')

        answerBlock?.scrollIntoView({behavior: "smooth"})

      }
      const highestId= Math.min(...unansweredQuestionId)
      const highestElement = document.getElementById(highestId)
      highestElement?.scrollIntoView({ behavior:"smooth"})
    }
  }, [unansweredQuestionId, showAnswer, chosenAnswerItems])


  return (
    <div className="app">

      <Title title={quiz?.title} subtitle={quiz?.subtitle}></Title>
        {quiz && quiz?.content.map((contentItem) => (
          <QuestionsBlock 
            key={contentItem.id}
            //quizItemId={quizItem.id}
            quizItem={contentItem}
            setChosenAnwserItems={setChosenAnwserItems}
            chosenAnswerItems={chosenAnswerItems}
            setUnansweredQuestionId ={setUnansweredQuestionId}
            unansweredQuestionId={unansweredQuestionId}
          />

        ))}
        {showAnswer && (
          <AnswerBlock
            answerOptions={quiz?.answers}
            chosenAnswers={chosenAnswerItems}
          
          />
        )}

    </div>
  );
}

export default App;
