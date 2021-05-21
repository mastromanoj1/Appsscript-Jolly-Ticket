function doGet() {
    return location();
 }

  function location(){
 
   var id = "1kRM4E-PnsyW9MJHWSUlVOC8L_Hz21MSITeomazQsMqs"
   var ss= SpreadsheetApp.openById(id);
   var dataSheet = ss.getSheetByName("pick");
   var list = dataSheet.getRange(2,1,20,8).getDisplayValues();
 
   var dataSheet1 = ss.getSheetByName("DATA");
   var lastrow = dataSheet1.getRange("n1").getDisplayValue();
   var print = dataSheet1.getRange(lastrow-2,2,3,10).getDisplayValues();
 
   var pick =  HtmlService.createTemplateFromFile('ten');

  // sets the last three values to the table "jolly share".

   pick.jname1 = print[2][0];
   pick.jname2 = print[1][0];
   pick.jname3 = print[0][0];
 
   pick.jdate1=print[2][7];
   pick.jdate2=print[1][7];
   pick.jdate3=print[0][7];
 
   pick.jseat1 = print[2][6];
   pick.jseat2 = print[1][6];
   pick.jseat3 = print[0][6];
 
   pick.jboarding1=print[2][1];
   pick.jboarding2=print[1][1];
   pick.jboarding3=print[0][1];
 
   pick.jdroping1=print[2][3];
   pick.jdroping2=print[1][3];
   pick.jdroping3=print[0][3];
 
 
   pick.jsharing1 = print[2][9];
   pick.jsharing2 = print[1][9];
   pick.jsharing3 = print[0][9];
 
  // sets value for dropdown option

  pick.bc1 = list[0][0];
  pick.bc2 = list[1][0];
  pick.bc3 = list[2][0];
  pick.bc4 = list[3][0];
  pick.bc5 = list[4][0];
  pick.bc6 = list[5][0];
  pick.bc7 = list[6][0];
  pick.bc8 = list[7][0];
  pick.bc9 = list[8][0];
  pick.bc10 = list[9][0];
  pick.bc11 = list[10][0];
  pick.bc12= list[11][0];
  pick.bc13= list[12][0];
  pick.bc14= list[13][0];
  pick.bc15= list[14][0];
 
 
  
  pick.be1 = list[0][2];
  pick.be2 = list[1][2];
  pick.be3 = list[2][2];
  pick.be4 = list[3][2];
  pick.be5 = list[4][2];
  pick.be6 = list[5][2];
  pick.be7 = list[6][2];
  pick.be8 = list[7][2];
  pick.be9 = list[8][2];
  pick.be10 = list[9][2];
  pick.be11 = list[10][2];
  pick.be12= list[11][2];
  pick.be13= list[12][2];
  pick.be14= list[13][2];
  pick.be15= list[14][2];
 
  pick.dc1 = list[0][4];
  pick.dc2 = list[1][4];
  pick.dc3 = list[2][4];
  pick.dc4 = list[3][4];
  pick.dc5 = list[4][4];
  pick.dc6 = list[5][4];
  pick.dc7 = list[6][4];
  pick.dc8 = list[7][4];
  pick.dc9 = list[8][4];
  pick.dc10 = list[9][4];
  pick.dc11 = list[10][4];
  pick.dc12= list[11][4];
  pick.dc13= list[12][4];
  pick.dc14= list[13][4];
  pick.dc15= list[14][4];
 
 
 
  pick.de1 = list[0][6];
  pick.de2 = list[1][6];
  pick.de3 = list[2][6];
  pick.de4 = list[3][6];
  pick.de5 = list[4][6];
  pick.de6 = list[5][6];
  pick.de7 = list[6][6];
  pick.de8 = list[7][6];
  pick.de9 = list[8][6];
  pick.de10 = list[9][6];
  pick.de11 = list[10][6];
  pick.de12= list[11][6];
  pick.de13= list[12][6];
  pick.de14= list[13][6];
  pick.de15= list[14][6];
 
  return pick.evaluate();
 }
