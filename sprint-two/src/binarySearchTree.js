var BinarySearchTree = function(value){
  var branch = {};
  _.extend(branch,binaryTreeMethods);
  branch.left = null;
  branch.right = null;
  branch.value = value;
  return branch;

};

var binaryTreeMethods = {}
binaryTreeMethods.insert = function(value){
  var innerFunc = function(branches){
    if(value > branches.value){
      if(branches.right === null){
        branches.right = BinarySearchTree(value);
      }
      else{
        innerFunc(branches.right)
      }
    }
    if(value < branches.value){
      if(branches.left === null){
        branches.left = BinarySearchTree(value);
      }
      else {
        innerFunc(branches.left)
      }
    }
  }
    innerFunc(this)
}  
binaryTreeMethods.contains = function(value){
  if(this.value === value){
    return true;
  }
  else if(this.right.value === value){
    return true;
  }
  else if(this.left.value === value){
    return true;
  }
  else{
    return false;
  }
};
binaryTreeMethods.depthFirstLog = function(callback){
  var innerFunc = function(branches){
  callback(branches.value)
  if(branches.right){
    innerFunc(branches.right)
    }
  if(branches.left){
    innerFunc(branches.left)
    }
  }
  innerFunc(this)

};
