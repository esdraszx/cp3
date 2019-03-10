let app = new Vue ({

    el: '#app',

    data: {
        intro: {
            bool: true,
            text: 'We are here to help you know everything you need to start preparing to get a new home!',
            title: 'Getting a New Home?',
        },
        step: 1,
        fName: '',
        aIncome: '',
        cScore: '',
        firstTime: '',
        houseType: '',
        maximum: '',
    },

    methods: {
        increaseStep(){
            this.step++;
            console.log(this.fName);
            console.log(this.aIncome);
        },

        setScore(score){
            this.cScore = score;
            this.step++;
            console.log(this.cScore)
        },

        fTime(value){
            this.firstTime = value;
            this.step++;
            console.log(this.firstTime)
        },

        hType(value){
            this.houseType = value;
            this.step++
            console.log(this.houseType)
        },

        finish (){
            this.intro.title = 'Here is what you need to know!'
            this.step++;
            console.log(this.maximum)
            this.aIncome = this.aIncome * 5;
            this.aIncome = '$' + this.aIncome;
            this.maximum = '$' + this.maximum;
            console.log(this.aIncome);
        }
    },

});