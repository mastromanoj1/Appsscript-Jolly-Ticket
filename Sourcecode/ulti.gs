// inserts js,css to html..
function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename)
    .getContent();
}

var id = "1kRM4E-PnsyW9MJHWSUlVOC8L_Hz21MSITeomazQsMqs";

function uuid() {
var uuid_array = [];
var ss= SpreadsheetApp.openById(id);
var dataSheet = ss.getSheetByName("DATA");
var getLastRow = dataSheet.getLastRow();
  if(getLastRow > 1) 
  {
    var uuid_values = dataSheet.getRange(2, 1, getLastRow - 1, 1).getValues(); 
    for(i = 0; i < uuid_values.length; i++)
      {
        uuid_array.push(uuid_values[i][0]);
      }

    var x_count = 0;

    do 
    {
      var y = 'false';
      var uuid_value = Utilities.getUuid(); 

      if(uuid_array.indexOf(uuid_value) == -1.0)
      {
        y = 'true';
        Logger.log(uuid_value);
        return uuid_value;   
      } 
      x_count++;
    } while (y == 'false' && x_count < 5);
  } 
  else 
  {
    return Utilities.getUuid();
  }
}

// returns booked seats on selected date (yet to complete)

function Kickstart(date) { 

  var ss= SpreadsheetApp.openById(id);
  var dataSheet = ss.getSheetByName("DATA");
  var getLastRow = dataSheet.getLastRow();
  var lastrow = dataSheet.getRange("n1").getDisplayValue;
  
  var dk = dataSheet.getRange("o1").setValue(date);
  var selecteddate = dataSheet.getRange("o1").getDisplayValue;

  var mk = dataSheet.getRange(2,8,getLastRow - 1,2).getDisplayValues();
  var collect = [];
  var j = 0 ;

  var  car = mk.length;
  var looplimit = car - 1 ;

  for(i=0 ;i<= looplimit ;i++) // there is  a correction here ;
  {
     if(selecteddate() == mk[i][1])
     {
        collect[j] = mk[i][0] ;
        j++;          
     }

  }
  
   var dog = collect.toString();
   return JSON.stringify(dog);
   
}

 function Tpick(){ // Returns data in pick sheet.....

    var ss= SpreadsheetApp.openById(id);
    var dataSheet = ss.getSheetByName("pick");
    var getLastRow = dataSheet.getLastRow();
 
    var jhub = dataSheet.getRange(2,1,getLastRow,8).getDisplayValues();
    var fly = jhub;

    return fly ;
  }

  function Printticket(){ 

   
        var ss, source, newTab, newSheet;

        source = SpreadsheetApp.openById(id).getSheetByName('Ticket Format');
        ss = SpreadsheetApp.openById(id);
          //var pdfName = source.getRange().getDisplayValue();
        /*By using the value on a cell as the name for the pdf file you can dynamically change it
         to be display as a distinct list with no repetition.
        ei: client A.pdf
        client B.pdf
        ,etc... */
        newTab = source.copyTo(ss) // copy sheet to the same spreadsheet
        newTab.getDataRange().setValues(newTab.getDataRange().getDisplayValues())
        newSheet = SpreadsheetApp.create('Temp');
        newTab.copyTo(newSheet);
        newSheet.deleteSheet(newSheet.getSheets()[0]);


          var ss= SpreadsheetApp.openById(id);
          var dataSheet = ss.getSheetByName("DATA");
          var lastrow = dataSheet.getLastRow();

          
          var folderId = '1yfeGkzXvjnvib879-7xgrM-n-eQiNPcC';
          var folder = DriveApp.getFolderById(folderId);

          var passengername = source.getRange("C14:G14").getDisplayValue();

        
          
        // Save to pdf.
        var theBlob = newSheet.getBlob().getAs('application/pdf').setName(passengername + " - Jolly Ticket");
        var newFile = folder.createFile(theBlob);
        var pdfurl = newFile.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
        var mk = pdfurl.getUrl();

        var paste = ss.getSheetByName('DATA'). getRange("k"+lastrow).setValue(mk);

        var delet = ss.deleteSheet(newTab);

        DriveApp.getFileById(newSheet.getId()).setTrashed(true);

 }

 function AddRecord(firstname, boarding, boardingtime, droping, dropingtime, phonenumber, textseat ,date) {
  var uniqueID = uuid();
  var found_record = false;
  var ss= SpreadsheetApp.openById(id);
  var dataSheet = ss.getSheetByName("DATA");
  var getLastRow = dataSheet.getLastRow();
  for(i = 2; i < getLastRow; i++)
  {
    if(dataSheet.getRange(i, 1).getValue() == '') 
    {
      dataSheet.getRange('A' + i + ':J' + i).setValues([[uniqueID, firstname, boarding, boardingtime, droping, dropingtime, phonenumber, textseat,date, new Date()]]);
      printticket();
      
      found_record = true;
      break;
    }
  }
  if(found_record == false)
  { 
    dataSheet.appendRow([uniqueID, firstname, boarding, boardingtime, droping, dropingtime, phonenumber, textseat,date, new Date()]);
  }
  return 'SUCCESS';
  
}
