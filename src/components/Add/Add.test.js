import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import Add from './Add'

test("Initial value of the add input must be an empty string", () => {
    const component = render(<Add />)
    const addInputElement = component.getByTestId("add-input")
    expect(addInputElement.value).toBe("")
})

test('Change the value of the input must search for movies', () => {
    const component = render(<Add />)
    const addInputElement = component.getByTestId("add-input")

    fireEvent.change(addInputElement, {
        target: {
            value: 'Harry Potter'
        }
    })
})
