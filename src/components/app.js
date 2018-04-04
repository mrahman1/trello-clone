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
    console.log('in submit task')
    if (event.target.className === "create-task-form"){
      console.log('IN HANDLE SUBMIT TASK', event.target)
      let target = event.target;
      let parent = target.parentElement
      let parentId = parent.getAttribute('data-id');
      console.log('PARENT',parentId)
      }
  }

  createTask(description){
    let newTask = new Task(description)
    this.render()
  }


  render(){
    let listHTML = [];
    this.lists.map((list)=>{
      listHTML.push(list.render())
    })
    this.listContainer.innerHTML = listHTML.join("")
  }

}
