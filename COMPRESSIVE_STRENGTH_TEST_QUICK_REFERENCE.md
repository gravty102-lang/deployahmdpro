# Hardened Concrete Compressive Strength Test - Quick Reference Guide

## Quick Start

### Access the Form

1. Navigate to Project Actions
2. Click "Tests" menu item
3. Click "Hardened Concrete Compressive Strength Test"
4. Fill out the four-section form

### URL Routes

```
/project/tests              → Tests Hub (menu)
/project/tests/compressive  → Compressive Strength Test Form
```

---

## Form Sections

### Section 1: Project Information (Mandatory)

| Field | Type | Rules | Example |
|-------|------|-------|---------|
| Project Name | Text | 2-100 chars | "Building A" |
| Location | Text | 2-100 chars | "Downtown" |
| Owner | Text | 2-100 chars | "ABC Corp" |
| Consultant | Text | 2-100 chars | "XYZ Engineers" |
| Contractor | Text | 2-100 chars | "DEF Construction" |
| Test Date | Date Picker | Not future | 15/01/2024 |

**Proceed Button:** Enabled when all fields valid

### Section 2: Test Identification (Mandatory)

| Field | Type | Rules | Example |
|-------|------|-------|---------|
| Test Type | Display | Locked | "Compressive Strength Test" |
| Specimen Type | Dropdown | Required | "Cube" or "Cylinder" |

**Proceed Button:** Enabled when Specimen Type selected

### Section 3: Test Records (1-10 records)

| Field | Type | Rules | Example |
|-------|------|-------|---------|
| Structural Element | Text | Required (if filled) | "Column" |
| Concrete Supplier | Text | Required (if filled) | "ABC Concrete" |
| Casting Date | Date Picker | ≤ Test Date | 10/01/2024 |
| Age of Test | Auto | Calculated | 5 days |
| Required Strength (MPa) | Numeric | 0-100 | 30 |
| Measured Strength (MPa) | Numeric | 0-100 | 32 |
| Compliance | Auto | Calculated | "Compliant" |

**Submit Button:** Enabled when ≥1 valid record

### Section 4: Review & Submit

- Review all data
- Edit previous sections
- Confirm and save

---

## Validation Rules

### Test Date
```
✓ Valid: 15/01/2024 (today or past)
✗ Invalid: 16/01/2024 (future)
```

### Casting Date
```
✓ Valid: 10/01/2024 (≤ Test Date)
✗ Invalid: 16/01/2024 (> Test Date)
```

### Project Fields
```
✓ Valid: "ABC Corporation"
✗ Invalid: "AB" (too short)
```

### Strength Values
```
✓ Valid: 30, 32.5, 0, 100
✗ Invalid: -5 (negative)
✗ Invalid: 150 (exceeds max)
```

---

## Compliance Determination

| Measured vs Required | Result | Color |
|---------------------|--------|-------|
| Measured ≥ Required | Compliant | Green |
| Measured < Required | Not Compliant | Red |

**Examples:**
- Measured: 32 MPa, Required: 30 MPa → **Compliant** ✓
- Measured: 28 MPa, Required: 30 MPa → **Not Compliant** ✗

---

## Error Messages

### Test Date Errors
```
"Test Date is mandatory. Please select a date."
"Test Date cannot be in the future."
```

### Casting Date Errors
```
"Casting Date is mandatory."
"Casting Date cannot be later than Test Date."
```

### Project Field Errors
```
"[Field] is mandatory."
"Please enter at least 2 characters."
```

### Strength Value Errors
```
"Required Strength is mandatory."
"Measured Strength is mandatory."
"[Field] cannot be negative."
"[Field] must be numeric."
```

---

## Component Structure

```
CompressiveStrengthTestScreen
├── Header
│   ├── Back Button
│   ├── Title & Step Indicator
│   └── User Avatar
├── Section 1: Project Information
│   ├── Project Name (text)
│   ├── Location (text)
│   ├── Owner (text)
│   ├── Consultant (text)
│   ├── Contractor (text)
│   ├── Test Date (date picker)
│   └── Proceed Button
├── Section 2: Test Identification
│   ├── Test Type (locked)
│   ├── Specimen Type (dropdown)
│   └── Proceed Button
├── Section 3: Test Records
│   ├── Test Records (repeating)
│   │   ├── Structural Element (text)
│   │   ├── Concrete Supplier (text)
│   │   ├── Casting Date (date picker)
│   │   ├── Age of Test (auto)
│   │   ├── Required Strength (numeric)
│   │   ├── Measured Strength (numeric)
│   │   └── Compliance (auto)
│   ├── Add Record Button
│   └── Review Button
└── Section 4: Review
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
  projectName: "Building A",
  location: "Downtown",
  owner: "ABC Corp",
  consultant: "XYZ Engineers",
  contractor: "DEF Construction",
  testDate: "2024-01-15",
  specimenType: "CUBE",
  testRecords: [
    {
      recordNumber: 1,
      structuralElement: "Column",
      concreteSupplier: "ABC Concrete",
      castingDate: "2024-01-10",
      ageOfTest: 5,
      requiredStrength: 30,
      measuredStrength: 32,
      complianceStatus: "Compliant"
    }
  ]
}
```

### Errors
```typescript
{
  testDate: "Test Date is mandatory...",
  castingDate_0: "Casting Date cannot be later than Test Date.",
  requiredStrength_0: "Required Strength must be numeric."
}
```

---

## Key Functions

### Validation
```typescript
validateProjectSection(): boolean
validateIdentificationSection(): boolean
validateRecordsSection(): boolean
```

### Calculations
```typescript
calculateAgeOfTest(castingDate, testDate): number
getComplianceStatus(measured, required): string
```

### Record Management
```typescript
addTestRecord(): void
deleteTestRecord(index): void
handleRecordFieldChange(index, field, value): void
```

### Navigation
```typescript
handleProceedToIdentification(): void
handleProceedToRecords(): void
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

### Compliance Badges
```
Compliant:     bg-green-100 text-green-800
Not Compliant: bg-red-100 text-red-800
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

### Add a New Test Record
1. Click "Add Another Test Record" button
2. Fill all fields (all-or-nothing rule)
3. Compliance auto-calculates
4. Repeat for up to 10 records

### Delete a Test Record
1. Click trash icon on record card
2. Confirm deletion
3. Remaining records renumbered

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
Age of Test Calculation (auto)
    ↓
Compliance Calculation (auto)
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
const projectValid = validateProjectSection();
const identificationValid = validateIdentificationSection();
const recordsValid = validateRecordsSection();
```

### Test Compliance
```typescript
const compliance = getComplianceStatus(32, 30); // Should return "Compliant"
```

### Test Age Calculation
```typescript
const age = calculateAgeOfTest("2024-01-10", "2024-01-15"); // Should return 5
```

---

## Keyboard Navigation

- **Tab:** Move between fields
- **Shift+Tab:** Move to previous field
- **Enter:** Submit form / Confirm action
- **Escape:** Cancel / Close dialog
- **Arrow Keys:** Adjust numeric values

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
├── CompressiveStrengthTestScreen.tsx  (Main form)
└── TestsScreen.tsx                    (Tests menu - updated)

src/
└── App.tsx                            (Routes - updated)

Documentation/
├── COMPRESSIVE_STRENGTH_TEST_SPECIFICATION.md
└── COMPRESSIVE_STRENGTH_TEST_QUICK_REFERENCE.md
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
