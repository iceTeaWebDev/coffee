'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import {App} from 'konsta/react'
import { NextAuthProvider } from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body><App theme='ios'><NextAuthProvider>{children}</NextAuthProvider></App></body>
    </html>
  )
}
