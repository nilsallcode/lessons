# Teachers Notes

## Copy and paste into your index.html file to follow along:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>THE DOM</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
</head>
<body class="m-16">
    <h1 class="text-4xl mb-4">Todo List</h1>

    <div id="error-message"></div>

    <form action="javascript:void(0);" id="todo-form" class="mt-4">
        <input type="text" name="task" id="task-input" placeholder="Enter a new task">
        <input type="submit" id="submit-button" value="Add Task" class="ml-2 bg-green-500 p-2 inline-block text-white">
    </form>

    <div class="mt-8">
        <h2 class="text-2xl">Tasks:</h2>
        <ul id="task-list" class="mt-2 p-2 bg-gray-200">
            <p id="no-tasks-text">You have no tasks yet. Add one!</p>
        </ul>
    </div>
</body>
</html>
```