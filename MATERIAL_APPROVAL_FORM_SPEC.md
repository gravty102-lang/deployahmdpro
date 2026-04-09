# Material Approval Request Module - Mobile Form System Design

## Module Overview
Mobile-first Material Approval Request (MAR) form for construction projects supporting contractor submission and consultant review workflows.

---

## Section A: Project Information

| Field Label | Field Type | Required | Validation Rules |
|-------------|------------|----------|------------------|
| Project Name | Dropdown (linked to user's projects) | Yes | Must select from active projects |
| Approval Request Number | Auto-generated (read-only) | Yes | Format: `MAR-{PROJECT_CODE}-{YYYYMMDD}-{SEQ}` |
| Consultant | Dropdown | Yes | Select from project consultants |
| Contractor | Auto-populated (read-only) | Yes | From user profile/project assignment |
| Date | Date picker | Yes | Default: current date |
| Day | Auto-calculated (read-only) | Yes | Derived from Date field |

**Auto-generate Logic:**
```javascript
// Example: MAR-PRJ-20250211-001
const requestNumber = `MAR-${projectCode}-${dateStr}-${sequence}`;
```

---

## Section B: Material / Sample Submission Details (Dynamic Repeatable Table)

### Table Row Fields

| Field Label | Field Type | Required | Validation Rules |
|-------------|------------|----------|------------------|
| Item Number | Auto-increment (read-only) | Yes | Auto-generated per row: 1, 2, 3... |
| Material or Sample Name | Text input | Yes | Max 100 characters |
| Quantity | Number input | Yes | Positive number only, max 999,999 |
| Manufacturing Source / Brand | Text input | Yes | Max 100 characters |
| Location of Use on Site | Dropdown/Text | Yes | Predefined locations or custom |
| Supporting Documents | File upload | Yes | Min 1 required: PDF, datasheet, test certificate |
| Photo Upload | Photo capture | Optional | Max 5 photos per item |

### Validation Rules
- At least one material item must be entered
- Each item requires at least one supporting document
- Quantity must be positive (> 0)
- File types: PDF, DOC, DOCX (max 10MB each)

**Repeatable Table Actions:**
- Add Item (+ button)
- Remove Item (trash icon)
- Copy Item (duplicate icon)

---

## Section C: Contractor Declaration

| Field Label | Field Type | Required | Validation Rules |
|-------------|------------|----------|------------------|
| Confirmation Checkbox | Checkbox | Yes | "I confirm all information is accurate" |
| Name | Auto-populated (read-only) | Yes | From logged-in user profile |
| Title | Dropdown | Yes | Select: Project Manager / Site Engineer / Quality Controller |
| Digital Signature | Signature pad | Yes | Touch/finger signature required |
| Submission Date | Auto timestamp | Yes | Auto-captured on submit |

**Validation Logic:**
- Checkbox must be checked
- Signature field must have drawn signature (canvas not empty)
- Submission blocked if any Section B items missing documents

---

## Section D: Consultant Review Section

| Field Label | Field Type | Required | Validation Rules |
|-------------|------------|----------|------------------|
| Reference Item Number | Read-only dropdown | Yes | Select from submitted items |
| Approval Status | Dropdown | Yes | Options: Approved / Approved with Comments / Rejected |
| Comments | Textarea | Conditional | Required if status = Rejected or Approved with Comments |
| Name | Text input | Yes | Consultant name |
| Title | Dropdown | Yes | Select: Project Consultant / Resident Engineer |
| Digital Signature | Signature pad | Yes | Required before status finalization |
| Review Date | Date picker | Yes | Current date default |

**Validation Logic:**
- Status dropdown must have selection (no "Pending" option allowed)
- Comments required for rejection scenarios
- Signature pad required to lock status
- Status cannot be changed after signature

---

## Section E: Owner Acknowledgment (Optional)

| Field Label | Field Type | Required | Validation Rules |
|-------------|------------|----------|------------------|
| Name | Text input | Conditional | Required if project requires owner sign-off |
| Title | Text input | Conditional | Required if Name is entered |
| Digital Signature | Signature pad | Conditional | Required if Name is entered |
| Acknowledgment Date | Auto timestamp | Conditional | Auto-captured on sign |

---

## System Logic Rules

### Submission Blocking Rules
```
IF (Section A has empty required fields) → Block submission
IF (Section B has zero items) → Block submission  
IF (Any Section B item missing documents) → Block submission
IF (Contractor checkbox not checked) → Block submission
IF (Contractor signature not captured) → Block submission
```

### Field Validation Rules
```
Quantity: value > 0, no decimals, max 6 digits
Date: Not in future, not before project start date
File Upload: Min 1 file, Max 10MB, PDF/DOC/DOCX only
Photo Upload: Max 5 photos, JPEG/PNG, Max 5MB each
Signature: Canvas must have touch points, minimum stroke count > 0
```

### Workflow State Machine
```
DRAFT → SUBMITTED → UNDER_REVIEW → APPROVED | REJECTED
         ↓                                    ↓
    (Contractor can edit)              (Consultant can modify)
         ↓                                    ↓
    (Contractor submits)          (Owner acknowledgment if required)
```

### Offline-First Logic
```
1. All form data stored in local IndexedDB
2. Draft saves automatically on every field change
3. Offline indicator shows sync status
4. On connection restore → auto-sync to backend
5. Conflict resolution: Last write wins with timestamp
6. Pending uploads queue with retry (exponential backoff)
```

---

## Mobile Optimization Guidelines

### Step-by-Step Navigation
```
Step 1: Project Information
Step 2: Material Details (with + Add Item)
Step 3: Contractor Declaration
Step 4: Review & Submit
```

### Touch Targets
- Minimum button height: 48px
- Minimum tap area: 44x44px
- Input fields: minimum 44px height
- Signature pad: 150x200px minimum

### Responsive Layout
- Single column on mobile
- Two-column for tablet (Material table)
- Sticky header with progress indicator
- Floating action button for Save Draft

---

## Backend-Ready JSON Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Material Approval Request",
  "type": "object",
  "properties": {
    "requestId": {
      "type": "string",
      "pattern": "^MAR-[A-Z0-9]{3,10}-[0-9]{8}-[0-9]{3}$"
    },
    "projectId": {
      "type": "string",
      "format": "uuid"
    },
    "projectName": {
      "type": "string",
      "maxLength": 200
    },
    "consultantId": {
      "type": "string",
      "format": "uuid"
    },
    "consultantName": {
      "type": "string",
      "maxLength": 100
    },
    "contractorId": {
      "type": "string",
      "format": "uuid"
    },
    "submissionDate": {
      "type": "string",
      "format": "date"
    },
    "dayOfWeek": {
      "type": "string",
      "enum": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    },
    "materials": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "object",
        "properties": {
          "itemNumber": {
            "type": "integer",
            "minimum": 1
          },
          "materialName": {
            "type": "string",
            "maxLength": 100
          },
          "quantity": {
            "type": "number",
            "minimum": 0.001,
            "maximum": 999999
          },
          "manufacturingSource": {
            "type": "string",
            "maxLength": 100
          },
          "siteLocation": {
            "type": "string",
            "maxLength": 200
          },
          "documents": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "fileName": { "type": "string" },
                "fileType": { "type": "string", "enum": ["PDF", "DOC", "DOCX"] },
                "fileSize": { "type": "integer" },
                "uploadedAt": { "type": "string", "format": "date-time" },
                "storageUrl": { "type": "string", "format": "uri" }
              },
              "required": ["fileName", "fileType", "storageUrl"]
            },
            "minItems": 1
          },
          "photos": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "photoUrl": { "type": "string", "format": "uri" },
                "capturedAt": { "type": "string", "format": "date-time" }
              }
            },
            "maxItems": 5
          }
        },
        "required": ["itemNumber", "materialName", "quantity", "manufacturingSource", "siteLocation", "documents"]
      }
    },
    "contractorDeclaration": {
      "type": "object",
      "properties": {
        "confirmed": {
          "type": "boolean"
        },
        "name": {
          "type": "string",
          "maxLength": 100
        },
        "title": {
          "type": "string",
          "enum": ["Project Manager", "Site Engineer", "Quality Controller"]
        },
        "signatureDataUrl": {
          "type": "string",
          "format": "uri"
        },
        "signatureTimestamp": {
          "type": "string",
          "format": "date-time"
        }
      },
      "required": ["confirmed", "name", "title", "signatureDataUrl"]
    },
    "consultantReview": {
      "type": "object",
      "properties": {
        "referenceItemNumber": {
          "type": "integer"
        },
        "status": {
          "type": "string",
          "enum": ["Approved", "Approved with Comments", "Rejected"]
        },
        "comments": {
          "type": "string",
          "maxLength": 1000
        },
        "name": {
          "type": "string",
          "maxLength": 100
        },
        "title": {
          "type": "string",
          "enum": ["Project Consultant", "Resident Engineer"]
        },
        "signatureDataUrl": {
          "type": "string",
          "format": "uri"
        },
        "signatureTimestamp": {
          "type": "string",
          "format": "date-time"
        },
        "reviewDate": {
          "type": "string",
          "format": "date"
        }
      },
      "required": ["referenceItemNumber", "status", "name", "title", "signatureDataUrl"]
    },
    "ownerAcknowledgment": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "maxLength": 100
        },
        "title": {
          "type": "string",
          "maxLength": 100
        },
        "signatureDataUrl": {
          "type": "string",
          "format": "uri"
        },
        "signatureTimestamp": {
          "type": "string",
          "format": "date-time"
        }
      }
    },
    "status": {
      "type": "string",
      "enum": ["DRAFT", "SUBMITTED", "UNDER_REVIEW", "APPROVED", "REJECTED"]
    },
    "syncStatus": {
      "type": "string",
      "enum": ["PENDING", "SYNCED", "CONFLICT"]
    },
    "lastModified": {
      "type": "string",
      "format": "date-time"
    },
    "createdAt": {
      "type": "string",
      "format": "date-time"
    }
  },
  "required": ["requestId", "projectId", "consultantId", "contractorId", "submissionDate", "materials", "contractorDeclaration", "consultantReview", "status"]
}
```

---

## API Endpoints (RESTful)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/v1/material-approvals | Create new request |
| GET | /api/v1/material-approvals/{id} | Get request by ID |
| PUT | /api/v1/material-approvals/{id} | Update request |
| GET | /api/v1/material-approvals?status=SUBMITTED | List by status |
| PUT | /api/v1/material-approvals/{id}/consultant-review | Submit consultant review |
| PUT | /api/v1/material-approvals/{id}/owner-ack | Submit owner acknowledgment |
| GET | /api/v1/material-approvals/{id}/documents/{docId} | Download document |
| DELETE | /api/v1/material-approvals/{id} | Delete draft |

---

## Sync Conflict Resolution

```javascript
// Conflict resolution strategy
function resolveConflict(localRecord, remoteRecord) {
  if (localRecord.lastModified > remoteRecord.lastModified) {
    return { winner: 'local', data: localRecord };
  } else {
    return { winner: 'remote', data: remoteRecord };
  }
}
```

---

*Document Version: 1.0 | Last Updated: 2025-02-11 | Author: Material Approval Module Design Team*
