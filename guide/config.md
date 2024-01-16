# Config

## locale_path

- Type: `string`

Path to the locale folder, relative to the workspace root.

```json
{
  "i18nease.locale_path": "src/locales"
}
```

## locale_default

- Type: `string`

Default locale. All parsed messages will be added to this locale.
For example, if you set `locale_default` to `en-US`, all parsed messages will be added to `${locale_path}/en-US.json`.

```json
{
  "i18nease.locale_default": "en-US"
}
```

## locale_other

- Type: `string[]`

Other locales. All parsed messages will be added to these locales.

```json
{
  "i18nease.locale_other": ["zh-CN", "ja-JP"]
}
```

## license

- Type: `string`

License key. You can get it from [Store](https://hamsterbase.com/store/).

```json
{
  "i18nease.license": "YOUR_LICENSE_KEY"
}
```
