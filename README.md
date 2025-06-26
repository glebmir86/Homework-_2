WANDOO_HOMEWORK/
│
├── fixtures/                # Custom Playwright fixtures (e.g., pageManager, baseURL)
│
├── helpers/                 # Reusable utility functions
│   ├── apiClient.ts         # API utility functions (GET, POST, etc.)
│   ├── dataGenerator.ts     # Random data generators (email, phone, ID, etc.)
│   └── utils.ts             # Logical helpers (e.g., isUserBroken)
│
├── page-objects/            # Page Object Model (POM) classes
│   ├── basePage.ts
│   ├── homePage.ts
│   ├── signUp.ts
│   |── pageManager          # To initialize other POM files locators and methods in test
|   |-- ...                  # Other POM files
│
├── test-data/               # Static test data in JSON format
│   └── userCredentials.json
│
├── tests/                   # Main E2E tests
│   └── registrationForm.test.ts
│
├── playwright.config.ts     # Playwright test configuration
└── tsconfig.json            # TypeScript configuration

Comment:
Registered a normal user, checked API response and came to conclusion, that broken user is when:
response.validIdDocStatuses in not WAITING_FOR_APPROVAL 
