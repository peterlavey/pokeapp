import {ReactNode} from "react";

export type ReactChildren = {
   children: ReactNode
};

//todo: complete types
export type Types = 'Grass' | 'Poison';

export type Tiers = 'D' | 'C' | 'B' | 'A' | 'S';

export interface IPokeball {
    name: string;
    image: string;
    tiers: Tiers[];
}

export interface IPokeballs {
    normal: Pokeball;
    super: Pokeball;
    ultra: Pokeball;
    master: Pokeball;
}

export interface ILanguages {
    english: string;
    japanese: string;
    chinese: string;
    french: string;
}

export interface IPokemon {
    id: string;
    name: ILanguages;
    type: Types[];
    image: string;
}

export interface IMember {
    pokeball: IPokeball;
    pokemon: IPokemon;
}

export interface IResources {
    pokemons: IPokemon[];
    pokeballs: IPokeballs;
}