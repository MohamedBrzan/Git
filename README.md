[6/11 12:34 PM] Norhan Habila
{
  "version": "0.2.0",
  "configurations": [
    {
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "name": "nodemon",
      "program": "${workspaceFolder}/main.js",
      "request": "launch",
      "restart": true,
      "runtimeExecutable": "nodemon",
      "skipFiles": ["<node_internals>/**"],
      "type": "node"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}\\main.js"
    },
    {
      "type": "node-terminal",
      "name": "Run Script: start",
      "request": "launch",
      "command": "nodemon run start",
      "cwd": "${workspaceFolder}"
    }
  ]
}
 
