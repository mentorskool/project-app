# Users app
description : reads `users.json` from local file system and returns them as response to GET `/users` route

### Endpoints available

1. `/` to get message with status **200**
    *expected response*

    ```json
    {
        "message": "Call /users to get all the users"
    }
    ```

2. `/users` to get all users with status **200**
    *expected response*
    ```json
    {
        "users": [
            {
                "id":1,
                "first_name":"Tiertza",
                "last_name":"Serraillier","email":"tserraillier0@chicagotribune.com",
                "gender":"Male",
                "avatar":"https://robohash.org/estnullaexplicabo.png?size=50x50&set=set1"
            },
            {
                "id":2,
                "first_name":"Chicky",
                "last_name":"Doll",
                "email":"cdoll1@comcast.net",
                "gender":"Male",
                "avatar":"https://robohash.org/velessedeleniti.png?size=50x50&set=set1"
            },
            ...
        ]
    }
    ```
### Fixing the bug
the app provided contains a bug which causes the app to crash when `/users` is called. To fix this follow the below steps
1. open `src/app.js`
2. at line number 12 our code looks something like
    ```js
    app.get('/users',(req,resp) => {
    response.json({users});
    });
    ```
    Notice in the callback function, we named the argument as `resp` but we are using `response` to send the actual response. You can either rename `resp to response` or vice versa to fix the bug.
