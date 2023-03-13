
import './App.css';
import {useState,Children} from "react";
import Result from './Result'

const Questions =[
  {
    "id":1,
    "img":"https://www.tarihiolaylar.com/img/test/test_camerun-png_820471631_1431110463.jpg",
    "options":["Kolumbiya","Kamerun","Nigerya","Surinam"],
    "correctAnswer":1
  },
  {
    "id":2,
    "img":"https://www.tarihiolaylar.com/img/test/test_arnavutluk-bayragi-jpg_4281970_1431104824.jpg",
    "options":["Albaniya","Baham adaları"," Tayland","Qətər"],
    "correctAnswer":0
  },
  {
    "id":3,
    "img":"https://www.tarihiolaylar.com/img/test/test_belarus-gif_220406485_1431110739.jpg",
    "options":["Finlandiya","İslandiya","Belarus","İsveç"],
    "correctAnswer":2
  },
  {
    "id":4,
    "img":"https://www.tarihiolaylar.com/img/test/test_san-marino-jpg_543075527_1431105114.jpg",
    "options":["İtaliya","San Marino","Andorra","Honduras"],
    "correctAnswer":1
  },
  {
    "id":5,
    "img":"https://www.tarihiolaylar.com/img/test/test_bahamalar_buyuk-jpg_455481539_1431105177.jpg",
    "options":["Yaponiya","Meksika","Tayland","Baham adaları"],
    "correctAnswer":3
  },
  {
    "id":6,
    "img":"https://www.tarihiolaylar.com/img/test/test_azerbaycan-bayragi-jpg_67279786_1431105372.jpg",
    "options":["Türkmənistan","Azərbaycan","Senegal","Nigeriya"],
    "correctAnswer":1
  },
  {
    "id":7,
    "img":"https://www.tarihiolaylar.com/img/test/test_malezya-jpg_556047916_1431106482.jpg",
    "options":["Malayziya","Makedonyia","Gana","Avstraliya"],
    "correctAnswer":0
  },
  {
    "id":8,
    "img":"https://www.tarihiolaylar.com/img/test/test_bosna-bayragi-jpg_789824376_1431105543.jpg",
    "options":["Bosniya və Hersoqovina","Serbiya","Bolqarıstan","Avstriya"],
    "correctAnswer":0
  },
  {
    "id":9,
    "img":"https://www.tarihiolaylar.com/img/test/test_macaristan-jpg_739007577_1431105706.jpg",
    "options":["İtalya","Bolqarıstan","Macaristan","Seneqal"],
    "correctAnswer":2
  },
  {
    "id":10,
    "img":"https://www.tarihiolaylar.com/img/test/test_liberya-png_302284059_1431110857.jpg",
    "options":["ABŞ","Abxaziya","Kosova","Liberiya"],
    "correctAnswer":3
  },

]

function App() {
  const [newQuestions,setNewQuestions]=useState(Questions);
  const[numberOfQuest,setNumberOfQuest] = useState(0);
  const[page,SetPage]= useState(1);
  const [corrects,setCorrects] = useState(0);
  const [checkVariant,setcheckVariant] = useState([{
    QuestNo:1,
    AnswerNo:5
  },{
    QuestNo:2,
    AnswerNo:5
  },{
    QuestNo:3,
    AnswerNo:5
  },{
    QuestNo:4,
    AnswerNo:5
  },{
    QuestNo:5,
    AnswerNo:5
  },{
    QuestNo:6,
    AnswerNo:5
  },{
    QuestNo:7,
    AnswerNo:5
  },{
    QuestNo:8,
    AnswerNo:5
  },{
    QuestNo:9,
    AnswerNo:5
  },{
    QuestNo:10,
    AnswerNo:5
  }]);



  const nextQuestionHandle = ()=>{
    console.log(newQuestions[numberOfQuest].correctAnswer,checkVariant[numberOfQuest].AnswerNo,checkVariant)
    if (numberOfQuest+1 < newQuestions.length){
      setNumberOfQuest(()=>numberOfQuest+1)
    }else {
      setNumberOfQuest(newQuestions.length-1)
    }
  }
  // -----------------------------------------------------------------
  // console.log(newQuestions.length)
  const prevQuestionHandle = ()=>{
    if (numberOfQuest>0){
    setNumberOfQuest(()=>numberOfQuest-1)
    }else{
      setNumberOfQuest(0)
    }
  }
// ------------------------------------------------------------------------
  const HandleChoseVariant = (i)=>{
    // console.log(numberOfQuest)
    const step = numberOfQuest+1;
    const choseVariant = checkVariant.map(item=>{
      if(item.QuestNo===step){
        // console.log("star",i)
        return {...item, AnswerNo: i}
      }else{
        return item;
      }
    })
      setcheckVariant(choseVariant);
  }

  const HandleResult = ()=>{

    let a = 0
      for (let i = 0; i < newQuestions.length; i++) {

        if(newQuestions[i].correctAnswer===checkVariant[i].AnswerNo){
              a++
            }
      }
    setCorrects(a)
    SetPage(2);
  }

  return (
      <>

        {

              page === 1 ?
            <div className="main-div">
              <div>
                <div className="img">
                <img src={newQuestions[numberOfQuest].img} alt=""/>
                </div>
                {
                  newQuestions[numberOfQuest].options.map((option,i)=>{
                    return <div onClick={()=>HandleChoseVariant(i)} key={i} className={`option ${ i===checkVariant[numberOfQuest].AnswerNo ? "chosenVariant" : ""}`}>{option}</div>
                  })}
              </div>
              <div className="buttons">
                <button disabled={numberOfQuest===0 ? "disabled" : ""} onClick={prevQuestionHandle} className="buttons prev">Geri</button>
                <button onClick={()=> numberOfQuest === 9 ? HandleResult() : nextQuestionHandle()} className="buttons next">{numberOfQuest===9 ? "Nəticəni göstər" : "Irəli"}</button>
              </div>
            </div> :
          <Result corrects={corrects} newQuestions={newQuestions} checkVariant={checkVariant} />
      }
      </>

  );
}

export default App;
