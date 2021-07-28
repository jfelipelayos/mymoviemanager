import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import App from '../../App'

test("Check initial state of the main view to be the watchlist", () => {

    const component = render(<App />)
    const watchListTitle = component.getByTestId('mainview-watch-title')

    expect(watchListTitle.textContent).toBe('Peliculas por ver')
})

test('Page must change the view correctly when click on navigation', () => {
    const component = render(<App />)
    const watchBtn = component.getByTestId('navigation-watchlist')
    const watchedBtn = component.getByTestId('navigation-watchedlist')

    fireEvent.click(watchedBtn)
    const watchedListTitle = component.getByTestId('mainview-watched-title')
    expect(watchedListTitle.textContent).toBe('Peliculas vistas')

    fireEvent.click(watchBtn)
    const watchListTitle = component.getByTestId('mainview-watch-title')
    expect(watchListTitle.textContent).toBe('Peliculas por ver')

    fireEvent.click(watchedBtn)
    expect(watchedListTitle.textContent).toBe('Peliculas vistas')
})
