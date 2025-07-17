import CombatManager from "./CombatManager.ts";
import Hero from "./Hero.ts";

import {Bow, Sword, Shield} from "./Weapons.ts";
import {SteelPlate, IronGlove} from "./Protections.ts";

const sword = new Sword()
const bow = new Bow()
const shield = new Shield()

const steelPlate = new SteelPlate()
const glove1 = new IronGlove()
const glove2 = new IronGlove()

const hero1 = new Hero(200, 5, [sword, shield], [steelPlate, glove1, shield])
const hero2 = new Hero(100, 80, [bow], [glove2])
const combatManager = new CombatManager(hero1, hero2)
combatManager.startBattle()