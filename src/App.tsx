import React, { useState, useEffect } from 'react';
//css
import './App.css'
import styles from './App.module.css';

//interfaces
import ITask from "./interfaces/Task"

//components
import Header from './components/Header'
import Footer from './components/Footer'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  
  const [taskList, setTaskList] = useState<ITask[]>([]);
  return (
    <div>
      <Header/>
      <main className={styles.main}>
        <div>
          <h2>O que vc vai fazer?</h2>
          <TaskForm btnText="Criar Tarefa" 
                    taskList={taskList}
                    setTaskList={setTaskList}/>
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList}/>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default App
