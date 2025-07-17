import type {Weapon, Protection} from "./Types.ts";
import Attack from "./Attack.ts";

export class Sword implements Weapon {
    attack(attack:Attack){
        attack.damage += 20;
        return attack;
    }
}

export class Bow implements Weapon {
    attack(attack:Attack){
        attack.target.takeDamage(10);
        return attack;
    }
}

export class Shield implements Weapon, Protection {
    attack(attack:Attack){
        attack.target.damage -= 1;
        return attack;
    }
    defend(attack:Attack){
        attack.damage -= 15;
        return attack;
    }
}
