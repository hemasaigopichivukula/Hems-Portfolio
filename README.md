
# Setup & Run

## Install
```bash
npm install
npm install --save-dev cross-env
````

## Run (Dev)

```bash
npm run dev
```

Open:

```
http://localhost:5000
```

## If port is busy

```bash
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

## Production

```bash
npm run build
npm start
```

## Notes

* No build needed for `dev`
* Build required for `start`

```
