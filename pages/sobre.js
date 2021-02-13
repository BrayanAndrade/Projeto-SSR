import Link from "next/link"
import React from "react"
import "isomorphic-fetch"

export default function Sobre (){
  return(
    <div>
        <Link href="/">Voltar</Link>                
            <h2>Rio de Janeiro</h2>
            <p>Avenida Presidente Vargas, 5000</p>
            <p>10º andar</p>
            <p>Centro</p>
            <p>(21)9999-9999</p>

        
            <h2>São Paulo</h2>
            <p>Avenida Paulista, 950</p>
            <p>3º andar</p>
            <p>Jardins</p>
            <p>(11)1111-9222</p>

        
            <h2>Santa Catarina</h2>
            <p>Rua major vila, 370</p>
            <p>2º andar</p>
            <p>Vila Mariana</p>
            <p>(41)5555-5555</p>
          
    </div>
  )
}