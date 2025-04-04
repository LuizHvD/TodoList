function App() {
  return (
      <>
          <header> 
              <h1>
                <img src="./src/assets/menu.png" alt="ListaTitulo" className="IconTitulo" /> 
                ToDo
              </h1>
          </header>

      
          <div className="task-container">
              <input className="AddTask" type="text" placeholder="Adicione nova tarefa" />
              <button className="AddTaskButton">Adicionar</button>
          </div>
      </>
  );
}

export default App;
