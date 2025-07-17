import Attack from './Attack';

export interface Weapon{
    attack(attack:Attack):Attack
}

export interface Protection{
    defend(attack:Attack):Attack
}