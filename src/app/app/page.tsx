import React from 'react'
// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Coins, Plus, Minus } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { AlephiumConnectButton } from '@alephium/web3-react'

const tokens = [
  { name: 'Chainlink', symbol: 'LINK', icon: '🔗' },
  { name: 'Wrapped BTC', symbol: 'WBTC', icon: '₿' },
  { name: 'AlphLend', symbol: 'ALPH', icon: '🅰️' },
  { name: 'Ether', symbol: 'ETH', icon: '⧫' },
  { name: 'Wrapped Staked ETH', symbol: 'wsETH', icon: '🔷' },
  { name: 'Uniswap', symbol: 'UNI', icon: '🦄' }
]

export default function MainApp() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b border-gray-800">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
          <a href="/">AlphLend</a>
        </div>
        <AlephiumConnectButton />
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-5 ml-10 mt-5">
          <h2 className="text-sm font-medium text-gray-400 mb-2">Balance</h2>
          <div className="flex items-center">
            <Coins className="w-8 h-8 mr-2 text-blue-400" />
            <span className="text-4xl font-bold">0.0000</span>
          </div>
          <div className="text-sm text-gray-400">$0.00</div>
        </div>

        <div className="flex justify-end space-x-4 mb-8">
          <Button variant="outline" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Supply ALPH
          </Button>
          <Button variant="outline" size="sm">
            <Minus className="w-4 h-4 mr-2" />
            Borrow ALPH
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Collateral Assets</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-400">
                    <th className="pb-2">Asset</th>
                    <th className="pb-2">Protocol Balance</th>
                    <th className="pb-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {tokens.map((token) => (
                    <tr key={token.symbol} className="border-t border-gray-700">
                      <td className="py-2 flex items-center">
                        <span className="mr-2 text-2xl">{token.icon}</span>
                        <div>
                          <div>{token.name}</div>
                          <div className="text-sm text-gray-400">{token.symbol}</div>
                        </div>
                      </td>
                      <td className="py-2">0.0000</td>
                      <td className="py-2">
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Plus className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Minus className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>ALPH Wallet Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-4">
                  <Coins className="w-8 h-8 mr-2 text-blue-400" />
                  <span className="text-2xl font-bold">0.0000</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-400">Net Borrow APR</div>
                    <div className="text-xl font-bold">10.40%</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Net Supply APR</div>
                    <div className="text-xl font-bold">9.38%</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Position Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <table className="w-full">
                  <tbody>
                    {[
                      { label: 'Collateral Value', value: '0.0000 ALPH' },
                      { label: 'Liquidation Point', value: '0.0000 ALPH' },
                      { label: 'Borrow Capacity', value: '0.0000 ALPH' },
                      { label: 'Available to Borrow', value: '0.0000 ALPH' }
                    ].map((item) => (
                      <tr key={item.label} className="border-t border-gray-700">
                        <td className="py-2 text-gray-400">{item.label}</td>
                        <td className="py-2 text-right">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
