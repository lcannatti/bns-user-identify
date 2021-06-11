# bns-user-identify
A webapp to identify google workspace users in a domain who have used Backup and Sync in the last 180 days.

## How to use this project
1. In your browser log into Google as your Workspace administrator account and go to [Google Apps Script](script.google.com) 
2. Click "New Project"
3. Paste the contents of [Code.gs](code.gs) into the Code.gs File that opens by default, and save using CMD + S (Mac) or CTRL + S (PC)
4. Create a new HTML file and name it "Index"
5. Paste the contents of [Index.html](index.html) into the new HTML file, and save using CMD + S (Mac) or CTRL + S (PC)
6. Click the + button next to Services, and select the Admin SDK API.
7. Under "Version" change the value to "reports_v1", then click "Add"
8. Select Deploy > New Deployment
9. Click the Gear icon and select "Web App"
10. Optional: Add a description
11. Click "Deploy"
12. When prompted, authorize access for the script.
13. When the deployment is completed, under "Web App", a link should be available under the label "URL". Click it.
14. Wait for the script to complete. You will be provided with a line delimited list of users.

## How this script works
This script uses your drive activity report to find users who have taken auditable actions using Backup and Sync by Google. To do so, it requests a list of all accessible Drive activity filtered to only those which originated from Backup and Sync. The script then identifies the emails of those users from the supplied list, and compiles them in a list for ease of Use.

## Troubleshooting

If your script encounters timeout errors, you can try reducing the number of results requested at a time by changing the number on line 15 in code.gs to anything smaller than 1000. The smaller the number, the less time each request should take. Less than 100 may be counterproductive however due to overhead on each request.
