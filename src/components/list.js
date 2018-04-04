let listId = 1;

class List{
  constructor(title){
    this.title = title;
    this.id = listId;
    this.tasks = [];
    listId++
  }

  render(){

    return(`
        <div class = "list-card"  data-id="${this.id}"/>
          <h3> ${this.title} </h3>

          <ul>
             ${this.renderAllTasks()}
          </ul>

          <form class="create-task-form">
            <input type="text" placeholder="Add a Task"/>
            <input type="submit" placeholder="Add"/>
          </form>
        </div>
      `)
  }

  renderAllTasks() { //returns a large string of HTML
       return this.tasks.map(task => task.render()).join("")
     }
}
