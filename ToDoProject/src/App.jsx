function App(){
    return (
    <>
      <header>
          <h1>ToDo</h1>
      </header>
        
      <div>
         <input className="AddTask" type="text" placeholder="Adicione nova tarefa" />
         <button className="AddTaskButton">
             Adicionar tarefa +
         </button>

      </div>
      
    </>
  );

}

export default App;