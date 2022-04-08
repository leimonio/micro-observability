# Micro-Frontend Observability

![](./screenshot.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 2 projects

- `micro-fe-host` - a project for hosting micro-frontend modules
- `micro-fe-module` - a project for exposing micro-frontend modules

## Prerequisites

- [New Relic](https://one.newrelic.com/)
- Terraform (optional)

## Setup

1. Create a New Relic browser application
2. Add your New Relic script at [`micro-fe-host/public/index.html`](./micro-fe-host/public/index.html#L31)
3. (Optional) Add Terraform local variables at [`micro-fe-module/terraform/locals.tf`](./micro-fe-module/terraform/locals.tf)
4. Run `micro-fe-host`
   - `cd micro-fe-host`
   - `yarn run dev`
5. Run `micro-fe-module`
   - `cd micro-fe-module`
   - `yarn run dev`

---

## Example New Relic Queries</summary>

```sql
SELECT * FROM JavaScriptError WHERE appName = 'mf-apps' SINCE 1 week ago
```

```sql
SELECT * FROM JavaScriptError WHERE appName = 'mf-apps' AND errorType = 'ErrorBoundary' SINCE 1 week ago
```

```sql
SELECT * FROM JavaScriptError WHERE appName = 'mf-apps' AND errorType = 'ErrorBoundary' AND componentSource = 'Header' SINCE 1 week ago
```

```sql
SELECT * FROM PageAction WHERE appName = 'mf-apps' AND moduleName = 'mfe-app-module' AND componentSource = 'Header' SINCE 1 week ago
```

```sql
SELECT count(*) FROM PageAction WHERE appName = 'mf-apps' AND moduleName = 'mfe-app-module' AND componentSource = 'Header' SINCE 1 week ago
```
