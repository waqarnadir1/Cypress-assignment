import { expect } from "chai";
import ToDoPage from "../PageObjects/todo-page-actions/"

const todo = new ToDoPage()
const taskCount = 3

Given('User opens todo task home page', () => {
    todo.openURL()
})


When('User types {string} and press enter', (value) => {
    todo.addTask(value)
});


Then('Task should be added to the list', () => {
    todo.getTodoList().should("not.be.empty")
});


And('{string} should be visible in list', (value) => {
    todo.getTodoList().contains(value).should("be.visible")
})

When( 'User has a Task in list',()=>{
    todo.addTaskIfEmpty()
})

And('double clicks and edits the task {string}', (value) => {
   todo.editItem(value)
})

When('User clicks on active task toggle button to mark it as completed', () => {
    todo.addTaskIfEmpty()
    todo.pressFirstToggle()
});


Then('Task should be marked as complete', () => {
    todo.getCompletedTasks().should("exist")
    // todo.getTodoList().find(".completed").should("exist")
});


When('User presses the the toggle button of a completed task', () => {
    todo.addTaskIfEmpty("Already selected")
    todo.pressFirstToggle()
    todo.uncheckCompletedTask()
});


Then('Task should move to active task', () => {
    todo.getTodoList().first().should("not.be.checked")
    todo.getTodoList().find(".completed").should("not.exist")
});


When('User adds multiple task', (datatable) => {
    datatable.hashes().forEach(element => {
        todo.addTask(element.Task)
    })
});


When('User adds multiple task from fixture', () => {
    cy.fixture("TaskName.json").then((value) => {
        value.forEach(element => {
            todo.addTask(element.Task)
        });
    })
});


Then('correct number of count active tasks should be visible at the bottom', () => {
    todo.getTaskCount().should("have.text", taskCount)
});


Then('Both completed and active task should be visible in All tab', () => {
    todo.getCompletedTasks().should("be.visible")
    todo.getTaskCount().should("have.text", 2)
});


And('clicks clear completed link', () => {
    todo.clearCompletedTasks()
});

When('User clicks down arrow key', () => {
    todo.clickToggleAll()
});

When('User clicks delete icon', () => {
    todo.clickToggleAll()
    todo.clickDeleteIcon()
});


Then('only completed task should be visible in completed tab', () => {
    todo.showCompletedTasks()
    todo.getTodoListItems().should('have.length', 1)
});


Then('only active task should be visible in active tab', () => {
    todo.showActiveTasks()
    todo.getTaskCount().should("have.text", 2)
});


Then('all completed task should be removed', () => {
    expect(todo.checkListIsEmpty(), "All items removed").to.be.true
});


Then('all tasks should be marked as complete', () => {
    todo.getTaskCount().should("have.text", 0)

});


Then('completed task should be removed', () => {
    todo.getTodoListItems().should('have.length', 2)
});
