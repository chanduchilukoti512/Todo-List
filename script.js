document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const themeToggle = document.getElementById('theme-toggle');
  
    // Add task function
    const addTask = () => {
      const taskText = taskInput.value.trim();
      if (taskText === '') return;
  
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
      `;
  
      taskList.appendChild(taskItem);
      taskInput.value = '';
  
      // Delete task functionality
      taskItem.querySelector('.delete-btn').addEventListener('click', () => {
        taskItem.remove();
      });
    };
  
    // Add task on button click
    addTaskBtn.addEventListener('click', addTask);
  
    // Add task on Enter key press
    taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addTask();
    });
  
    // Toggle theme
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
    });
  });
  