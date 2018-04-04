let taskId = 1;

class Task {
  constructor(description){
    this.description = description;
    this.id = taskId;
    taskId++
  }

  render(){
    return(
      `<li data-id="${this.id}"> Task: ${this.description} </li>`
    )
  }

}
