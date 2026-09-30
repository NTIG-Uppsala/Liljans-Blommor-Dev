#!/bin/bash

source .env 

main(){

    cd public &&

    subdirs=$(ls)

    if [[ $subdirs =~ "testData" ]];
    then

        printf "ENVIRONMENT:"
        printf "$ENVIORMENT"

        if [[ "$ENVIRONMENT" = "DEV" ]];
        then 
            printf "In Development environment: \nTrying to replace files... \n"

            installNode

            changeToTestData

            installPlaywrightDependencies
            
        else 
            printf "In Product environment, no files changed"
        fi

    else 
        printf "The directory \"testData\" could not be found in current directory \n"
    fi

}

installNode(){

    (curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.7/install.sh | bash) &&

    \. "$HOME/.nvm/nvm.sh" &&

    nvm install 24 &&

    node -v &&

    npm -v 

}

changeToTestData(){

    rsync -av --delete "testData/" "data/"

}

installPlaywrightDependencies(){

    cd ../playwright &&

    npm ci && 

    npx playwright install --with-deps &&

    printf "You can run tests with the \"npx playwright test\" command" 

}

main

