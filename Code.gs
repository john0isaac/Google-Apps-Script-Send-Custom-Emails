function welcomeMessage(){
  var sheet = SpreadsheetApp.getActiveSheet();
  var Range = sheet.getRange("A2:B2");
  var data = Range.getValues();
  data.forEach(function (rowData) {
    
    var templ = HtmlService.createTemplateFromFile('Welcome-Email');
    var changes = 
      {
        name: rowData[0],
        emailAddress: rowData[1],
        chapterName: 'Modern Academy for Engineering',
        noOfEvent: 'first',
        dayOfEvent: 'today',
        timeOfEvent: '8 PM',
        eventLink: 'event-link',
        poweredBy: 'MAE',
        chapterWebsite: 'chapter-website-link'
      };
    
    templ.changes = changes;
    var message = templ.evaluate().getContent();
  
  MailApp.sendEmail({
    to: changes.emailAddress,
    subject: "DSC Machine Learning Event",
    htmlBody: message
  });
  })
}

function feedbackMessage(){
  var sheet = SpreadsheetApp.getActiveSheet();
  var Range = sheet.getRange("A2:B2");
  var data = Range.getValues();
  data.forEach(function (rowData) {
    
    var templ = HtmlService.createTemplateFromFile('Feedback-Email');
    var changes = 
      {
        name: rowData[0],
        emailAddress: rowData[1],
        feedbackForm: 'place-link-here',
        chapterName: 'Modern Academy for Engineering',
        eventTitle: 'Intro to Machine Learning Study Jam',
        qwiklabsForm: 'place-link-here',
        poweredBy: 'MAE',
        chapterWebsite: 'chapter-website-link'
      };
    
    templ.changes = changes;
    var message = templ.evaluate().getContent();
  
  MailApp.sendEmail({
    to: changes.emailAddress,
    subject: "DSC Event Feedback",
    htmlBody: message
  });
  })  
}
