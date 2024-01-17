---
outline: deep
---

# Get started

You can search for i18nease in the VS Code extension marketplace and download it. The store address is [here](https://marketplace.visualstudio.com/items?itemName=hamsterbase.i18nease).

## How to use i18nease

After installing the plugin, run the `i18nease: Generate locale config` command, and it will automatically parse your source code and generate the localize config.

The first time you run it, activation is required, which you can choose to do for free. Once activated, as long as the current window is not closed, it will remain active.

## Why should I use i18nease?

There are many common i18n solutions available at present, and most of them are implemented through `t('key')` or `$t('key')`. i18nease will recognize these functions and generate the corresponding translation files.

For instance, if you write `t('key')`, then i18nease will create a corresponding translation file for each language, such as `en-US.json`, `zh-CN.json`.

```json
{
  "key": ""
}
```

You can also directly write the default value for the `key` in the code, and then you can write your own `localize` function, for example, `localize('key', "defaultMessage")`. i18nease will recognize this function and generate the corresponding translation files.

```js
function localize(key, defaultMessage) {
  return t(key);
}

localize("key", "default message");
```

Currently, i18nease recognizes the following translation functions.

1. localize('key', 'default message")
2. t('key')
3. $t('key')

## Privacy Agreement

All features of the i18nEase extension are completely offline (including authorization and activation). It does not collect any information and has no telemetry or embedded points.

The i18nEase extension will support text translation through the gpt api in the future. We will send the text to the api address you have configured. It will not connect to the i18nEase extension server.

## End User License Agreement (EULA)

This End User License Agreement (“Agreement”) is a legal agreement between you, the user (“User” or “You”), and the software service provider (“We” or “Service Provider”). Please read the following terms and conditions carefully.

1. Free TrialsOur software offers an unlimited number of free trials. Users can repeatedly test all features of the software without any charge.
2. License Key GenerationUpon purchasing the software, users will be able to generate license keys using the provided order number and machine code at the time of purchase. Each purchase is entitled to generating up to 5 license keys.
3. RestrictionsUsers are prohibited from cracking, reselling, redeveloping, or republishing the software. Any violation of these behaviors will result in legal action.

Disclaimer of WarrantyUsers may encounter damages due to system instability, compatibility issues, and other factors while using the software. We are not responsible for any direct or indirect losses caused by these reasons.

Governing Law and JurisdictionThis Agreement is signed in Xuhui District, Shanghai, People’s Republic of China. Any disputes about the content or the execution of this Agreement, including but not limited to contract or other property rights disputes, shall first be attempted to be settled through friendly negotiation between both parties; if negotiation fails, both parties agree to submit the dispute to the jurisdiction and resolution by the People’s Court of Xuhui District, Shanghai.
