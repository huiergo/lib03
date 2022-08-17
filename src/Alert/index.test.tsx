import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Alert from './index';

describe('<Foo />', () => {
  it('render Foo with dumi', () => {
    const msg = 'dumi';

    render(<Alert kind='info' />);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });

  test('should render default',()=>{
    const {container} =render(<Alert>default</Alert>)
    expect(container).toMatchSnapshot()
})
test('should render alert with type', () => {
    const kinds: any[] = ['info', 'warning', 'positive', 'negative'];

    const { getByText } = render(
      <>
        {kinds.map((k) => (
          <Alert kind={k} key={k}>
            {k}
          </Alert>
        ))}
      </>,
    );

    kinds.forEach((k) => {
      expect(getByText(k)).toMatchSnapshot();
    });
  });
});
