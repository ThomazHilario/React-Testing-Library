import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'

import { Home } from '../Home'

describe('Test Home component render files elements', () => {
    
    // Adicionando files a local storage antes de iniciar o teste
    beforeEach(() => {
        localStorage.setItem('files', JSON.stringify([{
            name:'oi',
            date:Date.now(),
            isFavorite:false,
        },{
            name:'oi',
            date:Date.now(),
            isFavorite:false,
        }]))
    })

    it('Should render Home elements component', () => {
        // Renderizando componente
        render(<Home/>)

        // Buscando os files renderizados
        const files = screen.getAllByTestId('files')

        // Verificando se cada files esta sendo renderizado
        files.forEach(file => expect(file).toBeInTheDocument())
    })

    afterEach(() => {
        localStorage.removeItem('files')
    })
})

describe('Test Home component not render files elements', () => {
    
    it('Should render Home elements component', () => {
        // Renderizando o componente
        render(<Home/>)

        // Buscando o titulo
        const title = screen.getByRole('heading')

        // Verificando se o titulo esta sendo renderizado
        expect(title).toBeInTheDocument()
    })

})