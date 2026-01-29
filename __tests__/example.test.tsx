import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import React from 'react'

describe('Example', () => {
    it('renders heading', () => {
        render(<h1>Hello World</h1>)
        expect(screen.getByRole('heading', { name: /hello world/i })).toBeInTheDocument()
    })
})
