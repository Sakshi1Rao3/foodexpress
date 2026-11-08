'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCart } from '@/context/cart-context'
import { useAuth } from '@/context/auth-context'
import { ShoppingCart, Home, ClipboardList, User, Menu, X, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function Navbar() {
  const router = useRouter()
  const { totalItems } = useCart()
  const { user, loading, signOut } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogout = async () => {
    await signOut()
    router.push('/')
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">F</span>
          </div>
          <span className="text-xl font-bold text-foreground">FoodExpress</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          <Button variant="ghost" asChild>
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Home
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/cart" className="relative flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              Cart
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                  {totalItems}
                </span>
              )}
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/orders" className="flex items-center gap-2">
              <ClipboardList className="h-4 w-4" />
              Orders
            </Link>
          </Button>
          {user ? (
            <>
              <div className="flex items-center gap-2 border-l border-border pl-2 ml-1">
                <div className="text-sm">
                  <p className="font-medium text-foreground">{user.email?.split('@')[0]}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={handleLogout}>
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            </>
          ) : (
            <Button variant="default" asChild>
              <Link href="/login" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Login
              </Link>
            </Button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="icon" asChild className="relative">
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                  {totalItems}
                </span>
              )}
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="border-t border-border bg-card px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            <Button
              variant="ghost"
              asChild
              className="justify-start"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Home
              </Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="justify-start"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link href="/orders" className="flex items-center gap-2">
                <ClipboardList className="h-4 w-4" />
                Orders
              </Link>
            </Button>
            {user ? (
              <>
                <div className="py-2 px-2 text-sm">
                  <p className="font-medium text-foreground">{user.email?.split('@')[0]}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
                <Button
                  variant="ghost"
                  className="justify-start"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <Button
                variant="default"
                asChild
                className="justify-start"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="/login" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Login
                </Link>
              </Button>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
