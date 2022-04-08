```
SELECT * FROM JavaScriptError WHERE appName = 'mf-apps' SINCE 1 week ago
```

```
SELECT * FROM JavaScriptError WHERE appName = 'mf-apps' AND errorType = 'ErrorBoundary' SINCE 1 week ago
```

```
SELECT * FROM JavaScriptError WHERE appName = 'mf-apps' AND errorType = 'ErrorBoundary' AND componentSource = 'Header' SINCE 1 week ago
```

```
SELECT * FROM PageAction WHERE appName = 'mf-apps' AND moduleName = 'mfe-app-module' AND componentSource = 'Header' SINCE 1 week ago
```

```
SELECT count(*) FROM PageAction WHERE appName = 'mf-apps' AND moduleName = 'mfe-app-module' AND componentSource = 'Header' SINCE 1 week ago
```
