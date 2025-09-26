# script about "Creating users"

Make a form that creates “user cards” with values ​​from inputs. After submitting, the new user appears in the list to the right of the form. If any field is empty, the submission is prohibited.

Form fields

First name (firstName, text) — required

Last name (lastName, text) — required

Age (age, number, non-negative integers) — required

Photo (photo, input type="file", only one image) — required

Functional requirements

Form on the left, list of users on the right (two columns)
Controlled inputs via useState
Validation: do not allow submission if any field is empty; for age — number ≥ 0
Display photo on card
Use

https://react-bootstrap.netlify.app/
https://react-bootstrap.netlify.app/docs/components/cards
https://react-bootstrap.netlify.app/docs/forms/form-control