"use client";

import {FC} from "react";
import {useTeamContext} from "@/contexts/team-context";
import Image from "next/image";

export const Header: FC = () => {
    const {pokeballs} = useTeamContext();

    return (
        <div className='bg-sky-100 p-4 shadow-md'>
            {
                pokeballs.map((pokeball, index) => (
                    <Image src={pokeball.image} alt={pokeball.name} width={50} height={50} key={pokeball.name + index}/>
                ))
            }
        </div>
    )
};