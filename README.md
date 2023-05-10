# The Maplerad Node Client

The library follows an object-oriented approach and methods are grouped under categories.

There are currently twelve (12) base categories namely:

-   Customer
-   Collections
-   Transfer
-   Bills
-   Wallets
-   Issuing
-   Identity
-   Transactions
-   Counterparty
-   Forex
-   Institutions
-   Misc

#### Learn more from the [docs](https://maplerad.dev/reference)

# Installation

```shell
 $  npm install maplerad-node

 or

 $  yarn add maplerad-node
```

# Authorization

A secret key is needed for authorization. It can be gotten from the Maplerad dashboard

# Environments

Maplerad provides two environments to ensure a smooth and easy experience.

-   sandbox: for development
-   live: for production

## Sandbox

Sandbox is your playground. You can credit your test wallets and use that to test your integrations, no real money will be debited or credited.
Ensure to switch to Live when you are ready to launch.

## Live

All method calls under Live will be charged and real money will be debited or credited.
You are advised to use this when you have fully tested your integrations and are ready to launch your product.

# Usage

```js
// import the package
const Maplerad = require("maplerad-node"); // commonjs
// or
import Maplerad from "maplerad-node"; // esm

const SECRET_KEY = process.env.SECRET_KEY;
const ENVIRONMENT = "sandbox";

const client = new Maplerad(SECRET_KEY, ENVIRONMENT);
```

## Get all Customers

```js
// Get all customers
async function getAllCustomers() {
    try {
        const customers = await client.Customers.GetAllCustomers();
        console.log(customers);
    } catch (error) {
        console.error(error);
    }
}
```
