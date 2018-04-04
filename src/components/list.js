let listId = 1;

class List{
  constructor(title){
    this.title = title;
    this.id = listId;
    this.tasks = [];
    listId++
  }

  render(){
    // let div = document.createElement('DIV')
    // div.className = "list-card"
    // let title = `<p> List Title: ${this.title} </p>`
    // div.innerHTML = title
    // let newTaskForm =

    return(`
        <div class = "list-card"  data-id="${this.id}"/>
          <h1> BEHOLD: LIST CARD </h1>
          <p> List Title: ${this.title} </p>

          <form class="create-task-form">
            <input type="text" placeholder="Add a Task"/>
            <input type="submit" placeholder="Add"/>
          </form>
        </div>
      `)
  }
}
