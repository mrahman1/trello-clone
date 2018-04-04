class App {
  constructor(){
    this.lists = [];
    this.initializeEventListeners()
  }

  initializeEventListeners(){
    //manage lists
    this.createListForm = document.getElementById('create-list-form')
    this.newListTitle = document.getElementById('new-list-title')
    this.listContainer = document.getElementsByClassName('list-container')[0]

    //manage event Listeners
    this.createListForm.addEventListener("submit", this.handleSubmitList.bind(this))
    this.listContainer.addEventListener("submit", this.handleSubmitTask.bind(this))

  }

  handleSubmitList(event){
    event.preventDefault();
    console.log('in handle submit list')
    if (event.target.id === "create-list-form"){
      let title = this.newListTitle.value
      this.createList(title)
    }
  }

  createList(title){
    let newList = new List(title)
    this.lists.push(newList)
    this.render()
  }

  handleSubmitTask(event){
    event.preventDefault();
    let target = event.target;
    let taskDescription = target.childNodes[1].value
    let parentId = parseInt(target.parentElement.getAttribute('data-id'));
    let parent = document.getElementById(parentId)

    if (event.target.className === "create-task-form"){
      console.log("DESCRIPTION", taskDescription)
      const newTask = this.createTask(taskDescription)
      console.log('new Task: ', newTask)
      const parentList = this.lists.find(list => list.id == parentId)
      console.log(newTask)
      parentList.tasks.push(newTask) //.push() that onto the correct list
      this.render()
      }
  }

  createTask(description){
    return new Task(description)
  }


  render(){
    let listHTML = [];
    this.lists.map((list)=>{
      listHTML.push(list.render())
    })
    this.listContainer.innerHTML = listHTML.join("")
  }

}
