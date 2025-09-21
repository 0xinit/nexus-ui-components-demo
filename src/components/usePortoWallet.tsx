// usePortoWallet.ts
'use client'

import { useEffect, useRef, useState } from 'react'
import { Porto } from 'porto'
import { useNexus } from '@avail-project/nexus-widgets'
import { createWalletClient, custom, type Address } from 'viem'
import { baseSepolia } from 'viem/chains'

export default function usePortoWallet() {
  // const { setProvider, provider } = useNexus()

  // const portoRef = useRef<ReturnType<typeof Porto.create> | null>(null)
  // const [ready, setReady] = useState(false)
  // const [addresses, setAddresses] = useState<Address[]>([])
  // const connected = addresses.length > 0 || Boolean(provider)

  const porto = Porto.create()
 
  // 2. Initialize Wallet Client.
  const walletClient = createWalletClient({
    chain: baseSepolia,
    transport: custom(porto.provider),
  })
  
  // 3. Use Wallet Actions.
  const addresses2 = walletClient.requestAddresses()
  console.log('Porto addresses', addresses2)

//   // Create Porto once on mount, hand its provider to Nexus, prefill addresses
//   useEffect(() => {
//     // if (typeof window === 'undefined') return
//     const p = Porto.create()
//     portoRef.current = p
//     console.log('Created Porto instance from p', p)
//     console.log('Porto instance provider', p.provider)
//     if (!provider) setProvider(p.provider)
//     setReady(true)

//     // if user has already authorized, you can read addresses silently
//     const wc = createWalletClient({ chain: baseSepolia, transport: custom(p.provider) })
//     wc.getAddresses().then(a => { if (a?.length) setAddresses(a as Address[]) }).catch(() => {})

//     return () => {
//       try { p.destroy?.() } catch {}
//       portoRef.current = null
//       setReady(false)
//     }
//   }, [provider, setProvider])

//   const connect = async () => {
//     const p = portoRef.current
//     if (!p) return
//     const wc = createWalletClient({ chain: baseSepolia, transport: custom(p.provider) })
//     const next = wc.requestAddresses()      // opens Porto UI
//     console.log('Porto requestAddresses', next)
//     // setAddresses(next as Address[])
//   }

//   console.log('usePortoWallet from porto page', { ready, connected, addresses })
//   return { ready, connected, addresses, connect }
}