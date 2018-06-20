# ltng-search

This is a Chrome extension for searching the [Lightning Component Library](https://developer.salesforce.com/docs/component-library/overview/components) via Chrome.  You can install it via the [Chrome Web Store](https://chrome.google.com/webstore/detail/lightning-component-libra/ajdlkpnipkkkdlfbdnkciipkfcommpkk?authuser=1).

Or install it manually by:

1. Going to Setup -> More Tools -> Extensions in Chrome
2. Check "Developer Mode" to on
3. Clone this repo 
4. Click "Load Unpacked" from the Extensions manager
5. Select the folder of the repo
6. Enjoy

To use it, type "ltng" in the omnibox/url bar and hit tab or space.  Then type the full name of the component/interface/event you want to search.  A la:

* ltng lightning:recordForm
* ltng force:hasRecordId
* ltng aura:systemError

The extension will now offer suggestions based on the namespace or component/interface/event name.
