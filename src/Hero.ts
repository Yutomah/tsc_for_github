import type {Weapon, Protection} from "./Types.ts";
import Attack from './Attack';

export default class Hero{
    public health:number;
    public damage:number;
    public weapons:Weapon[]
    public protections:Protection[]

    constructor(health:number = 100, damage:number = 10, weapons:Weapon[] = [], protections:Protection[] = []) {
        this.health = health;
        this.damage = damage;
        this.weapons = weapons;
        this.protections = protections
    }
    attack(target:Hero){
        let attack = new Attack(this, target, this.damage);
        for (const weapon of this.weapons) {
            attack = weapon.attack(attack);
        }
        target.defend(attack)
    }
    defend(attack:Attack){
        for(const protection of this.protections){
            attack = protection.defend(attack);
        }
        this.takeDamage(attack.damage)
    }
    takeDamage(damage:number){
        damage = damage >0 ? damage:0;
        this.health -= damage;

        if(this.health <= 0){
            console.log('death')
            return false
        }
        return true
    }
}