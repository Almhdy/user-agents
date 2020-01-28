const gulp = require('gulp');
const UserAgent = require('user-agents');
const fs = require('fs');
function defaultTask(cb) {
   const userAgent = new UserAgent({ deviceCategory: 'mobile' });
   const userAgents = Array(1000).fill().map(() => userAgent() + '&');
   fs.writeFile('agents.txt', userAgents.toString() + ',' + userAgent.toString(), cb);
   console.log(userAgent.toString());

		
 
}

exports.default = defaultTask