import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { NewFile } from '../NewFile'

describe('Test NewFile component', () => {
    it('Should render form Elements component', () => {
        render(<NewFile/>)
        
        const textAreaElement = screen.getByRole('textbox')
        const buttonElement = screen.getByRole('button')

        expect(textAreaElement).toBeInTheDocument()
        expect(buttonElement).toBeInTheDocument()
    })
})