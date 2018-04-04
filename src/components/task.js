let taskId = 1;

class Task {
  constructor(listId, description){
    this.description = description;
    this.listId = listId;
    this.id = taskId;
    taskId++
  }

  render(){
    return(
      `<li data-id="${this.id}"> Task: ${this.description} </li>`
    )
  }

}
