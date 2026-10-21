# Liljans Blommor - Deploy Guide

### Downloading/cloning repository from terminal/cmd
**HTTPS:**
```
git clone https://github.com/NTIG-Uppsala/Liljans-Blommor-Dev.git
```
**SSH _(key required)_:**
```
git clone git@github.com:NTIG-Uppsala/Liljans-Blommor-Dev.git
```

## Decide what environment you are using.
**Production environment:** Online for users to see

**Development environment:** Private for testing purposes

## Using the setup scripts on a Linux machine

### 1. Prepare setup script _(if in a development environment)_

_Navigate to the repositories root folder_

Create a .env file and fill it with:
ENVIRONMENT="DEV"

Example workflow:
```
echo 'export ENVIRONMENT="DEV"' > .env
```

### 2. Setup script

Start your terminal or IDE with **administrative privileges**

_Navigate to the repository's root folder_

Run the setup script:

```
bash ./setupScript.sh
```
Running this script will

1. Install node
2. Install node packages for next.js
3. Move the data from the testData folder to the Data folder
4. Install all playwright dependencies

If you receive no errors then the setup should be all done.

## Using the setup scripts on a Windows machine

### 1. Install node

If you do not have node installed on your windows machine install it through the link below

https://nodejs.org/en/download

### 2. Setup script

  Start your terminal or IDE with **administrative privileges**

  _Navigate to the repository's root folder_

  Run the setup script:

  ```
  .\setupScript.ps1
  ```

  When prompted type "DEV" or "PROD" to specify which environment you are in 

  Running this script will

  1. Install node
  2. Install node packages for next.js
  3. Move the data from the testData folder to the Data folder
  4. Install all playwright dependencies

  If you do not have node installed on your windows machine install it through the link below

### Data management

_Please refer to [modifying data](./modifyingData.md)_
