class Questions{

    constructor(){
        this.title=creteElement('h1')
        this.input1=createInput("Enter Your Name Here....");
        this.input2=createInput("Enter Correct Option No..");
        this.button=createInput('Submit');
        this.question=creteElement('h4');
        this.question1=creteElement('h4');
        this.question2=creteElement('h4');
        this.question3=creteElement('h4');
        this.question4=creteElement('h4');
    }

    hide(){
        this.title.hide();
        this.input1.hide();
        this.button.hide();
        this.input2.hide();
    }

    display(){
        this.title.html("MyQuiz Game");
        this.title.position(350, 0);

        this.question.html("Question:-What starts and ends with the letter'E",but has only one letter?=);
        this.question.position(150, 80);
        this.option1.html("1:Everyone");
        this.option1.position(150, 100);
        this.option2.html("2: Envelope");
        this.option2.position(150, 120);
        this.option3.html("3: Estimate");
        this.option3.position(150, 140);
        this.option4.html("4: Example");
        this.option4.position(150, 160);

        this.input1.position(150,230);
        this.option3.position(350, 140);
        this.option4.position(150);

        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            contestant.name=this.input1.value();
            contestant.answer=this.input2.value();
            contestantCount+=1;
            contestant.index=contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        });
    }
}
