/* eslint-disable no-undef */
import React from 'react'
import {
  Link,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

const Create = () => {

  const navigate = useNavigate();

  const onaddquestion = () => {
    let questions = []
    questions.push(rep1.value)
    questions.push(rep2.value)
    questions.push(rep3.value)
    questions.push(rep4.value)

    console.log(addquestion(1, question.value, questions));
  }
  return (
    <div className=''>

      <div className='center'>
        <h2>Cree votre Qcm</h2>
      </div>


      <div className='MainCreate'>

        <div className='CreateQuestion flex'>

          <input type="text" name='Question' id='question' />
          <button className='Btn' onClick={onaddquestion}>Add Question</button>

        </div>

        <div className='CreateAnswer flex'>
          <label htmlFor="Answer">Inscrivez vos reponses ici</label>
          <input type="text" name=" Answer" ></input>
          <input type="text" id='rep1'></input>
          <input type="text" id='rep2'></input>
          <input type="text" id='rep3'></input>
          <input type="text" id='rep4'></input>

        </div>

      </div>

      <div className='center margint'>
        <button className='Btn exite' onClick={() => navigate(-1)}>Go back / Exite</button>
      </div>


    </div>
  )
}

export default Create