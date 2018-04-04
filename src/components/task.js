
let taskId = 1;

class Task {
  constructor(listId, description){
    this.description = description;
    this.listId = listId;
    this.id = taskId;
    taskId++
  }


}
