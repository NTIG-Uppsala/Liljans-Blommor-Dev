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

### Prepare setup script _(if in a development environment)_

_Navigate to the repository's root folder_

Create a .env file and fill it with:
ENVIRONMENT="DEV"

Example workflow:
```
echo 'export ENVIRONMENT="DEV"' > .env
```

### Setup script

_Navigate to the repository's root folder_

Run the setup script:

```
bash ./setupScript.sh
```

Setup should be all done.

### Data management

Please refer to [modifying data](./modifyingData.md)
