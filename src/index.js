require("./style.css");
import { add, format } from "date-fns";
let alltodo = [];
let allproj = [];
let currenttab = "inbox";

document.addEventListener("DOMContentLoaded", function () {
  loadTodos();
  switchtab(currenttab);
});

function switchtab(tab) {
  currenttab = tab;
  switch (tab) {
    case "inbox":
      inbox.click();
      break;
    case "today":
      today.click();
      break;
    case "week":
      week.click();
      break;
    case "proj":
      projtab.click();
      break;
  }
}
function reload() {
  saveTodos();
  loadTodos();
}

function formatdate(date) {
  return format(date, "yyyy-MM-dd");
}

class todoitem {
  constructor(
    title,
    description,
    dueDate,
    priority,
    projects,
    progress = "todo",
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.projects = projects;
    this.progress = progress;
    this.id = Math.random().toString(36).substr(2, 9);
  }
  remove() {
    alltodo = alltodo.filter((todo) => todo.title !== this.title);
    saveTodos();
  }
  updateprogress(progress) {
    this.progress = progress;
    saveTodos();
  }
  updateall(title, description, dueDate, priority, projects) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.projects = projects;
    saveTodos();
  }
}
class projects {
  constructor(title) {
    this.title = title;
    // this.todos = []
  }
  remove() {
    allproj = allproj.filter((proj) => proj.title !== this.title);
    saveTodos();
  }
  update(title) {
    const index = allproj.findIndex((proj) => proj.title === this.title);
    if (index !== -1) {
      allproj[index].title = title;
      this.title = title;
      saveTodos();
    }
  }
}

// # tab for projects
const frontend = new projects("frontend");
const leetcode = new projects("leetcode");
const sysdesign = new projects("sysdesign");
allproj.push(frontend);
allproj.push(leetcode);
allproj.push(sysdesign);

const eat = new todoitem("eat", "lunch", "2024-02-17", "high", "daily");
const odin = new todoitem("web", "odin", "2024-02-18", "high", "daily");
const gym = new todoitem(
  "workout",
  "fit",
  "2024-02-16",
  "medium",
  "daily",
  "done",
);
const gfym = new todoitem(
  "workout",
  "fit",
  "2024-02-16",
  "medium",
  "daily",
  "done",
);

alltodo.push(eat);
alltodo.push(odin);
alltodo.push(gym);
alltodo.push(gfym);

const projtab = document.getElementById("projBtn");

projtab.addEventListener("click", function () {
  currenttab = "proj";
  
  reload();
  displayAllProjs();
});

function displayAllProjs() {
  loadTodos();
  const projectList = document.getElementById("cchecklist");
  projectList.innerHTML = "";
  // Append CRUD buttons to each project
  allproj.forEach((element) => {
    let proj_item = document.createElement("li");
    proj_item.innerHTML = element.title;
    projectList.appendChild(proj_item);
    let add_task = document.createElement("button");
    let edit_proj = document.createElement("button");
    let delete_proj = document.createElement("button");
    add_task.textContent = "Add Task for this project";
    edit_proj.textContent = "Edit Project";
    delete_proj.textContent = "Delete Project";
    proj_item.appendChild(add_task);
    proj_item.appendChild(edit_proj);
    proj_item.appendChild(delete_proj);
    const editProj = document.getElementById("editProj");
    // Edit proj
    // It includes a dialog form for editing, a litte longer logic 
    edit_proj.onclick = function () {
      loadTodos();
      let projtitle = document.getElementById("editProjTitle");
      projtitle.value = element.title;
      editProj.showModal();
    };
    const closeEditProj = document.getElementById("closeEditProj");
    closeEditProj.addEventListener("click", function () {
      editProj.close();
    });
    const submitProj = document.getElementById("submitProj");
    submitProj.onclick = function () {
      let projtitle = document.getElementById("editProjTitle").value;
      // 查找要更新的项目实例
      let projectToUpdate = allproj.find(
        proj => proj.title === element.title,
      );
      if (projectToUpdate) {
        // 更新项目实例的标题
        projectToUpdate.update(projtitle);
        saveTodos();

      }
    };

    delete_proj.onclick = function () {
      element.remove();
      proj_item.remove();
      saveTodos();
    };

    add_task.onclick = function () {
      loadTodos();
      let projSelect = document.getElementById("projSelect");
      projSelect.innerHTML = "";
      allproj.forEach((element) => {
        let proj_item = document.createElement("option");
        proj_item.innerHTML = element.title;
        projSelect.appendChild(proj_item);
      });

      let myDialog = document.getElementById("myDialog");
      projSelect.value = element.title;
      myDialog.showModal();
    };
  });
}





const inbox = document.getElementById("inbox");
const today = document.getElementById("today");
const week = document.getElementById("week");

function displaytodo(title, progress, listItem, description, dueDate, element) {
  listItem.innerHTML = `<span>${title}</span>: <span>${description}</span> - <span>${dueDate}</span>`;

  // 创建编辑按钮
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  let taskedit = document.getElementById("taskedit");

  const closeEdit = document.getElementById("closeEdit");
  closeEdit.addEventListener("click", function () {
    taskedit.close();
  });
  let oldtitle = "";
  editButton.onclick = function () {
    loadTodos();
    let projSelect = document.getElementById("editProjSelect");
    projSelect.innerHTML = "";
    alltodo.forEach((element) => {
      let proj_item = document.createElement("option");
      proj_item.innerHTML = element.title;
      projSelect.appendChild(proj_item);
    });
    title = document.getElementById("editTitle");
    let description = document.getElementById("editDescription");
    let dueDate = document.getElementById("editDueDate");
    let priority = document.getElementById("editPriority");
    oldtitle = element.title;

    description.value = element.description;
    dueDate.value = element.dueDate;
    priority.value = element.priority;
    title.value = element.title;
    projSelect.value = element.projects;
    // TODO
    taskedit.showModal();
  };
  loadTodos();
  editTask = document.getElementById("editTask");
  editTask.addEventListener("click", function () {
    let update_title = document.getElementById("editTitle").value;
    let description = document.getElementById("editDescription").value;
    let dueDate = document.getElementById("editDueDate").value;
    let priority = document.getElementById("editPriority").value;
    let projSelect = document.getElementById("editProjSelect").value;
    let task = alltodo.filter((todo) => todo.title === oldtitle);

    task[0].updateall(update_title, description, dueDate, priority, projSelect);
    saveTodos();
    switchtab(currenttab);
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function () {
    element.remove();
    listItem.remove();
    saveTodos();
  };

  const completedCheckbox = document.createElement("input");
  completedCheckbox.type = "checkbox";
  completedCheckbox.dataset.title = title;

  completedCheckbox.checked = progress === "done";
  listItem.style.textDecoration = progress === "done" ? "line-through" : "none";
  if (progress === "done") {
    listItem.classList.add("completed");
    listItem.classList.remove("todo");
  } else {
    listItem.classList.add("todo");
    listItem.classList.remove("completed");
  }
  // 完成复选框的 onchange 事件处理器
  completedCheckbox.onchange = function () {
    // 使用 data-title 属性找到正确的 todoitem
    const todoItem = alltodo.find((todo) => todo.title === title);
    if (todoItem) {
      const newProgress = this.checked ? "done" : "todo";
      todoItem.updateprogress(newProgress); // 更新进度
      listItem.style.textDecoration = this.checked ? "line-through" : "none";
      saveTodos(); // 保存到 localStorage
    }
  };

  // 将编辑按钮、删除按钮和复选框添加到列表项
  listItem.appendChild(completedCheckbox);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
}


inbox.addEventListener("click", function () {
  currenttab = "inbox";
  reload();
  let checklist = document.getElementById("cchecklist");
  checklist.innerHTML = "";
  alltodo.forEach((element) => {
    addlistitem(checklist, element);
  });
});

today.addEventListener("click", function () {
  currenttab = "today";
  reload();
  let checklist = document.getElementById("cchecklist");
  checklist.innerHTML = "";
  let today = new Date();
  let formatToday = formatdate(today);

  alltodo.forEach((element) => {
    if (element.dueDate == formatToday) {
      addlistitem(checklist, element);
    }
  });
});

week.addEventListener("click", function () {
  currenttab = "week";
  reload();

  let checklist = document.getElementById("cchecklist");
  checklist.innerHTML = "";
  let today = new Date();
  let formatToday = formatdate(today);
  let weeklater = add(today, { days: 7 });
  let formatWeeklater = formatdate(weeklater);
  alltodo.forEach((element) => {
    let task_dueDate = element.dueDate;
    if (task_dueDate >= formatToday && task_dueDate <= formatWeeklater) {
      addlistitem(checklist, element);
    }
  });
});



function addlistitem(listgroup, element) {
  let title = element.title;
  let progress = element.progress;
  let description = element.description;
  let dueDate = element.dueDate;
  let listItem = document.createElement("li");
  listItem.id = title;
  displaytodo(title, progress, listItem, description, dueDate, element);
  listgroup.appendChild(listItem);
}

// 获取按钮和对话框元素
const openaddtask = document.getElementById("openDialog");
const dialog = document.getElementById("myDialog");
const closeButton = document.getElementById("closeDialog");


openaddtask.addEventListener("click", function () {
  loadTodos();
  allproj.forEach((element) => {
    let proj_item = document.createElement("option");
    proj_item.innerHTML = element.title;
    let proj_select = document.getElementById("projSelect");
    proj_select.appendChild(proj_item);
  });
  dialog.showModal();
});

closeButton.addEventListener("click", function () {
  dialog.close();
});


const addProj = document.getElementById("openprojDialog");
const projdialog = document.getElementById("projDialog");
const closeprojButton = document.getElementById("closeProj");
addProj.addEventListener("click", function () {
  projdialog.showModal();
});
closeprojButton.addEventListener("click", function () {
  projdialog.close();
});

AddProj.addEventListener("click", function () {
  let projtitle = document.getElementById("projTitle");
  addproject(projtitle.value);
  displayAllProjs();
});


function addproject(title) {
  const proj = new projects(title);
  allproj.push(proj);
  saveTodos();
}

AddTask = document.getElementById("AddTask");
AddTask.addEventListener("click", function () {
  let title = document.getElementById("title");

  let description = document.getElementById("description");
  let dueDate = document.getElementById("dueDate");
  let priority = document.getElementById("priority");
  let projSelect = document.getElementById("projSelect");
  addTask(
    title.value,
    description.value,
    dueDate.value,
    priority.value,
    projSelect.value,
  );
});

function addTask(title, description, dueDate, priority, projects) {
  const item = new todoitem(title, description, dueDate, priority, projects);
  alltodo.push(item);
  saveTodos();
  switchtab(currenttab);
}


function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(alltodo));
  localStorage.setItem("projects", JSON.stringify(allproj));
  localStorage.setItem("currenttab", currenttab);
}

function loadTodos() {
  const savedTodos = localStorage.getItem("todos");
  const savedProjects = localStorage.getItem("projects");
  const savedCurrenttab = localStorage.getItem("currenttab");
  if (savedCurrenttab) {
    currenttab = savedCurrenttab;
  }
  if (savedTodos) {
    alltodo = JSON.parse(savedTodos).map((todoObj) => {
      return new todoitem(
        todoObj.title,
        todoObj.description,
        todoObj.dueDate,
        todoObj.priority,
        todoObj.projects,
        todoObj.progress,
        todoObj.id,
      );
    });
  }
  if (savedProjects) {
    allproj = JSON.parse(savedProjects).map((projObj) => {
      return new projects(projObj.title);
    });
  }
}
