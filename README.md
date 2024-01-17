# [i18nEase](https://i18nease.hamsterbase.com/)

Please note that i18nEase is a **commercial product** and not open source. This repository is only used to collect feedback and suggestions.

## Why did I develop this plugin?

Previously, when developing international software, I encountered some problems, such as:

1. Whenever I wanted to add a new piece of text, I had to open multiple files for editing. I needed to use `t('title')` in the code, and then add the matching translation in both `zh-CN.json` and `en-US.json` files respectively. Such frequent switching between different files greatly reduced my work efficiency.

2. On the other hand, if I was to use machine translation, I had to copy and paste the original text into chatgpt, then move the translated text word for word back into my code. This operation was not only tedious but also prone to errors.

Later, while reading the vscode source code, I discovered their solution. They use `localize('key',"Default Text")` in the code and then automatically generate all language files through a script.

So, taking this idea, I developed a vscode plugin called [`i18nEase`](https://i18nease.hamsterbase.com/) that solves the two problems mentioned above.

## What is i18nEase used for?

1. Automatically extract localization files from the source code for you
2. Use gpt4 to translate all the localization files with one command.

<table>
	<tr>
		<th width="50%">
			Dynamic Updates
		</th>
		<th width="50%">
	    GPT translate
		</th>
	</tr>
	<tr>
		<td>
			<img src="./images/01.gif">
		</td>
		<td>
			<img src="./images/02.gif">
		</td>
	</tr>
</table>

## How to use i18nease

### Install the i18nease plugin in vscode

You can search for i18nease in the VS Code extension marketplace and download it. The store address is [here](https://marketplace.visualstudio.com/items?itemName=hamsterbase.i18nease).

### Write a localize function.

You can write a very simple localization function based on the i18n library you used before the project.

```js
function localize(key, defaultMessage) {
  // call your i18n function
  return t(key);
}

localize("key", "default message");
```

You don't need to modify the source code `t('key')` you wrote before, i18nease will handle the situation where there is no default message.

- if the key doesn't exist in the translation file, i18nease will automatically add an empty translation.

```json
{
  "key": ""
}
```

- If the original code's t('key') already has a translation, i18nease will automatically ignore it.

```json
{
  "key": "message"
}
```

Currently, i18nease recognizes the following translation functions.

- localize('key', 'default message")
- t('key')
- $t('key')

### Generate locale config

run the `i18nease: Generate locale config` command, and i18nEase will automatically parse your source code and generate the localization files.

if you want to automatically generate the localization file when you save the file, you can run `i18nease: Enable auto generate locale config when source changed` command.

### Translate

run the `i18nease: Translate` command, and i18nEase will automatically translate all the localization files.

your should set your openai api key in the `i18nease.openai_api_key` config.

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
