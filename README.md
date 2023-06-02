## Requirements
- [NodeJS](https://nodejs.org/en)
- Terminal / Command Prompt / PowerShell
- Text Editor
- PostgreSQL Server
- Auth0 Environment

## Setup Instructions
To setup the project, you will need to create a file, `.env.local`, in the root of the project. Within that file, you will need to configure the environment variables with your information. This project assumes you have knowledge of PostgreSQL and Auth0. 

Refer to the code block below.
```
AUTH0_SECRET=''
AUTH0_BASE_URL=''
AUTH0_ISSUER_BASE_URL=''
AUTH0_CLIENT_ID=''
AUTH0_CLIENT_SECRET=''
AUTH0_SCOPE='openid profile read:shows'
AUTH0_MANAGEMENT_TOKEN=''
DB_HOST=''
DB_NAME=''
DB_USER=''
DB_PASS=''
```
