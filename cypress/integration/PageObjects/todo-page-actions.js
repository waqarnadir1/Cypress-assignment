class ToDoPage {

  editItemLocator = ".view"
  editableInputLocator = ".editing"
  deleteIconLocator = ".destroy"
  toDoListItemLocator = ".todo-list li"
  toDoListLocator = ".todo-list"
  clearCompletedTaskLocator = "Clear"
  allTabLocator = "All"
  activeTabLocator = "Active"
  toggleAllLocator = "[for='toggle-all']"
  completedTabLocator = "Completed"
  toggleBtnLocator = ".toggle"
  toDoCountLocator = ".todo-count"
  countValueLocator = "strong"
  completedTaskLocator = ".todo-list .completed"
  newToDoLocator = ".new-todo"


  openURL() {
    cy.visit("/");
  }

  addTask(value) {
    if (!value)
      value = "Add new Task"
    cy.get(this.newToDoLocator).type(value + "{enter}");
  }

  addTaskIfEmpty(value) {
    if (this.checkListIsEmpty())
      this.addTask(value)
  }

  getCompletedTasks() {
    return cy.get(this.completedTaskLocator)
  }

  checkCompletedTaskListExist() {
    if (Cypress.$(this.completedTaskLocator).length > 0) {
      return true
    }
    return false
  }

  getTaskCount() {
    return cy.get(this.toDoCountLocator).get(this.countValueLocator)
  }

  uncheckCompletedTask() {
    this.getTodoList().get(this.toggleBtnLocator).first().should("to.be.checked")
    this.pressFirstToggle()
  }

  pressFirstToggle() {
    this.getTodoList().get(this.toggleBtnLocator).first().click()
  }

  showCompletedTasks() {
    cy.contains(this.completedTabLocator).click();
  }

  clickToggleAll() {
    cy.get(this.toggleAllLocator).click();
  }

  showActiveTasks() {
    cy.contains(this.activeTabLocator).click();
  }

  showAllTasks() {
    cy.contains(this.allTabLocator).click();
  }

  clearCompletedTasks() {
    cy.contains(this.clearCompletedTaskLocator).click();
  }

  getTodoList() {
    return cy.get(this.toDoListLocator);
  }

  checkListIsEmpty() {
    if (Cypress.$(this.toDoListLocator).length > 0) {
      return false
    }
    return true
  }

  getTodoListItems() {
    return cy.get(this.toDoListItemLocator)
  }

  getToggleBtn() {
    return cy.get(this.toggleBtnLocator);
  }

  resetToDOList() {
    if (!checkListIsEmpty())
      this.clearCompletedTasks();
  }

  clickDeleteIcon() {
    let deleteIcon = cy.get(this.deleteIconLocator).first()
    deleteIcon.invoke('show')
    deleteIcon.should("be.visible").click()
  }

  editItem(value) {
    cy.get(this.editItemLocator).dblclick()
    cy.get(this.editableInputLocator).clear().type(value + "{enter}")
  }
}

export default ToDoPage