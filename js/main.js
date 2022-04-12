/*Вывод кода года в заготовок*/
let date = new Date();
let year = date.getFullYear();

let showYear = document.getElementById('year').textContent = year;
//-----------------------------------------------
//-----------------------------------------------
window.addEventListener('load', () => {
  const form = document.querySelector('#new-task-form');
  const input = document.querySelector('#new-task-input');
  const list_el = document.querySelector('#tasks');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
      alert("Please fill out the task");
      return;
    }

    const task_el = document.createElement('div');
          task_el.classList.add('todo');

    const task_content_el = document.createElement('div');
          task_content_el.classList.add('contents');
    // task_content_el.innerText = task;

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement('input');
          task_input_el.classList.add('text');
          task_input_el.type = 'text';
          task_input_el.value = task;
          task_input_el.setAttribute('readonly', 'readonly');

    task_content_el.appendChild(task_input_el);

    const task_action_el = document.createElement('div');
          task_action_el.classList.add('btn-box');

    const task_edit_el = document.createElement('button');
          task_edit_el.classList.add('btn-todo-list-edit');
          task_edit_el.innerHTML = 'Edit';

    const task_delete_el = document.createElement('button');
          task_delete_el.classList.add('btn-todo-list-del');
          task_delete_el.innerHTML = 'Delete';

    task_action_el.appendChild(task_edit_el);
    task_action_el.appendChild(task_delete_el);

    task_el.appendChild(task_action_el);

    list_el.appendChild(task_el);

    input.value = '';

    task_edit_el.addEventListener('click', () => {
      if (task_edit_el.innerText.toLowerCase() == 'edit') {
        task_input_el.removeAttribute('readonly');
        task_input_el.focus();
        task_edit_el.innerText = 'Save';
      } else {
        task_input_el.setAttribute('readonly', 'readonly');
        task_edit_el.innerText = 'Edit';
      }
    });

    task_delete_el.addEventListener('click', () => {
      list_el.removeChild(task_el);
    })
  });
});








// let addMessage = document.querySelector(".message"),
//     addButton = document.querySelector(".add"),
//     todo = document.querySelector(".box-todolist");
// //-----------------------------------------------
// //-----------------------------------------------
// let todoList = [];
// //-----------------------------------------------
// //-----------------------------------------------
// if (localStorage.getItem("todo")) {
//   todoList = JSON.parse(localStorage.getItem("todo"));
//   displayMassage();
// }
// //-----------------------------------------------
// //-----------------------------------------------
// addButton.addEventListener("click", function () {
//   if (!addMessage.value) return;

//   let newTodo = {
//     todo: addMessage.value,
//     checked: false,
//     important: false,
//     done: false
//   };

//   todoList.push(newTodo);
//   displayMassage();
//   localStorage.setItem("todo", JSON.stringify(todoList));
//   addMessage.value = "";
// });
// //-----------------------------------------------
// //-----------------------------------------------
// function displayMassage() {
//   let displayMassage = "";

//   if (todoList.length === 0) todo.innerHTML = "";

//   todoList.forEach(function (item, i) {
//     displayMassage += `
//       <ul class="todo">
//         <li>
//           <input type="checkbox" class="custom-checkbox" id="item_${i}" ${item.checked ? "checked" : ""}>
//         </li>
//         <li>
//           <label class="label-style ${item.done ? "done" : ""}" for='item_${i}'>${item.todo}</label>
//         </li>
//       </ul>
//       <div class="btn-box">
//         <button class="btn-todo-list-edit" id="btn-edit">Edit</button>
//         <button class="btn-todo-list-del" id="btn-delete">Delete</button>
//       </div>
//     `;
//     todo.innerHTML = displayMassage;
//   });
// }
// //-----------------------------------------------
// //-----------------------------------------------
// todo.addEventListener("change", function (event) {
//   let valueLabel = todo.querySelector("[for=" + event.target.getAttribute("id") + "]").innerHTML;

//   todoList.forEach(function (item) {
//     if (item.todo === valueLabel) {
//       item.checked = !item.checked;
//       localStorage.setItem("todo", JSON.stringify(todoList));
//     }
//   });
// });
// //-----------------------------------------------
// //-----------------------------------------------
// todo.addEventListener("contextmenu", function (event) {
//   event.preventDefault();
//   todoList.forEach(function (item, i) {
//     if (item.todo === event.target.innerHTML) {
//       if (event.ctrlKey || event.metaKey) {
//         todoList.splice(i, 1);
//       } else {
//         item.done = !item.done;
//       }
//       displayMassage();
//       localStorage.setItem("todo", JSON.stringify(todoList));
//     }
//   });
// });
// //-----------------------------------------------
// //-----------------------------------------------
// // let delButton = document.getElementById('btn-delete');

// // delButton.onclick = function (event) {
// //   todoList.forEach(function (item, i) {
// //     if (item.todo === event.target.innerHTML) {
// //       todoList.splice(i, 1);
// //       displayMassage();
// //       localStorage.setItem("todo", JSON.stringify(todoList));
// //     }
// //   });
// // };