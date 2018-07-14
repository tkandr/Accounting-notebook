# Accounting notebook

## Installation
Make sure you have `npm` and `node.js` installed. 
Recommended `node.js` version `9.5.0`, npm - `>=5.0.0`

Install dependencies: 
````
$ npm install
````

## How to run
Start server
````
$ npm start
```` 

And navigate to [http://localhost:5000](http://localhost:5000) to see the transactions list. <br>
You can specify application `port` via `PORT` environment variable.
## Api

Get a list of all transactions
````
GET /transactions
````

To add a transaction
````
POST /transactions
{
    type: String ('debit'|'credit')
    amount: Number
}
````

