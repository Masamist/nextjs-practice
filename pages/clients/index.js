import Link from 'next/link'

function ClientsPage() {
  const clients = [
    { id:'masami', name: 'Stonebridge'},
    { id:'chloe', name: 'Stone'},
    { id:'sarah', name: 'Bridge'},
  ]
  return <div>
    <h1>The Clients Page</h1>
      <ul>
        {clients.map(client => ( 
        <li key={client.id}>
          <Link href={{
            pathname: '/clients/[id]',
            query: {id: client.id},
          }}>{client.name}</Link>
        </li>
        ))}
      </ul>
  </div>
}

export default ClientsPage