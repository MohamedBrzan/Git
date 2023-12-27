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

//* Basic Branching and Merging

//* Create merge branch
//TODO: ** git merge < branch name > **
//? for example if you merge that new branch with the master branch so the master branch will point to the same place of the new branch

//* Basic Merge Conflicts ( it happen if you changed the same part of the same file differently in the two branches you’re merging )
//? after you fix one of those files then do ( git mergetool then  do git commit ) to solve it

//* Branch Management

//* To see the last commit on each branch
//TODO: ** git branch -v **

//* To see the branches that merged into ( if you merged branch or more to any branch it'll show )
//TODO: ** git branch --merged **

//* To see the branches that not merged into
//TODO: ** git branch --no-merged **

//* Change the branch name locally
//TODO: ** git branch --move < old name > < new name > **

//* Change the branch name remotely
//TODO: ** git branch --move < old name > < new name > ** and then push it with ( git push -u < remote name > < new branch name > )

//* Deleting branch locally
//TODO: ** git branch -d < branch name > **

//* Deleting branch remotely
//TODO: ** git push < remote name > --delete < branch name > **

//* Branching Workflows
//* Long-Running Branches
`Because Git uses a simple three-way merge, merging from one branch into another multiple times
over a long period is generally easy to do. This means you can have several branches that are
always open and that you use for different stages of your development cycle; you can merge
regularly from some of them into others.`;

//* Topic Branches
`Topic branches, however, are useful in projects of any size. A topic branch is a short-lived branch
that you create and use for a single particular feature or related work.`;

//* Remote Branches
`when you make //TODO: git clone 
from a repo you have two branches in your project
1. master ( remote branch )
2. master ( local branch )
so when any one make update to the remote one
so you'll never get that update because your local branch aren’t automatically synchronized
so you need to use //TODO: git fetch < remote name >
to connect with that and your pointer change when any update happened
`;

//* Pushing
//TODO: ** git push < remote name > < branch name > **

//* If you have a local branch named "master" and you want to name it another name in remote so
//TODO: ** git push < remote name > < local branch name >:< remote branch name that you want > **

//* After you make ( git clone ) to remote branch and you want to merge it with your local so select your local branch and do this
//TODO: ** git merge < remote name >/< remote branch name > **

//* if you need to create a local branch starts where the remote branch is:
//TODO: ** git checkout -b < new local branch name > < remote name >/< remote branch name > **
