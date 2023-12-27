//* Git Branching

//* Branches in a Nutshell

//? each commit has a pointer to that root tree and all commit metadata ( metadata like author name, commit message etc.. )
//? each commit has a tree object ( to lists the contents of the directory and specifies which file names are stored as which blobs )
//? each file has blob object ( to representing it's content )

//? If you make some changes and commit again, the next commit stores a pointer to the commit that came immediately before it. ( every commit has a pointer to the commit that committed before it ( like LinkedList reverse Data Structure ) )

//TODo: How does Git know what branch you’re currently on?
//? the answer is => It keeps a special pointer called HEAD.

//* Switching Branches
//TODO: ** git checkout < branch name ( if exist ) > **
//? this step moves HEAD to point to the < branch name > branch
//TODo: What is the significance of that?
//? if you make another commit you'll see that your new branch moved forward, however your master branch still points to the commit you were on when you ran git checkout to switch branches.

//* Create a new branch and selected right away
//TODO: ** ( git checkout -b ) || ( git switch -c ( new version ) ) < branch name > **

//* Return to your previously checked out branch
//TODO: ** git switch - **
