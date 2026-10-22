

function main {


    Define-Environment

    cd my-app

    Install-Node-Packages

    $subdirs = ls

    if ($Env:ENVIRONMENT -eq "DEV") {

        if ($subdirs -like "*testData*") {

            Change-To-Test-Data
            
            Install-Playwright-Dependencies

        }
        else {

            Write-Output("`nCould not find a folder called testData, Create a test data folder in the my-app directory and try again. `nExiting script.....")

            exit
        }

    }
    else {

        Write-Output("`nYou are in the production environment, no files changed")

    }

}

function Define-Environment {

    $input = Read-Host "-------------------------- `nInput your environment, DEV (development) or PROD (production). Choosing DEV will install all playwright dependencies and copy over the data from the testData folder to the data folder"

    $Env:ENVIRONMENT = $input

    if ($Env:ENVIRONMENT -eq "DEV") {

        Write-Output "`nYou are now in the Development Environment"

    }
    elseif ($Env:ENVIRONMENT -eq "PROD") {

        Write-Output "`nYou are now in the production Environment"

    }
    else {

        Write-Output "Your input is not valid, try again"

        Define-Environment

    }

}

function Install-Node-Packages() {

    Write-Output("installing packages...")

    npx get-pnpm

    pnpm install

    if (-Not ($?)) {

        Write-Output("Received en error when running npm, try installing or reinstalling node and try again `nExiting script...")
        exit
    }

}

function Change-To-Test-Data() {

    robocopy "testData/" "data/" /copyall /purge

}

function Install-Playwright-Dependencies() {

    Write-Output("-------------------------------- `nInstalling Playwright Dependencies ")

    cd ../playwright

    npm install

    npm ci

    npx playwright install --with-deps

    Write-Output( "You can run tests with the \'npx playwright test\' command" )

}

main