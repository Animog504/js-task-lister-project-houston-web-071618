const lists = []

document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");
  const createdEListener = document.getElementById("create-list-form");
  const newListTitleField = document.getElementById("new-list-title");

 

  createdEListener.addEventListener("submit", e => {e.preventDefault();
    const listTitle = newListTitleField.value;
    lists.push({title:listTitle})
    render(lists);
   
  });
  
  const app = new TaskLister();

function render(){
  let allListsHTML = '';
  lists.forEach( list => {
    allListsHTML += renderList(list)
  })
  document.getElementById('app-content').innerHTML = `
    <div id="lists">
      ${allListsHTML}
    </div>
  `
  document.querySelectorAll('.delete-list').forEach( element => {
    element.addEventListener('click', event => {
      let listName = event.target.getAttribute('data-list')
    })
  })
}

function renderList(list){
  return `
  <div> 
    <h2>${list.title}</h2>
    <button data-list="${list.title}" class="delete-list">
      X
    </button>
  </div>`
}

// Function Create list

function createlist(title){
  // create new form
  const newContainer = document.createElement("div")
  //newContainer.addEventListener("submit", (e) => {e.preventDefault()})
// add content to form
  newContainer.innerHTML += `
    <div> 
     <h2>${title}
     </h2>
     <button data-title="${this.title}" class="delete-list">
     X
   </button>
    </div>`;
// add new div to listDiv
listDiv.appendChild(newContainer)

}
});
