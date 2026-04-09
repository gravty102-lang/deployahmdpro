# Fresh Concrete Slump Test - Quick Reference Guide

## Quick Start

### Access the Form

1. Navigate to Project Actions
2. Click "Tests" menu item
3. Click "Fresh Concrete Slump Test"
4. Fill out the three-section form

### URL Routes

```
/project/tests              → Tests Hub (menu)
/project/tests/slump        → Slump Test Form
```

---

## Form Sections

### Section 1: Test Identification (Mandatory)

| Field | Type | Rules | Example |
|-------|------|-------|---------|
| Test Type | Display | Locked | "Slump Test" |
| Test Date | Date Picker | Not future, ≤30 days old | 15/01/2024 |
| Supplier | Text | 2-100 chars, alphanumeric | "ABC Concrete Co." |
| Element | Dropdown | Required | "Column" |

**Proceed Button:** Enabled when all fields valid

### Section 2: Test Results (1-10 tests)

| Field | Type | Rules | Example |
|-------|------|-------|---------|
| Test # | Spinner | 1-10, unique | 1, 2, 3... |
| Slump (mm) | Numeric | 0-300, decimal | 120, 95.5 |
| Consistency | Auto | Calculated | "Plastic (PLS)" |

**Add/Delete:** Add up to 10 tests, delete any test

**Submit Button:** Enabled when ≥1 valid test

### Section 3: Review & Submit

- Review all data
- Edit previous sections
- Confirm and save

---

## Validation Rules

### Test Date
```
✓ Valid: 15/01/2024 (today or past, ≤30 days)
✗ Invalid: 16/01/2024 (future)
✗ Invalid: 01/01/2024 (>30 days old)
```

### Supplier Name
```
✓ Valid: "ABC Concrete Company"
✓ Valid: "Smith & Co."
✗ Invalid: "AB" (too short)
✗ Invalid: "ABC@123" (invalid chars)
```

### Slump Value
```
✓ Valid: 120, 95.5, 0, 300
✗ Invalid: -5 (negative)
✗ Invalid: 350 (exceeds max)
✗ Invalid: "abc" (non-numeric)
```

---

## Consistency Classification

| Range (mm) | Classification | Code | Color |
|-----------|-----------------|------|-------|
| 0-25 | Dry | DRY | Light Blue |
| 26-50 | Stiff | STF | Light Green |
| 51-100 | Plastic | PLS | Light Yellow |
| 101-150 | Wet | WET | Gold |
| 151-300 | Sloppy | SLP | Light Pink |

---

## Error Messages

### Test Date Errors
```
"Test Date is mandatory. Please select a date."
"Test Date cannot be in the future."
"Test Date cannot be more than 30 days in the past."
```

### Supplier Name Errors
```
"Concrete Supplier/Company Name is mandatory."
"Please enter at least 2 characters."
"Only alphanumeric characters, spaces, hyphens, and apostrophes are allowed."
```

### Slump Value Errors
```
"Slump Value for Test X is mandatory."
"Slump Value for Test X must be numeric."
"Slump Value for Test X cannot be negative."
"Slump Value for Test X cannot exceed 300 mm."
```

### Test Number Errors
```
"Test Number X already exists. Please select a different test number."
```

---

## Component Structure

```
SlumpTestScreen
├── Header
│   ├── Back Button
│   ├── Title & Step Indicator
│   └── User Avatar
├── Section 1: Identification
│   ├── Test Type (locked)
│   ├── Test Date (date picker)
│   ├── Supplier Name (text)
│   ├── Structural Element (dropdown)
│   └── Proceed Button
├── Section 2: Results
│   ├── Test Results (repeating)
│   │   ├── Test Number (spinner)
│   │   ├── Slump Value (numeric)
│   │   └── Consistency (display)
│   ├── Add Test Button
│   └── Review Button
└── Section 3: Review
    ├── Summary Display
    ├── Edit Button
    ├── Cancel Button
    └── Confirm & Save Button
```

---

## State Management

### Form Data
```typescript
{
  testType: "Slump Test",
  testDate: "2024-01-15",
  concreteSupplier: "ABC Concrete",
  structuralElement: "COLUMN",
  testResults: [
    { testNumber: 1, slumpValue: 120, consistency: "Plastic", consistencyCode: "PLS" },
    { testNumber: 2, slumpValue: 95, consistency: "Plastic", consistencyCode: "PLS" }
  ]
}
```

### Errors
```typescript
{
  testDate: "Test Date is mandatory...",
  concreteSupplier: "Please enter at least 2 characters.",
  slumpValue_0: "Slump Value must be between 0 and 300 mm.",
  duplicateTestNumbers: "Duplicate test numbers found: 1, 2"
}
```

---

## Key Functions

### Validation
```typescript
validateTestDate(date: string): string
validateSupplierName(name: string): string
validateSlumpValue(value: number | null, testNum: number): string
validateIdentificationSection(): boolean
validateResultsSection(): boolean
```

### Consistency
```typescript
getConsistency(slumpValue: number | null): { name, code, color }
```

### Test Management
```typescript
handleTestNumberChange(index: number, value: number): void
handleSlumpValueChange(index: number, value: string): void
addTestResult(): void
deleteTestResult(index: number): void
```

### Navigation
```typescript
handleProceedToResults(): void
handleProceedToReview(): void
handleSubmit(): void
```

---

## Styling Classes

### Field States
```
Valid:     border-green-500 bg-green-50
Invalid:   border-red-500 bg-red-50
Disabled:  border-gray-300 bg-gray-100
Focus:     ring-2 ring-brand-teal
```

### Buttons
```
Primary:   bg-brand-teal text-white hover:bg-opacity-90
Secondary: border-2 border-gray-300 text-gray-700
Disabled:  bg-gray-400 cursor-not-allowed
```

### Badges
```
Mandatory: text-red-500 (asterisk)
Valid:     text-green-600 (checkmark)
Invalid:   text-red-600 (X icon)
Status:    bg-green-100 text-green-800 (Available)
```

---

## Dark Mode

All components support dark mode:
```typescript
className="bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
```

---

## Mobile Responsiveness

```
Mobile (320px):    Single column, full-width fields
Tablet (768px):    Two columns, optimized spacing
Desktop (1024px):  Three columns, max-width container
```

---

## Common Tasks

### Add a New Test Result
1. Click "Add Another Test" button
2. Enter slump value
3. Consistency auto-calculates
4. Repeat for up to 10 tests

### Delete a Test Result
1. Click trash icon on test card
2. Confirm deletion
3. Remaining tests renumbered

### Edit Previous Section
1. Click "Back" button
2. Make changes
3. Click "Proceed" to continue

### Submit Form
1. Complete all sections
2. Review summary
3. Click "Confirm & Save"
4. Success dialog appears

---

## Data Flow

```
User Input
    ↓
Real-time Validation
    ↓
Error Display (if invalid)
    ↓
State Update (if valid)
    ↓
Consistency Calculation (auto)
    ↓
Form Display Update
    ↓
Section Navigation
    ↓
Final Validation
    ↓
Data Storage
    ↓
Success Confirmation
```

---

## Browser Support

- Chrome/Edge: ✓ Full support
- Firefox: ✓ Full support
- Safari: ✓ Full support
- Mobile browsers: ✓ Full support

---

## Performance Tips

1. **Lazy Loading:** Components load on demand
2. **Memoization:** Prevent unnecessary re-renders
3. **Debouncing:** Validation on blur, not every keystroke
4. **Animations:** GPU-accelerated with Framer Motion

---

## Debugging

### Check Form State
```typescript
console.log('Form Data:', formData);
console.log('Errors:', errors);
console.log('Current Section:', currentSection);
```

### Validate Manually
```typescript
const dateError = validateTestDate(formData.testDate);
const supplierError = validateSupplierName(formData.concreteSupplier);
const slumpError = validateSlumpValue(test.slumpValue, test.testNumber);
```

### Test Consistency
```typescript
const consistency = getConsistency(120); // Should return Plastic
```

---

## Keyboard Navigation

- **Tab:** Move between fields
- **Shift+Tab:** Move to previous field
- **Enter:** Submit form / Confirm action
- **Escape:** Cancel / Close dialog
- **Arrow Keys:** Adjust spinner values

---

## Accessibility Features

- ✓ Keyboard navigation
- ✓ Screen reader support
- ✓ High contrast mode
- ✓ Focus indicators
- ✓ ARIA labels
- ✓ Error announcements

---

## File Locations

```
src/components/project/
├── SlumpTestScreen.tsx      (Main form)
└── TestsScreen.tsx          (Tests menu)

src/
└── App.tsx                  (Routes)

Documentation/
├── SLUMP_TEST_MOBILE_FORM_SPECIFICATION.md
├── SLUMP_TEST_FORM_SCHEMA.json
└── SLUMP_TEST_IMPLEMENTATION_GUIDE.md
```

---

## Next Steps

1. **Backend Integration:** Connect to Firebase/API
2. **Testing:** Run unit and E2E tests
3. **Deployment:** Deploy to production
4. **Monitoring:** Track usage and errors
5. **Enhancement:** Add additional test types

---

**Quick Reference Version:** 1.0  
**Last Updated:** 2024
