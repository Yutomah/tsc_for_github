import Hero from './Hero';

export default class CombatManager{
    public hero1:Hero
    public hero2:Hero
    constructor(hero1:Hero, hero2:Hero) {
        this.hero1 = hero1;
        this.hero2 = hero2;
    }

    startBattle(){
        while(true){
            console.log('turn started');

            this.hero1.attack(this.hero2);
            this.hero2.attack(this.hero1);


            console.log(`hero1 has health: ${this.hero1.health} ||| hero2 has health: ${this.hero2.health}`)
            if(this.hero1.health <= 0){
                console.log('hero1 is dead')
                return
            }

            if(this.hero2.health <= 0){
                console.log('hero2 is dead')
                return
            }
            console.log('turn ended')
        }
    }
}