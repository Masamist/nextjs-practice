import { useRouter } from 'next/router'

function ClientProjectsPage() {

  const router = useRouter()
  
  console.log(router.query)

  function loadProjectHandlre() {
    // load data...
    router.push({
      pathname: '/clients/masami/projecta',
      query: { id: 'masami', clientprojectid: 'projecta'}
    })
  }
  
  return (<div>
    <h1>The Projects for a Given Client</h1>
    <button onClick={loadProjectHandlre}>Load Project A</button>
  </div>)
}

export default ClientProjectsPage