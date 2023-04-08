// checking connection
// alert("btn was clicked") ;

/*--------------------------------------------------*/
//      Higher order func and passing func as arguments
// any func which has func as parameter is a higher order function

/*
function add(num1,num2) {
    return num1+num2 ;
}
function multiply(num1,num2) {
    return num1*num2 ;
}
function subtract(num1,num2) {
    return num1-num2 ;
}
function divide(num1,num2) {
    return num1/num2 ;
}
function calculate(num1,num2,operator) {
    return operator(num1,num2) ;
}

So, 'calculate' is a higher order func
*/

/*--------------------------------------------------*/
/*--------------------------------------------------*/
//                    EVENT-LISTENER

// (wheretoLink).addEventListener(value1,value2);
// value1 is listener
// value2 is function (either higher order or anonymous)

/*--------------------------------------------------*/
/*--------------------------------------------------*/

//                  CLICK EVENT-LISTENER

// for ONE btn ->
// TYPES OF FUNCTION

// method1 - using Higher order func
/*
document.querySelector(".w").addEventListener("click",alrt) ;
function alrt() {
        alert("btn was clicked") ;
}
*/

// method2 - using Anonymous func (preffered)
/*
document.querySelector(".w").addEventListener("click",function() {
    alert("btn was clicked") ;
}) ;
*/

// for ALL button ->
// (using FOR-loop and querySelectorAll)

/*
for(var i=0 ; i<document.querySelectorAll(".drum").length ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        alert("btn was clicked") ;
    }) ;
}
*/   

/*--------------------------------------------------*/
/*--------------------------------------------------*/
//                  Audio

/*
'audio' is an object here and Audio is an constructor-func [details below]
document.querySelector(".w").addEventListener("click",function() {
    var audio = new Audio("sounds/crash.mp3") ;
    audio.play() ;
}) ;
*/

/*--------------------------------------------------*/
//              this and select-statemennt
// (Audio added to all btns based on their btn-text)

/*      MAKING SOUND USING CLICKS
for(var i=0 ; i<document.querySelectorAll(".drum").length ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        // this.style.color="white" ;
        // this is the identity of the element which works in such cases

        // instead of these ...
        // (doesnt work with index of loops too)
        // console.log(document.querySelectorAll(".drum")[i]) ;
        // var btnTxt = document.querySelectorAll(".drum")[i].innerHTML ;
        
        // these are used ...
        // console.log(this) ;
        var btnTxt = this.innerHTML ;

        switch(btnTxt) {
            case "w" :
                var audio = new Audio("sounds/crash.mp3") ;
                audio.play() ;
            break ;

            case "a" :
                var audio = new Audio("sounds/kick-bass.mp3") ;
                audio.play() ;
            break ;

            case "s" :
                var audio = new Audio("sounds/snare.mp3") ;
                audio.play() ;
                break ;
                
            case "d" :
                var audio = new Audio("sounds/tom-1.mp3") ;
                audio.play() ;
            break ;

            case "j" :
                var audio = new Audio("sounds/tom-2.mp3") ;
                audio.play() ;
            break ;

            case "k" :
                var audio = new Audio("sounds/tom-3.mp3") ;
                audio.play() ;
            break ;

            case "l" :
                var audio = new Audio("sounds/tom-4.mp3") ;
                audio.play() ;
            break ;

            // default :
        }
    }) ;
}
*/

/*--------------------------------------------------*/
/*--------------------------------------------------*/
//                  keypress EVENT-LISTENER

// unlike click - in which we had specific elems which were to be linked
// here there's nothing specific, so it is linked to the document
// document.addEventListener(value1,value2);

// document.addEventListener("keypress",function(){
//     alert("key was pressed") ;
// });

// we can also pass an 'event' parameter to func to know the details of key being pressed
// event is returned by the callback function of the eventListener [and hence here func is called CALLBACK FUNC]
// document.addEventListener("keypress",function(event){
//     console.log(event) ;
// });

/*  MAKING SOUND USING KEYS
document.addEventListener("keypress",function(e){
    var k = e.key ;
    // console.log(k) ;
    switch(k) {
        case "w" :
            document.querySelector(".w").click() ;
            break ;
            
        case "a" :
            document.querySelector(".a").click() ;
            break ;
            
        case "s" :
            document.querySelector(".s").click() ;
            break ;
            
        case "d" :
            document.querySelector(".d").click() ;
            break ;
            
        case "j" :
            document.querySelector(".j").click() ;
            break ;
            
        case "k" :
            document.querySelector(".k").click() ;
            break ;
            
        case "l" :
            document.querySelector(".l").click() ;
        break ;

        default :
    }
});
*/

/*--------------------------------------------------*/
/*--------------------------------------------------*/
// Common func for both click and press work

function sound(c) {
    switch(c) {
        case "w" :
            var audio = new Audio("sounds/crash.mp3") ;
            audio.play() ;
        break ;

        case "a" :
            var audio = new Audio("sounds/kick-bass.mp3") ;
            audio.play() ;
        break ;

        case "s" :
            var audio = new Audio("sounds/snare.mp3") ;
            audio.play() ;
            break ;
            
        case "d" :
            var audio = new Audio("sounds/tom-1.mp3") ;
            audio.play() ;
        break ;

        case "j" :
            var audio = new Audio("sounds/tom-2.mp3") ;
            audio.play() ;
        break ;

        case "k" :
            var audio = new Audio("sounds/tom-3.mp3") ;
            audio.play() ;
        break ;

        case "l" :
            var audio = new Audio("sounds/tom-4.mp3") ;
            audio.play() ;
        break ;
    }
}
function btnAnimation(c) {
    var activeBtn = document.querySelector("."+c) ;
    activeBtn.classList.add("pressed") ;
    
    setTimeout(function(){
        activeBtn.classList.remove("pressed") ;
    } , 100)
}

for(var i=0 ; i<document.querySelectorAll(".drum").length ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        sound(this.innerHTML) ;
        btnAnimation(this.innerHTML) ;
    }) ;
    // document.querySelectorAll(".drum")[i].addEventListener("click", cli);
    // function cli() {
    //     sound(this.innerHTML) ;
    // }
}

// Preffered
// document.addEventListener("keypress",function(e){
//     sound(e.key) ;
// });

// document.addEventListener("keypress",response(event)); // event keyword is DEPRICIEATED 
// document.addEventListener("keypress",response(e)); // wrong too
document.addEventListener("keypress",response); // correct
function response(e){
    sound(e.key) ; 
    btnAnimation(e.key) ;
}
// response is a callback func which returns details of event via e

/*--------------------------------------------------*/
/*--------------------------------------------------*/

// OBJECTS and CONSTRUCTOR FUNCTION

/*
Student1 data
var name = "Nanu" ;
var age = 20 ;
var pwd = "no" ; 
var langs = [ "english" , "hindi" , "odia" ] ;

Student2 data
var name2 = "shanu" ;
var age2 = 23 ;
var pwd2 = "no" ;
var langs2 = [ "english" , "hindi" ] ;

If properties are same and there are many more such students, then more and more diff variables will have to be created  ...
*/

/*--------------------------------------------------*/
// Hence, Objects are created
/*
var student1 = {
    name : "Nanu" ,
    age : 20 ,
    pwd : "no" ,
    langs : [ "english" , "hindi" , "odia" ] 
}
var student2 = {
    name : "shanu" ,
    age : 23 ,
    pwd : "no" ,
    langs : [ "english" , "hindi" ] 
    printData : function() {
        console.log("method-called") ;
        alert("My name is "+name+" and my age is "+age+".") ;
    }
}
But now if we have far more students, then we will have to repeat creating objects with same set of properties again n again
*/

/*--------------------------------------------------*/
// Hence a Constructor function (template of objects ~ sort of Class) can be created

// Name start with capital
// this points to the object which called it
// objects can be created using new keyword and passing parameters to constructor func
// objects can access its attribute and method using dot operator [ex: audio.play()]

/*
function Student(name,age,pwd,langs) {
    // attributes 
    this.name = name,
    this.age = age ,
    this.pwd = pwd ,
    this.langs = langs
    // methods
    this.printData = function() {
        // this.age = age+5 
        console.log("method-called") ;
        alert("My name is "+this.name+" and my age is "+this.age+".") ;
    }
}
var student1 = new Student("nanu",20,"no",["english","hindi","odia"]) ;
var student2 = new Student("shanu",24,"no",["english","hindi"]) ;
var student3 = new Student("bhanu",30,"yes",["odia"]) ;
*/

/*--------------------------------------------------*/
/*--------------------------------------------------*/

