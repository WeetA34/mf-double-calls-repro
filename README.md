# mf-double-calls-repro

## Description

This project is a repro of double calls when using Module Federation Enhanced Runtime getPublicPath.

List of calls filtered by name including fed:
![Calls filtered by name including fed](01_calls_filtered_fed.png)

Good CSS call (from provider):
![Good CSS call](02_good_css.png)

Duplicated and Wrong CSS call (from consumer instead of provider):
![Wrong CSS call](03_bad_css.png)

rsbuild scaffold has been used to create this project.
## Test

yarn install && yarn dev on provider and consumer

go to http://localhost:3000
