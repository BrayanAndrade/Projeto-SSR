import React from "react"
import "isomorphic-fetch"
import Link from "next/link"

export default function Lojas() {
    return (
        <div>
            <h1>NOSSAS LOJAS</h1>
            <h2>Rio de Janeiro</h2>
            <h2>São Paulo</h2>
            <h2>Santa Catarina</h2>
            <Link href="/sobre">Saiba Mais</Link>
        </div>
        
    );
}