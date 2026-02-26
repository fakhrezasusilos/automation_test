# 🧪 Automation Test Suite — DemoQA Practice Form

This repository contains an end-to-end automation test framework built with **Playwright (JavaScript)** for the DemoQA Practice Form:

🔗 https://demoqa.com/automation-practice-form

The framework demonstrates:
- Page Object Model (POM)
- Data-driven testing (JSON + Faker)
- Tag filtering (`@positive`, `@negative`)
- UI validation via red border checks
- Allure report integration
- Clean, scalable, maintainable architecture

---

## 📁 Project Structure

```
automation_test/
├── playwright.config.js
├── package.json
├── .env
│
├── tests/
│ └── registration.spec.js
│
├── page-objects/
│ ├── locators/
│ │ └── registration-form.js
│ │
│ └── functionality/
│ └── registration-form.js
│
├── utils/
│ ├── asserts.js
| ├── logger.js
│ └── userDataGenerator.js
│
└── test-data/
└── registration-data.json
```

## 🚀 Features

✅ **Page Object Model**  
✅ **Positive / Negative / Security testing**  
✅ **Data-Driven Tests (JSON + Faker)**  
✅ **Red Border UI validation (DemoQA native UI)**  
✅ **Dynamic looping for invalid scenarios**  
✅ **Tagging and selective test execution**  
✅ **Allure Report Integration**  
✅ **Screenshots & Video (on failure)**

---

## 🛠 Installation

Clone the project:

```bash
git clone https://github.com/fakhrezasusilos/automation_test.git
cd automation_test
```
Install Dependencies:

```bash
npm install
```

Install Playwright Browsers:

```bash
npx playwright install
```

## 🌍 Environment Configuration

Before running tests, create a .env file in project root:
```ini
BASE_URL=https://demoqa.com/automation-practice-form
```
You can customize for different environments (dev/staging/prod).

## 📌 Running Tests
### 🔹 Run All Tests
```bash
npx playwright test
```

### 🔹 Run Positive Tests Only
```bash
npx playwright test -g @positive
```

### 🔹 Run Negative Tests Only
```bash
npx playwright test -g @negative
```

## 📊 Allure Reporting
### Step 1 — Install Allure CLI

MacOS:
```bash
brew install allure
```

Node:
```bash
npm install -g allure-commandline --save-dev
```

### Step 2 — Run Tests with Allure
```bash
npx playwright test
```

### Step 3 — Generate Allure Report
```bash
allure generate ./allure-results --clean
```

### Step 4 — View Report
```bash
allure open
```

The report provides:

- Nice visual representation
- Screenshots
- Step breakdown
- Categorized results
- Test tags

## 🧪 Test Strategy
### ➤ Positive Test
✔ Tests valid form submission using dynamic data (Faker)

### ➤ Negative Tests
✔ Loops through invalid scenarios from JSON

✔ Validates UI red border for invalid fields

✔ Prevents form submission

### ➤ Security Test
✔ Verifies that script‐like input still leads to submission (revealing lack of sanitization)
