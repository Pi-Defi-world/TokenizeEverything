"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Sparkles, Wallet, Eye, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
  const [animate, setAnimate] = useState(false)
  const [walletLoading, setWalletLoading] = useState(false)
  const [demoLoading, setDemoLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    setAnimate(true)
  }, [])

  const handleWalletConnect = async () => {
    setWalletLoading(true)
    setError(null)
    try {
      // Simulate wallet connection - in production, integrate with Web3 library
      await new Promise((resolve) => setTimeout(resolve, 1500))
      localStorage.setItem("isSignedIn", "true")
      localStorage.setItem("walletConnected", "true")
      navigate("/dashboard")
    } catch (err: any) {
      setError(err.message || "Failed to connect wallet.")
    } finally {
      setWalletLoading(false)
    }
  }

  const handleDemoLogin = async () => {
    setDemoLoading(true)
    setError(null)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      localStorage.setItem("isSignedIn", "true")
      localStorage.setItem("isDemoMode", "true")
      navigate("/dashboard")
    } catch (err: any) {
      setError(err.message || "Failed to access demo.")
    } finally {
      setDemoLoading(false)
    }
  }

  const images = [
    {
      src: "https://online.stanford.edu/sites/default/files/inline-images/1600X900-How-does-blockchain-work.jpg",
      alt: "Tokenization platform",
    },
  ]

  return (
    <div className="flex min-h-screen max-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Creative Visual Section */}
      <div className="hidden lg:flex lg:w-2/5 xl:w-1/2 p-6 relative z-10 max-h-screen overflow-hidden">
        <div className="w-full h-full">
          {images.length === 1 ? (
            // Single image fills entire space
            <motion.div
              className="w-full h-full rounded-2xl overflow-hidden relative group cursor-pointer transform transition-all duration-500 ease-out hover:scale-[1.02] hover:rotate-1"
              onMouseEnter={() => setHoveredImage(0)}
              onMouseLeave={() => setHoveredImage(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
              <div className="absolute inset-0 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <img
                src={images[0].src || "/placeholder.svg"}
                alt={images[0].alt}
                className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                  hoveredImage === 0 ? "scale-110 brightness-110 saturate-125" : "scale-100"
                }`}
              />
              {/* Glassmorphism overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-white/20 to-transparent backdrop-blur-sm rounded-2xl transition-all duration-500 ${
                  hoveredImage === 0 ? "opacity-100" : "opacity-0"
                }`}
              />
              {/* Sparkle effect */}
              <motion.div
                className={`absolute top-6 right-6 transition-all duration-300 ${
                  hoveredImage === 0 ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
                animate={hoveredImage === 0 ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Sparkles size={24} className="text-white/80" />
              </motion.div>
            </motion.div>
          ) : null}
        </div>
      </div>

      {/* Login Section */}
      <div className="flex flex-1 lg:w-3/5 xl:w-1/2 relative z-10 max-h-screen overflow-hidden">
        <div className="flex flex-col justify-center w-full px-6 py-8 lg:px-8 max-h-screen overflow-hidden">
          {/* Glassmorphism container */}
          <motion.div
            className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header with logo */}
            <div className="mb-8">
              <motion.div
                className="flex items-center mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg backdrop-blur-sm">
                  <Zap size={24} className="text-white" />
                </div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  TokenFlow
                </h1>
              </motion.div>
            </div>

            <motion.div
              className="transition-all duration-700 ease-out"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Heading */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-4 text-balance leading-tight">
                  Access Your Tokenization Platform
                </h2>
                <p className="text-white/70 text-lg leading-relaxed">Trade, tokenize, and manage liquidity with ease</p>
              </div>

              {/* Error message */}
              {error && (
                <motion.div
                  className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-2xl backdrop-blur-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-red-200 text-sm">{error}</p>
                </motion.div>
              )}

              <div className="space-y-4">
                {/* Wallet Connection Button */}
                <motion.button
                  onClick={handleWalletConnect}
                  disabled={walletLoading || demoLoading}
                  className="group relative w-full h-16 text-base font-semibold bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 disabled:opacity-50 backdrop-blur-sm border border-white/20 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex items-center justify-center">
                    {walletLoading ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-3"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        />
                        <span>Connecting Wallet...</span>
                      </>
                    ) : (
                      <>
                        <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center mr-3 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                          <Wallet size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                        </div>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          Connect Wallet
                        </span>
                        <ChevronRight
                          size={20}
                          className="ml-3 group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </>
                    )}
                  </div>
                </motion.button>

                {/* Demo Account Button */}
                <motion.button
                  onClick={handleDemoLogin}
                  disabled={walletLoading || demoLoading}
                  className="group relative w-full h-14 text-base font-medium bg-white/10 hover:bg-white/20 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 disabled:opacity-50 backdrop-blur-xl border border-white/30 hover:border-white/40 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Subtle shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />

                  <div className="relative flex items-center justify-center">
                    {demoLoading ? (
                      <>
                        <motion.div
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-3"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        />
                        <span>Loading...</span>
                      </>
                    ) : (
                      <>
                        <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center mr-3 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                          <Eye size={14} className="group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <span className="group-hover:translate-x-0.5 transition-transform duration-300">
                          Explore with Demo Account
                        </span>
                        <ChevronRight
                          size={18}
                          className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </>
                    )}
                  </div>
                </motion.button>

                {/* Features */}
                <div className="pt-8 space-y-4">
                  {[
                    {
                      color: "bg-cyan-400",
                      text: "Secure blockchain authentication",
                    },
                    {
                      color: "bg-blue-400",
                      text: "Trade tokenized assets instantly",
                    },
                    { color: "bg-purple-400", text: "Earn rewards from liquidity pools" },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center text-sm text-white/80 group cursor-default"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className={`w-2.5 h-2.5 ${feature.color} rounded-full mr-4 group-hover:scale-125 group-hover:shadow-lg transition-all duration-300`}
                        whileHover={{ scale: 1.5 }}
                      />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {feature.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Footer */}
            <motion.div
              className="mt-12 pt-6 border-t border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-xs text-white/60 text-center leading-relaxed">
                By continuing, you agree to our{" "}
                <a
                  href="#"
                  className="text-cyan-300 hover:text-cyan-200 hover:underline transition-colors duration-200"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-cyan-300 hover:text-cyan-200 hover:underline transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
