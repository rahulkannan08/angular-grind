Day 3

## Angular Architecture and Components

### Objectives
- Understand Angular framework architecture.
- Understand the role of Modules, Components, Templates, and Decorators.
- Understand the Bootstrap process.
- Learn how to generate components using Angular CLI.

---

## 1) Angular Architecture (Big Picture)
Angular is a framework made of several building blocks that work together:

- **Module / Application configuration**: tells Angular how to assemble the app.
- **Components**: reusable UI units with logic + HTML + styles.
- **Templates**: HTML views that Angular binds to using directives and interpolation.
- **Decorators**: metadata (like `@Component`, `@NgModule`, `@Injectable`) that Angular reads at build time.
- **Bootstrap**: the start-up step where Angular launches the root component.

---

## 2) Key Concepts With Examples

### A) Decorators
A **decorator** adds metadata to a class.

Example: Component decorator
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  standalone: true,
})
export class HomeComponent {}
```
- `selector`: the HTML tag Angular will render.
- `templateUrl`: where the UI lives.
- `standalone: true`: component does not require an NgModule.

Example: Injectable decorator (service)
```ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EmployeeService {}
```

---

### B) Modules (or Standalone setup)
Traditional Angular uses **NgModules**.
New Angular style often uses **standalone components**.

**Standalone** means:
- Each component can declare its own `imports`.
- No need to create an NgModule for it.

Example (standalone component imports):
```ts
@Component({
  standalone: true,
  imports: [CommonModule],
  template: `<p>Hello</p>`,
})
export class HeaderComponent {}
```

In your project:
- `src/app/app.ts` is a **standalone root component**.
- It imports other standalone components.

---

### C) Components
A component combines:
1. **Template** (HTML)
2. **Logic** (TypeScript)
3. **Styles** (CSS)

Example structure:
- `header.component.ts`
- `header.component.html`
- `header.component.css`

---

### D) Templates
Templates use:
- **Interpolation**: `{{ value }}`
- **Property binding**: `[src]="imageUrl"`
- **Event binding**: `(click)="handler()"`
- **Structural directives**: `*ngFor`, `*ngIf`

Example: list rendering with delete button
```html
<div *ngFor="let item of items">
  <span>{{ item.name }}</span>
  <button (click)="deleteItem(item.id)">Delete</button>
</div>
```

In your project:
- `src/app/student-id-card/student-id-card.html`
  - Uses `*ngFor`
  - Calls `deleteStudent(student.rollNumber)` on button click.

---

## 3) Bootstrap Process
**Bootstrap** is how Angular starts the application.

Typical flow:
1. `main.ts` calls Angular to start.
2. Angular loads the root component.
3. Root component renders its template and imports/components.

Example idea (high level):
- `main.ts` -> bootstrap root component
- root component -> renders `app.html`

---

## 4) Component Generation Using Angular CLI
Create a new component:

```bash
ng generate component header
```
(or shorthand)
```bash
ng g c header
```

If you are using standalone components, Angular will still generate them as components and you will wire them into the `imports` of the parent standalone component.

---

## 5) Practical: Create Header, Footer, Home components

### Recommended structure
- `src/app/components/header/`
- `src/app/components/footer/`
- `src/app/pages/home/`

### Steps (example)
1. Generate components
```bash
ng g c components/header
ng g c components/footer
ng g c pages/home
```

2. Add each component’s selector in the root template
- Example in `app.html`:
```html
<app-header></app-header>
<router-outlet></router-outlet>
<app-footer></app-footer>
```

If no routing is used, you can directly include:
```html
<app-home></app-home>
```

3. If standalone, import components in the parent component
- In a standalone component, add to `imports: [...]`.

---

## 6) Deliverable
✅ **Multi-component Angular application**
- Must include:
  - Header component
  - Footer component
  - Home component
- Must demonstrate:
  - Templates rendering
  - Component wiring (imports or module declarations)

---

## 7) Example “Workflow Explanation” (How files relate)
When you create a component:
- **.ts file**: holds logic + metadata via decorators.
- **.html file**: defines UI.
- **.css file**: defines styling.
- Parent template uses the **selector** to render it.

---

End of Day 3 notes.

