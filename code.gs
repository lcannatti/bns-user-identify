function doGet(){
  return HtmlService.createHtmlOutputFromFile('Index');
}

// Allow users to pull one page of data at a time (automated locally)
function pullSegment(nextPageToken=null){
  console.log(nextPageToken)
  var emails={};
  var page;
  var pageToken=nextPageToken
  // Comb through drive activity report for all entries with B&S as initiator
  // store emails of all users associated with these activities
  Logger.log('Requesting Page')
  page = AdminReports.Activities.list('all', 'drive', {
    maxResults: 200,
    filters: 'originating_app_id==645529619299',
    pageToken: pageToken
  });
  var items = page.items;
  Logger.log(page.items.length)
  //pull emails out of the response
  if (items) {
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      emails[item.actor.email]=1;
    }
  }
  pageToken = page.nextPageToken;
  // Send current batch back to client with pagetoken to resume.
  return {
    'emails':emails,
    'nextPageToken':pageToken
  }
}
