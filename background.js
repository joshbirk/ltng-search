// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// This event is fired each time the user updates the text in the omnibox,
// as long as the extension's keyword mode is still active.
/*
chrome.omnibox.onInputChanged.addListener(
  function(text, suggest) {
    console.log('inputChanged: ' + text);
    suggest([
      {content: text + " one", description: "the first one"},
      {content: text + " number two", description: "the second entry"}
    ]);
  });
*/

var components = "lightning,lightning:accordion,lightning:accordionSection,lightning:avatar,lightning:badge,lightning:breadcrumb,lightning:breadcrumbs,lightning:button,lightning:buttonGroup,lightning:buttonIcon,lightning:buttonIconStateful,lightning:buttonMenu,lightning:buttonStateful,lightning:card,lightning:carousel,lightning:checkboxGroup,lightning:clickToDial,lightning:combobox,lightning:container,lightning:conversationToolkitAPI,lightning:datatable,lightning:dualListbox,lightning:dynamicIcon,lightning:fileCard,lightning:fileUpload,lightning:flexipageRegionInfo,lightning:flow,lightning:formattedAddress,lightning:formattedDateTime,lightning:formattedEmail,lightning:formattedLocation,lightning:formattedName,lightning:formattedNumber,lightning:formattedPhone,lightning:formattedRichText,lightning:formattedText,lightning:formattedTime,lightning:formattedUrl,lightning:helptext,lightning:icon,lightning:input,lightning:inputAddress,lightning:inputField,lightning:inputLocation,lightning:inputName,lightning:inputRichText,lightning:insertImageButton,lightning:layout,lightning:layoutItem,lightning:listView,lightning:menuItem,lightning:navigation,lightning:navigationItemAPI,lightning:notificationsLibrary,lightning:omniToolkitAPI,lightning:outputField,lightning:overlayLibrary,lightning:path,lightning:picklistPath,lightning:pill,lightning:pillContainer,lightning:progressBar,lightning:progressIndicator,lightning:quickActionAPI,lightning:radioGroup,lightning:recordEditForm,lightning:recordForm,lightning:recordViewForm,lightning:relativeDateTime,lightning:select,lightning:slider,lightning:spinner,lightning:tab,lightning:tabset,lightning:textarea,lightning:tile,lightning:tree,lightning:treeGrid,lightning:utilityBarAPI,lightning:verticalNavigation,lightning:verticalNavigationItem,lightning:verticalNavigationItemBadge,lightning:verticalNavigationItemIcon,lightning:verticalNavigationOverflow,lightning:verticalNavigationSection,lightning:workspaceAPI,aura,aura:component,aura:expression,aura:html,aura:if,aura:iteration,aura:template,aura:text,aura:unescapedHtml,force,force:canvasApp,force:inputField,force:outputField,force:recordData,force:recordEdit,force:recordView,forceChatter,forceChatter:feed,forceChatter:fullFeed,forceChatter:publisher,forceCommunity,forceCommunity:appLauncher,forceCommunity:navigationMenuBase,forceCommunity:notifications,forceCommunity:routeLink,forceCommunity:waveDashboard,lightningsnapin,lightningsnapin:minimizedAPI,lightningsnapin:prechatAPI,lightningsnapin:settingsAPI,ltng,ltng:require,ui,ui:actionMenuItem,ui:button,ui:checkboxMenuItem,ui:inputCheckbox,ui:inputCurrency,ui:inputDate,ui:inputDateTime,ui:inputDefaultError,ui:inputEmail,ui:inputNumber,ui:inputPhone,ui:inputRadio,ui:inputRichText,ui:inputSecret,ui:inputSelect,ui:inputSelectOption,ui:inputText,ui:inputTextArea,ui:inputURL,ui:menu,ui:menuItem,ui:menuItemSeparator,ui:menuList,ui:menuTrigger,ui:menuTriggerLink,ui:message,ui:outputCheckbox,ui:outputCurrency,ui:outputDate,ui:outputDateTime,ui:outputEmail,ui:outputNumber,ui:outputPhone,ui:outputRichText,ui:outputText,ui:outputTextArea,ui:outputURL,ui:radioMenuItem,ui:scrollerWrapper,wave,wave:waveHomeTab";

var interfaces = "lightning,lightning:actionOverride,lightning:appHomeTemplate,lightning:availableForChatterExtensionComposer,lightning:availableForChatterExtensionRenderer,lightning:availableForFlowActions,lightning:availableForFlowScreens,lightning:hasPageReference,lightning:homeTemplate,lightning:isUrlAddressable,lightning:recordHomeTemplate,aura,aura:rootComponent,clients,clients:availableForMailAppAppPage,clients:hasEventContext,clients:hasItemContext,flexipage,flexipage:availableForAllPageTypes,flexipage:availableForRecordHome,force,force:appHostable,force:hasRecordId,force:hasSObjectName,force:lightningQuickAction,force:lightningQuickActionWithoutHeader,forceCommunity,forceCommunity:availableForAllPageTypes,forceCommunity:layout,forceCommunity:profileMenuInterface,forceCommunity:searchInterface,forceCommunity:themeLayout,lightningsnapin,lightningsnapin:minimizedUI,lightningsnapin:prechatUI,ltng,ltng:allowGuestAccess";

var events = "lightning,lightning:conversationAgentSend,lightning:conversationChatEnded,lightning:conversationCustomEvent,lightning:conversationNewMessage,lightning:openFiles,lightning:sendChatterExtensionPayload,lightning:tabClosed,lightning:tabCreated,lightning:tabFocused,lightning:tabRefreshed,lightning:tabReplaced,lightning:tabUpdated,aura,aura:applicationEvent,aura:componentEvent,aura:doneRendering,aura:doneWaiting,aura:locationChange,aura:methodCall,aura:noAccess,aura:systemError,aura:valueChange,aura:valueDestroy,aura:valueEvent,aura:valueInit,aura:valueRender,aura:waiting,force,force:createRecord,force:editRecord,force:navigateToList,force:navigateToObjectHome,force:navigateToReactNativeApp,force:navigateToRelatedList,force:navigateToSObject,force:navigateToURL,force:recordSave,force:recordSaveSuccess,force:refreshView,force:showToast,forceChatter,forceChatter:customOpenFile,forceChatter:postCreated,forceCommunity,forceCommunity:analyticsInteraction,forceCommunity:routeChange,ltng,ltng:afterScriptsLoaded,ltng:beforeLoadingResources,ltng:selectSObject,ltng:sendMessage,ui,ui:clearErrors,ui:collapse,ui:expand,ui:menuFocusChange,ui:menuSelect,ui:menuTriggerPress,ui:validationError,wave,wave:discover,wave:discoverResponse,wave:selectionChanged,wave:update";

var component_array = components.split(",");
var interface_array = interfaces.split(",");
var event_array = events.split(",");

var all_arrays = component_array.concat(interface_array);
all_arrays = all_arrays.concat(event_array);

console.log(all_arrays);

chrome.omnibox.onInputChanged.addListener(
  function(text, suggest) {
    var suggestions = new Array();
    for(var i = 0; i < all_arrays.length; i++) {
      if(all_arrays[i].startsWith(text)) {
        console.log(all_arrays[i]);
        suggestions.push({content: all_arrays[i], description:all_arrays[i]});
      }
      if(all_arrays[i].split(":").length > 1) {
        if(all_arrays[i].split(":")[1].startsWith(text)) {
        console.log(all_arrays[i]);
        suggestions.push({content: all_arrays[i],description:all_arrays[i]});
        }  
      }
    }

    suggest(suggestions);
  });

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
  function(keyword) {

    var cl_url = "https://developer.salesforce.com/docs/component-library/bundle/"+keyword
    
    chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
      chrome.tabs.update(tab.id, {url: cl_url});
    });

  });
