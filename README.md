# Google Apps Script Send Custom Emails

Using Google apps script on a google sheet to send two custom html messages to anyone automatically.

## Overview:
* [HTML Templates](#html-templates)
* [Steps](#steps)

![Google Sheets Image](./Helping%20Images/googel%20sheet%20screenshot.png)

## HTML Templates
This repo contains two html templates you can change whatever you want in them but to ease the process I created a JSON object Named changes which contains what you need to change per email.
![Email Screenshot](./Helping%20Images/email%20screenshot.png)

## Steps

### Step 1
* Open [Google Drive](https://drive.google.com/drive)
* Create a new Google Sheet
* Name it whatever you want

### Step 2
* Inside your spreadsheet
* Add two columns Name, Email
* Add your first name and email to try this script
* Open the Script editor from the navigation menu
* Tools -> Script editor

### Step 3
* Inside your Script editor
* Replace all the code in Code.gs with the code in [Code.gs](./Code.gs)
* Save the Script
* Name it whatever you want

### Step 4
* Inside your Script editor
* Create two HTML files from File -> New -> HTML file
* Name the first one Welcome-Email
* Name the second one Feedback-Email
* Replace all the code in Welcome-Email.html with the code in [Weclome-Email.html](./Welcome-Email.html)
* Replace all the code in Feedback-Email.html with the code in [Feedback-Email.html](./Feedback-Email.html)
* Save both files

### Step 5
* Inside your Script editor
* Go to Code.gs
* Adjust your range "A2:B2"
* Write your chapter's Name
* Write the number of the event
* Write the day of the event
* Write the time of the event
* Place your event's link
* Place your chapter's Website link
* Write the Powered by phrase
* Change the Subject of the Email to be sent
* Save the file

### Step 6
* Inside your Script editor
* Choose the Function you want to run
* Press Play button 
* Authinticate it and you are ready to go
* Check your email to find the output of what you have just done
