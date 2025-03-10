import Client from '@/components/client-server/client'
import Server from '@/components/client-server/server'


export default function PageClientServer() {
    return (
        <div className="flex flex-col gap-10">
            <div>
                <h1>Componente Client</h1>
                <Client />
            </div>
            <div>
                <h1>Componente Server</h1>
                <Server />
            </div>
        </div>
    )
}