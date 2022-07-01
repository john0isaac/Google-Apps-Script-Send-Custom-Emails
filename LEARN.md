# Google Apps Script

[Google Apps Script](https://developers.google.com/apps-script/overview) is A cloud-based JavaScript platform that lets you integrate with and automate tasks across Google products.

![Google Apps Script](https://developers.google.com/apps-script/images/landing-page-hero.svg)


## What can Apps Script do?
Apps Script is versatile. Among other things, you can:
  * Add custom menus, dialogs, and sidebars to Google Docs, Sheets, and Forms.
  * Write custom functions and macros for Google Sheets.
  * Publish web apps — either standalone or embedded in Google Sites.
  * Interact with other Google services, including AdSense, Analytics, Calendar, Drive, Gmail, and Maps.
  * Build add-ons and publish them to the Google Workspace Marketplace.

[![Google Apps Script in 60 seconds](https://img.youtube.com/vi/GcsBFEbMuIA/0.jpg)](https://youtu.be/GcsBFEbMuIA)

# Services Used

## Spreadsheet Service
This service allows scripts to create, access, and modify Google Sheets files.

### Classes Used
| Name                                                                                             | Brief description                     | 
| ------------------------------------------------------------------------------------------------ |---------------------------------------|
| [SpreadsheetApp](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app)| Access and create Google Sheets files.|
| [Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet)                   |	Access and modify spreadsheet sheets. |
| [Range](https://developers.google.com/apps-script/reference/spreadsheet/range)                   |	Access and modify spreadsheet ranges. |

### Methods Used
#### Class SpreadsheetApp
| Method             | Return Type | Brief description                      | 
| ------------------ |-------------|----------------------------------------|
| `getActiveSheet()` | Sheet	      | Gets the active sheet in a spreadsheet.|

#### Class Sheet
| Method                  | Return Type | Brief description                      | 
| ----------------------- |-------------|----------------------------------------|
| `getRange(row, column)` | 	Range      | Gets the active sheet in a spreadsheet.|

#### Class Range
| Method           | Return Type | Brief description                                     | 
| ---------------- |-------------|-------------------------------------------------------|
| `getValues()`    | Object[][]	 | Returns the rectangular grid of values for this range.|

## HTML Service
This service allows Apps Script applications to return HTML, usually as a user interface.

### Classes Used
| Name                                                                                   | Brief description                                               | 
| -------------------------------------------------------------------------------------- |-----------------------------------------------------------------|
| [HtmlService](https://developers.google.com/apps-script/reference/html/html-service)   | Service for returning HTML and other text content from a script.|
| [HtmlTemplate](https://developers.google.com/apps-script/reference/html/html-template) | A template object for dynamically constructing HTML.            |
| [HtmlOutput](https://developers.google.com/apps-script/reference/html/html-output)     | An HtmlOutput object that can be served from a script.          |

### Methods Used
#### Class HtmlService
| Method                             | Return Type  | Brief description                                                | 
| ---------------------------------- |--------------|------------------------------------------------------------------|
| `createTemplateFromFile(filename)` | HtmlTemplate | Creates a new HtmlTemplate object from a file in the code editor.|

#### Class HtmlTemplate
| Method       | Return Type  | Brief description                                          |
| ------------ |--------------|------------------------------------------------------------|
| `evaluate()` | HtmlOutput   | Evaluates this template and returns an HtmlOutput object.  |

#### Class HtmlOutput
| Method         | Return Type  | Brief description                         |
| -------------- |--------------|-------------------------------------------|
| `getContent()` | String       | Gets the content of this HtmlOutput.      |

## Mail Service
This service allows scripts to send email on a user's behalf. Unlike Gmail Service, Mail Service's sole purpose is sending email; it cannot access a user's Gmail account.

### Classes Used
| Name                                                                        | Brief description | 
| --------------------------------------------------------------------------- |-------------------|
| [MailApp](https://developers.google.com/apps-script/reference/mail/mail-app)| Sends email.      |

### Methods Used
#### Class MailApp
| Method               | Return Type | Brief description       | 
| -------------------- |-------------|-------------------------|
| `sendEmail(message)` | void	       | Sends an email message. |

# HTML Email Templates
An email template is an HTML file composed of reusable code modules, making it as easy as copying and pasting your copy, links, and image URLs to create an email. 

## How to make them?
Follow this guide -> [Create HTML Templates](https://email.uplers.com/blog/create-html-email/)
