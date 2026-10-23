# Playwright Tests

All commands below should be run from the **playwright** directory.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)

## Setup

### Install dependencies

For depedecies follow the instructions provided in the [depolyGuide](docs/deployGuide.md)

## Running tests

### Run all tests
__Navigate to the playwright folder (/playwright)__
```
pnpm playwright test
```

### Run tests in headed mode

To run tests with the browser visible:

```
pnpm playwright test --headed
```

### Run tests with the Playwright UI

To open the interactive Playwright UI:

```
pnpm playwright test --ui
```

### View the test report

To view the HTML report after a test run:

```
pnpm playwright show-report
```
