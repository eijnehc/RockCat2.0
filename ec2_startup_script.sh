#!/bin/bash -ex
# download nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
#export NVM dir
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
# install node
nvm install 16
# install pnpm
npm install -g pnpm
#install git
sudo yum install git -y
cd /home/ec2-user
# get source code from githubt
git clone https://github.com/eijnehc/RockCat2.0
#get in project dir
cd RockCat2.0
#give permission
sudo chmod -R 755 .
#install node module
pnpm server-install
# start the app
pnpm run server > app.out.log 2> app.err.log < /dev/null &