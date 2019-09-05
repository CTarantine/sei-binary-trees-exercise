// const BinaryNode = (data, left=null, right = null) => {
//     return{data, left, right}
// }
// Class BinaryNode below can be written as above function



class BinaryNode {
    constructor(data, left = null, right = null) {
        // a node has data, left, and right pointers
        // left and right are intialized as null
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

//Insert data helper function
const insertNode = (newNode, currentNode) => {
    //no duplicates
    //when direction to go does not exist

    //base case (if tree is empty)
    if (!currentNode) return newNode
    //if duplicate
    if (currentNode.data === newNode.data)
        return currentNode

    if (newNode.data < currentNode.data)
        currentNode.left = insertNode(newNode, currentNode.left)
    else
        currentNode.right = insertNode(newNode, currentNode.right)

    return currentNode
}

//search helper function
const searchTree = (val, currentNode) => {
    //same base cases as above helper function
    if (!currentNode)
        return false;

    if (currentNode.data === val)
        return true;

    //long if statement
    // if(searchTree(val,currentNode.left))
    // return true;

    // else
    // return searchTree(val,currentNode.right)

    //shorter version of above statement
    return searchTree(val, currentNode.left) || searchTree(val, currentNode.right)
}


class BinaryTree {
    constructor(rootNode = null) {
        // when a new Tree is made, it has a root property
        this.rootNode = rootNode
    }

    insert(data) {
        // add a new Node to the tree, with data as the Node's data
        // if the data is already in the tree, do not insert it
        const newNode = new BinaryNode(data)

        this.rootNode = insertNode(newNode, this.rootNode)
    }

    search(val) {
        // search the Tree for a node with the given value
        // if the node exists, return it
        // if the node doesn't exist, return false
    }

    size(node) {
        // calculate the number of nodes in the tree, starting from the given node
    }

    getMax() {
        // return the maximum value stored in the tree
    }

    height(node) {
        // calculate the maximum amount of nodes in any one path from the given node
        // if not given a specific node, default to using the root node
    }

    isBalanced(node) {
        // return true or false based on whether the sub-tree starting at the given node is balanced
        // A tree is imbalanced if the height of one branch exceeds the other side by more than one level
        // A tree is balanced if all branches end within one level of each other.
    }
}

module.exports = {
    BinaryNode,
    BinaryTree
}