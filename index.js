// Your code here

class Polygon{
    constructor(arr){
        this.arr = arr;
    }

    get countSides(){
        return this.arr.length;
    }

    get perimeter(){
        let sum = 0;

        for(let i = 0; i < this.arr.length; i++){
            sum += this.arr[i];
        }
        return sum;
    }
}

class Triangle extends Polygon {
    get isValid() {
  
        for (let i = 0; i < this.arr.length; i++) {
          let s1 = this.arr[i];
          let s2 = this.arr[i+1];
          let s3 = this.arr[i+2];
  
          if (s1+s2>s3 && s1+s3>s2 && s2+s3>s1) {
            return true;
          }
          else {
            return false;
          }
        }
      
    }
  }

  class Square extends Polygon{

    get isValid() {
        for(let i = 0; i < this.arr.length; i++){
            if(this.perimeter / this.countSides === this.arr[i]){
              return true;
            }
            else{
              return false;
            }
          }
    }

    get area(){

        if(this.isValid){
            return this.arr[0] * this.arr[0];
        }
    
}
  }