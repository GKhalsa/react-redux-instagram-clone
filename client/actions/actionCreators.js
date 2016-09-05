export function increment(index){
  return {
    type: 'INCREMENT_LIKES',
    index: index
  };
}

export function addComment(postId,author,comment){
  return {
    type: 'ADD_COMMENT',
    postId: postId,
    author: author,
    comment: comment
  };
}

export function removeComment(postId,index){
  return {
    type: 'REMOVE_COMMENT',
    postId: postId,
    index: index
  };
}
