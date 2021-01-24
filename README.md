<h1 align="center">Welcome to the HomeMonthlyExpenses API</h1>
<p>
    <a href="https://github.com/farenasl/HomeMonthlyExpensesAPI/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/github/license/farenasl/HomeMonthlyExpensesAPI?color=yellow" target="_blank" />
    </a>
    <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-lightgrey" />
    <img alt="Documentation" src="https://img.shields.io/github/repo-size/farenasl/HomeMonthlyExpensesAPI" />
    <!-- Swagger validator is not working correct -->
    <img alt="Swagger" src="https://img.shields.io/swagger/valid/3.0?specUrl=https://github.com/farenasl/HomeMonthlyExpensesAPI/blob/main/swagger.json">
</p>

>This is an API to manage the expenses of a group, and get payment amount per person considering their salaries 

## Starting
```sh
git clone https://github.com/farenasl/HomeMonthlyExpensesAPI.git
cd HomeMonthlyExpensesAPI/
```

You have to create **.env** file in the root path of the project to configure the connection string variable **CUSTOMCONNSTR_DATABASE_CONNECTION_STRING**

### Linux/Unix terminals
```
echo 'CUSTOMCONNSTR_DATABASE_CONNECTION_STRING=mongodb+srv://<USER>:<PASSWORD>@<SERVER URL>/<DB>?retryWrites=true&w=majority' > .env
```

### Powershell terminal
```
New-Item .env -ItemType File -Value "CUSTOMCONNSTR_DATABASE_CONNECTION_STRING=mongodb+srv://<USER>:<PASSWORD>@<SERVER URL>/<DB>?retryWrites=true&w=majority"; 
```

## Build API
```
npm install
```

## Run API
```
npm start
```

## Run API tests
```sh
npm test
```

## Debug API

### Linux/Unix terminals
```
SET DEBUG=express-locallibrary-tutorial:* & npm start
```

### Powershell terminal
```
check command to debug in powershell and ms-dos
```

## Try It
* Run API
* Open you're browser to [http://localhost:3000](http://localhost:3000)
* Invoke the `/healthcheck` endpoint 
  ```shell
  curl localhost:3000/pharma/healthcheck
  ```
* If you want to try all API operations, please visit [API Documentation](http://localhost:3000/api-docs) for more information

## Author

👤 **Fabián Arenas L.**
* Github: [@farenasl](https://github.com/farenasl)
* LinkedIn: [@https:\/\/www.linkedin.com\/in\/fabian-arenas-loyola-0279583a\/](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/fabian-arenas-loyola-0279583a\/)

## This was developed with
````
add badgets for npm, node, express, vscode, mongodb, swagger-ui, etc
