const myExec = require('child_process').exec;

const paramter = process.argv.splice(2);

let server = '';

if (paramter && paramter.length > 0 && paramter[0] === 'deploy') {
  server = '{{releaseIp}}';
} else {
  server = '121.41.121.230';
}

const cmdStr = `rsync -e "ssh -o StrictHostKeyChecking=no" --delete-after -r dist/ lukou@${server}:/home/lukou/app/optimus-op`;

function execute(cmd) {
  myExec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error(error);
    } else {
      console.log('success');
    }
  });
}

execute(cmdStr);
