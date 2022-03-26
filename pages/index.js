import Logo from '../components/Logo/Logo'
import Ancoras from '../components/Ancoras/Ancoras'
import Lista from '../components/Lista/Lista'

import styles from '../styles/Home.module.css'

export default function Home() {

  const cervejas = [
    { id: 1, name: "Skol", price: "19.99" },
    { id: 2, name: "Brahma", price: "19.99" },
    { id: 3, name: "Budweiser", price: "19.99" },
    { id: 4, name: "Antartica", price: "19.99" },
    { id: 5, name: "Corona", price: "19.99" },
    { id: 6, name: "Stella", price: "19.99" }
  ]

  const vinhos = [
    { id: 1, name: "Cabernet", price: "19.99" },
    { id: 2, name: "Sauvignon", price: "19.99" },
    { id: 3, name: "Pinot", price: "19.99" },
    { id: 4, name: "Chardonnay", price: "19.99" },
    { id: 5, name: "Merlot", price: "19.99" },
    { id: 6, name: "Pinot Noir", price: "19.99" }
  ]

  const destilados = [
    { id: 1, name: "Cachaça", price: "19.99" },
    { id: 2, name: "Whisky", price: "19.99" },
    { id: 3, name: "Vodka", price: "19.99" },
    { id: 4, name: "Rum", price: "19.99" },
    { id: 5, name: "Tequila", price: "19.99" },
    { id: 6, name: "Gin", price: "19.99" }
  ]

  
  return (
    <div>
      <nav className={styles.nav}>
        <Logo />
        {/* <CheckedItems> */}
      </nav>
      <main className={styles.container}>
        <Ancoras />
        <Lista id="cervejas" title="Cervejas" items={cervejas}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <rect x="0" y="0" width="20" height="20"/>
              <path d="M22,7 L22,9 L19,9 C18.4477153,9 18,9.44771525 18,10 L18,13 C18,13.5522847 18.4477153,14 19,14 L22,14 L22,16 L19,16 C17.3431458,16 16,14.6568542 16,13 L16,10 C16,8.34314575 17.3431458,7 19,7 L22,7 Z" fill="#1a1a1a" fillRule="nonzero" transform="translate(19.000000, 11.500000) scale(-1, 1) translate(-19.000000, -11.500000) "/>
              <path d="M4.75777452,5 C5.56503586,3.79401426 6.93979195,3 8.5,3 C10.0602081,3 11.4349641,3.79401426 12.2422255,5 L4.75777452,5 Z" fill="#1a1a1a"/>
              <path d="M7,5 C7,2.790861 8.790861,1 11,1 C13.209139,1 15,2.790861 15,5 L7,5 Z" fill="#1a1a1a"/>
              <path d="M12.0500091,5 C12.2816442,3.85887984 13.290521,3 14.5,3 C15.709479,3 16.7183558,3.85887984 16.9499909,5 L12.0500091,5 Z" fill="#1a1a1a"/>
              <path d="M8,8 L8,8 C8.55228475,8 9,8.44771525 9,9 L9,18 C9,18.5522847 8.55228475,19 8,19 L8,19 C7.44771525,19 7,18.5522847 7,18 L7,9 C7,8.44771525 7.44771525,8 8,8 Z M13,8 L13,8 C13.5522847,8 14,8.44771525 14,9 L14,18 C14,18.5522847 13.5522847,19 13,19 L13,19 C12.4477153,19 12,18.5522847 12,18 L12,9 C12,8.44771525 12.4477153,8 13,8 Z M4.06055214,5 L16.9394479,5 C17.4917326,5 17.9394479,5.44771525 17.9394479,6 C17.9394479,6.01958668 17.9388724,6.03916914 17.9377222,6.05872202 L17.1107386,20.117444 C17.0485547,21.1745693 16.1731425,22 15.1141898,22 L5.88581016,22 C4.82685754,22 3.95144525,21.1745693 3.88926141,20.117444 L3.06227777,6.05872202 C3.02984649,5.50739031 3.4504984,5.0341569 4.00183012,5.00172563 C4.021383,5.00057546 4.04096546,5 4.06055214,5 Z" fill="#1a1a1a"/>
            </g>
          </svg>
        </Lista>
        <Lista id="vinhos" title="Vinhos" items={vinhos}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="#1a1a1a" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="15" x2="12" y2="21"></line>
            <path d="M17 3l1 7c0 3.012 -2.686 5 -6 5s-6 -1.988 -6 -5l1 -7h10z"></path>
            <path d="M6 10a5 5 0 0 1 6 0a5 5 0 0 0 6 0"></path>
          </svg>
        </Lista>
        <Lista id="destilados" title="Destilados" items={destilados}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#1a1a1a">
            <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
          </svg>
        </Lista>
      </main>
    </div>
  )
}
