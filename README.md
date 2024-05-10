# Overview

This Project involves 1 service/api that checks the user-input UEN. It ensures that the enetered Unique Entity Number (UEN) is valid according to the Singapore government's standard.

This small project involves

1. MongoDB (Database for PQs)
2. NodeJS/Express (Routing)
3. HTML (Bootstrap included)
4. Visual Studios Code (VSC) or eqivalent (To run/open the project)
5. Google Chrome (To interact with the User Interface (UI))

# Instructions

To run the program locally, ensure that you first have wifi connection (To connect to the database).

1. Download
   - Download by clicking the top-right green button: "Code"
   - Then click on the "Download ZIP"
   - After downloading, move the zip file to the desired location in your local machine.
   - Unzip it
2. Opening it in an IDE
   - Open VSC or equivalent and drag the file (onest) into VSC.
3. Ensure you are in the root folder (whereverYouDownloadedTheZipFile/onest/api)
   `cd onest/api`
4. Install the dependencies in the root folder
   - Download all the dependencies.
     Run:
     `npm install`
5. Run/connect to the api server
   - After downloading, run the api server by:
     `npm run serve`
     This will run a script from package.json: `node index.js`
     You should be able to see "Server is running on port 3000" and "Connected to database!"
     This would mean you have successfully connected to the MongoDB database.
6. Opening the project UI
   - Open the UI by opening Google Chrome and entering: "http://localhost:3000"
   - You should be able to see a simple input and submit button
7. What to expect
   - Expect to see a success message if a valid UEN in typed in.
   - Expect to see a failure message if an invalid UEN is typed in.
   - UEN standared will be based of [UEN.gov.sg](https://www.uen.gov.sg/ueninternet/faces/pages/admin/aboutUEN.jspx)
