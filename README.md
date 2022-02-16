Environment:
```
node -v
v16.13.0

npm -v
8.1.0

npx playwright -V
Version 1.19.1

➜  ms-playwright ll
total 28
drwxrwxr-x  7 andre andre 4096 фев 16 10:13 .
drwxr-xr-x 24 andre andre 4096 дек 27 11:52 ..
drwxrwxr-x  3 andre andre 4096 фев 16 09:35 chromium-965416
drwxrwxr-x  2 andre andre 4096 фев 16 09:35 ffmpeg-1007
drwxrwxr-x  3 andre andre 4096 фев 16 09:36 firefox-1316
drwxrwxr-x  2 andre andre 4096 фев 16 10:12 .links
drwxrwxr-x  4 andre andre 4096 фев 16 09:37 webkit-1609
➜  ms-playwright pwd
/home/andre/.cache/ms-playwright
```

Run:
```shell
npx playwright test viewport-bug.spec.ts --headed -x
```

Go through all the steps (click Step over):

OK
![](2022-02-16_10-44.png)

FAIL
![](2022-02-16_10-43.png)

You may need to run it several times.
