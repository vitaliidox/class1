//Task 1
// class Edition{
//     constructor(options){
//         this.options = options
//     }

// get options(){
//     return this._Edition
// }
// set options(value){
//     this._Edition = value
// }
//  arr = [
//         {edition: "Publication 1"},
//         {edition: "Publication 2"},
//         {edition: "Publication 3"},
//         {edition: "Publication 4"},
//         {edition: "Publication 5"},
//    ]
//        show(search, arr){
//         for(let i =0; i<arr.length; i++){
//             if(arr[i].edition == search) {
//                 return alert(arr[i].edition)
//         }
//         }
//        alert('Это издание не является искомым')
// }
// }
//     let edit  = new Edition()
//         edit.show("Publication 3", edit.arr)

//Task 2
// class Books{
//     constructor(nameAvtor,surnameAvtor,yearOfEdition,edition){
//         this.nameAvtor = nameAvtor
//         this.surnameAvtor = surnameAvtor
//         this.yearOfEdition = yearOfEdition
//         this.edition = edition
//     }
//     get nameAvtor (){
//         return this._nameAvtor
//     }
//     get surnameAvtor(){
//         return this._surnameAvtor
//     }
//     get yearOfEdition(){
//         return this._yearOfEdition
//     }
//     get edition(){
//         return this._edition
//     }
//     set nameAvtor(value){
//         this._nameAvtor = value
//     }
//     set surnameAvtor(value){
//         this._surnameAvtor = value
//     }
//     set yearOfEdition(value){
//         this._yearOfEdition= value
//     }
//     set edition(value){
//         this._edition = value
//     }
//     present() {
//         alert(this.nameAvtor+" "+this.surnameAvtor+" "+this.yearOfEdition+" "+this.edition)
//     }
// }
// // let books = new Books("ivan","ivanov",1999,"ololo")
// // books.present()


// class Article extends Books{
//     constructor(nameAvtor,surnameAvtor,yearOfEdition, nameOfMagazine, numberOdEdition){
//         super(nameAvtor,surnameAvtor,yearOfEdition)

//         this.nameOfMagazine = nameOfMagazine
//         this.numberOdEdition = numberOdEdition
//     }
//     get numberOdEdition(){
//         return this._numberOdEdition
//     }
//     set numberOdEdition (value){
//         this._numberOdEdition = value
//     }
//     get nameOfMagazine(){
//         return this._nameOfMagazine
//     }
//     set nameOfMagazine(value){
//         this._nameOfMagazine = value
//     }
   
//     present() {
//         alert(this.nameAvtor+" "+this.surnameAvtor+" "+this.yearOfEdition+" "+this.nameOfMagazine+" "+this.numberOdEdition)
//     }
// }
// let article = new Article("John","Adams","1999","Wall","12")
// article.present()

// class ResourceOfElectro extends Books{
//     constructor(nameAvtor,surnameAvtor, link ,anotation){
//         super(nameAvtor,surnameAvtor)
//         this.link = link,
//         this.anotation = anotation
//     }
//     get anotation(){
//         return this._anotation
//     }
//     set anotation(value){
//         this._anotation = value
//     }
//     get link(){
//         return this._link
//     }
//     set link(value){
//         this._link = value
//     }
//     show(){
//         alert(` ${this.nameAvtor} ${this.surnameAvtor}  ${this.link}  ${this.anotation}`)
//     }
// }
// let res = new ResourceOfElectro("John","Adams","https://learn.javascript.ru/class","Синтаксис «class»")
// res.show()

//Task 3
// class Сatalog {
//     constructor(nameOfPublications,surnameOfAvtor){
//         this.nameOfPublications = nameOfPublications
//         this.surnameOfAvtor =surnameOfAvtor
//     }
//     get surnameOfAvtor(){
//         return this._surnameOfAvtor
//     }
//     set surnameOfAvtor(value){
//         this._surnameOfAvtor = value
//     }
//     get nameOfPublications(){
//         return this._nameOfPublications
//     }
//     set nameOfPublications(value){
//         this._nameOfPublications = value
//     }
//     show(arr, search){
            
//         for (let i = 0; i < arr.length; i++) {
//             if(search == arr[i].nameOfPublications || search == arr[i].surnameOfAvtor){
//                 alert(arr[i].nameOfPublications + ' '+arr[i].surnameOfAvtor)
//             }else{console.log(arr[i].nameOfPublications + ' '+arr[i].surnameOfAvtor);}
//         }
//     }
//     arr = [
//     {nameOfPublications:'Publications 1',surnameOfAvtor:'Stepanov'},
//     {nameOfPublications:'Publications 5',surnameOfAvtor:'Ivanov'}
//      ]
//       pushToArr(name,surname){
//         this.arr.push({nameOfPublications:name,surnameOfAvtor:surname})
//     }
// }
//         let search = prompt('Введите имя публикации или фамилию автора')
//         let catalog = new Сatalog()
//         catalog.pushToArr(prompt('Push publication'),prompt('Name'))
//         catalog.show(catalog.arr,search)