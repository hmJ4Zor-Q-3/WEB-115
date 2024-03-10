    // JavaScript code for form validation
	// Prevent form from submitting

    document.getElementById("myForm").onsubmit = validateForm;

    function validateForm(event)
    {
      // Retrieve the input field value
      let inField = document.getElementById("inputField");
      // Regular expression pattern for alphanumeric input
      // Check if the input value matches the pattern
      if(/^[a-zA-Z0-9]+$/.test(inField.value))
      {
        // Valid input: display confirmation and submit the form
        alert("Submission was successful.");
        // setCustomValidity was dramatically breaking everything. The form would work fine for valid, and then once one invalid input was submitted it'd never recovers, it would atop doing alerts, and say invalid validity message every time, no matter the input value.
        //inField.setCustomValidity("");
      }
      else 
      {
        // Invalid input: display error message
        alert("Submission was unsuccessful.");
        // inField.setCustomValidity("Only alphanumeric values are allowed in the input field.");
        return false;
      }
    } // end validateForm()


        /*instuction of blackboard
        
Submission of this assessment means it is ready for grading. Your instructor may grade assessments before the due date. You have one submission attempt. Any problems notify your instructor immediately.
Assignment: Form Validation with Regular Expressions
For this assignment, you will validate a form that includes a single input field for alphanumeric values. You will use regex to validate the input value and provide feedback to the user based on whether the input matches the required pattern.
Here are the requirements for the assignment:

    Add JavaScript code to the validateScript.js starter file to handle the following tasks:
        Retrieve the input field element using JavaScript.
        Add an event listener to the form submits an event.
        Implement a function that validates the input value using a regular expression for alphanumeric input.
        Display an error message if the input value is not alphanumeric.
        Prevent the form from submitting if the input value is not alphanumeric.
        Display a confirmation if the input is valid and 'submits' the form*
        *the wcet server is not set up for form processing so the 'submit' action will not actually submit anything.
    Test your form by entering alphanumeric and non-alphanumeric values. Verify that the error message is displayed correctly for non-alphanumeric input and that the form is not submitted in such cases. 

Rubric:

        Retrieve the input field element (15%)
        Validate the input value using a regular expression (30%)
        Display error message for non-alphanumeric values (20%)
        Prevent form submission for non-alphanumeric values (15%)
        Display confirmation message upon successful validation and submission (20%)


        */