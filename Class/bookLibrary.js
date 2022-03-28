class Media{
    constructor(title){
        this._title = title;
        this._isCheckedOut = false;
        this._rating = [];

    }

    get title(){
        return this._title;

    }

    get isCheckedOut(){
        return this._isCheckedOut;
    }

    get rating(){
        return this._rating;
    }

    set isCheckedOut(value){
        this._isCheckedOut = value;
      }

    
    getAverageRating(){
        let total = this.rating.reduce((previousValue, currentValue) => {
            return previousValue + currentValue;
        })

        return total/this._rating.length;
    }

    toggleCheckOutStatus(){
        if(this._isCheckedOut === false){
            this._isCheckedOut =true;
        }else{
            this._isCheckedOut =false;
        }

    }

    addRating(rate){
        this._rating.push(rate);
    }
}



class Book extends Media{
    constructor(title,author,page){
        super(title);
        this._author = author;
        this._page = page;
    }

    get author(){
        return this._author;

    }

    get page(){
        return this._page;
    }
}


class Movies extends Media{
    constructor(title,director, runnTime){
        super(title);
        this._director = director;
        this._runtime = runTime;
    }

    get director(){
        return this._director;
    }

    get runTime(){
        return this._runtime
    }
}


class Cd extends Media{
    constructor(title,artist,songs){
        super(title);
        this._artist = artist;
        this._songs = songs;
    }

    get artist(){
        return this._artist;

    }

    get songs(){
        return this._songs;
    }
}


const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);

historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut)

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());


const speed = new Movie('Speed','Jan de Bont', 116);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());