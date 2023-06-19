@echo off

REM This batch file will install npm modules if the "node_modules" directory does not exist

REM Check if the "node_modules" directory exists
if not exist "node_modules" (
  REM If it doesn't exist, install the modules
  echo "Installing npm modules..."
  npm install
) else (
  REM If it does exist, skip the installation
  echo "npm modules already installed"
)

echo "starting docker container"


echo "To see the DB web GUI run:"
echo "| npx prisma studio"


echo "starting server.."
npm run dev