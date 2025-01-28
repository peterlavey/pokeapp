"use client";

import React from 'react';
import {IPokeball} from "@/typings";
import Image from "next/image";
import {useTeamContext} from "@/contexts/team-context";

export const Tier = ({pokeball}: {pokeball: IPokeball}) => {
    const {pokeballs, actions: {setPokeballs}} = useTeamContext();
    const handleSelect = () => setPokeballs([...pokeballs, pokeball]);

    return (
        <div onClick={handleSelect}>
            <Image src={pokeball.image} alt={pokeball.name} width={100} height={100} />
        </div>
    );
}

export default Tier;