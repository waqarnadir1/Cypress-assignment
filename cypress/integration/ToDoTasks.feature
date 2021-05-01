Feature: To DO List

  I want to Verify functionality of To DO List

  Background:
    Given User opens todo task home page

  Scenario: Add new task
    When User types "Adding Task 1" and press enter
    Then Task should be added to the list
    And "Adding Task 1" should be visible in list


  Scenario: Add new task having special character
    When User types "Sp3c!@l Charcter verification" and press enter
    Then Task should be added to the list
    And "Sp3c!@l Charcter verification" should be visible in list

  Scenario: Edit Task in To Do List
    When User has a Task in list
    And double clicks and edits the task "Edit this task"
    Then "Edit this task" should be visible in list

Scenario: Mark a task as complete
    When User clicks on active task toggle button to mark it as completed
    Then Task should be marked as complete


  Scenario: Move a completed task to active again
    When User presses the the toggle button of a completed task
    Then Task should move to active task


  Scenario: Verify the count of active tasks
    When User adds multiple task from fixture
    Then correct number of count active tasks should be visible at the bottom


  Scenario: verify only active task are visible in active tab
    When User adds multiple task from fixture
    When User clicks on active task toggle button to mark it as completed
    Then only active task should be visible in active tab


  Scenario: verify only completed task are visible in completed task
    When User adds multiple task from fixture
    When User clicks on active task toggle button to mark it as completed
    Then only completed task should be visible in completed tab

Scenario: Verify both completed and active items are visible in all tab
    When User adds multiple task
      | Task            |
      | My To Do Task 1 |
      | My To Do Task 2 |
      | My To Do Task 3 |

    When User clicks on active task toggle button to mark it as completed
    Then Both completed and active task should be visible in All tab

  Scenario: clear all completed tasks
    When User clicks on active task toggle button to mark it as completed
    And clicks clear completed link
    Then all completed task should be removed


  Scenario: mark all as complete using toggle all button
    When User adds multiple task from fixture
    When User clicks down arrow key
    Then all tasks should be marked as complete

      Scenario: Remove completed item using cross button
    When User adds multiple task from fixture
    When User clicks delete icon
    Then completed task should be removed