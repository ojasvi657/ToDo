document.getElementById('add-task-button').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const taskList = document.getElementById('task-list');

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskValue;

        // Add completed functionality
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = 'Delete';

        // Add delete functionality
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        // Append the delete button to the list item
        li.appendChild(deleteButton);

        // Append the list item to the list
        taskList.appendChild(li);

        // Clear the input
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
});

// Optional: Allow pressing Enter to add a task
document.getElementById('task-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('add-task-button').click();
    }
});