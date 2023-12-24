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

//* Removing the files that you staged it accidentally ( if you need to get back from git add ( cached files ) )
//TODO: ** git rm --cached [filename] **

//* Removing a specific directory
//TODO: ** git rm file/\*.js **

//* Removing all files that ends with a specific letter
//TODO: ** git rm /*~ ** ( this command removes all files whose names end with a ~)

//* Moving Files ( renaming file)
//TODO: ** git mv [file_from] [file_to]

//* Viewing the Commit History ( show all commits with a reverse chronological order (newer to the top) )
//TODO: ** git log **

//* Viewing the difference in each commit ( showing what's changed in every commit )
//TODO: ** git log -p ** || ** git log --patch **

//* Viewing the difference in each commit and showing a limit ( showing the number of commits )
//TODO: ** git log -p -[number] ** || ** git log --patch -[number] **

//* Show some abbreviated stats ( statistics )

//? - showing number of files that changed
//? - showing the operations that did in it [adding - insertions - deletions]

//TODO: ** git log --stat **

//* Show some abbreviated stats in pretty format
//TODO: ** git log --stat --pretty=oneline **

//* Show commit history in pretty format
//TODO: ** git log --pretty=oneline **

//* Useful specifiers for git log --pretty=format
//? %H => Commit Hash
//? %h => Abbreviated Commit Hash
//? %T => Tree Hash
//? %t => Abbreviated Tree Hash
//? %P => Parent Hashes
//? %p => Abbreviated Parent Hashes

//? %an => Author Name
//? %ae => Author Email
//? %ad => Author Date ( showing how long is passed since your committed )
//? %ar => Author Relative

//? %cn => Committer Name
//? %ce => Committer Email
//? %cd => Committer Date ( showing how long time is passed for committed every commit )
//? %cr => Committer Relative

//? %s => Subject ( showing all commits messages )

//* Common options to ( git log )
//? -p => showing every commit with last change that happened in the modified file
//? --stat => showing statistics for every commit in the modified file
//? --shortstat => showing just the operation line after commit information
//? --name-only => showing just the file that modified  after commit information
//? --name-status => showing the operation letter behind the modified file after commit information
//? --abbrev-commit => showing the first few characters of the commit hash ( 7 letters )
//? --relative-date => showing the date in the relative format ( showing when the commit is committed in the relative way ( 2 weeks || 2days || 12 minutes || 2 seconds ) )
//? --graph => display an ASCII graph for the branch and merge history beside the log output
//? --pretty => showing commits in an alternate formate.  values => ( oneline - short - full - fuller )
//? --oneline => shorthand for --pretty=oneline --abbrev-commit used together.

//* Limiting Log Output
//? Find commits in a specific time
//TODO: ** git log --since=[2.weeks] ** || ** --since="2023-01-23" ** || ** --since="2 years 1 day 3 minutes age" **

//? Find commits with a specific author
//TODO: ** git log --author="name"

//? Find commits with a specific message word | letter
//TODO: ** git log --grep="name"

//* Only show commits adding or removing code matching the string.
//TODO: ** git log -S function_name

//* Find commits for a specific file
//TODO: ** git log -- [path to the file] **

//* Options to limit the output of ( git log )

//? -<(n)> => show only the last ( n ) commits
//? --since, --after => show only commits that made after a specific date
//? --until, --before => show only commits that made before a specific date
//? --author => show only commits that committer with a specific author
//? --committer => only show commits in which the committer entry matches the specified string.
//? --grep => only show commits with a commit message containing the string.
//? -S => only show commits adding or removing code matching the string.

//* Unmodifing a Modified File ( for deleting all changes in a specific file and return it to the last commit )
//TODO: ** git checkout -- [filename].extension **

//* From Git version 2.23.0 introduced a new command: git restore it's alternative to git reset
//? Unstaging a Staged File with git restore ( do it after git add )
//TODO: ** git restore --staged [filename].extension **

//* Showing Your Remotes
//? To see which remote servers you have configured
//TODO: ** git remote **

//? To shows which the URLs that Git has stored for the shortname to be used when reading and writing to that remote
//TODO: ** git remote -v **

//* Adding a Remote Repository
//TODO: ** git remote add <shortname> <url>

//* Fetching all information from specific remote
//TODO: ** git fetch <remote | shortname> **

//* Fetching and merge that data Automatically with my current branch
//TODO: ** git pull **

//* Pushing to your remote if you have the right access ( just if you make clone from the repo first )
//TODO: ** git push <remote> <branch> **

//* Inspecting a remote
//TODO: ** git remote show origin **

//* Renaming Remotes
//TODO: ** git remote rename <current remote name> <new remote name>

//* Removing Remotes
//TODO: ** git remote remove <current remote name> **

//* Tagging

//? Listing your tags
//TODO: ** git tag **

//? Search about specific tag pattern
//TODO: ** git tag -l "specific tag pattern" **

//? Creating tags ( Git supports two types of tags ( lightweight and annotated ) )

//? Create Annotated tags
//TODO: ** git tag -a < version ( v + version number ) > -m "message string" **

//? Create Lightweight tags
//TODO: ** git tag < version ( v + version number ) >-lw **

//? Sharing tags to the remote server
//TODO: ** git push <remote> <version ( v + version number ) > **

//? Showing all tags in the remote
//TODO: ** git push <remote> --tags **

//? Deleting Tag
//TODO: ** git tag -d < tag version ( v + version number ) > **

//? Checking out tag
//TODO: ** git checkout < tag version ( v + version number ) > **

//* Selecting branch and if the branch name not found then make a new branch with the input name
//TODO: ** git checkout -b <branch name> **

//* Selecting branch and if the branch name not found then make a new branch with the input name and belong it to the specific version
//TODO: ** git checkout -b <branch name> < tag version ( v + version number ) > **


