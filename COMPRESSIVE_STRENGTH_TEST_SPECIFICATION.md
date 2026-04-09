# Hardened Concrete Compressive Strength Test - Mobile Form Specification

## Document Version: 1.0
## Date: 2024
## Role: Senior Civil Engineer, Concrete Laboratory QA/QC Manager, Mobile Form Architect
## Scope: Hardened Concrete Compressive Strength Test Data Entry

---

## EXECUTIVE SUMMARY

This specification defines a precise, mobile-app-ready data entry form for Hardened Concrete Compressive Strength Testing. The form enforces mandatory field validation with special emphasis on date fields (Test Date and Casting Date), ensures automatic compliance determination, and supports up to 10 test records per project.

**Critical Enforcement:** Both Test Date and Casting Date are MANDATORY and cannot be bypassed. Casting Date cannot be later than Test Date. All compliance calculations are automatic and unambiguous.

---

## SECTION 1: FORM ARCHITECTURE & FLOW

### 1.1 Overall Form Structure

The form is divided into FOUR sequential sections:

1. **Project Information Section** (Metadata)
2. **Test Identification Section** (Test Type & Specimen)
3. **Test Records Section** (Test Data Entry)
4. **Submission & Confirmation Section** (Review & Save)

Each section must be completed in order. Users cannot proceed to the next section until all mandatory fields in the current section are valid.

### 1.2 Navigation Rules

- **Forward Navigation:** User can proceed to next section only when all mandatory fields are populated and valid.
- **Backward Navigation:** User can return to previous sections to edit data.
- **Save State:** All entered data persists during backward/forward navigation within the same form session.
- **Exit Warning:** If user attempts to exit without saving, display warning: "Unsaved data will be lost. Continue?"

---

## SECTION 2: PROJECT INFORMATION SECTION

### 2.1 Field: Project Name

**Field Name:** Project Name  
**Input Type:** Text Input (Free Text)  
**Max Length:** 100 characters  
**Mandatory:** Yes  
**Validation Rules:**
- Cannot be empty
- Must contain at least 2 characters
- Alphanumeric characters, spaces, hyphens, and apostrophes allowed

**UI Behavior:**
- Display as text input field with placeholder: "Enter project name"
- Field border: RED if empty/invalid
- Field border: GREEN if valid
- Character counter: Display "X/100" below field

**Error Messages:**
- If empty: "Project Name is mandatory."
- If less than 2 characters: "Please enter at least 2 characters."

**Validation Trigger:** On field blur and on form submission

---

### 2.2 Field: Location

**Field Name:** Location  
**Input Type:** Text Input (Free Text)  
**Max Length:** 100 characters  
**Mandatory:** Yes  
**Validation Rules:**
- Cannot be empty
- Must contain at least 2 characters

**UI Behavior:**
- Display as text input field with placeholder: "Enter location"
- Field border: RED if empty/invalid
- Field border: GREEN if valid

**Error Messages:**
- If empty: "Location is mandatory."
- If less than 2 characters: "Please enter at least 2 characters."

**Validation Trigger:** On field blur and on form submission

---

### 2.3 Field: Owner

**Field Name:** Owner  
**Input Type:** Text Input (Free Text)  
**Max Length:** 100 characters  
**Mandatory:** Yes  
**Validation Rules:**
- Cannot be empty
- Must contain at least 2 characters

**UI Behavior:**
- Display as text input field with placeholder: "Enter owner name"
- Field border: RED if empty/invalid
- Field border: GREEN if valid

**Error Messages:**
- If empty: "Owner is mandatory."
- If less than 2 characters: "Please enter at least 2 characters."

**Validation Trigger:** On field blur and on form submission

---

### 2.4 Field: Consultant

**Field Name:** Consultant  
**Input Type:** Text Input (Free Text)  
**Max Length:** 100 characters  
**Mandatory:** Yes  
**Validation Rules:**
- Cannot be empty
- Must contain at least 2 characters

**UI Behavior:**
- Display as text input field with placeholder: "Enter consultant name"
- Field border: RED if empty/invalid
- Field border: GREEN if valid

**Error Messages:**
- If empty: "Consultant is mandatory."
- If less than 2 characters: "Please enter at least 2 characters."

**Validation Trigger:** On field blur and on form submission

---

### 2.5 Field: Contractor

**Field Name:** Contractor  
**Input Type:** Text Input (Free Text)  
**Max Length:** 100 characters  
**Mandatory:** Yes  
**Validation Rules:**
- Cannot be empty
- Must contain at least 2 characters

**UI Behavior:**
- Display as text input field with placeholder: "Enter contractor name"
- Field border: RED if empty/invalid
- Field border: GREEN if valid

**Error Messages:**
- If empty: "Contractor is mandatory."
- If less than 2 characters: "Please enter at least 2 characters."

**Validation Trigger:** On field blur and on form submission

---

### 2.6 Field: Test Date

**Field Name:** Test Date  
**Input Type:** Date Picker (Native Mobile Date Picker)  
**Format:** DD/MM/YYYY  
**Mandatory:** Yes (CRITICAL - ENFORCED)  
**Validation Rules:**
- Date cannot be in the future
- Date must be a valid calendar date
- No free-text entry allowed (date picker only)

**UI Behavior:**
- Display as read-only field with calendar icon
- Tap field to open native date picker
- Selected date displays in DD/MM/YYYY format
- If no date selected, field shows placeholder: "Select Test Date"
- Field border: RED if empty/invalid
- Field border: GREEN if valid date selected

**Error Messages:**
- If empty: "Test Date is mandatory. Please select a date."
- If future date: "Test Date cannot be in the future. Please select a valid date."

**Validation Trigger:** On date selection and on form submission

---

### 2.7 Project Information Section - Validation Summary

**Section Completion Criteria:**
- Project Name: Must be filled and valid
- Location: Must be filled and valid
- Owner: Must be filled and valid
- Consultant: Must be filled and valid
- Contractor: Must be filled and valid
- Test Date: Must be selected and valid

**Proceed Button State:**
- DISABLED (grayed out) if any mandatory field is invalid
- ENABLED (blue/active) if all mandatory fields are valid
- Button Label: "Proceed to Test Identification"

**Visual Feedback:**
- Display red asterisk (*) next to all mandatory field labels
- Highlight invalid fields with red border
- Display error messages below each invalid field
- Show summary message at top: "X of 6 required fields completed"

---

## SECTION 3: TEST IDENTIFICATION SECTION

### 3.1 Field: Test Type

**Field Name:** Test Type  
**Input Type:** Text Display (Read-Only, Pre-filled)  
**Value:** "Compressive Strength Test"  
**Mandatory:** Yes  
**Validation:** None (locked field)  
**UI Behavior:**
- Display as disabled/locked text field
- Show lock icon to indicate field cannot be edited
- Background color: Light gray (disabled state)

**Error Handling:** N/A (field is locked)

---

### 3.2 Field: Specimen Type

**Field Name:** Specimen Type  
**Input Type:** Dropdown (Single Select)  
**Mandatory:** Yes  
**Predefined Options:**
- Cube
- Cylinder

**UI Behavior:**
- Display as dropdown/picker field
- Placeholder text: "Select Specimen Type"
- Field border: RED if not selected
- Field border: GREEN if selected
- Show selected value in field
- Tap to open dropdown menu

**Error Messages:**
- If not selected: "Specimen Type is mandatory. Please select an option."

**Validation Trigger:** On selection and on form submission

---

### 3.3 Test Identification Section - Validation Summary

**Section Completion Criteria:**
- Test Type: Locked (always valid)
- Specimen Type: Must be selected

**Proceed Button State:**
- DISABLED (grayed out) if Specimen Type not selected
- ENABLED (blue/active) if Specimen Type selected
- Button Label: "Proceed to Test Records"

**Visual Feedback:**
- Display red asterisk (*) next to mandatory field labels
- Highlight invalid fields with red border
- Display error messages below each invalid field
- Show summary message: "X of 1 required field completed"

---

## SECTION 4: TEST RECORDS SECTION

### 4.1 Section Overview

This section allows entry of up to 10 individual test records. Each record consists of:
- Structural Element (mandatory text)
- Concrete Supplier/Company (mandatory text)
- Casting Date (mandatory date picker)
- Age of Test (auto-calculated, display only)
- Required Design Strength (mandatory numeric)
- Measured Concrete Strength (mandatory numeric)
- Compliance Result (auto-calculated, display only)

### 4.2 Field: Structural Element

**Field Name:** Structural Element  
**Input Type:** Text Input (Free Text)  
**Max Length:** 50 characters  
**Mandatory:** Yes (for each record)  
**Validation Rules:**
- Cannot be empty if record is partially filled
- Must contain at least 1 character

**UI Behavior:**
- Display as text input field with placeholder: "e.g., Column, Beam, Slab"
- Field border: RED if empty/invalid
- Field border: GREEN if valid
- Example: "Column", "Beam", "Slab"

**Error Messages:**
- If empty (record partially filled): "Structural Element is mandatory."

**Validation Trigger:** On field blur and on form submission

---

### 4.3 Field: Concrete Supplier / Company

**Field Name:** Concrete Supplier / Company  
**Input Type:** Text Input (Free Text)  
**Max Length:** 50 characters  
**Mandatory:** Yes (for each record)  
**Validation Rules:**
- Cannot be empty if record is partially filled
- Must contain at least 1 character

**UI Behavior:**
- Display as text input field with placeholder: "Enter supplier name"
- Field border: RED if empty/invalid
- Field border: GREEN if valid

**Error Messages:**
- If empty (record partially filled): "Concrete Supplier is mandatory."

**Validation Trigger:** On field blur and on form submission

---

### 4.4 Field: Casting Date

**Field Name:** Casting Date  
**Input Type:** Date Picker (Native Mobile Date Picker)  
**Format:** DD/MM/YYYY  
**Mandatory:** Yes (for each record) (CRITICAL - ENFORCED)  
**Validation Rules:**
- Date cannot be later than Test Date
- Date must be a valid calendar date
- No free-text entry allowed (date picker only)

**UI Behavior:**
- Display as read-only field with calendar icon
- Tap field to open native date picker
- Selected date displays in DD/MM/YYYY format
- If no date selected, field shows placeholder: "Select Casting Date"
- Field border: RED if empty/invalid
- Field border: GREEN if valid date selected

**Error Messages:**
- If empty (record partially filled): "Casting Date is mandatory."
- If later than Test Date: "Casting Date cannot be later than Test Date."

**Validation Trigger:** On date selection and on form submission

---

### 4.5 Field: Age of Test (Auto-Calculated)

**Field Name:** Age of Test  
**Input Type:** Numeric Display (Read-Only, Auto-Calculated)  
**Unit:** Days  
**Mandatory:** No (display only)  
**Calculation Logic:**
```
Age of Test (days) = Test Date - Casting Date
```

**UI Behavior:**
- Display as read-only numeric field
- Show unit label: "days"
- Background color: Light gray (disabled state)
- Auto-calculate when both dates are entered
- Show "Auto-calculated" note below field

**Validation:** N/A (field is auto-calculated)

---

### 4.6 Field: Required Design Strength

**Field Name:** Required Design Strength  
**Input Type:** Numeric Input (Decimal allowed)  
**Unit:** MPa (or kg/cm² - user selectable)  
**Mandatory:** Yes (for each record)  
**Validation Rules:**
- Must be numeric (integers or decimals with up to 1 decimal place)
- Cannot be negative
- Range: 0 to 100 MPa (realistic range)

**UI Behavior:**
- Display as numeric input field with "MPa" suffix
- Placeholder: "0.0"
- Show unit label: "MPa" to the right of input
- Field border: RED if empty or invalid
- Field border: GREEN if valid
- Keyboard: Numeric keypad on mobile (decimal point allowed)

**Error Messages:**
- If empty (record partially filled): "Required Strength is mandatory."
- If negative: "Required Strength cannot be negative."
- If exceeds 100: "Required Strength exceeds realistic range."
- If non-numeric: "Required Strength must be numeric."

**Validation Trigger:** On field blur and on form submission

---

### 4.7 Field: Measured Concrete Strength

**Field Name:** Measured Concrete Strength  
**Input Type:** Numeric Input (Decimal allowed)  
**Unit:** MPa (or kg/cm² - user selectable)  
**Mandatory:** Yes (for each record)  
**Validation Rules:**
- Must be numeric (integers or decimals with up to 1 decimal place)
- Cannot be negative
- Range: 0 to 100 MPa (realistic range)

**UI Behavior:**
- Display as numeric input field with "MPa" suffix
- Placeholder: "0.0"
- Show unit label: "MPa" to the right of input
- Field border: RED if empty or invalid
- Field border: GREEN if valid
- Keyboard: Numeric keypad on mobile (decimal point allowed)

**Error Messages:**
- If empty (record partially filled): "Measured Strength is mandatory."
- If negative: "Measured Strength cannot be negative."
- If exceeds 100: "Measured Strength exceeds realistic range."
- If non-numeric: "Measured Strength must be numeric."

**Validation Trigger:** On field blur and on form submission

---

### 4.8 Automatic Compliance Determination

**Logic:** Based on entered strength values, automatically determine compliance:

```
IF Measured Strength >= Required Design Strength THEN
  Compliance Status = "Compliant"
  Color = Green (#10B981)
ELSE
  Compliance Status = "Not Compliant"
  Color = Red (#EF4444)
END IF
```

**UI Behavior:**
- Display compliance status BELOW the Measured Strength field
- Show as colored badge with text
- Format: "Compliance: [Status]"
- Example: "Compliance: Compliant" (green) or "Compliance: Not Compliant" (red)
- Update compliance in real-time as user enters/modifies strength values
- Color-code compliance badge:
  - Compliant: Green background (#D1FAE5), green text (#065F46)
  - Not Compliant: Red background (#FEE2E2), red text (#7F1D1D)

**Validation:** Compliance is automatically calculated; no user input required.

---

### 4.9 Test Records Section - UI Layout

**Layout Pattern (Repeating for each record):**

```
┌─────────────────────────────────────────┐
│ TEST RECORD #1                          │
├─────────────────────────────────────────┤
│ Structural Element: *                   │
│ [________]                              │
│                                         │
│ Concrete Supplier: *                    │
│ [________]                              │
│                                         │
│ Casting Date: *                         │
│ [________]                              │
│                                         │
│ Age of Test (days):                     │
│ [________] (auto-calculated)            │
│                                         │
│ Required Strength (MPa): *              │
│ [________]                              │
│                                         │
│ Measured Strength (MPa): *              │
│ [________]                              │
│                                         │
│ Compliance: Compliant ✓                 │
│ [Green Badge]                           │
│                                         │
│ [Delete Record] [Add Another Record]    │
└─────────────────────────────────────────┘
```

---

### 4.10 Adding Multiple Test Records

**Initial State:**
- Form displays ONE empty test record (Record 1)
- "Add Another Test Record" button is visible below the record

**Adding Records:**
- User fills all fields for Record 1
- User taps "Add Another Test Record" button
- New record entry appears (Record 2)
- Previous record entry becomes collapsible (can be expanded to edit)
- Maximum 10 records can be added
- "Add Another Test Record" button is DISABLED when 10 records are reached

**Removing Records:**
- Each record has a "Delete" button (trash icon)
- Tapping "Delete" removes that record
- Remaining records are renumbered automatically
- Confirmation dialog: "Delete Record X? This action cannot be undone."

**UI Behavior:**
- Display records in collapsible cards
- Show summary: "X of 10 test records entered"
- Highlight incomplete records with yellow warning icon
- Highlight complete records with green checkmark icon

---

### 4.11 Test Records Section - Validation Summary

**Section Completion Criteria:**
- At least ONE complete test record must be entered
- All entered test records must have valid data
- No partially filled records (all-or-nothing rule)
- All Casting Dates must be ≤ Test Date
- All strength values must be valid (0-100 MPa)

**Proceed Button State:**
- DISABLED if no complete records or any record has invalid data
- ENABLED if at least one valid complete record is entered
- Button Label: "Review & Submit"

**Visual Feedback:**
- Display red asterisk (*) next to mandatory field labels
- Highlight invalid fields with red border
- Display error messages below each invalid field
- Show summary: "X of X test records valid"
- Show warning if any record is incomplete

---

## SECTION 5: SUBMISSION & CONFIRMATION SECTION

### 5.1 Submission Review Screen

**Purpose:** Display a summary of all entered data for final review before saving.

**Content Display:**

```
┌─────────────────────────────────────────┐
│ SUBMISSION SUMMARY                      │
├─────────────────────────────────────────┤
│                                         │
│ PROJECT INFORMATION                     │
│ ─────────────────────────────────────   │
│ Project Name: [Name]                    │
│ Location: [Location]                    │
│ Owner: [Owner]                          │
│ Consultant: [Consultant]                │
│ Contractor: [Contractor]                │
│ Test Date: DD/MM/YYYY                   │
│                                         │
│ TEST IDENTIFICATION                     │
│ ─────────────────────────────────────   │
│ Test Type: Compressive Strength Test    │
│ Specimen Type: [Type]                   │
│                                         │
│ TEST RECORDS                            │
│ ─────────────────────────────────────   │
│ Record 1: [Element] - [Supplier]        │
│   Casting: DD/MM/YYYY | Age: X days     │
│   Required: X MPa | Measured: X MPa     │
│   Compliance: Compliant ✓               │
│ ... (up to 10 records)                  │
│                                         │
│ [Edit] [Cancel] [Confirm & Save]        │
└─────────────────────────────────────────┘
```

**UI Behavior:**
- Display all entered data in read-only format
- Group data by section (Project, Identification, Records)
- Show compliance status for each record with color coding
- Provide "Edit" button to return to previous sections
- Provide "Cancel" button to discard and start over
- Provide "Confirm & Save" button to finalize submission

---

### 5.2 Final Validation Before Save

**Pre-Save Validation Checklist:**

Before allowing save, system must verify:

1. ✓ Test Date is present and valid
2. ✓ Test Date is not in the future
3. ✓ Project Name is present and valid
4. ✓ Location is present and valid
5. ✓ Owner is present and valid
6. ✓ Consultant is present and valid
7. ✓ Contractor is present and valid
8. ✓ Specimen Type is selected
9. ✓ At least one complete test record is entered
10. ✓ All Casting Dates are ≤ Test Date
11. ✓ All strength values are valid (0-100 MPa)
12. ✓ All compliance statuses are correctly calculated
13. ✓ No partially filled records

**Validation Trigger:** On "Confirm & Save" button tap

**If Validation Fails:**
- Display error dialog with list of validation failures
- Highlight failed validations in red
- Provide "Go Back" button to return to form and correct errors
- Do NOT save data

**If Validation Passes:**
- Proceed to save confirmation

---

### 5.3 Save Confirmation

**Success Message:**
```
┌─────────────────────────────────────────┐
│ ✓ SUCCESS                               │
├─────────────────────────────────────────┤
│                                         │
│ Compressive Strength Test data has      │
│ been saved successfully.                │
│                                         │
│ Test ID: [Auto-generated ID]            │
│ Date: DD/MM/YYYY                        │
│ Records Saved: X                        │
│ Compliant Records: X                    │
│ Non-Compliant Records: X                │
│                                         │
│ [View Details] [New Test] [Back Home]   │
└─────────────────────────────────────────┘
```

**Data Storage:**
- Generate unique Test ID (timestamp-based or UUID)
- Store all data with timestamp
- Create audit trail entry
- Sync to backend database

**Post-Save Options:**
- "View Details": Display saved test record
- "New Test": Clear form and start new test entry
- "Back Home": Return to main dashboard

---

## SECTION 6: VALIDATION RULES & CONSTRAINTS

### 6.1 Mandatory Field Enforcement

**Mandatory Fields (Cannot be skipped):**

| Section | Field | Enforcement |
|---------|-------|-------------|
| Project | Project Name | Text input, min 2 chars |
| Project | Location | Text input, min 2 chars |
| Project | Owner | Text input, min 2 chars |
| Project | Consultant | Text input, min 2 chars |
| Project | Contractor | Text input, min 2 chars |
| Project | Test Date | Date picker only, not future |
| Identification | Test Type | Locked (always valid) |
| Identification | Specimen Type | Dropdown selection |
| Records | Structural Element | Text input (if record filled) |
| Records | Concrete Supplier | Text input (if record filled) |
| Records | Casting Date | Date picker, ≤ Test Date |
| Records | Required Strength | Numeric, 0-100 MPa |
| Records | Measured Strength | Numeric, 0-100 MPa |

**Visual Indicator:** Red asterisk (*) next to all mandatory field labels

**Enforcement Mechanism:**
- Form cannot proceed to next section if mandatory fields are empty
- Form cannot be submitted if mandatory fields are invalid
- Error messages appear immediately below invalid fields
- Invalid fields are highlighted with red border

---

### 6.2 Input Constraints

**Test Date:**
- Format: DD/MM/YYYY
- Input Method: Date picker only (no free text)
- Range: Not in future
- Validation: On selection and on submission

**Casting Date:**
- Format: DD/MM/YYYY
- Input Method: Date picker only (no free text)
- Range: Not later than Test Date
- Validation: On selection and on submission

**Project Fields (Name, Location, Owner, Consultant, Contractor):**
- Max Length: 100 characters
- Allowed Characters: A-Z, a-z, 0-9, space, hyphen (-), apostrophe (')
- Min Length: 2 characters
- Validation: On blur and on submission

**Specimen Type:**
- Type: Single select dropdown
- Options: Cube, Cylinder
- Validation: On selection and on submission

**Structural Element:**
- Max Length: 50 characters
- Allowed Characters: A-Z, a-z, 0-9, space, hyphen
- Min Length: 1 character (if record filled)
- Validation: On blur and on submission

**Concrete Supplier:**
- Max Length: 50 characters
- Allowed Characters: A-Z, a-z, 0-9, space, hyphen
- Min Length: 1 character (if record filled)
- Validation: On blur and on submission

**Required Strength:**
- Type: Numeric (decimal with 1 decimal place)
- Range: 0 to 100 MPa
- Validation: On blur and on submission
- Error if: Negative, non-numeric, exceeds 100

**Measured Strength:**
- Type: Numeric (decimal with 1 decimal place)
- Range: 0 to 100 MPa
- Validation: On blur and on submission
- Error if: Negative, non-numeric, exceeds 100

---

### 6.3 Compliance Determination Logic

**Automatic Compliance (No User Input):**

```
IF Measured Strength >= Required Design Strength THEN
  Compliance Status = "Compliant"
ELSE
  Compliance Status = "Not Compliant"
END IF
```

**Validation:** Compliance is calculated in real-time; no validation errors for compliance.

---

### 6.4 Error Prevention & Handling

**Error Prevention Strategies:**

1. **Date Picker:** Prevents invalid dates by using native date picker
2. **Numeric Keyboard:** Mobile numeric keypad for strength values
3. **Dropdown Selection:** Prevents invalid specimen type entries
4. **Range Validation:** Prevents strength values outside 0-100 MPa
5. **Date Comparison:** Prevents Casting Date later than Test Date
6. **All-or-Nothing Rule:** Prevents partially filled records

**Error Handling:**

| Error Type | Prevention | Handling |
|-----------|-----------|----------|
| Invalid Test Date | Date picker only | Error message + date picker reopens |
| Missing Test Date | Mandatory enforcement | Red border + error message |
| Invalid Casting Date | Date picker only | Error message + date picker reopens |
| Casting Date > Test Date | Validation on entry | Error message + date picker reopens |
| Invalid Strength Value | Numeric keyboard + range check | Error message + field highlight |
| Partially Filled Record | All-or-nothing validation | Error message + field highlight |
| Missing Project Info | Mandatory enforcement | Red border + error message |

---

## SECTION 7: USER INTERFACE SPECIFICATIONS

### 7.1 Field Styling

**Mandatory Field Indicator:**
- Red asterisk (*) next to field label
- Example: "Test Date *"

**Valid Field State:**
- Border: Green (2px)
- Background: White
- Icon: Green checkmark (✓)
- Text Color: Black

**Invalid Field State:**
- Border: Red (2px)
- Background: Light red (#FFE6E6)
- Icon: Red X (✗)
- Text Color: Red
- Error message displayed below field in red text

**Disabled Field State:**
- Border: Gray (1px)
- Background: Light gray (#F5F5F5)
- Text Color: Gray
- Icon: Lock icon
- No interaction allowed

**Focus State:**
- Border: Blue (2px)
- Background: Light blue (#F0F8FF)
- Cursor visible in text fields

---

### 7.2 Button Styling

**Proceed/Submit Buttons:**

**Enabled State:**
- Background: Blue (#007AFF)
- Text: White
- Border: None
- Cursor: Pointer
- Tap feedback: Slight opacity change

**Disabled State:**
- Background: Light gray (#CCCCCC)
- Text: Gray (#666666)
- Border: None
- Cursor: Not-allowed
- No tap feedback

**Secondary Buttons (Edit, Cancel, Delete):**
- Background: Light gray (#F5F5F5)
- Text: Blue (#007AFF)
- Border: Blue (1px)
- Cursor: Pointer

---

### 7.3 Error Message Display

**Error Message Format:**
- Position: Below the invalid field
- Color: Red (#FF0000)
- Font Size: 12px
- Font Weight: Regular
- Icon: Red X (✗)
- Example: "✗ Test Date is mandatory. Please select a date."

**Multiple Errors:**
- Display all errors for a field
- Stack errors vertically
- Each error on separate line

---

### 7.4 Mobile Responsiveness

**Screen Sizes Supported:**
- Small phones: 320px width
- Standard phones: 375px width
- Large phones: 414px width
- Tablets: 768px+ width

**Responsive Behavior:**
- Single column layout on phones
- Two column layout on tablets (optional)
- Full-width fields on all screen sizes
- Touch-friendly button sizes: Minimum 44px height
- Adequate spacing between fields: 16px minimum

---

## SECTION 8: DATA STORAGE & PERSISTENCE

### 8.1 Data Structure

**Compressive Strength Test Record:**

```json
{
  "testId": "COMP_20240115_001",
  "testType": "Compressive Strength Test",
  "projectName": "Building A",
  "location": "Downtown",
  "owner": "ABC Corporation",
  "consultant": "XYZ Engineers",
  "contractor": "DEF Construction",
  "testDate": "15/01/2024",
  "specimenType": "Cube",
  "testRecords": [
    {
      "recordNumber": 1,
      "structuralElement": "Column",
      "concreteSupplier": "ABC Concrete",
      "castingDate": "10/01/2024",
      "ageOfTest": 5,
      "requiredStrength": 30,
      "measuredStrength": 32,
      "complianceStatus": "Compliant"
    },
    {
      "recordNumber": 2,
      "structuralElement": "Beam",
      "concreteSupplier": "ABC Concrete",
      "castingDate": "10/01/2024",
      "ageOfTest": 5,
      "requiredStrength": 30,
      "measuredStrength": 28,
      "complianceStatus": "Not Compliant"
    }
  ],
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:30:00Z",
  "userId": "user_12345",
  "projectId": "project_67890",
  "status": "Submitted"
}
```

### 8.2 Data Validation Before Storage

**Pre-Storage Validation:**

1. Verify Test Date is valid and not in future
2. Verify all project information is filled and valid
3. Verify Specimen Type is selected
4. Verify at least one complete test record exists
5. Verify all Casting Dates are ≤ Test Date
6. Verify all strength values are valid (0-100 MPa)
7. Verify all compliance statuses are correctly calculated
8. Verify no partially filled records

**If Validation Fails:**
- Do NOT save data
- Display error message to user
- Return to form for correction

**If Validation Passes:**
- Generate unique Test ID
- Add timestamp
- Save to local database
- Sync to backend

---

### 8.3 Audit Trail

**Audit Entry:**
```json
{
  "auditId": "AUDIT_20240115_001",
  "testId": "COMP_20240115_001",
  "action": "Created",
  "timestamp": "2024-01-15T10:30:00Z",
  "userId": "user_12345",
  "changes": {
    "projectName": "Building A",
    "testDate": "15/01/2024",
    "recordCount": 2,
    "compliantCount": 1,
    "nonCompliantCount": 1
  }
}
```

---

## SECTION 9: CRITICAL ENFORCEMENT RULES

### 9.1 Test Date Enforcement (CRITICAL)

**Rule 1: Test Date is MANDATORY**
- Form CANNOT be submitted without a valid test date
- Test date field MUST be filled before proceeding to next section
- Visual indicator: Red asterisk (*) and red border if empty

**Rule 2: Date Picker Only (No Free Text)**
- Test date MUST be entered using native date picker
- Free-text entry is NOT allowed
- Field is read-only; tapping opens date picker

**Rule 3: Date Validation**
- Date cannot be in the future
- Date must be a valid calendar date

**Rule 4: Error Messaging**
- If date is missing: "Test Date is mandatory. Please select a date."
- If date is in future: "Test Date cannot be in the future."

**Rule 5: Submission Blocking**
- If test date is invalid or missing, form submission is BLOCKED
- Error message is displayed prominently
- User must correct date before proceeding

---

### 9.2 Casting Date Enforcement (CRITICAL)

**Rule 1: Casting Date is MANDATORY**
- Each test record MUST have a valid casting date
- Casting date field MUST be filled for complete records
- Visual indicator: Red asterisk (*) and red border if empty

**Rule 2: Date Picker Only (No Free Text)**
- Casting date MUST be entered using native date picker
- Free-text entry is NOT allowed
- Field is read-only; tapping opens date picker

**Rule 3: Date Validation**
- Casting Date cannot be later than Test Date
- Casting Date must be a valid calendar date

**Rule 4: Error Messaging**
- If date is missing: "Casting Date is mandatory."
- If date is later than Test Date: "Casting Date cannot be later than Test Date."

**Rule 5: Submission Blocking**
- If casting date is invalid or missing, form submission is BLOCKED
- Error message is displayed prominently
- User must correct date before proceeding

---

### 9.3 Compliance Determination (AUTOMATIC & UNAMBIGUOUS)

**Rule 1: Automatic Calculation**
- Compliance is calculated automatically based on strength values
- No user input required for compliance determination
- Calculation is performed in real-time as values are entered

**Rule 2: Unambiguous Logic**
- IF Measured Strength >= Required Strength THEN Compliant
- IF Measured Strength < Required Strength THEN Not Compliant
- No gray areas or exceptions

**Rule 3: Visual Feedback**
- Compliance status displayed immediately after strength values entered
- Color-coded: Green for Compliant, Red for Not Compliant
- Clear text label: "Compliant" or "Not Compliant"

**Rule 4: No Manual Override**
- Compliance status cannot be manually changed
- Compliance is always calculated based on entered values
- If values change, compliance automatically recalculates

---

### 9.4 All-or-Nothing Record Rule

**Rule 1: Complete Records Only**
- Each record must be either completely filled or completely empty
- Partially filled records are rejected with error message
- If any field in a record is filled, ALL fields must be filled

**Rule 2: Validation on Submission**
- System checks each record for partial completion
- If partial record found, display error: "Record X is incomplete. Please fill all fields or delete the record."
- Form submission is blocked until all records are complete

**Rule 3: Clear User Guidance**
- Display visual indicators for record completion status
- Show checkmark for complete records
- Show warning icon for incomplete records

---

## SECTION 10: SELF-CHECK VERIFICATION

### 10.1 Test Date Enforcement Verification

**Verification Checklist:**

✓ **Test Date is Mandatory:**
- Form cannot proceed without test date
- Red asterisk (*) displayed next to "Test Date" label
- Red border displayed around test date field if empty
- Error message: "Test Date is mandatory. Please select a date."

✓ **Test Date Uses Date Picker:**
- Date picker is native mobile date picker
- No free-text entry allowed
- Field is read-only
- Tapping field opens date picker

✓ **Test Date Validation:**
- Date cannot be in future (validated on selection)
- Date must be valid calendar date (enforced by date picker)

✓ **Test Date Blocks Submission:**
- Form submission is blocked if test date is missing
- Form submission is blocked if test date is invalid
- Error message is displayed prominently
- User must correct date before proceeding

✓ **Test Date Format:**
- Format is DD/MM/YYYY
- Format is enforced by date picker
- Format is displayed consistently throughout form

---

### 10.2 Casting Date Enforcement Verification

**Verification Checklist:**

✓ **Casting Date is Mandatory:**
- Each record cannot be complete without casting date
- Red asterisk (*) displayed next to "Casting Date" label
- Red border displayed around casting date field if empty
- Error message: "Casting Date is mandatory."

✓ **Casting Date Uses Date Picker:**
- Date picker is native mobile date picker
- No free-text entry allowed
- Field is read-only
- Tapping field opens date picker

✓ **Casting Date Validation:**
- Date cannot be later than Test Date (validated on selection)
- Date must be valid calendar date (enforced by date picker)
- Error message: "Casting Date cannot be later than Test Date."

✓ **Casting Date Blocks Submission:**
- Form submission is blocked if casting date is missing
- Form submission is blocked if casting date is invalid
- Error message is displayed prominently
- User must correct date before proceeding

✓ **Casting Date Format:**
- Format is DD/MM/YYYY
- Format is enforced by date picker
- Format is displayed consistently throughout form

---

### 10.3 Compliance Determination Verification

**Verification Checklist:**

✓ **Compliance is Automatic:**
- Compliance calculated automatically based on strength values
- No user input required
- Calculation performed in real-time

✓ **Compliance is Unambiguous:**
- IF Measured >= Required THEN Compliant
- IF Measured < Required THEN Not Compliant
- No exceptions or gray areas

✓ **Compliance is Accurate:**
- Compliance status always matches strength comparison
- If values change, compliance automatically recalculates
- No manual override possible

✓ **Compliance is Visible:**
- Compliance status displayed prominently
- Color-coded for quick visual identification
- Clear text label for clarity

---

### 10.4 All Required Fields Verification

**Verification Checklist:**

✓ **Project Information:**
- Project Name: Mandatory, text input
- Location: Mandatory, text input
- Owner: Mandatory, text input
- Consultant: Mandatory, text input
- Contractor: Mandatory, text input
- Test Date: Mandatory, date picker

✓ **Test Identification:**
- Test Type: Locked (always valid)
- Specimen Type: Mandatory, dropdown

✓ **Test Records:**
- Structural Element: Mandatory (if record filled)
- Concrete Supplier: Mandatory (if record filled)
- Casting Date: Mandatory (if record filled)
- Required Strength: Mandatory (if record filled)
- Measured Strength: Mandatory (if record filled)
- Compliance: Auto-calculated (display only)

✓ **All-or-Nothing Rule:**
- Each record must be completely filled or completely empty
- Partially filled records rejected with error message
- Form submission blocked if partial records exist

---

## SECTION 11: IMPLEMENTATION CHECKLIST

### 11.1 Form Development Checklist

- [ ] Project Name field (text input, validation)
- [ ] Location field (text input, validation)
- [ ] Owner field (text input, validation)
- [ ] Consultant field (text input, validation)
- [ ] Contractor field (text input, validation)
- [ ] Test Date field (date picker, validation)
- [ ] Test Type field (locked, pre-filled)
- [ ] Specimen Type field (dropdown, validation)
- [ ] Structural Element field (text input, validation)
- [ ] Concrete Supplier field (text input, validation)
- [ ] Casting Date field (date picker, validation)
- [ ] Age of Test field (auto-calculated, display only)
- [ ] Required Strength field (numeric input, validation)
- [ ] Measured Strength field (numeric input, validation)
- [ ] Compliance Status field (auto-calculated, display only)
- [ ] Add/Delete test record functionality
- [ ] Mandatory field indicators (red asterisk)
- [ ] Error message display (below fields, red text)
- [ ] Field validation (on blur, on submission)
- [ ] Section navigation (forward/backward)
- [ ] Submission review screen
- [ ] Final validation before save
- [ ] Success confirmation screen
- [ ] Data persistence (local + backend)
- [ ] Audit trail logging

### 11.2 Validation Logic Checklist

- [ ] Test Date: Not in future
- [ ] Test Date: Date picker only (no free text)
- [ ] Casting Date: Not later than Test Date
- [ ] Casting Date: Date picker only (no free text)
- [ ] Project fields: Min 2 characters, max 100 characters
- [ ] Structural Element: Min 1 character, max 50 characters
- [ ] Concrete Supplier: Min 1 character, max 50 characters
- [ ] Required Strength: Numeric, 0-100 MPa
- [ ] Measured Strength: Numeric, 0-100 MPa
- [ ] Compliance: Automatic based on strength comparison
- [ ] Age of Test: Auto-calculated from dates
- [ ] At least one complete test record required
- [ ] No partially filled records allowed
- [ ] All mandatory fields required before submission

### 11.3 UI/UX Checklist

- [ ] Mobile responsive design (320px - 768px+)
- [ ] Touch-friendly button sizes (44px minimum)
- [ ] Clear field labels with mandatory indicators
- [ ] Real-time validation feedback
- [ ] Color-coded compliance badges
- [ ] Collapsible test record cards
- [ ] Summary display before submission
- [ ] Success confirmation message
- [ ] Error prevention strategies
- [ ] Accessibility compliance (WCAG 2.1 AA)

---

## DOCUMENT SIGN-OFF

**Document Version:** 1.0  
**Date:** 2024  
**Prepared By:** Senior Civil Engineer, Concrete Laboratory QA/QC Manager, Mobile Form Architect  
**Status:** Ready for Implementation  

**Key Deliverables:**
- ✓ Structured, step-by-step mobile form prompt
- ✓ All critical fields explicitly marked as mandatory
- ✓ Test Date and Casting Date mandatory with date pickers
- ✓ Form structure mirrors test sheet layout
- ✓ Support for up to 10 test records
- ✓ Automatic compliance determination
- ✓ Input constraints clearly defined
- ✓ Validation rules explicitly stated
- ✓ Error prevention strategies implemented
- ✓ Self-check verification completed

**Implementation Ready:** YES

---

**END OF SPECIFICATION DOCUMENT**
