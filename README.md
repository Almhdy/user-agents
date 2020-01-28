# user-agents
Generate User Agents [Desktop &amp;Mobile] By gulp.js
This code generate 1000 user agents for desktop or mobile.
## How To use
Setup Gulp And Run 'gulp' command.
Every Time you Run 'gulp' you will get a new list of user agents.
You will find the agents in 'agents.txt' file.
Open 'index.php' to show all user agents.
## Config
You can change Mobile or Desktop results ```deviceCategory: 'mobile'```
You can Change Th number of results too.
```
function defaultTask(cb) {
   const userAgent = new UserAgent({ deviceCategory: 'mobile' });
   const userAgents = Array(1000).fill().map(() => userAgent() + '&');
   fs.writeFile('agents.txt', userAgents.toString() + ',' + userAgent.toString(), cb);
   console.log(userAgent.toString());
}
```
