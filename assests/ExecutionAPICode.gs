// LICENSES http://www.apache.org/licenses/LICENSE-2.0
var DOC_ID = '17BfuSiqjsf2_3rXkc9j3jqIBXFVMG_kxrJ4--E2-BgU'; // Template File 
         
/**
 * Add data to sheet from Execution API call
 * @param {Object} parameters passed from script.
 * @return {Object} result.
 */
function setData(parameters) {  
  try {
    // next set where we write the data - you could write to multiple/alternate destinations
    var doc = SpreadsheetApp.openById(DOC_ID).copy('Execution API Example');
    var sheet = doc.getSheets()[0];
    var data = parameters.data;
    sheet.getRange(1, 1, data.length, data[0].length).setValues(data);
    return {"status":"ok", 'doc':doc.getUrl()};
  } catch(e){
    // if error return this
    Logger.log(e);
    return {"status": JSON.stringify(e)};
  }
}