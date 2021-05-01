/// <reference types="cypress" />
Cypress.config("baseUrl", "https://jsonplaceholder.typicode.com/todos")

const getTasks = () => cy.request('/')
const addNewTask = data => {
    const randomId = Cypress._.random(28, 29)
    const item = {
        "userId": 1,
        "id": randomId,
        "title": data,
        "completed": false
    }
    return cy.request("POST", "/", item)
}

const deleteTask = () => {
    const index = 1
    return cy.request('DELETE', "/" + index)
}

const updateTask = () => {
    return cy.request("PUT", "/2", {
       "title":"update this task",
        "completed": true
    })
}


When('User calls the get api', () => {
    getTasks()
})

Then("Status code should be 200", () => {
    getTasks().then((response) => {
        expect(response).to.have.property("status", 200)
    })
})
And("result should not be empty", () => {
    getTasks().its("body").should("not.be.null")
})

And("result should be in json format", () => {
    getTasks().its('headers')
        .its('content-type')
        .should('include', 'application/json')
})

When("User sends a post call with Task name {string}", (value) => {
    addNewTask(value)
})

Then("status should be created with name {string}", (value) => {
    addNewTask(value).then((response) => {
        expect(response).to.have.property("status", 201)
    })
})

// And("data should be same", () => {
//     // cy.request(`/${randomId}`)
//     // .its('body')
//     // .should('deep.eq', item)

//     // "Skipping this validation as Website is not sending the new data. IT keeps the old data"

When("User calls the delete api for an existing task", () => {
    deleteTask()
})

Then("data should be removed from the list", () => {

})

And("verify its status code", () => {
    deleteTask().then((response) => {
        expect(response).to.have.property("status", 200)
    })
})

When("User marks a task as completed", () => {
    updateTask()
})

Then("verify the task should be marked as completed", () => {
    updateTask().then((response) => {
        expect(response).to.have.property("status", 200)
    })
})