//* Initializing a Repository in an Existing Directory
//TODO:  ** git init **

//* add specific extensions
//TODO: ** git add *.js **

//* tracking all new files and folders
//TODO: ** git add . **

//* Cloning an Existing Repository
//? Https Protocol
//TODO: ** git clone https://github.com/[Account Name]/[File Name].git **

//? Server Protocol
//TODO: ** git clone git:// or user@server:path/to/repo.git **

//* Cloning an Existing Repository In A Specific Directory
//TODO: ** git clone https://github.com/[Account Username]/[File Name].git [Directory Folder Name] **

//* Recording changes to the Repository
//? Untracked => if you don't make any changes since last commit
//? Ummodified => if you don't make any changes since last commit
//? Modified => if you make any edit to the file after last commit
//? Staged => when you make git add to those files after make changes

//* Checking for the Status of Your Files
//TODO: ** git status **

//* Checking for the short Status of Your Files
//TODO: ** git status -s **

//* Ignoring Files || Folders
//TODO: ** .gitignore **

//? Ignoring A Specific extension
//TODO: ** .extension **

//? Ignoring All .extension
//TODO: ** *.extension **

//* See What you've changed but not yet staged ( still don't use git add .)
//TODO: ** git diff **

//* See What you've staged that will go into your next commit ( after used git add .)
//TODO: ** git diff --staged || --cached **

//* Commit your changes
//TODO: ** git commit -m "commit message" **

//* Removing Files
//TODO: ** git rm [file1 file2 file3] **

//* Removing the files that you staged it accidentally ( if you need to get back from git add ( cached files))
//TODO: ** git rm --cached [filename] **

//* Removing a specific directory
//TODO: ** git rm file/\*.js **

//* Removing all files that ends with a specific letter
//TODO: ** git rm /*~ ** ( this command removes all files whose names end with a ~)
