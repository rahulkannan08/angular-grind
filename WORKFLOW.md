# Student Management: End-to-End Workflow (What’s wired, where, and why)

This document explains the **full flow from UI → component logic → service/state** for the parts that are currently working in this repo.

> Note: In the changes made for this task, the main goal was to fix the build so the Student ID Card UI appears. Employee CRUD UI wiring was **not** modified in this task.

---

## 1) File structure (relevant parts)

### Root / App shell
- **`src/app/app.ts`**
  - Standalone root component (`selector: app-root`)
  - Holds **employee form state** and **employee list data**
  - Imports other standalone components

- **`src/app/app.html`**
  - Template for the root `App`
  - Contains the Employee form + employee table
  - Contains the Student UI mount point:  
    ```html
    <app-student-id-card></app-student-id-card>
    ```

### Student UI
- **`src/app/student-id-card/student-id-card.ts`**
  - Standalone `StudentIdCardComponent`
  - Holds `students: Student[]` (in-memory data)
  - Implements `deleteStudent(rollNumber)`
    
- **`src/app/student-id-card/student-id-card.html`**
  - Renders student cards with `*ngFor`
  - Delete button triggers `(click)="deleteStudent(student.rollNumber)"`

### Models
- **`src/app/models/student.model.ts`**
  - Defines `Student` interface used by the StudentIdCardComponent

### Employee logic (not changed in this task)
- **`src/app/services/employee.service.ts`**
  - In-memory store: `employees: Employee[] = []`
  - CRUD-ish methods: `addEmployee`, `getEmployees`, `updateEmployee`, `deleteEmployee`

- **`src/app/models/employee.model.ts`**
  - Defines the `Employee` interface used by App and EmployeeService

---

## 2) Build fix done in this task (why `<app-student-id-card>` failed)

### Symptom
When running `ng serve`, Angular reported:
- **`NG8001: 'app-student-id-card' is not a known element`**

### Root cause
`src/app/app.html` uses the selector:
- `<app-student-id-card></app-student-id-card>`

But the standalone root component in **`src/app/app.ts`** did not include `StudentIdCardComponent` in its `imports`.

### Fix (implemented)
In **`src/app/app.ts`**:
- Added:
  - `import { StudentIdCardComponent } from './student-id-card/student-id-card';`
- Updated standalone component metadata:
  - `imports: [CommonModule, FormsModule, StudentIdCardComponent]`

### Result
Angular now recognizes the element and mounts the Student ID card UI.

---

## 3) Student “CRUD to UI” workflow that is working now

Because the StudentIdCard component uses an in-memory array, its workflow is a classic UI CRUD loop:

### Step A — Initial UI render
1. `App` renders `<app-student-id-card>` inside **`src/app/app.html`**.
2. Angular instantiates **`StudentIdCardComponent`**.
3. `StudentIdCardComponent` initializes:
   - `students: Student[] = [...]` (hardcoded seed data)
4. In **`student-id-card.html`**:
   - `*ngFor="let student of students"` renders one card per student.

### Step B — Delete action (UI → component state update)
1. User clicks **Delete** on a student card.
2. Click handler calls:
   - `deleteStudent(student.rollNumber)`
3. In **`student-id-card.ts`**:
   - `this.students = this.students.filter(s => s.rollNumber !== rollNumber)`
4. Angular change detection re-renders the `*ngFor` list.

### Where the “console CRUD” shows up
- `deleteStudent()` logs:
  - `DELETE CLICKED: <rollNumber>`
  - `UPDATED LIST: [...]`

This means the delete is visible in the UI **and** reflected in the console.

---

## 4) Employee CRUD flow (current state)

### Current behavior in code (based on existing files)
- `App` keeps:
  - `employees: Employee[]`
  - `employee: Employee` form model
  - `isEditMode: boolean`

### How UI hooks should work (as intended)
- `addEmployee()`:
  - calls `employeeService.addEmployee()` or `employeeService.updateEmployee()` depending on `isEditMode`
  - then `resetForm()` and `loadEmployees()`

- `deleteEmployee(id)`:
  - calls `employeeService.deleteEmployee(id)`
  - then `loadEmployees()`

### Important note
In this task, no edits were applied to employee templates/components/services.
So if employee CRUD is not appearing correctly in the UI, the fix needs to be done in the **employee templates/components wiring**, not in the student component.

---

## 5) Summary: What was changed vs what already existed

### Changed in this task
- **`src/app/app.ts`**
  - Added `StudentIdCardComponent` to standalone `imports`

### Already existed (and now works because it mounts)
- Student UI rendering (`*ngFor` cards)
- Student delete behavior (updates `students` array)
- Delete console logs

### Not part of this task’s implementation
- Any “employee CRUD to UI” wiring fixes

---

## 6) Quick checklist to verify in browser

1. Start dev server.
2. Open: `http://localhost:4300/`
3. Ensure Student cards appear.
4. Click **Delete** on a student card.
   - Cards should disappear immediately.
   - Browser console should show `DELETE CLICKED` and `UPDATED LIST` logs.

