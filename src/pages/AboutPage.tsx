"use client"

import { motion } from "framer-motion"
import { ArrowRight, Zap, TrendingUp, BarChart3, Coins, Shield, Gauge } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const AboutPage = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const features = [
    {
      icon: Coins,
      title: "Tokenization",
      description:
        "Convert real-world assets into digital tokens with full transparency and security. Enable fractional ownership and seamless trading.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: TrendingUp,
      title: "Liquidity Pools",
      description:
        "Provide deep liquidity for your tokens with automated market makers. Earn rewards while supporting the ecosystem.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: BarChart3,
      title: "Decentralized Exchange",
      description:
        "Trade tokens directly peer-to-peer with zero intermediaries. Fast, secure, and transparent transactions.",
      color: "from-emerald-500 to-teal-500",
    },
  ]

  const benefits = [
    {
      number: "24/7",
      label: "Trading",
      description: "Round-the-clock market access",
    },
    {
      number: "0.1%",
      label: "Fees",
      description: "Industry-leading low fees",
    },
    {
      number: "1M+",
      label: "Users",
      description: "Growing community",
    },
    {
      number: "$10B+",
      label: "TVL",
      description: "Total value locked",
    },
  ]

  const stats = [
    { label: "Transactions/Day", value: "500K+", icon: Zap },
    { label: "Security Score", value: "99.9%", icon: Shield },
    { label: "Avg. Latency", value: "<100ms", icon: Gauge },
  ]
  const navigate = useNavigate()
const goToLogin = ()=>{
navigate("/login")
}
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            TokenFlow
          </motion.div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className="hover:text-cyan-400 transition">
              Features
            </a>
            <a href="#benefits" className="hover:text-cyan-400 transition">
              Benefits
            </a>
            <a href="#stats" className="hover:text-cyan-400 transition">
              Stats
            </a>
            <button onClick={goToLogin} className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition">
              Launch App
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants as any} className="mb-6">
            <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold">
              🚀 The Future of Finance
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants as any} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tokenize. Trade. Thrive.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants as any}
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            The complete platform for asset tokenization, liquidity pools, and decentralized trading. Unlock the future
            of finance.
          </motion.p>

          <motion.div variants={itemVariants as any} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition transform hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-slate-600 rounded-full font-semibold hover:border-cyan-400 hover:text-cyan-400 transition">
              Learn More <ArrowRight className="inline ml-2 w-5 h-5" />
            </button>
          </motion.div>

          {/* Floating cards */}
          <motion.div variants={itemVariants as any} className="grid grid-cols-3 gap-4 mt-16 max-w-2xl mx-auto">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={floatingVariants as any}
                animate="animate"
                className="p-4 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg"
              >
                <stat.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <div className="text-sm text-slate-400">{stat.label}</div>
                <div className="text-lg font-bold text-cyan-400">{stat.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Core Features
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Everything you need to tokenize assets, manage liquidity, and trade seamlessly
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition duration-300`}
                />
                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.color} p-3 mb-6 group-hover:scale-110 transition`}
                  >
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                  <div className="mt-6 flex items-center text-cyan-400 group-hover:translate-x-2 transition">
                    <span className="text-sm font-semibold">Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="benefits"
        className="relative py-24 px-4 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Why Choose TokenFlow
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Industry-leading performance and user experience</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl text-center hover:border-purple-500/50 transition"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {benefit.number}
                </div>
                <div className="text-lg font-semibold mb-2">{benefit.label}</div>
                <p className="text-slate-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4 relative">
            {[
              { step: 1, title: "Connect Wallet", desc: "Link your Web3 wallet securely" },
              { step: 2, title: "Tokenize Assets", desc: "Convert assets into digital tokens" },
              { step: 3, title: "Provide Liquidity", desc: "Earn rewards from liquidity pools" },
              { step: 4, title: "Trade & Earn", desc: "Trade tokens and maximize returns" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        id="stats"
        className="relative py-24 px-4 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { label: "Total Transactions", value: "50M+", icon: "📊" },
              { label: "Active Users", value: "1.2M+", icon: "👥" },
              { label: "Assets Tokenized", value: "$50B+", icon: "💎" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl text-center"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Enterprise-Grade Security
                </span>
              </h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Your assets are protected by military-grade encryption and multi-signature wallets. We've undergone
                rigorous security audits and maintain the highest standards of compliance.
              </p>
              <ul className="space-y-4">
                {[
                  "Multi-signature wallet protection",
                  "Regular security audits",
                  "Insurance coverage",
                  "Cold storage for assets",
                  "Real-time monitoring",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-slate-300"
                  >
                    <Shield className="w-5 h-5 text-red-400 mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="relative h-96 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl border border-red-500/20 flex items-center justify-center"
            >
              <div className="text-center">
                <Shield className="w-24 h-24 text-red-400 mx-auto mb-4 opacity-50" />
                <p className="text-slate-400">Security First Architecture</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative p-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 hover:opacity-5 transition duration-300" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Transform Finance?</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Join thousands of users already trading on TokenFlow. Start tokenizing your assets today.
              </p>
              <motion.button onClick={goToLogin}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition"
              >
                Launch Application
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-slate-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                TokenFlow
              </h3>
              <p className="text-slate-400 text-sm">The future of decentralized finance</p>
            </div>
            {[
              { title: "Product", links: ["Features", "Pricing", "Security"] },
              { title: "Company", links: ["About", "Blog", "Careers"] },
              { title: "Legal", links: ["Privacy", "Terms", "Contact"] },
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="font-semibold mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-slate-400 hover:text-cyan-400 transition text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2025 TokenFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AboutPage
