// a postId can have comments, which can have more comments.
// 找一个帖子下面的所有 comments
class User {
  constructor(id, userPosts, userThreads) {
    this.id = id; //uuid
    this.userPosts = []; //holds post ids
    this.userThreads = []; //holds all the user's threads
  }
}
class Discussion {
  constructor() {
    this.forums = [];
  }
  addForum(forum) {
    this.forums.push(forum);
  }
  getForum(threadId) {
    for (let cur of this.forums) {
      if (cur.id == threadId) {
        return cur;
      }
    }
  }
}

class Forum { //renting | referrals | experience
  constructor(id, topic) {
    //make a map instead. forum ID to the forum object
    this.id = id;
    this.topic = topic;
    this.threads = [];
  }
  addThread(thread) {
    this.threads.push(thread);
  }
}
class Thread { // holds post and all of its comments
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.posts = [];
  }
  addToThread(newPost) {
    this.posts.push(newPost);
  }
}
class Post {
  constructor(title, content, forumId, postId, threadId) {
    this.postId = uuidv4(); // uuid
    this.title = title;
    this.content = content;
  }
  createPost(title, content, forumId, threadId) {
    let postId = uuidv4();
    if (threadId == null) { // new thread/new post
      let calcThreadId = uuidv4();
      let newPost = new Post(title, content, forumId, postId, calcThreadId);
      let newThread = new Thread(calcThreadId, title);
      //add post to thread
      newThread.addToThread(newPost);
      //add thread to specified forum
      for (let cur of allForums) {
        if (cur.id == forumId) {
          cur.addThread(newThread);
          break;
        }
      }
    } else { // add comment ot existing post
      for (let forum of allForums) {
        for (let thread of forum.threads) {
          if (thread.title == threadId) {
            let newPost = new Post(title, content, forumId, postId, thread.id);
            thread.addToThread(newPost);
            break;
          }
        }
      }
    }
  }
}

function uuidv4() {
  return 'xxxxxxxx-xxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 8 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(8);
  });
}
function makeNewPost(title, content, forumId, threadId) {
  let newPost = new Post;
  newPost.createPost(title, content, forumId, threadId);
}
let discussion = new Discussion();
let allForums = discussion.forums;
function makeNewForum(forumId, topic) {
  let newForum = new Forum(forumId, topic);
  discussion.addForum(newForum);
}
function getAllComments(forumId, threadId) {
  let comments;
  for (let forum of allForums) { // narrow down to forum
    if (forum.id == forumId) {
      for (let thread of forum.threads) {
        if (thread.title == threadId) {
            comments = thread.posts;
            break;
        }
      }
    }
  }
  let res = [];
  for (let comment of comments) {
    res.push(comment.content);
  }
  return res.slice(1);
}
makeNewForum(1, 'renting');
makeNewForum(2, 'referrals');

makeNewPost('One bed in SF', 'pm for more details', 1);
makeNewPost('can I sign...', 'can I sign half year lease?', 1, 'One bed in SF');
makeNewPost('does it come...', 'does it come furnished?', 1, 'One bed in SF');
makeNewPost('Yes!...', 'Yes! Ready for move-in.', 1, 'One bed in SF');

makeNewPost('Tech FAANG', 'email me for referrals', 2);
makeNewPost('emailed you', 'can i get a referral', 2, 'Tech FAANG');
makeNewPost('ng referral', 'can you refer new grads?', 2, 'Tech FAANG');

makeNewPost('Two beds in Oakland', 'more details', 1);
makeNewPost('Interested!', 'msged you.', 1, 'Two beds in Oakland');

// console.log('1ST FORUM - RENTAL: ',allForums[0].threads);
// console.log('ALL FORUMS: ', allForums);
console.log('1ST FORUM - RENTAL - POST: ',allForums[0].threads[1].posts);
//get all comments under a thread:
console.log(getAllComments(2, 'Tech FAANG'));

/*
NOTE:
we have a variable called threadId but we actually use the post title in place as its argument. This is not desirable. Since we should use UUID, however, UUID generates a new random number everytime and it's difficult to track when running tests. So I just used the post title in place of uuid. In real life we should use an ID as good practice.
*/