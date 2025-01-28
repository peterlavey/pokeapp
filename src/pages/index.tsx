import {GetStaticProps} from "next";
import RootLayout from "@/pages/layout";
import {IResources} from "@/typings";
import Tier from "@/components/tier/Tier";

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('https://cdn.jsdelivr.net/gh/peterlavey/pokemon-content/files/pokemons.json')
    const pokemons = await res.json()

    const res2 = await fetch('https://cdn.jsdelivr.net/gh/peterlavey/pokemon-content/files/pokeballs.json')
    const pokeballs = await res2.json()

    return {
        props: {
            pokemons,
            pokeballs,
        }
    }
}

export default function TierSelection({pokeballs}: IResources) {
    return (
        <RootLayout>
            <Tier pokeball={pokeballs.normal} />
            <Tier pokeball={pokeballs.super} />
            <Tier pokeball={pokeballs.ultra} />
            <Tier pokeball={pokeballs.master} />
        </RootLayout>
    );
}