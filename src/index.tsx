import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);

// enum UnitType {
//   Warrior = 'warrior',
//   Warlord = 'world',
//   Default = 'unit',
// }

// interface Unit {
//   move: () => void;
//   hit: () => void;
//   health: number;
//   energy: number;
//   hitDemage: number;
//   unitType: UnitType;
// }

// interface Tower {
//   hitDemage: number;
//   move: () => void;
// }

// interface Warlord extends Unit {
//   cast: () => void;
//   health: 100;
//   energy: 150;
//   hitDemage: 50;
//   unitType: UnitType.Warlord;
// }

// interface Warrior extends Unit {
//   useSword: () => void,
//   health: 200;
//   energy: 50;
//   hitDemage: 100;
//   unitType: UnitType.Warrior;
// }

// const warrior: Warrior = {
//   move: () => {},
//   hit: () => {},
//   useSword: () => {},
//   health: 200,
//   energy: 50,
//   hitDemage: 100,
//   unitType: UnitType.Warrior,
// }

// const warlord1: Warlord = {
//   move: () => {},
//   hit: () => {},
//   cast: () => {},
//   health: 100,
//   energy: 150,
//   hitDemage: 50,
//   unitType: UnitType.Warlord,
// }

// const units: Array<Unit> = [
//   warrior, warlord1,
// ]

// const tower: Tower = {
//   hitDemage: 400,
//   move: () => {},
// };

// const moveUnit = (unit: Unit) => {
//   unit.move();
// }

// const processHits = (unit: Warlord | Warrior) => {
//   switch (unit.unitType) {
//     case UnitType.Warlord:
//       unit.cast();
//       break;
//     case UnitType.Warrior:
//       unit.useSword();
//       break;
//   }
//   unit.hit();
// }

// type OnlyHitUser = Pick<Unit, 'hitDemage' | 'move'>
// type OptionalUnit = Partial<Unit>

// type SomeNewType = Unit;

// const processUnit = <SomeUnit extends OptionalUnit>(unit: SomeUnit) => {
//   unit.hitDemage
// }

// units.forEach((u) => moveUnit(u));
// units.forEach((u) => processUnit(u));

// processUnit(tower);

// moveUnit(tower);
