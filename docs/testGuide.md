# Playwright Tests

All commands below should be run from the **playwright** directory.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)

## Setup

### 1. Install dependencies

For depedecies follow the instructions provided in the [depolyGuide](docs/deployGuide.md)

### 2. Install Playwright browsers

```
npx playwright install
```

> On Linux or CI machines, you may also need system dependencies:
> `npx playwright install --with-deps`

## Running tests

### Run all tests
__Navigate to the playwright folder (/playwright)__
```
npx playwright test
```

### Run tests in headed mode

To run tests with the browser visible:

```
npx playwright test --headed
```

### Run tests with the Playwright UI

To open the interactive Playwright UI:

```
npx playwright test --ui
```

### View the test report

To view the HTML report after a test run:

```
npx playwright show-report
```