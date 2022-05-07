import React from 'react';
import { render } from "@testing-library/react";
import FirstApp from "../FirstApp";

describe('Test FirstApp component', () => { 
    test('should show the message', () => { 
        const greet = 'Hello, world';
        const { getByText } = render(<FirstApp greet={ greet } />);

        expect(getByText(greet)).toBeInTheDocument();
     });
 })