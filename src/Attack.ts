import Hero from "./Hero.ts";

export default class Attack {
    public attacker: Hero;
    public target: Hero;
    public damage: number;

    constructor(attacker:Hero, target:Hero, damage:number) {
        this.attacker = attacker;
        this.target = target;
        this.damage = damage;
    }
}