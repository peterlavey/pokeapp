"use client";

import {IMember, IPokeball, ReactChildren} from "@/typings";
import {useContext, createContext, useState} from "react";


interface ITeamContext {
    pokeballs: IPokeball[] | [];
    members: IMember[] | [];
    actions: {
        setPokeballs: (pokeballs: IPokeball[]) => void;
        setMembers: (members: IMember[]) => void;
    }
}

const defaultProps: ITeamContext = {
    pokeballs: [],
    members: [],
    actions: {
        setPokeballs: () => {},
        setMembers: () => {},
    },
};

export const TeamContext = createContext<ITeamContext>(defaultProps);

export function TeamProvider({children}: ReactChildren)  {
    const [pokeballs, setPokeballs] = useState<IPokeball[]>([]);
    const [members, setMembers] = useState<IMember[] | []>([]);

    return (
        <TeamContext.Provider value={{
            pokeballs,
            members,
            actions: {
                setPokeballs,
                setMembers,
            }
        }}>
            {children}
        </TeamContext.Provider>
    )
}

export const useTeamContext = () => useContext(TeamContext);