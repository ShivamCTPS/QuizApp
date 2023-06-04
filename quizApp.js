import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
   
    selected={} //creating object for storing answers
    correctAnswers=0 //to show the results
    isSubmitted=false //to show the number of correct answers
    myQuestions = [
        {
            id:"Question1",
            question:"Which one of the following is not a template loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question:"Which of the file is invald in LWC component folder?",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question:"WHich one of the following is not a directive?",
            answers:{
                a:"for:each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        }
    ] 
        get allNotSelected(){
            return !(Object.keys(this.selected).length === this.myQuestions.length)
        }
        get isScoredFull(){ 
            return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?
            'slds-text-color_success':'slds-text-color_error'}`
        }
    changeHandler(event){
        //console.log("name",event.target.name)
        //console.log("value",event.target.value)
        const {name,value} = event.target  //go to event.target fetch th e property-value store in the same name
        //const.name = event.target.name
        //const.value = event.target.value
        this.selected = {...this.selected,[name]:value} //name-question1 and value-a
    }
    submitHandler(event){
        event.preventDefault()
        //this.selected = {"Question1":"a","Question2":"b","Question3":"c"}
        let correct = this.myQuestions.filter(item=>this.selected[item.id]===item.correctAnswers)
        this.correctAnswers = correct.length 
        this.isSubmitted = true
        //console.log("this.correctAnswers",this.correctAnswers)
    }
    resetHandler(event){
        this.selcted={} //reset back to empty
        this.correctAnswers=0    //this will reset the Quiz
        this.isSubmitted=false //to hide msg when submitted
    }
}