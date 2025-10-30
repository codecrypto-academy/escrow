'use client'

import { ConnectButton } from '@/components/ConnectButton'
import { AddToken } from '@/components/AddToken'
import { CreateOperation } from '@/components/CreateOperation'
import { OperationsList } from '@/components/OperationsList'
import { BalanceDebug } from '@/components/BalanceDebug'
import { useEthereum } from '@/lib/ethereum'

export default function Home() {
  const { isConnected } = useEthereum()

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <header className="border-b bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Escrow DApp</h1>
          <ConnectButton />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {!isConnected ? (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold mb-4">Welcome to Escrow DApp</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Connect your wallet to start creating and completing escrow operations
            </p>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-8">
              <AddToken />
              <CreateOperation />
            </div>
            <div>
              <OperationsList />
            </div>
            <div>
              <BalanceDebug />
            </div>
          </div>
        )}
      </main>

      <footer className="border-t bg-white dark:bg-zinc-900 mt-20">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>Escrow DApp - Secure ERC20 Token Swaps</p>
        </div>
      </footer>
    </div>
  )
}
