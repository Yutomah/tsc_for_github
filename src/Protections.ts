import type {Weapon, Protection} from "./Types.ts";
import Attack from "./Attack.ts";

export class IronGlove implements Weapon, Protection {
    attack(attack:Attack){
        attack.damage += 5;
        return attack;
    }
    defend(attack:Attack){
        attack.damage -= 5;
        return attack;
    }
}

export class SteelPlate implements Protection{
    defend(attack:Attack){
        attack.damage -= 10;
        return attack;
    }
}