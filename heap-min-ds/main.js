class MinHeap{
    constructor(){
        this.heap = [null]
    }
    getMin(){
        return this.heap[1]
    }

}

insert (Node){
    this.heap.push(node)
    var count = this.length - 1
    if(this.heap.length >1){
        while(count > 1 && this[Math.floor(count/2)] > this.heap[count]){

            [this.heap[count],this.heap[Math.floor(count/2)]] = [this.heap[Math.floor(count/2)],this.heap[count]]
        count = Math.floor(count/2)
        }
    }
}