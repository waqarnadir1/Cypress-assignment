Feature: Test To Do Task API's

    This feature verifies the critical functionality of APP


Scenario: Get API should return data
When User calls the get api
Then Status code should be 200
And result should not be empty
And result should be in json format


Scenario: Create a new task
When User sends a post call with Task name "New Task from api"
Then status should be created with name "New Task from api"
# And data should be same

Scenario: Delete a task from list
When User calls the delete api for an existing task
Then data should be removed from the list
And verify its status code

Scenario: Mark task as complete
When User marks a task as completed
Then verify the task should be marked as completed

#  Note: I was having difficulty while manipulating data on mock api server because data was not updating on server 
# and api calls are returning 200 but still it displays the old data. May be I am not familiar with this mock api server
# so I hold few test cases. 