"use client"

import { useState } from "react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { TrendingUp, TrendingDown, Wallet, ArrowUpRight, ArrowDownLeft, Plus, X } from "lucide-react"

//RichAdams Mdfs: Mock data, should match the data the api returns... 
const chartData = [
  { time: "00:00", price: 2450, volume: 2400 },
  { time: "04:00", price: 2210, volume: 1398 },
  { time: "08:00", price: 2290, volume: 9800 },
  { time: "12:00", price: 2000, volume: 3908 },
  { time: "16:00", price: 2181, volume: 4800 },
  { time: "20:00", price: 2500, volume: 3800 },
  { time: "24:00", price: 2100, volume: 4300 },
]

const tradingPairs = [
  {
    id: 1,
    pair: "ETH/USDC",
    price: 2458.32,
    change24h: 5.23,
    volume24h: "1.2B",
    liquidity: "450M",
    apy: "12.5%",
  },
  {
    id: 2,
    pair: "BTC/USDC",
    price: 42350.5,
    change24h: 2.15,
    volume24h: "2.8B",
    liquidity: "890M",
    apy: "8.2%",
  },
  {
    id: 3,
    pair: "SOL/USDC",
    price: 182.45,
    change24h: 8.92,
    volume24h: "680M",
    liquidity: "220M",
    apy: "15.8%",
  },
  {
    id: 4,
    pair: "USDT/USDC",
    price: 1.0002,
    change24h: 0.02,
    volume24h: "3.5B",
    liquidity: "1.2B",
    apy: "2.1%",
  },
  {
    id: 5,
    pair: "ARB/USDC",
    price: 0.95,
    change24h: -3.15,
    volume24h: "340M",
    liquidity: "85M",
    apy: "18.5%",
  },
  {
    id: 6,
    pair: "OP/USDC",
    price: 3.28,
    change24h: 6.45,
    volume24h: "290M",
    liquidity: "120M",
    apy: "14.2%",
  },
]

const portfolioHoldings = [
  { symbol: "ETH", amount: 2.5, price: 2458.32, value: 6145.8 },
  { symbol: "USDC", amount: 15000, price: 1.0, value: 15000 },
  { symbol: "BTC", amount: 0.15, price: 42350.5, value: 6352.575 },
  { symbol: "SOL", amount: 50, price: 182.45, value: 9122.5 },
]

type ModalType = "swap" | "pool" | "stake" | null

export default function HomePage() {
  const [activeModal, setActiveModal] = useState<ModalType>(null)
  const [selectedPair, setSelectedPair] = useState(tradingPairs[0])
  const [swapFrom, setSwapFrom] = useState("")
  const [swapTo, setSwapTo] = useState("")
  const [poolToken1, setPoolToken1] = useState("")
  const [poolToken2, setPoolToken2] = useState("")
  const [stakeAmount, setStakeAmount] = useState("")
  const [sortBy, setSortBy] = useState<"change" | "volume" | "liquidity">("change")

  // Calculate portfolio totals
  const portfolioTotal = portfolioHoldings.reduce((acc, holding) => acc + holding.value, 0)
  const portfolioChange = ((portfolioTotal * 0.045) / portfolioTotal) * 100 // 4.5% mock change

  // Sort trading pairs
  const sortedPairs = [...tradingPairs].sort((a, b) => {
    if (sortBy === "change") return b.change24h - a.change24h
    if (sortBy === "volume") {
      const volA = Number.parseFloat(a.volume24h)
      const volB = Number.parseFloat(b.volume24h)
      return volB - volA
    }
    const liqA = Number.parseFloat(a.liquidity)
    const liqB = Number.parseFloat(b.liquidity)
    return liqB - liqA
  })

  const handleSwap = () => {
    if (swapFrom && swapTo) {
      alert(`Swapped ${swapFrom} for ${swapTo}`)
      setSwapFrom("")
      setSwapTo("")
      setActiveModal(null)
    }
  }

  const handleAddLiquidity = () => {
    if (poolToken1 && poolToken2) {
      alert(`Added liquidity: ${poolToken1} + ${poolToken2}`)
      setPoolToken1("")
      setPoolToken2("")
      setActiveModal(null)
    }
  }

  const handleStake = () => {
    if (stakeAmount) {
      alert(`Staked ${stakeAmount} tokens`)
      setStakeAmount("")
      setActiveModal(null)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Main Container */}
      <div className="w-full px-4 py-6 md:px-8 md:py-8 max-w-7xl mx-auto">
        {/* Portfolio Overview Section */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Main Portfolio Card */}
            <div className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm font-medium text-slate-600 mb-2">Total Portfolio Value</p>
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                    ${portfolioTotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </h1>
                </div>
                <Wallet className="w-12 h-12 text-blue-600 opacity-20" />
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {portfolioChange >= 0 ? (
                    <ArrowUpRight className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <ArrowDownLeft className="w-5 h-5 text-red-600" />
                  )}
                  <span
                    className={`text-lg font-semibold ${portfolioChange >= 0 ? "text-emerald-600" : "text-red-600"}`}
                  >
                    {portfolioChange.toFixed(2)}%
                  </span>
                </div>
                <span className="text-slate-600 text-sm">in 24h</span>
              </div>
            </div>

            {/* Holdings Summary */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-4">Holdings</h3>
              <div className="space-y-3">
                {portfolioHoldings.map((holding) => (
                  <div key={holding.symbol} className="flex justify-between items-center">
                    <span className="text-slate-700 font-medium">{holding.symbol}</span>
                    <span className="text-slate-900 font-semibold">${holding.value.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Holdings Breakdown Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {portfolioHoldings.map((holding) => (
              <div key={holding.symbol} className="bg-white rounded-lg border border-slate-200 p-4">
                <p className="text-xs text-slate-600 mb-1 font-medium">{holding.symbol}</p>
                <p className="text-lg font-bold text-slate-900 mb-1">{holding.amount}</p>
                <p className="text-xs text-slate-500">${holding.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trading Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Main Trading Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Price Chart */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-slate-900">Market Overview</h2>
                  <p className="text-sm text-slate-600 mt-1">{selectedPair.pair} - 24h Chart</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-slate-900">${selectedPair.price.toLocaleString()}</p>
                  <p
                    className={`text-sm font-semibold flex items-center gap-1 justify-end mt-1 ${
                      selectedPair.change24h >= 0 ? "text-emerald-600" : "text-red-600"
                    }`}
                  >
                    {selectedPair.change24h >= 0 ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    {Math.abs(selectedPair.change24h).toFixed(2)}%
                  </p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="time" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                    }}
                  />
                  <Area type="monotone" dataKey="price" stroke="#3b82f6" fillOpacity={1} fill="url(#colorPrice)" />
                </AreaChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-200">
                <div>
                  <p className="text-xs text-slate-600 font-medium mb-1">24h High</p>
                  <p className="text-lg font-bold text-slate-900">$2,500</p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 font-medium mb-1">24h Low</p>
                  <p className="text-lg font-bold text-slate-900">$2,100</p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 font-medium mb-1">24h Avg</p>
                  <p className="text-lg font-bold text-slate-900">$2,300</p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 font-medium mb-1">Volume</p>
                  <p className="text-lg font-bold text-slate-900">$1.2B</p>
                </div>
              </div>
            </div>

            {/* Trading Pairs Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg md:text-xl font-bold text-slate-900">Top Trading Pairs</h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSortBy("change")}
                    className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                      sortBy === "change" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    Change
                  </button>
                  <button
                    onClick={() => setSortBy("volume")}
                    className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                      sortBy === "volume" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    Volume
                  </button>
                  <button
                    onClick={() => setSortBy("liquidity")}
                    className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                      sortBy === "liquidity"
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    Liquidity
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 text-xs font-semibold text-slate-600 uppercase">Pair</th>
                      <th className="text-right py-3 px-4 text-xs font-semibold text-slate-600 uppercase">Price</th>
                      <th className="text-right py-3 px-4 text-xs font-semibold text-slate-600 uppercase">
                        24h Change
                      </th>
                      <th className="text-right py-3 px-4 text-xs font-semibold text-slate-600 uppercase">Volume</th>
                      <th className="text-right py-3 px-4 text-xs font-semibold text-slate-600 uppercase">Liquidity</th>
                      <th className="text-right py-3 px-4 text-xs font-semibold text-slate-600 uppercase">APY</th>
                      <th className="text-right py-3 px-4 text-xs font-semibold text-slate-600 uppercase">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedPairs.map((pair) => (
                      <tr
                        key={pair.id}
                        className="border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer"
                        onClick={() => setSelectedPair(pair)}
                      >
                        <td className="py-4 px-4">
                          <span className="font-semibold text-slate-900">{pair.pair}</span>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <span className="font-semibold text-slate-900">${pair.price.toLocaleString()}</span>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <span
                            className={`font-semibold flex items-center justify-end gap-1 ${
                              pair.change24h >= 0 ? "text-emerald-600" : "text-red-600"
                            }`}
                          >
                            {pair.change24h >= 0 ? (
                              <TrendingUp className="w-4 h-4" />
                            ) : (
                              <TrendingDown className="w-4 h-4" />
                            )}
                            {Math.abs(pair.change24h).toFixed(2)}%
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right text-slate-900 font-medium">${pair.volume24h}</td>
                        <td className="py-4 px-4 text-right text-slate-900 font-medium">${pair.liquidity}</td>
                        <td className="py-4 px-4 text-right">
                          <span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-xs font-semibold">
                            {pair.apy}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setActiveModal("swap")
                            }}
                            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                          >
                            Swap
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={() => setActiveModal("swap")}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <ArrowUpRight className="w-5 h-5" />
                  Swap Tokens
                </button>
                <button
                  onClick={() => setActiveModal("pool")}
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Add Liquidity
                </button>
                <button
                  onClick={() => setActiveModal("stake")}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <TrendingUp className="w-5 h-5" />
                  Stake
                </button>
              </div>
            </div>

            {/* DEX Statistics */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">DEX Statistics</h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-xs text-slate-600 font-medium mb-1 uppercase tracking-wide">24h Volume</p>
                  <p className="text-2xl font-bold text-slate-900">$2.45B</p>
                  <p className="text-xs text-emerald-600 mt-1">+12.5% from yesterday</p>
                </div>
                <div className="pb-4 border-b border-slate-200">
                  <p className="text-xs text-slate-600 font-medium mb-1 uppercase tracking-wide">Total Liquidity</p>
                  <p className="text-2xl font-bold text-slate-900">$8.92B</p>
                  <p className="text-xs text-emerald-600 mt-1">+5.2% from week ago</p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 font-medium mb-1 uppercase tracking-wide">Active Pairs</p>
                  <p className="text-2xl font-bold text-slate-900">2,847</p>
                  <p className="text-xs text-slate-500 mt-1">Across all networks</p>
                </div>
              </div>
            </div>

            {/* Market Sentiment */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-sm border border-blue-200 p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-4">Market Sentiment</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-blue-800 font-medium">Bullish</span>
                  <div className="w-24 h-2 bg-blue-200 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500" style={{ width: "72%" }}></div>
                  </div>
                  <span className="text-blue-900 font-semibold text-sm">72%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-800 font-medium">Neutral</span>
                  <div className="w-24 h-2 bg-blue-200 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500" style={{ width: "18%" }}></div>
                  </div>
                  <span className="text-blue-900 font-semibold text-sm">18%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-800 font-medium">Bearish</span>
                  <div className="w-24 h-2 bg-blue-200 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500" style={{ width: "10%" }}></div>
                  </div>
                  <span className="text-blue-900 font-semibold text-sm">10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}

      {/* Swap Modal */}
      {activeModal === "swap" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 animate-in fade-in duration-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Swap Tokens</h2>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-slate-600" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">From</label>
                <input
                  type="text"
                  placeholder="Enter amount"
                  value={swapFrom}
                  onChange={(e) => setSwapFrom(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              <div className="flex justify-center">
                <button className="p-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-slate-600 rotate-90" />
                </button>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">To</label>
                <input
                  type="text"
                  placeholder="Enter amount"
                  value={swapTo}
                  onChange={(e) => setSwapTo(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              <div className="bg-slate-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Exchange Rate</span>
                  <span className="font-semibold text-slate-900">1 ETH = 2,458 USDC</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Price Impact</span>
                  <span className="font-semibold text-slate-900">0.05%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Fee</span>
                  <span className="font-semibold text-slate-900">0.3%</span>
                </div>
              </div>

              <button
                onClick={handleSwap}
                disabled={!swapFrom || !swapTo}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-slate-300 disabled:to-slate-300 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200"
              >
                Confirm Swap
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Liquidity Modal */}
      {activeModal === "pool" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 animate-in fade-in duration-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Add Liquidity</h2>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-slate-600" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Token 1</label>
                <input
                  type="text"
                  placeholder="Enter amount"
                  value={poolToken1}
                  onChange={(e) => setPoolToken1(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Token 2</label>
                <input
                  type="text"
                  placeholder="Enter amount"
                  value={poolToken2}
                  onChange={(e) => setPoolToken2(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                />
              </div>

              <div className="bg-emerald-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-emerald-700">Share of Pool</span>
                  <span className="font-semibold text-emerald-900">0.15%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-emerald-700">Reward APY</span>
                  <span className="font-semibold text-emerald-900">12.5%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-emerald-700">Slippage</span>
                  <span className="font-semibold text-emerald-900">0.1%</span>
                </div>
              </div>

              <button
                onClick={handleAddLiquidity}
                disabled={!poolToken1 || !poolToken2}
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 disabled:from-slate-300 disabled:to-slate-300 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200"
              >
                Add Liquidity
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Stake Modal */}
      {activeModal === "stake" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 animate-in fade-in duration-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Stake Tokens</h2>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-slate-600" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Amount to Stake</label>
                <input
                  type="number"
                  placeholder="0.00"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
                <p className="text-xs text-slate-600 mt-2">Available balance: 2.50 ETH</p>
              </div>

              <div className="bg-purple-50 rounded-lg p-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-purple-700">Staking APY</span>
                  <span className="font-semibold text-purple-900">18.5%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-purple-700">Lock Period</span>
                  <span className="font-semibold text-purple-900">30 days</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-purple-700">Estimated Rewards</span>
                  <span className="font-semibold text-purple-900">
                    {stakeAmount ? (Number.parseFloat(stakeAmount) * 0.185).toFixed(4) : "0.00"} ETH
                  </span>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <p className="text-xs text-amber-800">
                  Your tokens will be locked for 30 days. Early unstaking will result in a 10% penalty.
                </p>
              </div>

              <button
                onClick={handleStake}
                disabled={!stakeAmount}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 disabled:from-slate-300 disabled:to-slate-300 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200"
              >
                Start Staking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
