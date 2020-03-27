# Quiz API
A Node JS API for a quiz app which saves to a Mongo DB instance. 

###Endpoints

These endpoints are supported:

1. `GET /`  - displays a message indicating that it is the home page.
2. `GET /question`  - displays all question records stored in the MongoDB.
3. `GET /question/{questionID}`  - gets the question records with the specific QuestionID.
4. `GET /question/{category}`  - gets all the question records with the specified 'category' value.
5. `GET /question/{subCategory}`  - gets all the question records with the specified 'subCategory' value.
6. `POST /question`  - creates a new Question and saves it in the MongoDB.
7. `DELETE /question/{questionID}`  -  deletes the post record with the specific QuestionID.
8. `PATCH /question/{questionID}`  -  updates the title of the post record with the specific QuestionID.

