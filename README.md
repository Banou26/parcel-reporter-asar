# parcel-reporter-asar
 Parcel asar packager

Useful if you need to package all of the dist folder into an asar file.

## Usage:

`.parcelrc`
```json
{
  "extends": "@parcel/config-default",
  "reporters": [
    "parcel-reporter-asar",
    // all of these are the native reporters
    "@parcel/reporter-cli",
    "@parcel/reporter-dev-server",
    "@parcel/reporter-bundle-analyzer",
    "@parcel/reporter-bundle-buddy"
  ]
}
```
