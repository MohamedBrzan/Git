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

//* Tracking Branches
`Tracking branches are
local branches that have a direct relationship to a remote branch. If you’re on a tracking branch
and type git pull, Git automatically knows which server to fetch from and which branch to merge
in.

When you clone a repository, it generally automatically creates a master branch that tracks
origin/master. However, you can set up other tracking branches if you wish — ones that track
branches on other remotes, or don’t track the master branch. The simple case is the example you
just saw, running git checkout -b <branch> <remote>/<branch>. This is a common enough operation
that Git provides the --track shorthand:`;
//? if you need to make a new branch to track a remote branch
//TODO: ** git checkout -b < new branch name > < remote name >/< remote branch name > **

//? if you want the new local branch name is the same name with the remote branch name:
//TODO: ** git checkout --track < remote name >/< branch name ( remote branch === new branch name ) > **

//? if you have a local branch and the local branch name is the same with the remote branch name and you want to set it to track a remote branch
//TODO: ** git branch -u < remote name >/< remote branch name > **

`When you have a tracking branch set up, you can reference its upstream branch
with the @{upstream} or @{u} shorthand. So if you’re on the master branch and it’s
tracking origin/master, you can say something like git merge @{u} instead of git
merge origin/master if you wish.`;
//TODO: ** git merge @{u} **

//? to see what tracking branches you have set up
//TODO: ** git branch -vv **

`It’s important to note that these numbers are only since the last time you fetched from each server.
This command does not reach out to the servers, it’s telling you about what it has cached from these
servers locally. If you want totally up to date ahead and behind numbers, you’ll need to fetch from
all your remotes right before running this. You could do that like this:`;
//? if you want to update your local branch first with the last remote branch update so:
//TODO: ** git fetch --all; git branch -vv **

//* Pulling
//? ( git pull ) === ( doing git fetch and then do git merge right away )
//TODO: ** git pull **

//* Deleting Remote Branches
//TODO: ** git push < remote name > --delete < branch name that you want to delete it > **

//* Rebasing

//* If you want take the patch of the change that was introduced in your branch and reapply it on top of another branch.
1; //TODO: while you in the branch that you make changes into, you do git rebase to that branch that you want to reapply on the top of it
//? ex: if you make changes in ( A ) branch and you need to rebase it with ( B ) branch
//TODO: ** git rebase B ** then => ** git checkout B ** then => ** git merge A **

`if you branched a
topic branch (server) to add some server-side functionality to your project, and made a commit.
Then, you branched off that to make the client-side changes (client) and committed a few times.
Finally, you went back to your server branch and did a few more commits.`;

//TODO: ** git rebase --onto  <main branch> <topic branch (created from the main branch)> <branch that you need to rebase it (created from topic branch)>
