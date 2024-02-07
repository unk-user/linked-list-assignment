

class Node {
    constructor(value = null, nextNode = null ) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value) {
        let newTail = new Node(value);
        if(this.size() === 0){
            this.head = newTail;
            this.tail = this.head;
        } else {
            this.tail.nextNode = newTail;
            this.tail = newTail; 
        }    
    }



    prepand(value) {
        let newHead = new Node(value);
        if(this.size() === 0){
            this.head = newHead;
            this.tail = this.head;
        } else {
            newHead.nextNode = this.head;
            this.head = newHead;
        }
    }
    size() {
        if(this.head === null){
            return 0;
        } else {
            let size = 1;
            let next = this.head.nextNode;

            for(let i = 1; next !== null; i++){
                next = next.nextNode;
                size++;
            }
            return size;
        }
    }
    head() {
        return this.head;
    }
    tail() {
        return this.tail;
    }
    at(index){
        let currentNode = this.head;
        for(let i = 0; i < index; i++){
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }
    pop() {
        if(this.size() === 0){
            return;
        } else {
            let newTailIndex = this.size() - 2;
            this.tail = this.at(newTailIndex);
            this.tail.nextNode = null;
        }
    }
    contains(value) {
        let currentNode = this.head;
        let contain = false;
        while(!contain && currentNode !== null){
            if(currentNode.value === value){
                contain = true;
            } else {
                currentNode = currentNode.nextNode;
            }
        }
        return contain;
    }
    find(value) {
        let currentNode = this.head;
        let contain = false;
        let index = null;
        let i = 0;

        while(!contain && currentNode !== null){
            if(currentNode.value === value){
                contain = true;
                index = i;
            } else {
                currentNode = currentNode.nextNode;
            }
            i++
        }
        return index;
    }
    string() {
        let string = '';
        if(this.size() !== 0) {
            let currentNode = this.head;
            for(let i = 0; i < this.size(); i++){
                string += `(${currentNode.value}) -> `;
                currentNode = currentNode.nextNode;
            }
        }
        string += 'null';
        return string;
    } 
    insertAt(value, index) {
        if(this.size() === 0 || index === 0){
            this.prepand(value);
        } else if(index >= this.size()) {
            this.append(value);
        } else {
            let newNode = new Node(value);
            newNode.nextNode = this.at(index);
            this.at(index - 1).nextNode = newNode; 
        }
    }
    removeAt(index) {
        if(this.size() === 0){
            return;
        } else if(index === 0){
            this.head = this.head.nextNode;
        } else {
            let nodeToRemove = this.at(index);
            this.at(index - 1) = nodeToRemove.nextNode;
        }
    }
}


module.exports = { Node, LinkedList };