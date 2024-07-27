# Config

## locale_config_name

- Type: `string`

localization config name, default is `{locale}.json`.

For example, if you set `locale_config_name` to `{locale}.json`, all parsed messages will be added to `${locale_path}/{locale}.json`.

```json
{
  "i18nease.locale_config_name": "{locale}.json"
}
```

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

## exclude_dir

- Type: `string[]`

Exclude folders. i18nease will not parse these folders.

```json
{
  "i18nease.exclude_dir": ["dist/**"]
}
```

## exclude_locale_key

- Type: `string[]`

locale key to exclude. i18nease will not not generate these locale key.

For example, if you set `exclude_locale_key` to `["^colors\\."]`, i18nease will not generate the locale key that starts with `colors.`.

```json
{
  "i18nease.exclude_locale_key": ["^colors\\."]
}
```

## openai_base_url

- Type: `string`

OpenAI base url. You can get it from [OpenAI](https://platform.openai.com/docs/api-reference/introduction).

```json
{
  "i18nease.openai_base_url": "https://api.openai.com/v1"
}
```

## openai_api_key

- Type: `string`

i18nEase will not save your key automatically. If you don't want to enter it every time you translate, you can add it to your VS Code user settings.

```json
{
  "i18nease.openai_api_key": "YOUR_OPENAI_API_KEY"
}
```

## openai_model

- Type: `string`

Supported models:

- `gpt-4-1106-preview`
- `gpt-4`
- `gpt-4-32k`
- `gpt-3.5-turbo-1106`
- `gpt-4o`
- `gpt-4-turbo`
- `gpt-4o-mini`

```json
{
  "i18nease.openai_model": "gpt-3.5-turbo-1106"
}
```
