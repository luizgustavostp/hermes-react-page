import { useState, useEffect } from "react"
import './css/count.css'

export default function Counter() {
    const [UserValue, Switch] = useState(0)
    
    useEffect(() => {

        requestAnimationFrame(() => {
            if (UserValue > 5124) { 
                return
            }

            Switch(UserValue + 8    )
            })
        })

    return <span className="Counter">
        <div className="green-dot"></div>
        <h1>{UserValue} Usuários ativos</h1>
    </span>
}
