import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'
export function middleware(_request: NextRequest, _event: NextFetchEvent) {
  return NextResponse.next()
}

export const config = {}
