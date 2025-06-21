                    Task 1: Based on requirements create 3 manual test cases
 
--------------------TestCase 1 - Happy Path: Successful User Registration--------------------

Precondition: 
1. User is on registraion page: https://auth-home-task.vercel.app/register

Test steps:
1. Fill in all fields with values from test data
2. Click “Register” button


Test data:
Username: TestUser1
Email: test@email.com
Password: Password1!
Confirm Password: Password1!

Expected result:
1. User redirected to the Home page
2. Message "You have registered successfully!" is displayed

----------------------TestCase 2 - CheckMandatory fields validation------------------------

Precondition: 
1. User is on registraion page: https://auth-home-task.vercel.app/register

Test steps:
1. Leave one required field empty (e.g., "Username")
2. Fill in other fields with valid data
3. Click the “Register” button
4. Observe the validation behavior
5. Repeat steps 1–4 for each required field (Email, Password, Confirm Password)


Test data:
Username: TestUser1
Email: test@email.com
Password:Password1!
Confirm Password: Password1!


Expected result:
1. Validation error appears under the empty field
2. Registration is blocked 

-------------------------TestCase 3 - Check field validation rules-------------------------

Precondition:
1. User is on registraion page: https://auth-home-task.vercel.app/register

Test steps:
1. Enter each value from test data in respective fields
2. Click "Register"

Test data (examples of invalid input):
Username: Aa; User_; Test User; 12345678901234567890a
Email: test; test@email; email.com; !%^&*()@email.com; @email.com; Joe Smith <email@test.com>; email@example@example.com
Password: 12345Aa; password1; PASSWORD1; TestPassword; !@#$%^&*()_;
Confirm password: Mismatched value  

Expected result:
1. Validation error is displayed under the invalid field



                    Task 2: Report at least 1 Bug You have found during the testing 

----------------------Bug Report 1 - Field with error is not highlighted-----------------------

Precondtion: 
1. User is on registraion page: https://auth-home-task.vercel.app/register

Steps to reporoduce:
1. Enter invalid data in all fields
2. Click “Register” button

Expected result:
Fields with failed validation should be highlighted along with error message

Actual result:
Error messages appear, but fields are not highlighted

Priority: Medium 

---------------------Bug Report 2 - Email field uses inconsistent error display---------------

Precondtion:
1. User is on registraion page: https://auth-home-task.vercel.app/register

Steps to reporoduce:
1. Enter invalid Email like: “example()@gmail”
2. Enter invalid data for other fields
3. Click “Register”

Expected result:
1. Clear error message should appear for each field
2. Error message style should match for all validation errors

Actual result:
1. Pop up warning appears with message: “Please enter an email address”. Message style does not match with other errors
2. Other invalid fields do not show errors. If we delete email and click “Register”, then error message for other fields appear

Priority: High

                    Task 3: Based on requirements automate 1 manual test case using playwright 

The framework uses the Page Object Model to keep tests clean and maintainable
1. basePage.ts: Has common methods reused across project
2. homePage.ts and registrationForm.ts: Store locators and actions for each page
3. pageManager.ts:  Creates all page objects in one place, so we don’t have to do it manually in each test.
4. pageManagerFixture.ts: Custom Playwright fixture that creates pageManager Object inside our tests.
5. test-data/: Folder that stores JSON files with test input data
6. Cross-browser support: The framework is configured to run tests in both Chrome and Firefox

Test file location: tests/registrationForm.test.ts

                    Task 4: Add points to improve form's UI/UX 

1. Implement password visibility toggle – to allow users to show / hide password inputs
2. Add placeholder hints (e.g. John1990)
3. Disable "Register" button until all fields are valid.
4. Add "Contact support" button. In case user has any issues with Registration


                    Task 5: Anything You would improve/specify more in the existing requirements 

1. Looks like "Registration Form Fields" and "Field Validation" sections contain same    information. If appropriate, would combine them in one section. In additional, for larger forms, would include if field is mandatory, or optional.
2. Specify max password length (currently allows 750+ chars)
3. Recommend requiring at least one special character in password. This improves password strength and aligns with common security best practices.
4. Minor remark, rename “Submit” button to “Registration” for clarity
5. Clarify accepted email formats. From experience, if we have customers worldwide, some customers may have email addresses with valid, but uncommon formats — allowed by their email providers — that our current validation might reject. 
 
                    Task 6: What else can be tested? 

1. Ensure password is sent over HTTPS in API request body 
2. Ensure password is stored in DB securely. It should be hashed, not plain text
3. Verify login with registered credentials
4. Ensure you can not create 2 users with same email or username
5. Check that registration form accepts unusual valid email formats. Like "email"@example.com    




Registration page requirements

Registration Form Fields:

-Username (required, alphanumeric, 3-20 characters) 
-Email (required, valid email format) 
-Password (required, minimum 8 characters, at least 1 uppercase, 1 lowercase, and 1 number) 
-Confirm Password (required, must match the Password field) 
-Submit Button (to submit the form) 


Field Validations:

-Username: Must be between 3 and 20 characters. Only alphanumeric characters (letters and numbers) are allowed. 
-Email: Must be a valid email format (e.g., example@domain.com). 
-Password: Must be at least 8 characters long. Must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number. 
-Confirm Password: Must match the value entered in the Password field.


Validation Feedback: 

Display clear error messages for each field if validation fails. Highlight the fields with errors. 

Form Submission: 
If all validations pass: Redirect the user to the Home Page. 
Display a success message: "You have registered successfully!"
